import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import { winstonStream } from './config/logger';

export const app = express();

app.use(morgan('combined', { stream: winstonStream }));

app.engine('handlebars', engine() as any);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (_req, res) => {
  const clusters = [
    { name: '개포', capacity: 100, max: 150 },
    { name: '서초', capacity: 1, max: 200 },
    { name: '성수', capacity: 10, max: 20 },
  ];
  res.render('home', { title: 'home', clusters });
});
