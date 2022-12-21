import { UserNotFoundException } from "@modules/accounts/domain/exceptions/UserNotFoundException";
import { UsersNotFoundException } from "@modules/accounts/domain/Map/UsersNotFoundException";
import { CreateUserDTO } from "@modules/accounts/dtos/CreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Either, left, right } from "@shared/either";
import { IUsersRepository } from "../IUsersRepository";



class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];
    async create({ email, job, name, password, phone, avatar }: CreateUserDTO): Promise<User> {
        const newUser = new User();
        Object.assign(newUser, { email, job, name, password, phone, avatar });
        this.users.push(newUser);
        console.log('newUser', newUser)
        return newUser;
    }
    async findByEmail(email: string): Promise<Either<UserNotFoundException, User>> {
        const userOrError = this.users.find(user => user.email === email);
        if (!userOrError) {
            return left(new UserNotFoundException());
        };
        return right(userOrError);
    };
    async findById(user_id: string): Promise<Either<UserNotFoundException, User>> {
        const userOrError = this.users.find(user => user.id === user_id);
        if (!userOrError) {
            return left(new UserNotFoundException());
        };
        return right(userOrError);
    }
    async list(): Promise<Either<UsersNotFoundException, User[]>> {
        const usersOrError = this.users;
        if (usersOrError.length === 0) {
            return left(new UsersNotFoundException());
        };
        return right(usersOrError);
    }

};

export { UsersRepositoryInMemory };