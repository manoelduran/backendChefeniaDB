import { UserNotFoundException } from "@modules/accounts/domain/exceptions/UserNotFoundException";
import { CreateUserDTO } from "@modules/accounts/dtos/CreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Either, left, right } from "@shared/either";
import { IUsersRepository } from "../IUsersRepository";



class UsersRepositoryInMemory implements IUsersRepository {
    private users: User[];
    constructor() {
        this.users = [];
    }
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
    async list(): Promise<User[]> {
        const users = this.users;
        return users;
    }

};

export { UsersRepositoryInMemory };