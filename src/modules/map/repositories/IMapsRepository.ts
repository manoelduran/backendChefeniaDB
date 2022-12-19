
import { Either } from "@shared/either";
import { CreateMapDTO } from "@modules/map/dtos/CreateMapDTO";
import { Map } from "@modules/map/infra/typeorm/entities/Map";
import { MapsNotFoundException } from "@modules/map/domain/Map/MapsNotFoundException";
import { MapNotFoundException } from "@modules/map/domain/exceptions/MapNotFoundException";

interface IMapsRepository {
    create(data: CreateMapDTO): Promise<Map>;
    findByName(name: string): Promise<Either<MapNotFoundException, Map>>;
    list(): Promise<Either<MapsNotFoundException, Map[]>>;
};

export { IMapsRepository };