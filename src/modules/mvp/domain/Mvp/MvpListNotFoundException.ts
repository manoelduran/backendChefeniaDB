import { BaseException } from "@shared/domain/BaseException";


export class MvpListNotFoundException extends Error implements BaseException {
  statusCode: number;

  constructor() {
    super('Não existe mvps na lista.');
    this.name = 'MvpListNotFoundException';
    this.statusCode = 400;
  }
}