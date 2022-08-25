import { Router } from "express";
import { CreateMvpsSecondRoomController } from "../modules/MvpsSecondRoom/useCases/createMvpsSecondRoom/CreateMvpsSecondRoomController";
import { ListMvpsSecondRoomController } from "../modules/MvpsSecondRoom/useCases/listMvpsSecondRoom/ListMvpsSecondRoomController";

const mvpsSecondRoutes = Router();

const createMvpsSecondRoomController = new CreateMvpsSecondRoomController();
const listMvpsSecondRoomController = new ListMvpsSecondRoomController();

mvpsSecondRoutes.post("/", createMvpsSecondRoomController.handle);

mvpsSecondRoutes.get("/", listMvpsSecondRoomController.handle);

export { mvpsSecondRoutes };