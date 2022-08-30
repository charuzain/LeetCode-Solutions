// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.
// Time Complexity - O(n)

/*=========================================================================================
 Frequency counter approach
//  =========================================================================================*/


// const validAnagram = function(str1, str2) {
  
//   if (str1.length !== str2.length) return false;
//   const str1Counter = {};
//   const str2Counter = {};

//   for (let char of str1) {
//     str1Counter[char] = str1Counter[char] + 1 || 1;
//   }

//   for (let char of str2) {
//     str2Counter[char] = str2Counter[char] + 1 || 1;
//   }

//   for (let key in str1Counter) {
//     if (!(key in str2Counter) || str1Counter[key] !== str2Counter[key]) {
//       return false;
//     }
//   }
//   return true;
// };
// Time Complexity - O(n)
/*=========================================================================================
2nd Approach
=========================================================================================*/
const validAnagram = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const count = {};
  for (let char of str1) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  // console.log(count);

  for (let char of str2) {
    if (count[char]) {
      count[char] = count[char] - 1;
    } else {
      return false;
    }
  }
  return true;

};



/*=========================================================================================
 Using built in Methods
=========================================================================================*/


// const validAnagram = function(str1 , str2) {
//   // add whatever parameters you deem necessary - good luck!
//   const string1 = str1.toLowerCase().split("").sort().join("").trim();
//   const string2 = str2.toLowerCase().split("").sort().join("").trim();
//   return string1 === string2 ? true : false;
// };

/*=========================================================================================
Test Cases
=========================================================================================*/

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram'));// true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram('awesome', 'awesom'));// false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));// false
console.log(validAnagram('qwerty', 'qeywrt'));// true
console.log(validAnagram('texttwisttime', 'timetwisttext'));// true

