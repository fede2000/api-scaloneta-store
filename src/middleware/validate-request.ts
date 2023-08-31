import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error.ts';

export const validateRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('RUN');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new RequestValidationError(errors.array()));
  }
  next();
};