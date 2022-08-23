import { GeneralMvps } from "../entities/GeneralMvps";

export interface ICreateGeneralMvpsDTO {
    name: string,
    quantity: number,
    image: string,
    property: string,
    breed: string,
    level: number,
    neutral: number,
    water: number,
    earth: number,
    fire: number,
    wind: number,
    poison: number,
    holy: number,
    dark: number,
    ghost: number,
    undead: number,
}

interface IGeneralMvpsRepository {
    findByName(name: string): Promise<GeneralMvps>;
    create(data: ICreateGeneralMvpsDTO): Promise<void>;
    list(): Promise<GeneralMvps[]>;
};

export { IGeneralMvpsRepository };
