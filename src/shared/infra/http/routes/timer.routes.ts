
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { routeAdapter } from "@shared/infra/http/adapters/routeAdapter";
import { TimerController } from "@modules/timer/infra/http/controllers/TimerController";


const timerRoutes = Router();

const timerController = new TimerController();

timerRoutes.post("/", celebrate({
    [Segments.BODY]: {
      time: Joi.number().required(),
      user_id: Joi.string().uuid().required(),
      mvp_id: Joi.string().uuid().required(),
    },
  }), 
  routeAdapter(timerController, 'create')
  );

  timerRoutes.get("/", routeAdapter(timerController, 'list'))

export { timerRoutes }