const insertionSort = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp;
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
      console.log(arr);
    }
    
    console.log("=====");

  }
  return arr;
};

console.log(insertionSort([1,2,3,4]));


