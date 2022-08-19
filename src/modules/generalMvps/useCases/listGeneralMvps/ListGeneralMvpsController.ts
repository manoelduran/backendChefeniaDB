import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListGeneralMvpsUseCase } from "./ListGeneralMvpsUseCase";


class ListGeneralMvpsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listGeneralMvpsUseCase = container.resolve(ListGeneralMvpsUseCase);
        const generalMvps = listGeneralMvpsUseCase.execute();
        return response.status(200).json(generalMvps);
    };
};

export { ListGeneralMvpsController };