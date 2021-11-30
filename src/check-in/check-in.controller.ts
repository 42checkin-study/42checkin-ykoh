import { Request, Response, NextFunction } from 'express';
import { CheckIn } from '../database/models/checkIn.model';
import { Cluster } from '../database/models/cluster.model';

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const clusters: Cluster[] = await Cluster.findAll({ raw: true });
  clusters.map((cluster: any) => (cluster.capacity = 10)); // STUB capacity용 임시코드 + any type interface 확장
  res.render('check-in', { title: 'check-in', clusters });
};

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
  res.redirect('/checkin');
};
