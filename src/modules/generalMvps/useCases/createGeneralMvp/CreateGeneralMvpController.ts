import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGeneralMvpUseCase } from "./CreateGeneralMvpUseCase";

class CreateGeneralMvpController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            breed,
            dark,
            earth,
            fire,
            ghost,
            holy,
            image,
            level,
            name,
            neutral,
            poison,
            property,
            quantity,
            undead,
            water,
            wind
        } = request.body;
        const createGeneralMvpUseCase = container.resolve(CreateGeneralMvpUseCase);
        await createGeneralMvpUseCase.execute({
            breed,
            dark,
            earth,
            fire,
            ghost,
            holy,
            image,
            level,
            name,
            neutral,
            poison,
            property,
            quantity,
            undead,
            water,
            wind
        });
        return response.status(201).send();
    };
};

export { CreateGeneralMvpController };