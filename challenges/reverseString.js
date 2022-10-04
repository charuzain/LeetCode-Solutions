//Write a function to reverse a string "Hi my name is Charu !!"

const reverseString = function(str) {
  return str.split("").reverse().join("");
};


console.log(reverseString("Hi my name is Charu !!"));


const reverse = function(str) {
  // if length of string is 1
  // if string is empty or some other argument is passed display some message
  if (str.length < 2 || !str || typeof (str) !== "string") {
    console.log("Pass a valid string");
  }

  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
  
};
console.log(reverse("Hi my name is Charu !!"));
