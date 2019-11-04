import { Guard } from '../../../shared/core/Guard';
import { Result } from '../../../shared/core/Result';
import { ValueObject } from '../../../shared/domain/ValueObject';

interface UserNameProps {
  name: string;
}

export class UserName extends ValueObject<UserNameProps> {
  get value(): string {
    return this.props.name;
  }
  public static maxLength = 15;
  public static minLength = 2;

  public static create(props: UserNameProps): Result<UserName> {
    const usernameResult = Guard.againstNullOrUndefined(props.name, 'username');
    if (!usernameResult.succeeded) {
      return Result.fail<UserName>(usernameResult.message);
    }

    const minLengthResult = Guard.againstAtLeast(
      UserName.minLength,
      props.name
    );
    if (!minLengthResult.succeeded) {
      return Result.fail<UserName>(minLengthResult.message);
    }

    const maxLengthResult = Guard.againstAtMost(UserName.maxLength, props.name);
    if (!maxLengthResult.succeeded) {
      return Result.fail<UserName>(minLengthResult.message);
    }

    return Result.ok<UserName>(new UserName(props));
  }

  private constructor(props: UserNameProps) {
    super(props);
  }
}
