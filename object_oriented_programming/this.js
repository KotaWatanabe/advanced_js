// new binding this
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Xavier', 55)
// console.log(person1)


// implicit binding
const person2 = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi' + this.name)
    }
}

//explicit binding
const person3 = {
    name: 'Karen',
    age: 40,
    hi: function() {
        console.log('hi' + this.setTimeout)
    }.bind(window)
}

// console.log(person3.hi());


// arrow function 
const person4 = {
    name: 'Karen',
    age: 40,
    hi: function() {
        const inner = () => {
          console.log('hi' + this.name)
        }
       return inner() 
    }
}