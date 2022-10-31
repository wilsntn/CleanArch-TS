import { Bracelet } from './bracelet.entity';

export interface BraceletRepositoryInterface {
  insert(bracelet: Bracelet): Promise<void>;
  findAll(): Promise<Bracelet[]>;
}
