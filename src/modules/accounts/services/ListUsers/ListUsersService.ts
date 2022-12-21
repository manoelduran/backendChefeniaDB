
import { UsersNotFoundException } from "@modules/accounts/domain/Map/UsersNotFoundException";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ListUsersResponse } from "@modules/accounts/responses/ListUsersResponse";
import { left, right } from "@shared/either";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUsersService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }
    async execute(): ListUsersResponse {
        const usersOrError = await this.usersRepository.list();
        if (usersOrError.isLeft()) {
            return left(new UsersNotFoundException());
        };
        return right(usersOrError.value);
    };
};

export { ListUsersService };