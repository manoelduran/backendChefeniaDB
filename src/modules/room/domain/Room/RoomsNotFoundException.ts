import { BaseException } from "@shared/domain/BaseException";



export class RoomsNotFoundException extends Error implements BaseException {
    statusCode: number;

    constructor() {
        super('Não existe uma lista de salas na plataforma.');
        this.name = 'RoomsNotFoundException';
        this.statusCode = 404;
    }
}