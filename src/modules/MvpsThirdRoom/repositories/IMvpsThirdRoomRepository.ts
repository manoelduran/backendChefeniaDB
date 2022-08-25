import { MvpsThirdRoom } from "../entities/MvpsThirdRoom";



export interface ICreateMvpsThirdRoomDTO {
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

interface IMvpsThirdRoomRepository {
    findByName(name: string): Promise<MvpsThirdRoom>;
    create(data: ICreateMvpsThirdRoomDTO): Promise<void>;
    list(): Promise<MvpsThirdRoom[]>;
};

export { IMvpsThirdRoomRepository };