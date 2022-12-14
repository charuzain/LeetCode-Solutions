// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

const fib = function(t) {
  if (t <= 0) {
    return 0;
  }
  if (t === 1 || t === 2) {
    return 1;
  }
  return fib(t - 1) + fib(t - 2);
};
console.log(fib(1));