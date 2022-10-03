const diffArray = function(arr1, arr2) {
  const newArr = [];
  let count1 = {};

  for (let elem of arr1) {
    if (!count1[elem]) {
      count1[elem] = 1;
    } else {
      count1[elem] += 1;
    }
    console.log(count1);
  }
  
  for (let elem of arr2) {
    if (!count1[elem]) {
      count1[elem] = 1;
    } else {
      count1[elem] += 1;
    }
    console.log(count1);
  }

  for (let key in count1) {
    console.log(typeof(key));
    if (count1[key] === 1) {
      newArr.push((key.toString()));
    }
  }
  return newArr;
};

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
