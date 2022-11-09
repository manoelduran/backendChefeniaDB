import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";



class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password, phone, name, job } = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);
        const newUser = await createUserUseCase.execute({
            email, password, phone, name, job
        });
        return response.status(201).json(newUser);
    };
};

export { CreateUserController };