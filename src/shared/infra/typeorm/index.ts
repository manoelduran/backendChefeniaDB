import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (
   host = process.env.AWS_RDS_HOST //"database"//
): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: host,
      database: defaultOptions.database,
    })
  )
}