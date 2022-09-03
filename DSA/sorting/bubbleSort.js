// const bubbleSort = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         let smallerValue = arr[j];
//         arr[j] = arr[i];
//         arr[i] = smallerValue;
//         console.log(arr);
//       }
//     }
//   }
  
//   return arr;
// };

const bubbleSort = function(arr) {
  let noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length  - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        noSwap = false;
      }
      console.log(arr);
    
    }
    if (noSwap) {
      break;
    }
  }
  return arr;
};
console.log(bubbleSort([2,6,78,148,394]));
