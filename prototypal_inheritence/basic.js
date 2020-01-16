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
