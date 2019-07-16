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

describe('Test the categories path', () => {

 
  test('it should return a valid 200 code', (done) => {
    expect.assertions(1);
    return request(app).get('/products/categories')
      .then(response=> expect(response.text).toEqual("[\"Smart Home\",\"Homes\",\"Clothing, Shoes & Jewelry\",\"Womens clothing\",\"Paternal Saddles\"]"))
  })
})
