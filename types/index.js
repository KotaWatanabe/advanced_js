//object is passed by reference 

let obj = {
    a:'a',
    b:'b'
}
let clone = {...obj}

obj.c = 5;
console.log(clone);
console.log(obj)

//deep clone 
let obj2 = {
    a:'a',
    b:'b',
    c:{
        deep:'try and copy me'
    }
}

//this clone only first layer
let clone2 = {...obj2}

let superClone = JSON.parse(JSON.stringify(obj));

obj2.c.deep = 'hahaha';
console.log(obj2);
console.log(clone2);
console.log(superClone);
