
import { UserController } from '@modules/accounts/infra/http/controllers/UserController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { routeAdapter } from '../adapters/routeAdapter';

const accountRoutes = Router();

const userController = new UserController();

accountRoutes.post("/", celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    job: Joi.string().required(),
  },
}),
  routeAdapter(userController, 'create')
);

accountRoutes.get("/", routeAdapter(userController, 'list')
);

export { accountRoutes };