import { Either } from "@shared/either";
import { UserNotFoundException } from "@modules/accounts/domain/exceptions/UserNotFoundException";
import { CreateUserDTO } from "@modules/accounts/dtos/CreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";


interface IUsersRepository {
    create(data: CreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<Either<UserNotFoundException, User>>;
    findById(id: string): Promise<Either<UserNotFoundException, User>>;
    list(): Promise<User[]>;
};

export { IUsersRepository };