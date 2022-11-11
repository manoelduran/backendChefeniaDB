import { BaseException } from "@shared/domain/BaseException";


export class MvpAlreadyExistsException extends Error implements BaseException {
  statusCode: number;

  constructor() {
    super('Já existe um mvp com essas credênciais na plataforma.');
    this.name = 'MvpAlreadyExistsException';
    this.statusCode = 400;
  }
}
