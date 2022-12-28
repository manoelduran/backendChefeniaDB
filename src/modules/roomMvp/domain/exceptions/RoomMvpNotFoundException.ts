import { BaseException } from "@shared/domain/BaseException";


export class RoomMvpNotFoundException extends Error implements BaseException {
    statusCode: number;

    constructor() {
        super('Não existe essa associação na plataforma.');
        this.name = 'RoomMvpNotFoundException';
        this.statusCode = 404;
    }
}