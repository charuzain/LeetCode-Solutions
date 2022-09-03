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
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // console.log(arr[j],arr[j + 1]);
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
      console.log(arr);
    }
  }
  return arr;
};
console.log(bubbleSort([103, 5,5, 80, 3, 8]));
