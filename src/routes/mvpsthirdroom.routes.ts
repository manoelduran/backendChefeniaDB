import { Router } from "express";
import { CreateMvpsThirdRoomController } from "../modules/MvpsThirdRoom/useCases/createMvpsThirdRoom/CreateMvpsThirdRoomController";
import { ListMvpsThirdRoomController } from "../modules/MvpsThirdRoom/useCases/listMvpsThirdRoom/ListMvpsThirdRoomController";

const mvpsThirdRoutes = Router();

const createMvpsThirdRoomController = new CreateMvpsThirdRoomController();
const listMvpsThirdRoomController = new ListMvpsThirdRoomController();

mvpsThirdRoutes.post("/", createMvpsThirdRoomController.handle);

mvpsThirdRoutes.get("/", listMvpsThirdRoomController.handle);

export { mvpsThirdRoutes };