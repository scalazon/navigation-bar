const request = require('supertest');
const app = require('../server/app')

describe('Test the test path', () => {

  test('it should respond to the GET method', () => {
    return request(app).get('/test').then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.res.text).toBe('Successfully connected!');
    })
  })
}) 

describe('Test database connectivity', () => {

  test('it should return data from the database', () => {
    return request(app).get('/products/navBarData').then((response) => {
      expect(response.statusCode).toBe(200);
      console.log(JSON.parse())
    })
  })
}) 
