// 1.call apply
// borrow method
const wizard = {
    name:'joe',
    health: 50,
    heal(num1, num2){
        return this.health += num1 + num2;
    }
}

const archer = {
    name:'Robin Hood',
    health:30
}

//how you use heal method for archer?
// you can not use 'this' keyword for archer

console.log('1', archer);

// I can use call method with args
// wizard.heal.call(archer, 50, 30)

// with apply I can use array for args
// wizard.heal.apply(archer,[50,30]);

//2. bind will return the new function
const healArcher = wizard.heal.bind(archer,50,30);
healArcher();

console.log('2',archer);

//3. function currying

function multiply(a,b){
    return a*b;
}

let multiplyByTwo = multiply.bind(this,2)
console.log(multiplyByTwo(4));

let multiplyByTen = multiply.bind(this,10)
console.log(multiplyByTen(4));
