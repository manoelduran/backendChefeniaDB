import uploadConfig from '@config/upload';
import { MvpController } from '@modules/mvp/infra/http/controllers/MvpController';
import { MvpImageController } from '@modules/mvp/infra/http/controllers/MvpImageController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';
import { routeAdapter } from '../adapters/routeAdapter';

const MvpsRoutes = Router();
const upload = multer(uploadConfig.multer);
const mvpImageController = new MvpImageController()
const mvpController = new MvpController();

MvpsRoutes.post("/", celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        quantity: Joi.number().required(),
        property: Joi.string().required(),
        respawn: Joi.string().optional(),
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

MvpsRoutes.get("/", routeAdapter(mvpController, 'list'));

MvpsRoutes.patch('/image/:mvp_id', upload.single('file'),  celebrate({
    [Segments.PARAMS]: {
      mvp_id: Joi.string().uuid().required(),
    },
  }), routeAdapter(mvpImageController, 'update'))

export { MvpsRoutes };