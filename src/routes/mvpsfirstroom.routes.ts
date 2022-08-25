import { Router } from "express";
import { CreateMvpsFirstRoomController } from "../modules/MvpsFirstRoom/useCases/createMvpsFirstRoom/CreateMvpsFirstRoomController";
import { ListMvpsFirstRoomController } from "../modules/MvpsFirstRoom/useCases/listMvpsFirstRoom/ListMvpsFirstRoomController";


const mvpsFirstRoomRoutes = Router();

const createMvpsFirstRoomController = new CreateMvpsFirstRoomController();
const listMvpsFirstRoomController = new ListMvpsFirstRoomController();

mvpsFirstRoomRoutes.post("/", createMvpsFirstRoomController.handle);

mvpsFirstRoomRoutes.get("/", listMvpsFirstRoomController.handle);

export {mvpsFirstRoomRoutes};