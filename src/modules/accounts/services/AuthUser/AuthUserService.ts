import { sign } from "jsonwebtoken";
import { compare } from 'bcrypt';
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { AuthUserResponse } from "@modules/accounts/responses/AuthUserResponse";
import { left, right } from "@shared/either";

interface IRequest {
    email: string;
    password: string;
};


@injectable()
class AuthUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }
    async execute({ email, password }: IRequest): AuthUserResponse {
        const userExistsOrError = await this.usersRepository.findByEmail(email);
        if (userExistsOrError.isLeft()) {
            return left(userExistsOrError.value);
        };
        const comparedPassword = await compare(password, userExistsOrError.value.password);
        if (!comparedPassword) {
            throw new AppError("As senhas precisam ser iguais!")
        };
        const token = sign({}, "36b6d549bb4847bb1f77130e04fac0da", {
            subject: userExistsOrError.value.id,
            expiresIn: "1d"
        })
        console.log('token', token)
        const tokenReturn = {
            token,
            userAlreadyExists: {
                name: userExistsOrError.value.name,
                email: userExistsOrError.value.email,
            }
        }
        return right(tokenReturn);
    }
}

export { AuthUserService };