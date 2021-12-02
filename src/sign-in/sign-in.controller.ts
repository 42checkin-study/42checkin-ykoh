import { Request, Response, NextFunction } from 'express';

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.render('sign-in', { title: 'sign-in' });
};
