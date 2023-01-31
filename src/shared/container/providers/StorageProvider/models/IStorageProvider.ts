import { ISaveFileDTO } from '../dtos/ISaveFileDTO';

export default interface IStorageProvider {
  save(data: ISaveFileDTO): Promise<string>;
  delete(file: string): Promise<void>;
  get(file: string): Promise<any>;
}
