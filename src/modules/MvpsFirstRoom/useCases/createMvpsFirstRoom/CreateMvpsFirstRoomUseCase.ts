import { ICreateMvpsFirstRoomDTO, IMvpsFirstRoomRepository } from "@modules/MvpsFirstRoom/repositories/IMvpsFirstRoomRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateMvpsFirstRoomUseCase {
    constructor(
        @inject('MvpsFirstRoomRepository')
        private mvpsFirstRoomRepository: IMvpsFirstRoomRepository
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
    }: ICreateMvpsFirstRoomDTO
    ): Promise<void> {
        const alreadyExists = await this.mvpsFirstRoomRepository.findByName(name);
        if (alreadyExists) {
            throw new AppError("This Mvp is already created!");
        };
        this.mvpsFirstRoomRepository.create({
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

export { CreateMvpsFirstRoomUseCase };