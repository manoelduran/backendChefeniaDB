import { TimersNotFoundException } from "@modules/timer/domain/Timer/TimersNotFoundException";
import { TimersRepository } from "@modules/timer/infra/typeorm/repositories/TimersRepository";
import { ITimersRepository } from "@modules/timer/repositories/ITimersRepository";
import { ListTimersResponse } from "@modules/timer/responses/ListTimersResponse";
import { left, right } from "@shared/either";
import { inject, injectable } from "tsyringe";



@injectable()
class ListTimersService {
    constructor(
        @inject("TimersRepository")
        private timersRepository: ITimersRepository
    ) { }
    async execute(): ListTimersResponse {
        const timersOrError = await this.timersRepository.list();
        if (timersOrError.isLeft()) {
            return left(new TimersNotFoundException());
        };
        return right(timersOrError.value);
    }
};

export { ListTimersService };