import { sign } from "jsonwebtoken";
import { compare } from 'bcrypt';
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    email: string;
    password: string;
};

interface IResponse {
    token: string;
    userAlreadyExists: {
        name: string;
        email: string;
    }
};
@injectable()
class AuthUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }
    async execute({ email, password }: IRequest): Promise<IResponse> {
        const userExists = await this.usersRepository.findByEmail(email);
        if (!userExists) {
            throw new AppError("Email ou senha incorreto!")
        }
        const comparedPassword = await compare(password, userExists.password);
        if (!comparedPassword) {
            throw new AppError("As senhas precisam ser iguais!")
        };
        const token = sign({}, "36b6d549bb4847bb1f77130e04fac0da", {
            subject: userExists.id,
            expiresIn: "1d"
        })
        console.log('token', token)
        const tokenReturn: IResponse = {
            token,
            userAlreadyExists: {
                name: userExists.name,
                email: userExists.email,
            }
        }
        return tokenReturn
    }
}

export { AuthUserUseCase };