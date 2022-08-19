import { Router } from 'express';
import { ListGeneralMvpsController } from '../modules/generalMvps/useCases/listGeneralMvps/ListGeneralMvpsController';

const generalMvpsRoutes = Router();

const listGeneralMvpsController = new ListGeneralMvpsController();

generalMvpsRoutes.get("/", listGeneralMvpsController.handle);

export { generalMvpsRoutes };