import { BaseException } from "@shared/domain/BaseException";


export class UserAlreadyExistsException extends Error implements BaseException {
  statusCode: number;

  constructor() {
    super('Já existe um usuário com essas credênciais na plataforma.');
    this.name = 'UserAlreadyExistsException';
    this.statusCode = 400;
  }
}