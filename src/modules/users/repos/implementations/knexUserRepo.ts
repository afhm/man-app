// tslint:disable:file-name-casing
import { User } from '../../domain/user';
import { UserEmail } from '../../domain/userEmail';
import { UserName } from '../../domain/userName';
import { UserMap } from '../../mappers/userMap';
import { IUserRepo } from '../userRepo';
const { table } = require('shared/infra/database/orm');

export class KnexUserRepo implements IUserRepo {
  async exists(userEmail: UserEmail): Promise<boolean> {
    const baseUser = await table('users')
      .select('user_email')
      .where('user_email', userEmail.value)
      .all();

    if (baseUser.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async getUserByUserName(userName: UserName): Promise<User> {
    const baseUser = await table('users')
      .where('username', userName.value)
      .all();

    if (baseUser.length === 0) {
      return null;
    }

    return UserMap.toDomain(baseUser[0]);
  }

  async getUserByUserId(userId: string): Promise<User> {
    const baseUser = await table('users')
      .where('base_user_id', userId)
      .all();
    if (baseUser.length === 0) {
      return null;
    }

    return UserMap.toDomain(baseUser);
  }

  async save(user: User): Promise<void> {
    const exists = await this.exists(user.email);
    if (!exists) {
      const rawUser = await UserMap.toPersistence(user);
      await table('users').insert(rawUser);
    }

    return;
  }
}
