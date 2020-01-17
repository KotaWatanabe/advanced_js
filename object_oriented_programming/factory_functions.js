function createElf(name, weapon){
    return {
        name,
        weapon,
        attack(){
            return 'attack with ' + weapon
        }
    }
}

const peter = createElf('Peter', 'stones')
// console.log(peter.attack());
const sam = createElf('Sam', 'fire')
// console.log(sam.attack());

// if you have 100 elfs, 100 time attack will take memory...

// I can use Object.create()

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

function  createElf2(name, weapon) {
    let newElf = Object.create(elfFunctions) // <--- newElf.__proto__ = attack()
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter2 = createElf2('Peter', 'stones')
console.log(peter2.attack());
const sam2 = createElf2('Sam', 'fire')
console.log(sam2.attack());
