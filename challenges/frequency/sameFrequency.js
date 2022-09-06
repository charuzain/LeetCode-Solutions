// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = function(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let char of str1) {
    obj1[char] ? obj1[char] += 1 : obj1[char] = 1;
  }
  for (let char of str2) {
    obj2[char] ? obj2[char] += 1 : obj2[char] = 1;
  }

  for (let key in obj1) {
    if (!obj2[key] || (obj1[key] !== obj2[key])) {
      return false;
    }
  }
  return true;
};

console.log(sameFrequency(22,222));