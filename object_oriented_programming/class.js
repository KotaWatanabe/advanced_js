class Elf {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    // using class, I can include method inside

    // wes separate this method from constructor to keep only one memory space.
    attack() {
        return 'attack with ' + this.weapon
    }
}

const peter = new Elf('Peter', 'stones')
console.log(peter instanceof Elf)  // true
console.log(peter.attack());
