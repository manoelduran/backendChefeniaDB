import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { hash } from "bcrypt";


//@injectable()
class CreateUserUseCase {
    constructor(
      //  @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }
    async execute({ email, job, name, password, phone, avatar, id }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new AppError('User already exists!');
        };
        const encryptPassword = await hash(password, 8);
        await this.usersRepository.create({
            email, job, name, password: encryptPassword, phone, avatar, id
        });
    };
};

export { CreateUserUseCase };