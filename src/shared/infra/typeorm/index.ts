import { Connection, createConnection, ConnectionOptions } from 'typeorm';

/*
export default async (
  host = "database"
): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === 'test' ? 'localhost' : host,
      database: process.env.NODE_ENV === 'test'
        ? "chefeniadb_test" : defaultOptions.database,
    })
  )
}
*/




// RDS CONNECTION //



//import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async function initializeTypeORM(options?: Partial<ConnectionOptions>
): Promise<Connection> {
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
  return connection;
} 