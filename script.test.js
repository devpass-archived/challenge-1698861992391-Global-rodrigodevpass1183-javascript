const script = require('./script');

test('Access global variable', () => {
  expect(script.myGlobalVariable).toBeUndefined();
});

test('Call a function that uses a global variable', () => {
  expect(script.myFunction()).toBe('Hello, Evercode!');
});