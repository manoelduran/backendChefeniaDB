import { CreateGeneralMvpController } from '@modules/generalMvps/useCases/createGeneralMvp/CreateGeneralMvpController';
import { ListGeneralMvpsController } from '@modules/generalMvps/useCases/listGeneralMvps/ListGeneralMvpsController';
import { Router } from 'express';

const generalMvpsRoutes = Router();

const createGeneralMvpController = new CreateGeneralMvpController();
const listGeneralMvpsController = new ListGeneralMvpsController();

generalMvpsRoutes.post("/", createGeneralMvpController.handle);

generalMvpsRoutes.get("/", listGeneralMvpsController.handle);

export { generalMvpsRoutes };