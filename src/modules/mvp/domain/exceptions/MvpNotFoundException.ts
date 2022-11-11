import { BaseException } from "@shared/domain/BaseException";

export class MvpNotFoundException extends Error implements BaseException {
  public statusCode: number;

  constructor() {
    super('O Mvp não foi encontrado em nosso sistema.');
    this.statusCode = 404;
    this.name = 'MvpNotFoundException';
  }
}
