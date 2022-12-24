import { UserAlreadyExistsException } from "@modules/accounts/domain/User/UserAlreadyExistsException";
import { CreateUserDTO } from "@modules/accounts/dtos/CreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CreateUserResponse } from "@modules/accounts/responses/CreateUserResponse";
import { left, right } from "@shared/either";
import { hash } from "bcrypt";
import { injectable, inject } from "tsyringe";


@injectable()
class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }
    async execute({ email, job, name, password, phone }: CreateUserDTO): CreateUserResponse {
        const userAlreadyExistsOrError = await this.usersRepository.findByEmail(email);
        if (userAlreadyExistsOrError.isRight()) {
            return left(new UserAlreadyExistsException())
        };
        const encryptPassword = await hash(password, 8);
        const newUser = await this.usersRepository.create({
            email, job, name, password: encryptPassword, phone
        });
        console.log('newUser', newUser)
        return right(newUser);
    };
};

export { CreateUserService };