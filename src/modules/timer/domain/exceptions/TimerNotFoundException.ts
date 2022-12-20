import { BaseException } from "@shared/domain/BaseException";


export class TimerNotFoundException extends Error implements BaseException {
    statusCode: number;

    constructor() {
        super('Não existe este timer na plataforma.');
        this.name = 'TimerNotFoundException';
        this.statusCode = 404;
    }
}