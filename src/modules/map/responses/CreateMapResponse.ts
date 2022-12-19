import { Either } from "@shared/either";
import { Map } from "@modules/map/infra/typeorm/entities/Map";
import { MapAlreadyExistsException } from "@modules/map/domain/Map/MapAlreadyExistsException";



export type CreateMapResponse = Promise<
  Either<
    MapAlreadyExistsException,
    Map
  >
>;
