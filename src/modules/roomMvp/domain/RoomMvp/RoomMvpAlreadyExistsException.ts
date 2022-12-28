import { BaseException } from "@shared/domain/BaseException";


export class RoomMvpAlreadyExistsException extends Error implements BaseException {
  statusCode: number;

  constructor() {
    super('Já existe uma associação com essas credênciais na plataforma.');
    this.name = 'RoomMvpAlreadyExistsException';
    this.statusCode = 400;
  }
}