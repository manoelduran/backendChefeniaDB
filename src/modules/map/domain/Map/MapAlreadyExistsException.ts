import { BaseException } from "@shared/domain/BaseException";


export class MapAlreadyExistsException extends Error implements BaseException {
  statusCode: number;

  constructor() {
    super('Já existe um mapa com essas credênciais na plataforma.');
    this.name = 'MapAlreadyExistsException';
    this.statusCode = 400;
  }
}