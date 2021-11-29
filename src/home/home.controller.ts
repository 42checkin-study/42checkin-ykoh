import { Request, Response, NextFunction } from 'express';
import { Cluster } from '../database/models/cluster.model';

export const index = async (
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const clusters: Cluster[] = await Cluster.findAll({ raw: true });
  clusters.map((cluster: any) => (cluster.capacity = 10)); // STUB capacity용 임시코드 + any type interface 확장
  res.render('home', { title: 'home', clusters });
};
