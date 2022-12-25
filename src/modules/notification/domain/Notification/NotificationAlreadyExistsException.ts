import { BaseException } from "@shared/domain/BaseException";


export class NotificationAlreadyExistsException extends Error implements BaseException {
  statusCode: number;

  constructor() {
    super('Já existe uma notificação com essas credênciais na plataforma.');
    this.name = 'NotificationAlreadyExistsException';
    this.statusCode = 400;
  }
}