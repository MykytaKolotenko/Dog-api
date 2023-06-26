import Joi from 'joi';

export const dogNameValidator = Joi.object({
  name: Joi.string().uppercase()
});

export const dogColorValidator = Joi.object({
  color: Joi.string().lowercase()
});

export const dogWeightValidator = Joi.object({
  tail_length: Joi.number().greater(0).integer()
});

export const dogTailLengthValidator = Joi.object({
  weight: Joi.number().greater(0).integer()
});

export const allFieldstDogValidator = dogNameValidator
  .concat(dogColorValidator)
  .concat(dogWeightValidator)
  .concat(dogTailLengthValidator);
