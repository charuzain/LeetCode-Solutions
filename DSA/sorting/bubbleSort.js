const bubbleSort = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let smallerValue = arr[j];
        arr[j] = arr[i];
        arr[i] = smallerValue;
        console.log(arr);
      }
    }
  }
  
  return arr;
};

console.log(bubbleSort([103, 5, 80, 3, 3, 340 , 8]));
//[]