import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMvpsThirdRoomUseCase } from "./CreateMvpsThirdRoomUseCase";


class CreateMvpsThirdRoomController {
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
        const createMvpsThirdRoomUseCase = await container.resolve(CreateMvpsThirdRoomUseCase);
        await createMvpsThirdRoomUseCase.execute({
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
        })
        return response.status(201).send();
    };
};

export { CreateMvpsThirdRoomController };