import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import logger from 'morgan';
import { CustomError } from './helpers/errorGenerator';
import animalRoute from './routes/dogRoute';
import pingRoute from './routes/pingRoute';

const app: Express = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/ping', pingRoute);
app.use('/dog', animalRoute);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  const { message = 'Server error', status = 500 } = err;

  return res.status(status).json({ message });
});

export default app;
