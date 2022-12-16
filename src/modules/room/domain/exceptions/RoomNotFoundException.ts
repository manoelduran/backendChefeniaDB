import { BaseException } from "@shared/domain/BaseException";


export class RoomNotFoundException extends Error implements BaseException {
    statusCode: number;

    constructor() {
        super('Não existe a sala na plataforma.');
        this.name = 'RoomNotFoundException';
        this.statusCode = 404;
    }
}