const request = require('supertest');
const app = require('../server/app')

describe('Test the hellotest path', () => {
  test('it should respond to the GET method', () => {
    return request(app).get('/hellotest').then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.res.text).toBe('Valid GET request from Express server');
    })
  })
}) 

