import { Either } from "@shared/either";
import { UserAlreadyExistsException } from "@modules/accounts/domain/Map/UserAlreadyExistsException";
import { User } from "@modules/accounts/infra/typeorm/entities/User";




export type AuthUserResponse = Promise<
  Either<
    UserAlreadyExistsException,
    User
  >
>;