import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
// import "./database";
import "./shared/container";
import { AppError } from './errors/AppError';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

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

app.listen(4444, () => console.log("Server is running!"));
