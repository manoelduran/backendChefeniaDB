import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IGeneralMvpsRepository } from '@modules/generalMvps/repositories/IGeneralMvpsRepository';
import { GeneralMvpsRepository } from '@modules/generalMvps/repositories/implementations/GeneralMvpsRepository';
import { MvpsFirstRoomRepository } from '@modules/MvpsFirstRoom/repositories/implementations/MvpsFirstRoomRepository';
import { IMvpsFirstRoomRepository } from '@modules/MvpsFirstRoom/repositories/IMvpsFirstRoomRepository';
import { MvpsFourthRoomRepository } from '@modules/MvpsFourthRoom/repositories/implementations/MvpsFourthRoomRepository';
import { IMvpsFourthRoomRepository } from '@modules/MvpsFourthRoom/repositories/IMvpsFourthRoomRepository';
import { MvpsSecondRoomRepository } from '@modules/MvpsSecondRoom/repositories/implementations/MvpsSecondRoomRepository';
import { IMvpsSecondRoomRepository } from '@modules/MvpsSecondRoom/repositories/IMvpsSecondRoomRepository';
import { MvpsThirdRoomRepository } from '@modules/MvpsThirdRoom/repositories/implementations/MvpsThirdRoomRepository';
import { IMvpsThirdRoomRepository } from '@modules/MvpsThirdRoom/repositories/IMvpsThirdRoomRepository';
import { container } from 'tsyringe';

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

container.registerSingleton<IMvpsFourthRoomRepository>(
    "MvpsFourthRoomRepository",
    MvpsFourthRoomRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)