import { Either } from '@shared/either';
import { MvpAlreadyExistsException } from '@modules/mvp/domain/Mvp/MvpAlreadyExistsException';
import { Mvp } from '@modules/mvp/infra/typeorm/entities/Mvp';


export type CreateMvpResponse = Promise<
  Either<
    MvpAlreadyExistsException,
    Mvp
  >
>;
