// function are first class citizens in JS
// it is one of the data type.

// 1 
const stuff = function(){}

// 2
function a(fn){
    fn()
}

a(function(){console.log('hi there')})

// 3

function b(){
    return function c(){console.log('bye')}
}
const d = b()
// console.log(b()())
// console.log(d())

// higher order function
const multiply = (num1) => (num2) => num1*num2

const multiplyTwo = multiply(2)
const multiplyTen = multiply(10)

console.log(multiplyTwo(5))
console.log(multiplyTen(10))
