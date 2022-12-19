import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
import createConnection from "@shared/infra/typeorm";
import "@shared/container";

import { router } from './routes';
import { AppError } from '@shared/errors/AppError';
import cors from 'cors';

createConnection();

const app = express();
app.use(express.json());
app.use(router);
app.use(cors())
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            message: error.message
        });
    };
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${error.message}`
    })
})

export { app };