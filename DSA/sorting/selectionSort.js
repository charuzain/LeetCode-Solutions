
const selectionSort = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minValue = arr[i];
    let index;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minValue = arr[j];
        index = j;
      }
    }
    if (index) {
      arr[index] = arr[i];
      arr[i] = minValue;
    }
  }
  return arr;
};

console.log(selectionSort([2, -20, 10, 40,129, 100])); //