// Write a function which takes in a string and returns count of each character in the string.

const reverse = function(str) {
  // make object to return at the end

  const count = {};
  // loop over the string for each character

  for (let char of str) {
    // if the character is a number/alphabet and is  present in the object as an key add one to the count
    if (/[A-Za-z0-9]/.test(char)) {
      char = char.toLowerCase();
      if (count[char]) {
        count[char]++;
        //if the character is a number/alphabet and is not present in the object set the character as the key and make it equal to 1

      } else {
        count[char] = 1;
      }

      // count[char] = ++count[char]  || 1;
    
    }
  }


  // if character is something else like period  , spl character , space etc ignore it.
  // return object

  
  return count;
};
// console.log(reverse("abcabcab"));// {a:3, b:3 , c:2}
// console.log(reverse("Hi"));
console.log(reverse("Hi Hello hi, my id is 12345!!!!"));// Do we ignore casing ? should we count numbers too ?
// console.log(123);

// Edge Cases
// Empty Input
// Imvalid input
// Casing
// Special characters like ! @ etc
