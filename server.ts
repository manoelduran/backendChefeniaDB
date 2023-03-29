'use strict';
import { app } from './src/shared/infra/http/app';
import serverlessExpress from '@vendia/serverless-express';
import initializeTypeORM from './src/shared/infra/typeorm';



let serverlessExpressInstance

async function setup (event, context) {
  const connection = await initializeTypeORM()
  console.log(connection)
  serverlessExpressInstance = serverlessExpress({ app })
  return serverlessExpressInstance(event, context)
}

function handler (event, context) {
  if (serverlessExpressInstance) return serverlessExpressInstance(event, context)

  return setup(event, context)
}


module.exports.handler = handler;
