import IStorageProvider from '../models/IStorageProvider';
import { ISaveFileDTO } from '../dtos/ISaveFileDTO';

class FakeStorageProvider implements IStorageProvider {

  private storage: string[] = [];

  public async save({ file }: ISaveFileDTO): Promise<string> {
    this.storage.push(file);

    return file;
  }
  public async delete(file: string): Promise<void> {
    const findIndex = this.storage.findIndex(storageFile => storageFile === file);

    this.storage.splice(findIndex, 1);
  }
  public async get(file: string): Promise<any> {
    return this.storage.find(storageFile => storageFile === file);
  }
}

export default FakeStorageProvider;
