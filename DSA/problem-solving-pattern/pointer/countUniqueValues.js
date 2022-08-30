// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

//=========================================================================================
//     Using frequency counter method
//=========================================================================================

// const countUniqueValues = function(arr) {
//   let count = {};

//   for (let char of arr) {
//     count[char] = count[char] + 1 || 1;
//   }

//   let uniqueValue = 0;
//   for (let key in count) {
//     // console.log(key);
//     uniqueValue++;
//   }
//   return uniqueValue;
  
// };
// =======================================================================================
//     Using Multiple counter method
// ========================================================================================

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6]));


const countUniqueValues = function(arr) {

  if (arr.length === 0) return 0;

  let i = 0;
  let j = i + 1;

  // if element at index i is equal to array at index  j
  // move the counter j to next position

  // if element at index i is not equal to element at index j
  //  increment the counter i by 1
  //  make the value at  arr[i + 1] = arr[j]
  //  move the counter j to next postion

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
  
};

console.log(countUniqueValues([1, 1, 1, 2, 2, 2, 3]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
  


