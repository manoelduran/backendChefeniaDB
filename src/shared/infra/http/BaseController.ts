import { HttpResponse } from './HttpResponse';
import { HttpRequest } from './HttpRequest';

interface JSONResponseDTO {
  status: number;
  message?: string;
  data?: any;
}

import { BaseException } from '@shared/domain/BaseException';

export abstract class BaseController {
  protected request: HttpRequest;

  protected jsonResponse({ message, status, data }: JSONResponseDTO): HttpResponse {
    return {
      status,
      body: message
        ? {
            message,
            ...data,
          }
        : data,
    };
  }

  public async execute(request: HttpRequest, action: string): Promise<HttpResponse> {
    this.request = request;
    //@ts-ignore
    return this[action]();
  }

  protected ok(data?: any): HttpResponse {
    return this.jsonResponse({ status: 200, data });
  }

  protected created(data?: any): HttpResponse {
    return this.jsonResponse({ status: 201, data });
  }

  protected noContent(): HttpResponse {
    return this.jsonResponse({ status: 204 });
  }

  protected badRequest(message?: string): HttpResponse {
    return this.jsonResponse({ message: message || 'Bad Request', status: 400 });
  }

  protected unauthorized(message?: string): HttpResponse {
    return this.jsonResponse({ message: message || 'Unauthorized', status: 401 });
  }

  protected forbidden(message?: string): HttpResponse {
    return this.jsonResponse({ message: message || 'Forbidden', status: 403 });
  }

  protected notFound(message?: string): HttpResponse {
    return this.jsonResponse({ message: message || 'Not Found', status: 404 });
  }

  protected tooMany(message?: string): HttpResponse {
    return this.jsonResponse({ message: message || 'Too Many Requests', status: 429 });
  }

  protected fail(message?: string): HttpResponse {
    return this.jsonResponse({ message: message || 'Falha interna no servidor', status: 500 });
  }

  protected badGateway(message?: string): HttpResponse {
    return this.jsonResponse({ message: message || 'Falha no Gateway', status: 502 });
  }

  protected conflict(message?: string): HttpResponse {
    return this.jsonResponse({ message: message || 'Conflict', status: 409 });
  }

  protected getError(error: BaseException): HttpResponse {
    switch (error.statusCode) {
      case 400:
        return this.badRequest(error.message);
      case 401:
        return this.unauthorized(error.message);
      case 403:
        return this.forbidden(error.message);
      case 404:
        return this.notFound(error.message);
      case 409:
        return this.conflict(error.message);
      case 429:
        return this.tooMany(error.message);
      case 500:
        return this.fail(error.message);
      case 502:
        return this.badGateway(error.message);
      default:
        return this.fail(error.message);
    }
  }
}
