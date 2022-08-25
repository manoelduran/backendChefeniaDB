import { container } from 'tsyringe';
import { IGeneralMvpsRepository } from '../../modules/generalMvps/repositories/IGeneralMvpsRepository';
import { GeneralMvpsRepository } from '../../modules/generalMvps/repositories/implementations/GeneralMvpsRepository';
import { MvpsFirstRoomRepository } from '../../modules/MvpsFirstRoom/repositories/implementations/MvpsFirstRoomRepository';
import { IMvpsFirstRoomRepository } from '../../modules/MvpsFirstRoom/repositories/IMvpsFirstRoomRepository';


container.registerSingleton<IGeneralMvpsRepository>(
    "GeneralMvpsRepository",
    GeneralMvpsRepository
)

container.registerSingleton<IMvpsFirstRoomRepository>(
    "MvpsFirstRoomRepository",
    MvpsFirstRoomRepository
)