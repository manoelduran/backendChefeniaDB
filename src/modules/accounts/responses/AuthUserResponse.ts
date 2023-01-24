import { Either } from "@shared/either";
import { User } from "../infra/typeorm/entities/User";
import { InvalidUserAuthenticateCredentialsException } from "../domain/User/InvalidUserAuthenticateCredentialsException";

interface Response {
  user: User;
  type: string;
  token: string;
  refreshToken: string;
}


export type AuthUserResponse = Promise<
  Either<
    InvalidUserAuthenticateCredentialsException,
    Response
  >
>;