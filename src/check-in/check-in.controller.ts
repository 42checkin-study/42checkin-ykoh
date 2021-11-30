import { Response, NextFunction } from 'express';
import { CheckIn } from '../database/models/checkIn.model';

export const createCheckIn = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  // FIXME input validation + transfrom
  // 1. transform to number
  // 2. isNumber
  // 3. is already exist
  // 4. if fail, redirect to /?error=message

  // STUB req.user mocking
  req.user = { name: 'ykoh23' };

  const { name: userName } = req.user;
  const { cardId } = req.body;

  // NOTE 카드 id 등록
  await CheckIn.create({ userName, cardId: +cardId });
  res.redirect('/');
};
