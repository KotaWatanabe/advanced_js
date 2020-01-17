// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    // nothing return
    // thanks to "new", "this" does not point global but calling object
}

// To add functionallity, I can use prototype
Elf.prototype.attack = function(){
    return 'attack with ' + this.weapon
}

Elf.prototype.build = function() {
    const self = this;
    function building() {
        return self.name + ' builds a house ';
    }
    return building()
}

//COntructor function start with capital letter.
// To let other programmer know use new

//new will automatically return Elf object
const peter = new Elf('Peter', 'stones')
// "this" is pointing Peter now(because of using new)

const sam = new Elf('Sam', 'fire')
console.log(sam.attack());
