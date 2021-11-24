import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import { winstonStream } from './config/logger';
import { capacityBadgeBgColor } from './config/helpers';
import { Cluster } from './clusters/cluster.model';

export const app = express();

app.use(morgan('combined', { stream: winstonStream }));

// NOTE template engine setting
app.engine(
  'handlebars',
  engine({
    helpers: { capacityBadgeBgColor },
  }) as any,
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views'));

app.get('/', async (_req, res, _next) => {
  const clusters: Cluster[] = await Cluster.findAll({ raw: true });
  clusters.map((cluster: any) => (cluster.capacity = 10)); // STUB capacity용 임시코드 + any type interface 확장
  res.render('home', { title: 'home', clusters });
});
