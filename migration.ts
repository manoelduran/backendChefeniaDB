'use strict';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import   './src/shared/infra/typeorm/migrations/1663352042618-CreateUsers'



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

    const migrations = await connection.runMigrations();
    return { migrations};
};
