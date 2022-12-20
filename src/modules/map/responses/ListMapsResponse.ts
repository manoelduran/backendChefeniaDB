import { Either } from "@shared/either";
import { MapsNotFoundException } from "@modules/map/domain/Map/MapsNotFoundException";
import {Map} from '@modules/map/infra/typeorm/entities/Map';


export type ListMapsResponse = Promise<
    Either<
        MapsNotFoundException,
        Map[]
    >
>;
