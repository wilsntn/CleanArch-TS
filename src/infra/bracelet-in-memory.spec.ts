import { Bracelet, BraceletProps } from '../domain/bracelet.entity';
import { BraceletInMemoryRepository } from './bracelet-in-memory.repository';

describe('BraceletInMemoryRepository Test', () => {
  it('Should insert a new route', async () => {
    const repository = new BraceletInMemoryRepository();
    const braceletProps: BraceletProps = {
      name: 'Wilcson',
      code: '12312412',
    };

    const bracelet = new Bracelet(braceletProps);
    await repository.insert(bracelet);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([bracelet]);
  });
});
