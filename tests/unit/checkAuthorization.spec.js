const request = require('supertest');
const app = require('../../src/app')


describe('Check authorization', () => {
  it('should return the content', () => {
    const response = request(app)
      .get('/api/customer')
      .set('Authorization', 'Basic ZXNwZXJvcGFzc2FybmVzdGV0ZXN0ZTptZWNvbnRyYXRlbQ==');

    console.log(response.body)

  });
});
