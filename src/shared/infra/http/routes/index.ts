import { Router } from 'express';
import { accountRoutes } from './account.routes';
import { authRoutes } from './auth.routes';
import { mapRoutes } from './maps.routes';
import { MvpsRoutes } from './mvps.routes';
import { notificationRoutes } from './notifications.routes';
import { roomRoutes } from './rooms.routes';
import { timerRoutes } from './timer.routes';



const router = Router();

router.use("/mvps", MvpsRoutes);
router.use("/users", accountRoutes);
router.use("/session", authRoutes);
router.use("/rooms", roomRoutes);
router.use("/maps", mapRoutes);
router.use("/timers", timerRoutes);
router.use('/notifications', notificationRoutes);

export { router };