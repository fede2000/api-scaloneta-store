import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error.ts';

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super('Validation Errors');

    //Esto es porque estamos extends de una clase nativa
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => { 
      return { message: err.msg }; // array de errores
    });
  }
}