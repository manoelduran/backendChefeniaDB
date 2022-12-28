import { RoomMvpController } from "@modules/roomMvp/infra/http/controllers/RoomMvpController";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { routeAdapter } from "../adapters/routeAdapter";


const roomMvpsRoutes = Router();

const roomMvpController = new RoomMvpController();

roomMvpsRoutes.post("/", celebrate({
  [Segments.BODY]: {
    mvp_id: Joi.string().uuid().required(),
    room_id: Joi.string().uuid().required(),
  },
}),
  routeAdapter(roomMvpController, 'create')
);

roomMvpsRoutes.get("/", routeAdapter(roomMvpController, 'list'))

export { roomMvpsRoutes }