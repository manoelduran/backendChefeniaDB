
import { UpdateMvpImageDTO } from "@modules/mvp/dtos/UpdateMvpImageDTO";
import { UpdateMvpImageResponse } from "@modules/mvp/responses/UpdateMvpImageResponse";
import { UpdateMvpImageService } from "@modules/mvp/services/UpdateMvpImageService/UpdateMvpImageService";
import { Service } from "@shared/domain/Service";
import { BaseController } from "@shared/infra/http/BaseController";
import { HttpResponse } from "@shared/infra/http/HttpResponse";
import { container } from "tsyringe";

export class MvpImageController extends BaseController {
    constructor() {
        super();
    };
    public async update(): Promise<HttpResponse> {
        const updateMvpImageService = container.resolve<Service<UpdateMvpImageDTO, UpdateMvpImageResponse>>(UpdateMvpImageService);
        const { mvp_id } = this.request.params;
        const { filename } = this.request.file
        const mvpsOrError = await updateMvpImageService.execute({
            mvp_id,
            file: filename
        });
  
        if (mvpsOrError.isLeft()) {
            return this.getError(mvpsOrError.value);
        };
        return this.ok(mvpsOrError.value);
    };
}