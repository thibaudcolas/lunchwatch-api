import { expect } from 'chai';
import request from 'supertest';
import app from '../src/index';

describe('Base API Test', () => {
  it('should return API version and title for the app', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.app).to.be.equal(app.locals.title);
        expect(res.body.version).to.be.equal(app.locals.version);

        done();
      });
  });

  it('should return 405 method not allowed for random API hits', (done) => {
    const randomString = Math.random()
      .toString(36)
      .substr(2, 5);

    request(app)
      .get(`/v1/${randomString}`)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(405);
        expect(res.body.error.code).to.be.equal(405);
        expect(res.body.error.message).to.be.equal('Method Not Allowed');

        done();
      });
  });
});
