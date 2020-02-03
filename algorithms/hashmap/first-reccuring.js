function firstReccurting(arr) {
    let history = new Set;
    let i = 0
    while(true) {
        if(history.has(arr[i])) {
            return arr[i];
            break;
        }
        history.add(arr[i]);
        i++
    }
}

console.log(firstReccurting([2,5,1,2,3,5,1,2,4]));//2
console.log(firstReccurting([2,1,1,2,3,5,1,2,4]));//1
console.log(firstReccurting([2,3,4,5]))//undefined
