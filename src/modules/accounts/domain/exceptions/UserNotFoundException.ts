import { BaseException } from "@shared/domain/BaseException";


export class UserNotFoundException extends Error implements BaseException {
    statusCode: number;

    constructor() {
        super('Não existe este usuário na plataforma.');
        this.name = 'UserNotFoundException';
        this.statusCode = 404;
    }
}