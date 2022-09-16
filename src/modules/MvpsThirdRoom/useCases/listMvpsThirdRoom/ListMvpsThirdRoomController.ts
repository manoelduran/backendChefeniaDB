import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMvpsThirdRoomUseCase } from "@modules/MvpsThirdRoom/useCases/listMvpsThirdRoom/ListMvpsThirdRoomUseCase";


class ListMvpsThirdRoomController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listMvpsThirdRoomUseCase = await container.resolve(ListMvpsThirdRoomUseCase);
        const mvpsThirdRoom = await listMvpsThirdRoomUseCase.execute();
        return response.status(200).json(mvpsThirdRoom);
    };
};

export { ListMvpsThirdRoomController };