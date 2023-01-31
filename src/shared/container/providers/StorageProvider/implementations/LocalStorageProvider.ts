import fs from 'fs';
import path from 'path';
import uploadConfig from '@config/upload';
import IStorageProvider from '../models/IStorageProvider';
import { ISaveFileDTO } from '../dtos/ISaveFileDTO';

class LocalStorageProvider implements IStorageProvider {

  public async save({file}: ISaveFileDTO): Promise<string> {
   /* 
    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file)
    )
   */
    return file;
  }
  public async delete(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file)
    try {
      await fs.promises.stat(filePath)
    } catch{
      return
    }
    await fs.promises.unlink(filePath);
  }
 public async get(file: string): Promise<any> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file)
    const readFile = await fs.promises.readFile(filePath)
    return readFile;
  }
}

export default LocalStorageProvider;
