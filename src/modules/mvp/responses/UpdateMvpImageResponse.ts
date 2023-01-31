import { Either } from '@shared/either';
import { Mvp } from '@modules/mvp/infra/typeorm/entities/Mvp';
import { MvpNotFoundException } from '../domain/exceptions/MvpNotFoundException';


export type UpdateMvpImageResponse = Promise<
  Either<
    MvpNotFoundException,
    Mvp
  >
>;
