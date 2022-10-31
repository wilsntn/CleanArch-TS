import { Bracelet } from '../domain/bracelet.entity';
import { BraceletRepositoryInterface } from '../domain/bracelet.repository';

export class ListAllBraceletsUseCase {
  constructor(private braceletRepository: BraceletRepositoryInterface) {}
  async execute(): Promise<CreateBraceletOutput> {
    const bracelets = await this.braceletRepository.findAll();

    return bracelets.map((bracelet) => bracelet.toJSON());
  }
}

type CreateBraceletOutput = {
  id: string;
  name: string;
  email?: string;
  code: string;
}[];
