let dragon = {
    fire:true,
    fight(){
        return 5
    },
    sing(){
        if(this.fire){
            return `I am ${this.name}, the breater of fire`
        }
    }
}
let lizard = {
    name: 'kiki',
    fight(){
        return 1
    }
}

lizard.__proto__ = dragon;
console.log(lizard.sing());
console.log(lizard.fire);
console.log(lizard.fight());

console.log(dragon.isPrototypeOf(lizard)); //true

// __proto__ is not the best way to inheritence

let human = {
    mortal: true
}

let socrates = Object.create(human)
socrates.age = 45
console.log(human.isPrototypeOf(socrates)) // ture
