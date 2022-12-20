
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { routeAdapter } from "@shared/infra/http/adapters/routeAdapter";
import { TimerController } from "@modules/timer/infra/http/controllers/TimerController";


const timerRoutes = Router();

const timerController = new TimerController();

timerRoutes.post("/", celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      user_id: Joi.string().required(),
      mvp_id: Joi.string().required(),
    },
  }), 
  routeAdapter(timerController, 'create')
  );

  timerRoutes.get("/", routeAdapter(timerController, 'list'))

export { timerRoutes }