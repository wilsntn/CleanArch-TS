import { Bracelet, BraceletProps } from '../domain/bracelet.entity';
import { BraceletInMemoryRepository } from '../infra/bracelet-in-memory.repository';
import { CreateBraceletUseCase } from './create-bracelet.use-case';

describe('createBracelet', () => {
  it('Should create a new bracelet', async () => {
    const createUseCase = new CreateBraceletUseCase(
      new BraceletInMemoryRepository(),
    );
    const output = await createUseCase.execute({
      name: 'Wilcson',
      code: '12312412',
    });
    expect(output).toStrictEqual({
      name: 'Wilcson',
      code: '12312412',
      email: '',
    });
  });
});
