import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
//import initializeTypeORM from "@shared/infra/typeorm";
import "@shared/container";
//import uploadConfig from '@config/upload';
import { router } from './routes';
import { AppError } from '@shared/errors/AppError';
import cors from 'cors';
//import task from './tasks';


const app = express();
app.use(express.json());
app.use(router);
app.use(cors());

//app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {

        return response.status(error.statusCode).json({
            message: error.message
        });
    };
    console.log('error', error)
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${error.message}`
    })
})

//initializeTypeORM()
/*const tasks = async () => {
    await ;
    //task()
}
tasks()*/

export { app };