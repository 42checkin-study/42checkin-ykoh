import { Request, Response, NextFunction } from 'express';
import { CheckIn } from '../database/models/checkIn.model';
import * as checkInService from './check-in.service';

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.locals.clusters = await checkInService.getClusters();
  res.render('check-in', { title: 'check-in' });
};

export const createCheckIn = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  // STUB req.user mocking
  req.user = { name: 'y1koh3223111' };
  const { name: userName } = req.user;

  const { cardId } = req.body;

  try {
    await CheckIn.create({ userName, cardId });

    // TODO session에 정보 저장

    res.redirect('/');
  } catch (error: any) {
    const message: string = checkInService.getErrorMessage(error);
    res.redirect(`/checkin?error=${message}`);
  }
};
