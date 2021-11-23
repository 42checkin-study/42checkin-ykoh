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

app.get('/', (req, res) => {
  res.render('home');
});
