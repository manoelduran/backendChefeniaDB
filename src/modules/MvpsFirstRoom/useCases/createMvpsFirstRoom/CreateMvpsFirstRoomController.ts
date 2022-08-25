import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMvpsFirstRoomUseCase } from "./CreateMvpsFirstRoomUseCase";



class CreateMvpsFirstRoomController {
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
        const createMvpsFirstRoomUseCase = await container.resolve(CreateMvpsFirstRoomUseCase);
        await createMvpsFirstRoomUseCase.execute({
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

export { CreateMvpsFirstRoomController };