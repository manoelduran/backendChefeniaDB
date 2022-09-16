import { CreateMvpsFirstRoomController } from "@modules/MvpsFirstRoom/useCases/createMvpsFirstRoom/CreateMvpsFirstRoomController";
import { ListMvpsFirstRoomController } from "@modules/MvpsFirstRoom/useCases/listMvpsFirstRoom/ListMvpsFirstRoomController";
import { Router } from "express";

const mvpsFirstRoomRoutes = Router();

const createMvpsFirstRoomController = new CreateMvpsFirstRoomController();
const listMvpsFirstRoomController = new ListMvpsFirstRoomController();

mvpsFirstRoomRoutes.post("/", createMvpsFirstRoomController.handle);

mvpsFirstRoomRoutes.get("/", listMvpsFirstRoomController.handle);

export {mvpsFirstRoomRoutes};