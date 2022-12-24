import { ITimersRepository } from "@modules/timer/repositories/ITimersRepository";
import { ListTimersResponse } from "@modules/timer/responses/ListTimersResponse";
import { inject, injectable } from "tsyringe";



@injectable()
class ListTimersService {
    constructor(
        @inject("TimersRepository")
        private timersRepository: ITimersRepository
    ) { }
    async execute(): ListTimersResponse {
        const timers = await this.timersRepository.list();
        return timers;
    }
};

export { ListTimersService };