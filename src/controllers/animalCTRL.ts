import { Response, Request } from 'express';
import dogSRV from '../service/dogSRV';
import errorGenerator from '../helpers/errorGenerator';

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const data = await dogSRV.getAll();

  res.status(200).json(data);
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  if (!id) throw errorGenerator(400, 'Please insert correst id');

  const data = await dogSRV.getById(id);
  if (!data) throw errorGenerator(404, 'Something wrong with id');

  res.status(200).json(data);
};

const post = async (req: Request, res: Response): Promise<void> => {
  const data = req.body;
  if (!data) throw errorGenerator(400, 'Please insert data');

  const savedData = await dogSRV.create(data);

  res.status(201).json(savedData);
};

const patch = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  if (!id) throw errorGenerator(400, 'Please insert correst id');

  const data = req.body;
  if (!data) throw errorGenerator(400, 'Please insert data');

  const isUpdated = await dogSRV.update(data, id);
  if (!isUpdated[0]) throw errorGenerator(404, 'Not Found');

  const response = await dogSRV.getById(id);

  res.status(200).json(response);
};

const del = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  if (!id) throw errorGenerator(400, 'Please insert correst id');

  const response = await dogSRV.getById(id);

  const isDeleted = await dogSRV.deleteByID(id);
  if (!isDeleted) throw errorGenerator(404, 'Not Found');

  res.status(200).json(response);
};

export default {
  getAll,
  getById,
  post,
  patch,
  del
};
