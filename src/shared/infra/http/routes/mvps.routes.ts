import { MvpController } from '@modules/mvp/infra/http/controllers/MvpController';
import { Router } from 'express';

const MvpsRoutes = Router();

const mvpController = new MvpController();

MvpsRoutes.post("/", mvpController.create);

MvpsRoutes.get("/", mvpController.list);

export { MvpsRoutes };