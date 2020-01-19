const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy5 = curriedMultiply(5);

console.log(curriedMultiplyBy5(4))//20
