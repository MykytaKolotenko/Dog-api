import { ObjectSchema, ValidationError, ValidationResult } from 'joi';
import errorGenerator from '../helpers/errorGenerator';
import {
  dogNameValidator,
  dogColorValidator,
  dogWeightValidator,
  dogTailLengthValidator,
  allFieldstDogValidator
} from './validationFields';

class ValidationChecker {
  public readonly error: ValidationResult<any>;

  constructor(JoiObject: ObjectSchema, data: string) {
    this.error = JoiObject.validate(data);

    if (this.error instanceof ValidationError)
      throw errorGenerator(404, this.error.message);
  }
}

class ValidationFactory {
  create(name: string, data?: any | null) {
    switch (name) {
      case 'weight':
        return new ValidationChecker(dogWeightValidator, name);

      case 'name':
        return new ValidationChecker(dogNameValidator, name);

      case 'color':
        return new ValidationChecker(dogColorValidator, name);

      case 'tail_length':
        return new ValidationChecker(dogTailLengthValidator, name);

      case 'all':
        return new ValidationChecker(allFieldstDogValidator, data);

      default:
        break;
    }
  }
}

export default new ValidationFactory();
