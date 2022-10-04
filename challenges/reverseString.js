//Write a function to reverse a string "Hi my name is Charu !!"

const reverseString = function(str) {
  return str.split("").reverse().join("");
};


console.log(reverseString("Hi my name is Charu !!"));


const reverse = function(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
  
};
console.log(reverse("Hi my name is Charu !!"));
