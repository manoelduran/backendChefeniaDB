import { BaseException } from "@shared/domain/BaseException";



export class MapsNotFoundException extends Error implements BaseException {
    statusCode: number;

    constructor() {
        super('Não existe uma lista de mapas na plataforma.');
        this.name = 'MapsNotFoundException';
        this.statusCode = 404;
    }
}