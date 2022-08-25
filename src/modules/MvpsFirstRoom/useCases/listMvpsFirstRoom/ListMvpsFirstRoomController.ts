import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMvpsFirstRoomUseCase } from "./ListMvpsFirstRoomUseCase";


class ListMvpsFirstRoomController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listMvpsFirstRoomUseCase = container.resolve(ListMvpsFirstRoomUseCase);
        const mvpsFirstRoom = await listMvpsFirstRoomUseCase.execute();
        return response.status(200).json(mvpsFirstRoom);
    };
};

export { ListMvpsFirstRoomController };