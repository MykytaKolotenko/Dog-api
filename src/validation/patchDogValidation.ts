import { NextFunction, RequestHandler, Request, Response } from 'express';
import errorGenerator from '../helpers/errorGenerator';
import assyncWrapper from '../helpers/asyncWrapper';
import ValidationFactory from './ValidationFieldFactory';

interface IRequestHandler extends RequestHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const validatePatchData: IRequestHandler = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { weight, name, tail_length, color } = req.body;
  if (!weight && !name && !color && !tail_length)
    throw errorGenerator(404, 'To change data, you nedd to add some data!!!');

  if (weight) ValidationFactory.create(weight);
  if (name) ValidationFactory.create(name);
  if (tail_length) ValidationFactory.create(tail_length);
  if (color) ValidationFactory.create(color);

  next();
};

export const assyncValidatePatchData = assyncWrapper(validatePatchData);
