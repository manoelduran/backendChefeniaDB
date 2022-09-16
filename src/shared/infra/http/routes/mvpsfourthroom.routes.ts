import { CreateMvpsFourthRoomController } from "@modules/MvpsFourthRoom/useCases/createMvpsFourthRoom/CreateMvpsFourthRoomController";
import { ListMvpsFourthRoomController } from "@modules/MvpsFourthRoom/useCases/listMvpsFourthRoom/ListMvpsFourthRoomController";
import { Router } from "express";

const mvpsFourthRoutes = Router();

const createMvpsFourthRoomController = new CreateMvpsFourthRoomController();
const listMvpsFourthRoomController = new ListMvpsFourthRoomController();

mvpsFourthRoutes.post("/", createMvpsFourthRoomController.handle);

mvpsFourthRoutes.get("/", listMvpsFourthRoomController.handle);

export { mvpsFourthRoutes };