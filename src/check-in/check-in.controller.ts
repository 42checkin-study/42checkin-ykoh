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
  // STUB req.user mocking
  req.user = { name: 'y1koh3223111' };
  const { name: userName } = req.user;

  const { cardId } = req.body;

  try {
    await CheckIn.create({ userName, cardId });
    res.redirect('/checkin');
  } catch (error: any) {
    let message: string = 'Error occurred.';

    if (error.parent?.code === '23503') {
      message = `Card(${cardId}) is not exist.`;
    } else {
      const parameters: string[] = error.parent?.parameters;

      if (parameters?.length > 2) {
        message = `User(${parameters[0]}) is already checked-in with a card(${parameters[1]}) at '${parameters[2]}'.`;
      }
    }
    res.redirect(`/checkin?error=${message}`);
  }
};
