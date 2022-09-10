// Function to merge two sorted arrays

const mergeSort = function(arr1, arr2) {
  const sortedArray = [];
  const sortedArrayLength = arr1.length + arr2.length;
  let n = 0;
  let m = 0;
  let k = 0;
  while (sortedArray.length !== sortedArrayLength) {
    if (n === arr1.length) {
      sortedArray[k] = arr2[m];
      k += 1;
      m += 1;
    } else if (m === arr2.length) {
      sortedArray[k] = arr1[n];
      k += 1;
      n += 1;
    } else if (arr1[n] > arr2[m]) {
      sortedArray[k] = arr2[m];
      k += 1;
      m += 1;
    } else {
      sortedArray[k] = arr1[n];
      k += 1;
      n += 1;
    }
  }
  return sortedArray;
};

console.log(mergeSort([3], [12,22, 29, 96]));
