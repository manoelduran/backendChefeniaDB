import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { hash } from "bcrypt";
import { injectable, inject } from "tsyringe";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }
    async execute({ email, job, name, password, phone, id }: ICreateUserDTO): Promise<User> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new AppError('User already exists!');
        };
        const encryptPassword = await hash(password, 8);
       const newUser = await this.usersRepository.create({
            email, job, name, password: encryptPassword, phone, id
        });
        return newUser;
    };
};

export { CreateUserUseCase };