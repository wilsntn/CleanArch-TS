import { Bracelet } from "../domain/bracelet.entity";
import { BraceletRepositoryInterface } from "../domain/bracelet.repository";

export class BraceletInMemoryRepository implements BraceletRepositoryInterface {
  items: Bracelet[] = [];
  async insert(bracelet: Bracelet): Promise<void> {
    this.items.push(bracelet);
  }
}
