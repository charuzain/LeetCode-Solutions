// Search for a substring in a larger string


const stringSearch = function(str, str1) {
  let count = 0;
  let match = false;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str1[0]) {
      for (let j = 1; j < str1.length; j++) {
        if (str[i + j] !== str1[j]) {
          match = false;
          break;
        }
        match = true;
      }
      if (match) {
        count++;
        match = false;
      }
    }
  }
  return count;
  
};

console.log(stringSearch("karold said haha in humburg" , "hahakj"));