import { HttpRequest } from '@shared/infra/http/HttpRequest';
import { BaseController } from '../BaseController';
import { Request, Response } from 'express';

export const routeAdapter = (controller: BaseController, action: string) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      user: req.user,
      connectedUsers: req.connectedUsers,
      file: {
        fieldname: req?.file?.fieldname,
        originalname: req?.file?.originalname,
        encoding: req?.file?.encoding,
        mimetype: req?.file?.mimetype,
        destination: req?.file?.destination,
        filename: req?.file?.filename,
        path: req?.file?.path,
        size: req?.file?.size,
      },
      io: req.io,
      permissions: req.permissions,
      params: req.params,
      query: req.query,
    };

    const httpResponse = await controller.execute(httpRequest, action);
    return res.status(httpResponse.status).json(httpResponse.body);
  };
};
