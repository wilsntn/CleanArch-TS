import { BraceletInMemoryRepository } from '../infra/db/bracelet-in-memory.repository';
import { CreateBraceletUseCase } from './create-bracelet.use-case';

describe('createBracelet', () => {
  it('Should create a new bracelet', async () => {
    const repository = new BraceletInMemoryRepository();
    const createUseCase = new CreateBraceletUseCase(repository);
    const output = await createUseCase.execute({
      name: 'Wilcson',
      code: '12312412',
    });
    expect(output).toStrictEqual({
      id: expect.any(String),
      name: 'Wilcson',
      code: '12312412',
      email: '',
    });
    expect(repository.items).toHaveLength(1);
  });
});
