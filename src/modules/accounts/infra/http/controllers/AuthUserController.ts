import { AuthUserUseCase } from "@modules/accounts/services/AuthUser/AuthUserUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class AuthUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const authUserUseCase = container.resolve(AuthUserUseCase);
        const token = await authUserUseCase.execute({
            email,
            password
        })
        return response.status(200).json(token);
    };
};

export { AuthUserController };