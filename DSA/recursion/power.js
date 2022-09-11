// 3 * 4 ==> 3  * 3 * 3 * 3 ;
const result = function(base, power) {
  if (power === 0) {
    return 1;
  }
  let output = base * result(base, power - 1);
  return output;
};
console.log(result(2,4));