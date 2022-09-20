import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { Router } from 'express';

const accountRoutes = Router();

const createUserController = new CreateUserController();

accountRoutes.post("/", createUserController.handle);


export {accountRoutes};