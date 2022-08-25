import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreateMvpsSecondRoomDTO, IMvpsSecondRoomRepository } from "../../repositories/IMvpsSecondRoomRepository";

@injectable()
class CreateMvpsSecondRoomUseCase {
    constructor(
        @inject('MvpsSecondRoomRepository')
        private mvpsSecondRoomRepository: IMvpsSecondRoomRepository
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
    }: ICreateMvpsSecondRoomDTO
    ): Promise<void> {
        const alreadyExists = await this.mvpsSecondRoomRepository.findByName(name);
        if (alreadyExists) {
            throw new AppError("This Mvp is already created!");
        };
        this.mvpsSecondRoomRepository.create({
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

export { CreateMvpsSecondRoomUseCase };