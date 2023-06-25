import express from 'express';
import animalCTRL from '../controllers/animalCTRL';
import assyncWrapper from '../helpers/asyncWrapper';
import postDogVal from '../validation/postDogValidation';

const dogRoute = express.Router();

// Public routes
dogRoute.get('/', assyncWrapper(animalCTRL.getAll));
dogRoute.get('/:id', assyncWrapper(animalCTRL.getById));
dogRoute.post('/', postDogVal, assyncWrapper(animalCTRL.post));
dogRoute.patch('/:id', assyncWrapper(animalCTRL.patch));
dogRoute.delete('/:id', assyncWrapper(animalCTRL.del));

export default dogRoute;
