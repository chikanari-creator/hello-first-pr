const { test } = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('../src/greet');

test('greets a given name', () => {
  assert.equal(greet('World'), 'Hello, World!');
});

test('throws when name is missing', () => {
  assert.throws(() => greet(), /name is required/);
});
