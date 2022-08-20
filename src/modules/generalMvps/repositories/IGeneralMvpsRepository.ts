import { GeneralMvps } from "../entities/GeneralMvps";

interface IGeneralMvpsRepository {
    findByName(name: string): Promise<GeneralMvps>;
    list(): Promise<GeneralMvps[]>;
};

export {IGeneralMvpsRepository};
