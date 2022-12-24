import { Either } from "@shared/either";
import { UserAlreadyExistsException } from "@modules/accounts/domain/User/UserAlreadyExistsException";

export interface IResponse {
  token: string;
  userAlreadyExists: {
      name: string;
      email: string;
  }
};


export type AuthUserResponse = Promise<
  Either<
    UserAlreadyExistsException,
    IResponse
  >
>;