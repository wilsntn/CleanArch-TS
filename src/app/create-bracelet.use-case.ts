import { Bracelet } from '../domain/bracelet.entity';
import { BraceletRepositoryInterface } from '../domain/bracelet.repository';

export class CreateBraceletUseCase {
  constructor(private braceletRepository: BraceletRepositoryInterface) {}
  async execute(input: CreateBraceletInput): Promise<CreateBraceletOutput> {
    const bracelet = new Bracelet(input);
    await this.braceletRepository.insert(bracelet);
    return bracelet.toJSON();
  }
}

type CreateBraceletInput = {
  name: string;
  email?: string;
  code: string;
};

type CreateBraceletOutput = {
  id: string;
  name: string;
  email?: string;
  code: string;
};
