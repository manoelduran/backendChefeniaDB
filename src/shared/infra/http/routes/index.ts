import { Router } from 'express';
import { accountRoutes } from './account.routes';
import { authRoutes } from './auth.routes';
import { MvpsRoutes } from './mvps.routes';
import { roomRoutes } from './rooms.routes';



const router = Router();

router.use("/mvps", MvpsRoutes);
router.use("/users", accountRoutes);
router.use("/session", authRoutes);
router.use("/rooms", roomRoutes)

export { router };