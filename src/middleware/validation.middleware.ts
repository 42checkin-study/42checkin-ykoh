import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, Response, RequestHandler } from 'express';
import { logger } from '../config/logger';

export function validation(type: any): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    validate(plainToInstance(type, req.body)).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          logger.error(
            `Request validation failed in validation middleware!\n ${errors}`,
          );

          const message: string = errors
            .map((error: ValidationError) =>
              Object.values(error.constraints as any),
            )
            .join(',');

          res.redirect(`${req.route.path}?error=${message}`);
        } else {
          next();
        }
      },
    );
  };
}
