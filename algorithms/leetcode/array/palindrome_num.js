// var isPalindrome = function(x) {
//      return parseInt(x.toString().split('').reverse().join('')) === x 
// };

var isPalindrome = function(x) {
    if (x < 0) return false
    let rev = 0
    for(let i = x; i >= 1; i = Math.floor(i/10)) {
        rev = rev*10 + i%10
    } 
    return rev === x
  };

console.log(isPalindrome(121)) //true
console.log(isPalindrome(-121)) //false
console.log(isPalindrome(10)) // false
