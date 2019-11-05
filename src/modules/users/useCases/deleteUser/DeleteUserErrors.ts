import { Result } from "../../../../shared/core/Result";
import { UseCaseError } from "../../../../shared/domain/UseCaseError";

export namespace DeleteUserErrors {
  export class UserNotFoundError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: "User not found",
      } as UseCaseError);
    }
  }
}
