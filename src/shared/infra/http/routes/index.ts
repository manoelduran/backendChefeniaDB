import { Router } from 'express';
import { roomRoutes } from './rooms.routes';
/* 
import { accountRoutes } from './account.routes';
import { authRoutes } from './auth.routes';
import { mapRoutes } from './maps.routes';
import { MvpsRoutes } from './mvps.routes';
import { notificationRoutes } from './notifications.routes';
import { roomMvpsRoutes } from './roomMvps.routes';

import { timerRoutes } from './timer.routes';
*/

import { Client } from 'pg';


const router = Router();
/*

router.use("/mvps", MvpsRoutes);
router.use("/users", accountRoutes);
router.use("/session", authRoutes);

router.use("/maps", mapRoutes);
router.use("/timers", timerRoutes);
router.use('/notifications', notificationRoutes);
router.use('/roomMvps', roomMvpsRoutes)
*/
//router.use("/rooms", roomRoutes);
router.get('/ping', async (req, res) => {
    const client = new Client({
        host: process.env.AWS_RDS_HOST,
        user: process.env.MASTER_USERNAME,
        database: process.env.AWS_RDS_DB_NAME,
        password: process.env.MASTER_PASSWORD,
    })
    await client.connect()

    const res1 = await client.query('SELECT $1::text as message', ['pong!'])
    await client.end()
    res.json({ ping: res1.rows[0].message })
})
router.get('/tables', async (req, res) => {
    const client = new Client({
        host: process.env.AWS_RDS_HOST,
        user: process.env.MASTER_USERNAME,
        database: process.env.AWS_RDS_DB_NAME,
        password: process.env.MASTER_PASSWORD,
    })
    await client.connect()

    const res1 = await client.query('SELECT * FROM pg_catalog.pg_tables')
    await client.end()
    res.json({ tables: res1.rows })
})

export { router };