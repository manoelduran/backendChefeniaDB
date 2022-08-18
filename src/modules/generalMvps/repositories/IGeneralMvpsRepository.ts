import { GeneralMvps } from "../entities/GeneralMvp";

interface IGeneralMvpsRepository {
    findByName(name: string): Promise<GeneralMvps>;
    list(): Promise<GeneralMvps[]>;
};

export {IGeneralMvpsRepository};
