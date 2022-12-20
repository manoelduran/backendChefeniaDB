import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IMvpsRepository } from "@modules/mvp/repositories/IMvpsRepository";
import { CreateTimerDTO } from "@modules/timer/dtos/CreateTimerDTO";
import { ITimersRepository } from "@modules/timer/repositories/ITimersRepository";
import { CreateTimerResponse } from "@modules/timer/responses/CreateTimerResponse";
import { left, right } from "@shared/either";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateTimerService {
    constructor(
        @inject("TimersRepository")
        private timersRepository: ITimersRepository,
        @inject("UsersRepository")
        private usersRepossitory: IUsersRepository,
        @inject("MvpsRepository")
        private mvpsRepository: IMvpsRepository,
    ) { }
    async execute({ user_id, mvp_id }: CreateTimerDTO): CreateTimerResponse {

        const user = await this.usersRepossitory.findById(user_id);

        const mvpOrError = await this.mvpsRepository.findById(mvp_id);
        if (mvpOrError.isLeft()) {
            return left(mvpOrError.value);
        };

        const newTimer = await this.timersRepository.create({
            mvp_id: mvpOrError.value.id,
            time: Number(mvpOrError.value.respawn),
            user_id: user.id,
        });
        return right(newTimer);
    }
};

export { CreateTimerService };