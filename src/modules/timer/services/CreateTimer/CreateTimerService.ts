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
        private usersRepository: IUsersRepository,
        @inject("MvpsRepository")
        private mvpsRepository: IMvpsRepository,
    ) { }
    async execute({ user_id, mvp_id, time }: CreateTimerDTO): CreateTimerResponse {
        console.log('time', time, user_id, mvp_id)

        const mvpOrError = await this.mvpsRepository.findById(mvp_id);
        console.log('mvpOrError', mvpOrError.value)
        if (mvpOrError.isLeft()) {
            return left(mvpOrError.value);
        };
        const userOrError = await this.usersRepository.findById(user_id);
        console.log('userOrError', userOrError.value)
        if (userOrError.isLeft()) {
            return left(userOrError.value);
        };
        

        const newTimer = await this.timersRepository.create({
            mvp_id: mvpOrError.value.id,
            time: time,
            user_id: userOrError.value.id,
        });
        return right(newTimer);
    }
};

export { CreateTimerService };