const { NotImplementedError } = require('../extensions/index.js');


class Stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
  }

  pop() {
    const el = this.stack.pop();
    return el;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
  Stack
};
