const sumAll = function(arr) {
  let sum = 0;
  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      console.log(arr[1]);
      console.log(i);
      // console.log(arr[i]);
      sum = sum + arr[i];
    }
  }   else {
    for (let i = arr[1]; i <= arr[0]; i++) {
      sum = sum + arr[i];
    }
  }
  return sum;
};

console.log(sumAll([1, 4]));