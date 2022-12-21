import { BaseException } from "@shared/domain/BaseException";



export class UsersNotFoundException extends Error implements BaseException {
    statusCode: number;

    constructor() {
        super('Não existe uma lista de usuários na plataforma.');
        this.name = 'UsersNotFoundException';
        this.statusCode = 404;
    }
}