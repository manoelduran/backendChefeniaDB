import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreateGeneralMvpsDTO, IGeneralMvpsRepository } from "../../repositories/IGeneralMvpsRepository";


@injectable()
class CreateGeneralMvpUseCase {
    constructor(
        @inject("GeneralMvpsRepository")
        private generalMvpsRepository: IGeneralMvpsRepository
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
    }: ICreateGeneralMvpsDTO): Promise<void> {
        const alreadyExists = await this.generalMvpsRepository.findByName(name);
        if (alreadyExists) {
            throw new AppError("This Mvp is already created!");
        };
        this.generalMvpsRepository.create({
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

export { CreateGeneralMvpUseCase };