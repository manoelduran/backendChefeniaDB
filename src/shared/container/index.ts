import { container } from 'tsyringe';
import { IGeneralMvpsRepository } from '../../modules/generalMvps/repositories/IGeneralMvpsRepository';
import { GeneralMvpsRepository } from '../../modules/generalMvps/repositories/implementations/GeneralMvpsRepository';


container.registerSingleton<IGeneralMvpsRepository>(
    "GeneralMvpsRepository",
    GeneralMvpsRepository
)