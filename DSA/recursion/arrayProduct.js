/* Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60 */

/* Using loop
 =============================
const productOfArray = function(array) {
  let product = 1;
  for (let elem of array) {
    product *= elem;
  }
  return product;
};
 ============================= */

const productOfArray = function(array) {
  if (array.length === 1) return array[0];
  let product = array[0] * productOfArray(array.slice(1));
  return product;
};
console.log(productOfArray([1,2,3,10]));