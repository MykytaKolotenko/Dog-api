import { NextFunction, RequestHandler, Request, Response } from 'express';
import assyncWrapper from '../helpers/asyncWrapper';
import ValidationFieldFactory from './ValidationFieldFactory';

interface IRequestHandler extends RequestHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const validatePostData: IRequestHandler = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  ValidationFieldFactory.create('all', req.body);
  next();
};

export const assyncValidatePostData = assyncWrapper(validatePostData);
