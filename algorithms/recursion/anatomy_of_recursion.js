let counter = 0;
function inception() {
    debugger;
    if(counter > 3) {
        return 'done!'
    }
    counter++;
    return inception();
}


// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Useually you have 2 returns
