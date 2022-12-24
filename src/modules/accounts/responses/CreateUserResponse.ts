import { Either } from "@shared/either";
import { UserAlreadyExistsException } from "@modules/accounts/domain/User/UserAlreadyExistsException";
import { User } from "@modules/accounts/infra/typeorm/entities/User";




export type CreateUserResponse = Promise<
  Either<
    UserAlreadyExistsException,
    User
  >
>;
