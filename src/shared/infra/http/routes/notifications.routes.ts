
import { NotificationController } from "@modules/notification/infra/http/controllers/NotificationController";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { routeAdapter } from "../adapters/routeAdapter";


const notificationRoutes = Router();

const notificationController = new NotificationController();

notificationRoutes.post("/", celebrate({
    [Segments.BODY]: {
      message: Joi.string().required(),
    },
  }), 
  routeAdapter(notificationController, 'create')
  );

  notificationRoutes.get("/", routeAdapter(notificationController, 'list'))

export { notificationRoutes }