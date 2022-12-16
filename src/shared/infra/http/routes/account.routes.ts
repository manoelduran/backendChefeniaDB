
import { CreateUserController } from '@modules/accounts/infra/http/controllers/CreateUserController';
import { Router } from 'express';

const accountRoutes = Router();

const createUserController = new CreateUserController();

accountRoutes.post("/", createUserController.handle);


export {accountRoutes};