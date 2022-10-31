import { BraceletInMemoryRepository } from 'src/infra/db/bracelet-in-memory.repository';
import { ListAllBraceletsUseCase } from './list-all-bracelets.use-case';

describe('listAllBracelets', () => {
  it('Should list all bracelets', async () => {
    const repository = new BraceletInMemoryRepository();
    const listUseCase = new ListAllBraceletsUseCase(repository);
    const output = await listUseCase.execute();
    expect(output).toStrictEqual([]);
    expect(repository.items).toHaveLength(0);
  });
});
