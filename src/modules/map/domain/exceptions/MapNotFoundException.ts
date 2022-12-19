import { BaseException } from "@shared/domain/BaseException";


export class MapNotFoundException extends Error implements BaseException {
    statusCode: number;

    constructor() {
        super('Não existe este mapa na plataforma.');
        this.name = 'MapNotFoundException';
        this.statusCode = 404;
    }
}