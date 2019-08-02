const reverse = require('./reverse-index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse function exists', () => {
  expect(typeof reverse.reverseWithFor).toEqual('function')
});

test('Reverse reverses a string', () => {
  expect(reverse.reverseWithBuildInMethods('helk')).toEqual('kleh');
});

test('Reverse reverses a string', () => {
  expect(reverse.reverseWithFor('  abcd')).toEqual('dcba  ');
});
