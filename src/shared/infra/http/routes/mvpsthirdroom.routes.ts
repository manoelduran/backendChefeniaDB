import { CreateMvpsThirdRoomController } from "@modules/MvpsThirdRoom/useCases/createMvpsThirdRoom/CreateMvpsThirdRoomController";
import { ListMvpsThirdRoomController } from "@modules/MvpsThirdRoom/useCases/listMvpsThirdRoom/ListMvpsThirdRoomController";
import { Router } from "express";

const mvpsThirdRoutes = Router();

const createMvpsThirdRoomController = new CreateMvpsThirdRoomController();
const listMvpsThirdRoomController = new ListMvpsThirdRoomController();

mvpsThirdRoutes.post("/", createMvpsThirdRoomController.handle);

mvpsThirdRoutes.get("/", listMvpsThirdRoomController.handle);

export { mvpsThirdRoutes };