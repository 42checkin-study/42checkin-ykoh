import { Sequelize } from 'sequelize-typescript';
import { Card } from './models/card.model';
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from '../config/secrets';
import { Cluster } from './models/cluster.model';
import { CheckIn } from './models/checkIn.model';

export const sequelize = new Sequelize({
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  timezone: '+09:00',
  models: [Cluster, Card, CheckIn],
});
