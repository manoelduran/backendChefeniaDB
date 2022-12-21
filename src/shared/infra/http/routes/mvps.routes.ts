import { MvpController } from '@modules/mvp/infra/http/controllers/MvpController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { routeAdapter } from '../adapters/routeAdapter';

const MvpsRoutes = Router();

const mvpController = new MvpController();

MvpsRoutes.post("/", celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        quantity: Joi.number().required(),
        property: Joi.string().required(),
        respawn: Joi.string().required(),
        breed: Joi.string().required(),
        level: Joi.number().required(),
        neutral: Joi.number().required(),
        water: Joi.number().required(),
        earth: Joi.number().required(),
        fire: Joi.number().required(),
        wind: Joi.number().required(),
        poison: Joi.number().required(),
        holy: Joi.number().required(),
        dark: Joi.number().required(),
        ghost: Joi.number().required(),
        undead: Joi.number().required()
    },
}),
    routeAdapter(mvpController, 'create'))

MvpsRoutes.get("/",routeAdapter(mvpController, 'list'));

export { MvpsRoutes };