// Write a function called sumZero which accepts a sorted array of integers.The function should find the first pair where the sum is zero.Return an array that includes both value that sums to zeroon undefined if pair doesnot exist


const sumZero = function(arr) {
  
  // for (let i = 0; i < arr.length; i++) {

  //   let index = arr.indexOf(0 - arr[i] , i + 1);
  //   if (index !== -1) {
  //     return [arr[i], arr[index]];
  //   }
  // }
  // return undefined;

  let j = arr.length - 1;


  for (let i = 0; i < j; i) {
    let sum = arr[i] + arr[j];
    if (sum === 0) return [arr[i] , arr[j]];
    else if (sum > 0) {
      j--;
    } else {
      i++;
    }
   
  }


  // while (j > i) {
  //   let sum = arr[i] + arr[j];
  //   console.log(sum);
  //   if (sum === 0) {
  //     return [arr[i], arr[j]];
  //   }
  //   if (sum > 0) {
  //     j--;
  //   } else {
  //     i++;
  //   }
  // }
};



console.log(sumZero([-3, -2, 0, 1, 2,4,5]));
// console.log(sumZero([0,1,2,3]));