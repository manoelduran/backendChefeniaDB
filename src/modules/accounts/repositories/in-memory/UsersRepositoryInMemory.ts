import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";



class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];
    async create({ email, job, name, password, phone, avatar }: ICreateUserDTO): Promise<User> {
        const newUser = new User();
        Object.assign(newUser, { email, job, name, password, phone, avatar });
        this.users.push(newUser);
        console.log('newUser', newUser)
        return newUser;
    }
    async findByEmail(email: string): Promise<User> {
        return this.users.find(user => user.email === email);
    }
    async findById(user_id: string): Promise<User> {
        return this.users.find(user => user.id === user_id);
    }
    async list(): Promise<User[]> {
        return this.users;
    }

};

export { UsersRepositoryInMemory };