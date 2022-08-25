import { Router } from 'express';
import { generalMvpsRoutes } from './generalmvps.routes';
import { mvpsFirstRoomRoutes } from './mvpsfirstroom.routes';


const router = Router();

router.use("/generalmvps", generalMvpsRoutes);
router.use("/mvpsfirstroom", mvpsFirstRoomRoutes);


export { router };