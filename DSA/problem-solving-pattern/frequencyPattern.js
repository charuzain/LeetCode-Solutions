// write a function which accepts two arrays. It should return true if every value in the array has its corresponding value squared in the second array. The frequency of the value must be same .

// [1,2,3,4] , [1,4,9,16]   True
// [1, 2, 3], [1,4]  false
// [2,4,6,8,8,4] , [4,16,16,36,64,64] true


// const same = function(array1, array2) {
//   // check if array length is same , if not return false
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   // loop over array , multiply each element by 2 and check if result is present in another array
//   for (let elem of array1) {
//     if (!array2.includes(elem ** 2)) {
//       return false;
//     }
//   }
//   return true;

// };

const same = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  let arrayCounter1 = {};
  let arrayCounter2 = {};

  for (let i = 0; i < array1.length; i++) {
    arrayCounter1[array1[i]] = arrayCounter1[array1[i]] + 1 || 1;
    arrayCounter2[array2[i]] = arrayCounter2[array2[i]] + 1 || 1;
  }

  for (let key in arrayCounter1) {

    if (!(key ** 2 in arrayCounter2)) {
      console.log(`${key} not present`);
      return false;
    }

    if (arrayCounter1[key] !== arrayCounter2[key ** 2]) {
      console.log(`${key} not enough counts`)
      return false;
    }
  }
  return true;

};
console.log(same([1, 2, 2, 6,6], [1, 4, 4, 25,36]));
// console.log(same([1, 2, 3], [1, 4]));
// console.log(same([2,8,8,2,2] , [64,4,4,64,4]));

