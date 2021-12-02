import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import { winstonStream } from './config/logger';
import { capacityBadgeBgColor } from './config/helpers';
import * as checkInController from './check-in/check-in.controller';
import { validation } from './middleware/validation.middleware';
import { CreateCheckInDto } from './check-in/create-check-in.dto';

export const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get('/checkin', checkInController.index);
app.post(
  '/checkin',
  validation(CreateCheckInDto),
  checkInController.createCheckIn,
);
