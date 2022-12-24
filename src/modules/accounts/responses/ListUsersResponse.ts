import { User } from "@modules/accounts/infra/typeorm/entities/User";




export type ListUsersResponse = Promise<User[]>;