
import { AuthUserController } from '@modules/accounts/infra/http/controllers/AuthUserController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { routeAdapter } from '../adapters/routeAdapter';

const authRoutes = Router();

const authUserController = new AuthUserController();

authRoutes.post("/", celebrate({
    [Segments.BODY]: {
        email: Joi.string().required(),
        password: Joi.string().required(),
    },
}),
    routeAdapter(authUserController, 'create')
);


export { authRoutes };