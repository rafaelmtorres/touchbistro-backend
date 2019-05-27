const request = require('supertest');

const app = require('../app')

describe('POST /touchbistro/v1/prime/median', function () {
    it('Respond with the median found for the primes generated', function (done) {
        request(app)
            .post('/touchbistro/v1/prime/median')
            .send({
                "number" : 17
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('Should return bad request without request data', function (done) {
        request(app)
            .post('/touchbistro/v1/prime/median')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400, done);
    });

    it('Should return bad request if pass string', function (done) {
        request(app)
            .post('/touchbistro/v1/prime/median')
            .send({
                "number" : "test"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400, done);
    });

    it('Should return 404 if send get request', function (done) {
        request(app)
            .get('/touchbistro/v1/prime/median')
            .set('Accept', 'application/json')
            .expect('Content-Type', /text/)
            .expect(404, done);
    });

    it('Should return 404 if call wrong url', function (done) {
        request(app)
            .post('/touchbistro/v1/prime/')
            .send({
                "number" : "test"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /text/)
            .expect(404, done);
    });
});