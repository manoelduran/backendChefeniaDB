import { BaseException } from "@shared/domain/BaseException";


export class TimerAlreadyExistsException extends Error implements BaseException {
  statusCode: number;

  constructor() {
    super('Já existe um timer com essas credênciais na plataforma.');
    this.name = 'TimerAlreadyExistsException';
    this.statusCode = 400;
  }
}