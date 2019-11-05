import { Result } from "../../../../shared/core/Result";
import { UseCaseError } from "../../../../shared/domain/UseCaseError";

export namespace LoginUseCaseErrors {
  export class UserNameDoesntExistError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: "Username or password incorrect.",
      } as UseCaseError);
    }
  }

  export class PasswordDoesntMatchError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: "Password doesnt match error.",
      } as UseCaseError);
    }
  }
}
