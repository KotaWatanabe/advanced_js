// ----------- Basic Closure ----------- //

function a(){
    let grandpa = 'grandpa';
    return function b(){
        let father = 'father';
        return function c(){
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

// console.log(a()()())

const boo = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`)

// boo('hi')('john')('eva')

// ---------- Memory efficient ------------ //

// this example, each time function is invoked, big array is created.
function heavyDuty(index){
    const bigArray = new Array(7000).fill('a');
    console.log('created');
    return bigArray[index];
}

console.log(heavyDuty(688));
console.log(heavyDuty(688));
console.log(heavyDuty(688));

// using closure, it create an array only one time 

function heavyDuty2(index){
    const bigArray = new Array(7000).fill('a');
    console.log('created!');
    return function(index){
        return bigArray[index];
    }
}

const getHeavyDuty = heavyDuty2();
console.log(getHeavyDuty(688));
console.log(getHeavyDuty(700));
console.log(getHeavyDuty(800));
