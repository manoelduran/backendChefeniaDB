import { Router } from 'express';
/* 
import { accountRoutes } from './account.routes';
import { authRoutes } from './auth.routes';
import { mapRoutes } from './maps.routes';
import { MvpsRoutes } from './mvps.routes';
import { notificationRoutes } from './notifications.routes';
import { roomMvpsRoutes } from './roomMvps.routes';
import { roomRoutes } from './rooms.routes';
import { timerRoutes } from './timer.routes';
*/

import { Client } from 'pg';
const client = new Client({
    host: process.env.AWS_RDS_HOST,
    user: process.env.MASTER_USERNAME,
    database: process.env.AWS_RDS_DB_NAME,
    password: process.env.MASTER_PASSWORD,
})

const router = Router();
/*

router.use("/mvps", MvpsRoutes);
router.use("/users", accountRoutes);
router.use("/session", authRoutes);
router.use("/rooms", roomRoutes);
router.use("/maps", mapRoutes);
router.use("/timers", timerRoutes);
router.use('/notifications', notificationRoutes);
router.use('/roomMvps', roomMvpsRoutes)
*/
router.get('/ping', async (req, res) => {
    await client.connect()

    const res1 = await client.query('SELECT $1::text as message', ['pong!'])
    await client.end()
    res.json({ ping: res1.rows[0].message })
})

export { router };