// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

var fib = function(N) {
  let historyMap = {};
  if(N < 2) {
      return N;
  } 
  if(N in historyMap) {
      return N;
  } else {
      return historyMap[N] = fib(N-1) + fib(N-2);
  }
};

console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(30))
