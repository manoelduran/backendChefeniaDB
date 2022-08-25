import { Router } from 'express';
import { generalMvpsRoutes } from './generalmvps.routes';
import { mvpsFirstRoomRoutes } from './mvpsfirstroom.routes';
import { mvpsFourthRoutes } from './mvpsfourthroom.routes';
import { mvpsSecondRoutes } from './mvpssecondroom.routes';
import { mvpsThirdRoutes } from './mvpsthirdroom.routes';


const router = Router();

router.use("/generalmvps", generalMvpsRoutes);
router.use("/mvpsfirstroom", mvpsFirstRoomRoutes);
router.use("/mvpssecondroom", mvpsSecondRoutes);
router.use("/mvpsthirdroom", mvpsThirdRoutes);
router.use("/mvpsfourthroom", mvpsFourthRoutes);

export { router };