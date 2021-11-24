import request from 'supertest';
import { app } from '../src/app';
import { sequelize } from '../src/database/sequelize';

describe('GET /', () => {
  beforeAll(async () => {
    await sequelize.sync();
  });

  it('should return 404', (done) => {
    request(app).get('/dd').expect(404, done);
  });

  it('should return 200', (done) => {
    request(app).get('/').expect(200, done);
  });
});
