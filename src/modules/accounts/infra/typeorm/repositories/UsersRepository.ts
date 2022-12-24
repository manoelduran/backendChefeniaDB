import { UserNotFoundException } from "@modules/accounts/domain/exceptions/UserNotFoundException";
import { CreateUserDTO } from "@modules/accounts/dtos/CreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { Either, left, right } from "@shared/either";
import { getRepository, Repository } from "typeorm";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>
    constructor() {
        this.repository = getRepository(User);
    };
    async create(data: CreateUserDTO): Promise<User> {
        const newUser = this.repository.create(data)
        await this.repository.save(newUser);
        return newUser;
    };
    async findByEmail(email: string): Promise<Either<UserNotFoundException, User>> {
        const foundUserOrError = await this.repository.findOne({ where: { email }, relations: ['timers'] });
        if (!foundUserOrError) {
            return left(new UserNotFoundException());
        };
        return right(foundUserOrError);
    };
    async findById(id: string): Promise<Either<UserNotFoundException, User>> {
        console.log('user_id', id)
        const foundUserOrError = await this.repository.findOne({ where: { id }, relations: ['timers'] });
        if (!foundUserOrError) {
            return left(new UserNotFoundException());
        };
        console.log('foundUserOrError', foundUserOrError)
        return right(foundUserOrError);
    };
    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    };

};

export { UsersRepository };