import { Either } from "@shared/either";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { UsersNotFoundException } from "@modules/accounts/domain/Map/UsersNotFoundException";




export type ListUsersResponse = Promise<
  Either<
    UsersNotFoundException,
    User[]
  >
>;