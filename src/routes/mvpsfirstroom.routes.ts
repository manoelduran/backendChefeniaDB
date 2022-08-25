import { Router } from "express";
import { ListGeneralMvpsController } from "../modules/generalMvps/useCases/listGeneralMvps/ListGeneralMvpsController";
import { CreateMvpsFirstRoomController } from "../modules/MvpsFirstRoom/useCases/createMvpsFirstRoom/CreateMvpsFirstRoomController";


const mvpsFirstRoomRoutes = Router();

const createMvpsFirstRoomController = new CreateMvpsFirstRoomController();
const listMvpsFirstRoomController = new ListGeneralMvpsController();

mvpsFirstRoomRoutes.post("/", createMvpsFirstRoomController.handle);

mvpsFirstRoomRoutes.get("/", listMvpsFirstRoomController.handle);

export {mvpsFirstRoomRoutes};