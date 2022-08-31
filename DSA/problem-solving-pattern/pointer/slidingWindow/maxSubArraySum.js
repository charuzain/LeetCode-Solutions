// Write a function called maxSubArraySum which accepts an array of integers and a number called n  The function should calculate the maximum sum of n consective elements in the array


const maxSubArraySum = function(arr, n) {
  if (arr.length < n) {
    return false;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum = sum + arr[j + i ];
    }
    if (sum > max) {
      max = sum;
    }
  }

  return max;
};

console.log(maxSubArraySum([8,8,8,8,],4));