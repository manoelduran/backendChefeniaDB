import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";


class UsersRepository implements IUsersRepository {
    private repository: Repository<User>
    constructor() {
        this.repository = getRepository(User);
    };
    async create({ email, name, password, phone, avatar, id, job }: ICreateUserDTO): Promise<User> {
        const newUser = this.repository.create({
            email, name, password, phone, avatar, id, job
        })
        await this.repository.save(newUser);
        return newUser;
    };
    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({ email })
    };
    async findById(user_id: string): Promise<User> {
        return await this.repository.findOne(user_id);
    };
    async list(): Promise<User[]> {
        return await this.repository.find();
    };

};

export { UsersRepository };