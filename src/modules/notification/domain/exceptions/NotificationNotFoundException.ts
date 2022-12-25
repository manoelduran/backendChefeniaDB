import { BaseException } from "@shared/domain/BaseException";


export class NotificationNotFoundException extends Error implements BaseException {
    statusCode: number;

    constructor() {
        super('Não existe esta notificação na plataforma.');
        this.name = 'NotificationNotFoundException';
        this.statusCode = 404;
    }
}