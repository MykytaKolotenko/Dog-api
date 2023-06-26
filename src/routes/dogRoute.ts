import express from 'express';
import animalCTRL from '../controllers/animalCTRL';
import assyncWrapper from '../helpers/asyncWrapper';
import { assyncValidatePostData } from '../validation/postDogValidation';
import { assyncValidatePatchData } from '../validation/patchDogValidation';

const dogRoute = express.Router();

// Public routes
dogRoute.get('/', assyncWrapper(animalCTRL.getAll));
dogRoute.get('/:id', assyncWrapper(animalCTRL.getById));
dogRoute.post('/', assyncValidatePostData, assyncWrapper(animalCTRL.post));
dogRoute.patch('/:id', assyncValidatePatchData, assyncWrapper(animalCTRL.patch));
dogRoute.delete('/:id', assyncWrapper(animalCTRL.del));

export default dogRoute;
