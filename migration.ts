'use strict';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import './src/shared/infra/typeorm/migrations/1663352042618-CreateUsers'
import './src/shared/infra/typeorm/migrations/1668176864432-CreateMvp'
import './src/shared/infra/typeorm/migrations/1671412755427-CreateRoom'
import './src/shared/infra/typeorm/migrations/1671461949794-CreateMap'
import './src/shared/infra/typeorm/migrations/1671575424950-CreateTimer'
import './src/shared/infra/typeorm/migrations/1672000477656-CreateNotification'
import './src/shared/infra/typeorm/migrations/1672263876772-CreateRoomMvp'
import './src/shared/infra/typeorm/migrations/1677675321194-AddIsGeneralToMvp'



module.exports.handler = async () => {
    const connection = await createConnection({
        "type": "postgres",
        "port": Number(process.env.AWS_RDS_PORT),
        "host": process.env.AWS_RDS_HOST,
        "username": process.env.MASTER_USERNAME,
        "password": process.env.MASTER_PASSWORD,
        "database": process.env.AWS_RDS_DB_NAME,
        "synchronize": true,
        "migrations": ["./src/shared/infra/typeorm/migrations/*.{ts,js}"],
        "entities": ["./src/modules/**/infra/typeorm/entities/*.{ts,js}"],
        "cli": {
            "migrationsDir": "./src/shared/infra/typeorm/migrations"
        }
    });

     await connection.dropDatabase()
    const migrations = await connection.runMigrations();
    return { migrations };
};
