import { ICreateMvpsThirdRoomDTO, IMvpsThirdRoomRepository } from "@modules/MvpsThirdRoom/repositories/IMvpsThirdRoomRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateMvpsThirdRoomUseCase {
    constructor(
        @inject('MvpsThirdRoomRepository')
        private mvpsThirdRoomRepository: IMvpsThirdRoomRepository
    ) { }
    async execute({
        breed,
        dark,
        earth,
        fire,
        ghost,
        holy,
        image,
        level,
        name,
        neutral,
        poison,
        property,
        quantity,
        undead,
        water,
        wind
    }: ICreateMvpsThirdRoomDTO
    ): Promise<void> {
        const alreadyExists = await this.mvpsThirdRoomRepository.findByName(name);
        if (alreadyExists) {
            throw new AppError("This Mvp is already created!");
        };
        this.mvpsThirdRoomRepository.create({
            breed,
            dark,
            earth,
            fire,
            ghost,
            holy,
            image,
            level,
            name,
            neutral,
            poison,
            property,
            quantity,
            undead,
            water,
            wind
        });
    };
};

export { CreateMvpsThirdRoomUseCase };