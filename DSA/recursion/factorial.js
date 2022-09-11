// Find factorial of a number

/*  Using recursion
========================================
        const factorial = function(num) {
          if (num === 1) return 1;
          return num * factorial(num - 1);
        };
console.log(factorial(5));
=========================================== */

// using loop

const factorial = function(num) {
  let product = 1;
  for (let i = num; i >= 1; i--) {
    product *= i;
  }
  return product;
};
console.log(factorial(5));
