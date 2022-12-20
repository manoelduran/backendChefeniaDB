import { BaseException } from "@shared/domain/BaseException";



export class TimersNotFoundException extends Error implements BaseException {
    statusCode: number;

    constructor() {
        super('Não existe uma lista de timers na plataforma.');
        this.name = 'TimersNotFoundException';
        this.statusCode = 404;
    }
}