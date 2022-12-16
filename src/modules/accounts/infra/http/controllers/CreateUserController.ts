import { CreateUserUseCase } from "@modules/accounts/services/createUser/CreateUserUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";



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