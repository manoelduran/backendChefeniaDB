import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMvpsFourthRoomUseCase } from "./CreateMvpsFourthRoomUseCase";



class CreateMvpsFourthRoomController {
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
        const createMvpsFourthRoomUseCase = await container.resolve(CreateMvpsFourthRoomUseCase);
        await createMvpsFourthRoomUseCase.execute({
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

export { CreateMvpsFourthRoomController };