import request from 'supertest';
import { app } from '../src/app';
import { sequelize } from '../src/database/sequelize';

beforeAll(async () => {
  await sequelize.sync();
});

describe('GET /', () => {
  it('should return 302', (done) => {
    request(app).get('/').expect(302, done);
  });
});

describe('GET /signin', () => {
  it('should return 200', (done) => {
    request(app).get('/signin').expect(200, done);
  });
});

describe('GET /checkin', () => {
  it('should return 200', (done) => {
    request(app).get('/checkin').expect(200, done);
  });
});

afterAll(async () => {
  await sequelize.close();
});
