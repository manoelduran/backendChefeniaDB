import { AuthUserService } from "@modules/accounts/services/AuthUser/AuthUserService";
import { BaseController } from "@shared/infra/http/BaseController";
import { HttpResponse } from "@shared/infra/http/HttpResponse";
import { container } from "tsyringe";

class AuthUserController extends BaseController {
    constructor() {
        super();
    };
    async create(): Promise<HttpResponse> {
        const { email, password } = this.request.body;
        const authUserUseCase = container.resolve(AuthUserService);
        const authOrError = await authUserUseCase.execute({
            email,
            password
        })
        if (authOrError.isLeft()) {
            return this.getError(authOrError.value);
        }
        return this.ok(authOrError.value);
    };
};

export { AuthUserController };