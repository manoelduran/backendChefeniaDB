import { BaseException } from "@shared/domain/BaseException";


export class RoomAlreadyExistsException extends Error implements BaseException {
  statusCode: number;

  constructor() {
    super('Já existe uma sala com essas credênciais na plataforma.');
    this.name = 'RoomAlreadyExistsException';
    this.statusCode = 400;
  }
}