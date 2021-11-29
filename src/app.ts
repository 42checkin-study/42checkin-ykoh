import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import { winstonStream } from './config/logger';
import { capacityBadgeBgColor } from './config/helpers';
import { index } from './home/home.controller';

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

app.get('/', index);
