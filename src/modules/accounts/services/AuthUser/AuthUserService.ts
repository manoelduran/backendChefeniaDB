import { sign } from "jsonwebtoken";
import { compare } from 'bcrypt';
import authConfig from '@config/auth';
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
        const { expiresIn, refreshExpiresIn, secret } = authConfig.jwt;
        if (userExistsOrError.isLeft()) {
            return left(userExistsOrError.value);
        };
        const comparedPassword = await compare(password, userExistsOrError.value.password);
        if (!comparedPassword) {
            throw new AppError("As senhas precisam ser iguais!")
        };
        const parsedToken = {
            type: 'user',
            owner_id: userExistsOrError.value.id,
            name: userExistsOrError.value.name,
            email: userExistsOrError.value.email,
            job: userExistsOrError.value.job,
          };
        const token = sign(parsedToken, secret, {
            subject: userExistsOrError.value.id,
            expiresIn
        })
        console.log('token', token)
        const refreshToken = sign(parsedToken, secret, {
            subject: userExistsOrError.value.id,
            expiresIn: refreshExpiresIn,
          });
        return right({
            user: userExistsOrError.value,
            type: 'user',
            token,
            refreshToken,
          });
    }
}

export { AuthUserService };