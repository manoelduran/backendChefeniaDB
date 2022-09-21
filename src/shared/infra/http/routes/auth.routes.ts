import { AuthUserController } from '@modules/accounts/useCases/AuthUser/AuthUserController';
import { Router } from 'express';

const authRoutes = Router();

const authUserController = new AuthUserController();

authRoutes.post("/", authUserController.handle);


export {authRoutes};