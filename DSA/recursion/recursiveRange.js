// Write a function called recursiveRange which accepts a number and adds up all the numbers from  0 to the number passed to the function

/* using loop
==========================================
const recursiveRange = function(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
  
};
==========================================
*/

/* ==========================================
Recursion
=============================================*/

const recursiveRange = function(num) {
  if (num === 1) return 1;
  let sum = num + recursiveRange(num - 1);
  return sum;
};
console.log(recursiveRange(6));
console.log(recursiveRange(10));