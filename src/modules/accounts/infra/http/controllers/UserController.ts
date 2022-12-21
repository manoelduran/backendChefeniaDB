import { CreateUserService } from "@modules/accounts/services/CreateUser/CreateUserService";
import { ListUsersService } from "@modules/accounts/services/ListUsers/ListUsersService";
import { BaseController } from "@shared/infra/http/BaseController";
import { HttpResponse } from "@shared/infra/http/HttpResponse";
import { container } from "tsyringe";



class UserController extends BaseController {
    constructor() {
        super();
    };
    async create(): Promise<HttpResponse> {
        const { email, password, phone, name, job } = this.request.body;
        const createUserService = container.resolve(CreateUserService);
        const newUserOrError = await createUserService.execute({
            email, password, phone, name, job
        });
        if (newUserOrError.isLeft()) {
            return this.getError(newUserOrError.value);
        }
        return this.created(newUserOrError.value);
    };
    async list(): Promise<HttpResponse> {
        const listUsersService = container.resolve(ListUsersService);
        const usersOrError = await listUsersService.execute();
        if (usersOrError.isLeft()) {
            return this.getError(usersOrError.value);
        };
        return this.ok(usersOrError.value);
    };
};

export { UserController };