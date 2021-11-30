import request from 'supertest';
import { app } from '../src/app';
import { sequelize } from '../src/database/sequelize';

beforeAll(async () => {
  await sequelize.sync();
});

describe('GET /checkin', () => {
  it('should return 404', (done) => {
    request(app).get('/').expect(404, done);
  });

  it('should return 200', (done) => {
    request(app).get('/checkin').expect(200, done);
  });
});

afterAll(async () => {
  await sequelize.close();
});
