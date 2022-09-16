import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMvpsFourthRoomUseCase } from "@modules/MvpsFourthRoom/useCases/listMvpsFourthRoom/ListMvpsFourthRoomUseCase";


class ListMvpsFourthRoomController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listMvpsFourthRoomUseCase = container.resolve(ListMvpsFourthRoomUseCase);
        const mvpsFourthRoom = await listMvpsFourthRoomUseCase.execute();
        return response.status(200).json(mvpsFourthRoom);
    };
};

export { ListMvpsFourthRoomController };