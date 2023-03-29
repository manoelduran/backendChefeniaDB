'use strict';
import initializeTypeORM from './src/shared/infra/typeorm';
import './src/shared/infra/typeorm/migrations/1663352042618-CreateUsers'
import './src/shared/infra/typeorm/migrations/1668176864432-CreateMvp'
import './src/shared/infra/typeorm/migrations/1671412755427-CreateRoom'
import './src/shared/infra/typeorm/migrations/1671461949794-CreateMap'
import './src/shared/infra/typeorm/migrations/1671575424950-CreateTimer'
import './src/shared/infra/typeorm/migrations/1672000477656-CreateNotification'
import './src/shared/infra/typeorm/migrations/1672263876772-CreateRoomMvp'
import './src/shared/infra/typeorm/migrations/1677675321194-AddIsGeneralToMvp'



module.exports.handler = async () => {
    const connection = await initializeTypeORM();

    const migrations = await connection.runMigrations();
    return { migrations };
};

module.exports.refresh = async () => {
    const connection = await initializeTypeORM();

    await connection.dropDatabase();
    const migrations = await connection.runMigrations();
    return { migrations };
}
