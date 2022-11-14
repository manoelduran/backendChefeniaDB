import { Router } from 'express';
import { accountRoutes } from './account.routes';
import { authRoutes } from './auth.routes';
import { MvpsRoutes } from './mvps.routes';



const router = Router();

router.use("/generalmvps", MvpsRoutes);
router.use("/users", accountRoutes);
router.use("/session", authRoutes);

export { router };