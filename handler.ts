'use strict';
import { app } from './src/shared/infra/http/app';
import serverlessExpress from '@vendia/serverless-express';


module.exports.lambda = serverlessExpress({ app });
