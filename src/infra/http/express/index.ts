import express, { Express, Request, Response } from 'express';
import { ListAllBraceletsUseCase } from '../../../app/list-all-bracelets.use-case';
import { CreateBraceletUseCase } from '../../../app/create-bracelet.use-case';
import { BraceletInMemoryRepository } from '../../db/bracelet-in-memory.repository';

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const braceletRepo = new BraceletInMemoryRepository();

app.post('/bracelet', async (req: Request, res: Response) => {
  const createUseCase = new CreateBraceletUseCase(braceletRepo);
  await createUseCase.execute(req.body).then((output) => {
    res.status(201).json(output);
  });
});

app.get('/bracelet', async (req: Request, res: Response) => {
  const findAllBracelets = new ListAllBraceletsUseCase(braceletRepo);
  const output = await findAllBracelets.execute();
  res.status(200).json(output);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
