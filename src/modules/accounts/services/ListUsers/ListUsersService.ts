import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ListUsersResponse } from "@modules/accounts/responses/ListUsersResponse";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUsersService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }
    async execute(): ListUsersResponse {
        const users = await this.usersRepository.list();
        return users;
    };
};

export { ListUsersService };