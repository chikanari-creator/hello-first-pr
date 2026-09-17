function greet(name) {
  if (!name) {
    throw new Error('name is required');
  }
  return `Hello, ${name}!`;
}

module.exports = { greet };
