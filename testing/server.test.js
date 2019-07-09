//const server = require('../server/server');
const sum = require('./sum');

test('adds 1+2 and returns 3', () => {
  expect(sum(1,2)).toBe(3);
});