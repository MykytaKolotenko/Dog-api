import { NextFunction, RequestHandler, Request, Response } from 'express';
import Joi from 'joi';
import errorGenerator from '../helpers/errorGenerator';
import assyncWrapper from '../helpers/asyncWrapper';

interface IRequestHandler extends RequestHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const postDogVal = Joi.object({
  name: Joi.string().uppercase(),
  color: Joi.string().lowercase(),
  tail_length: Joi.number().greater(0).integer(),
  weight: Joi.number().greater(0).integer()
});

const validateData: IRequestHandler = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { error } = postDogVal.validate(req.body);

  if (error) {
    throw errorGenerator(400, error.message);
  } else {
    next();
  }
};

export default assyncWrapper(validateData);
