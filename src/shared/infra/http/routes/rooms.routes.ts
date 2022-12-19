import { RoomController } from "@modules/room/infra/http/RoomController";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { routeAdapter } from "../adapters/routeAdapter";


const roomRoutes = Router();

const roomController = new RoomController();

roomRoutes.post("/", celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }), 
  routeAdapter(roomController, 'create')
  );



export { roomRoutes }