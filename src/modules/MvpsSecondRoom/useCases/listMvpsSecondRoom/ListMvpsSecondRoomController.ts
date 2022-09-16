import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMvpsSecondRoomUseCase } from "@modules/MvpsSecondRoom/useCases/listMvpsSecondRoom/ListMvpsSecondRoomUseCase";



class ListMvpsSecondRoomController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listMvpsSecondRoomUseCase = container.resolve(ListMvpsSecondRoomUseCase);
        const mvpsSecondRoom = await listMvpsSecondRoomUseCase.execute();
        return response.status(200).json(mvpsSecondRoom);
    };
};

export { ListMvpsSecondRoomController };