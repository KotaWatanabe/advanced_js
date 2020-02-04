class Stack {
    constructor(){
        this.array = [];
    }
    peek() {
        const length = this.array.length;
        return this.array[length-1];
    }
    push(value){
        this.array.push(value);
        return this.array;
    }
    pop(){
        if(!this.array) {
            return null;
        }
        this.array.pop();
        return this.array;
    }

}

const myStack = new Stack();
console.log(myStack.push('google'));
console.log(myStack.peek());
console.log(myStack.push('Udemy'));
console.log(myStack.push('Discord'));
console.log(myStack.peek());
console.log(myStack.pop());

