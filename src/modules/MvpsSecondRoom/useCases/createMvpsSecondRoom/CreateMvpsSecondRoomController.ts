import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMvpsSecondRoomUseCase } from "./CreateMvpsSecondRoomUseCase";



class CreateMvpsSecondRoomController {
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
        const createMvpsSecondRoomUseCase = await container.resolve(CreateMvpsSecondRoomUseCase);
        await createMvpsSecondRoomUseCase.execute({
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

export { CreateMvpsSecondRoomController };