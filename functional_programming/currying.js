//Currying
const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy5 = curriedMultiply(5);

console.log(curriedMultiplyBy5(4))//20

//Partial Application
const multiply = (a,b,c) => a*b*c;
const partialMultiplyBy5 = multiply.bind(null,5)
console.log(partialMultiplyBy5(4,10));
