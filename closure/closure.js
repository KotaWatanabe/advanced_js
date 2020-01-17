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

// console.log(heavyDuty(688));
// console.log(heavyDuty(688));
// console.log(heavyDuty(688));

// using closure, it create an array only one time 

function heavyDuty2(index){
    const bigArray = new Array(7000).fill('a');
    console.log('created!');
    return function(index){
        return bigArray[index];
    }
}

const getHeavyDuty = heavyDuty2();
// console.log(getHeavyDuty(688));
// console.log(getHeavyDuty(700));
// console.log(getHeavyDuty(800));

// --------- Encapsulation ------------ //

// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalPeaceTime = () => timeWithoutDestruction;
//     const launch = () => {
//         timeWithoutDestruction = -1
//         return '!!!';
//     }
//     setInterval(passTime,1000);
//     return {
    // ++++++++ intentionally do not return launch so that no one can use launch
//         totalPeaceTime:totalPeaceTime
//     }
// }

// const ohno = makeNuclearButton();
// console.log(ohno.totalPeaceTime);

let view;
function initialize() {
    let called = 0;
    return function(){
        if(called > 0){
            return;
        }else {
            view = '!!!'
            called ++
            console.log('view was set')
        }
    }
}

// initialize();
// initialize();
// initialize();

const onlyOneInitialize = initialize();
// onlyOneInitialize();
// onlyOneInitialize();

const array = [1,2,3,4];

for(var i = 0; i < array.length; i++){
    (function(closureI){
        setTimeout(function(){
            console.log('I am at index ' + array[closureI])
        },3000)
    })(i)
}
