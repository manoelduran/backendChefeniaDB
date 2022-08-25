import { container } from 'tsyringe';
import { IGeneralMvpsRepository } from '../../modules/generalMvps/repositories/IGeneralMvpsRepository';
import { GeneralMvpsRepository } from '../../modules/generalMvps/repositories/implementations/GeneralMvpsRepository';
import { MvpsFirstRoomRepository } from '../../modules/MvpsFirstRoom/repositories/implementations/MvpsFirstRoomRepository';
import { IMvpsFirstRoomRepository } from '../../modules/MvpsFirstRoom/repositories/IMvpsFirstRoomRepository';
import { MvpsSecondRoomRepository } from '../../modules/MvpsSecondRoom/repositories/implementations/MvpsSecondRoomRepository';
import { IMvpsSecondRoomRepository } from '../../modules/MvpsSecondRoom/repositories/IMvpsSecondRoomRepository';
import { MvpsThirdRoomRepository } from '../../modules/MvpsThirdRoom/repositories/implementations/MvpsThirdRoomRepository';
import { IMvpsThirdRoomRepository } from '../../modules/MvpsThirdRoom/repositories/IMvpsThirdRoomRepository';


container.registerSingleton<IGeneralMvpsRepository>(
    "GeneralMvpsRepository",
    GeneralMvpsRepository
)

container.registerSingleton<IMvpsFirstRoomRepository>(
    "MvpsFirstRoomRepository",
    MvpsFirstRoomRepository
)

container.registerSingleton<IMvpsSecondRoomRepository>(
    "MvpsSecondRoomRepository",
    MvpsSecondRoomRepository
)

container.registerSingleton<IMvpsThirdRoomRepository>(
    "MvpsThirdRoomRepository",
    MvpsThirdRoomRepository
)