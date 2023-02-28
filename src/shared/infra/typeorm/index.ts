import { Connection, createConnection, getConnectionOptions } from 'typeorm';

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




// RDS CONNECTION //

/* 

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
} */