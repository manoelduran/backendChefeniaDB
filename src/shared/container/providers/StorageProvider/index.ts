import { container } from 'tsyringe';
import uploadConfig from '@config/upload';

import IStorageProvider from './models/IStorageProvider';

import LocalStorageProvider from './implementations/LocalStorageProvider';
import S3StorageProvider from './implementations/S3StorageProvider';

const providers = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>('StorageProvider', providers[uploadConfig.driver]);
