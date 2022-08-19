import { Router } from 'express';
import { generalMvpsRoutes } from './generalmvps.routes';


const router = Router();

router.use("/generalmvps", generalMvpsRoutes);


export { router };