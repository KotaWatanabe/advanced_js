const memoizationAddTo80 = () => {
    let cache = {}; //To avoid resting cache, I use closure
    return function(n) {
        if(n in cache) {
            return cache[n];
        } else {
            console.log('looooong time')
            cache[n] = n + 80;
            return cache[n];
        }
    }

}

const memoized = memoizationAddTo80()
console.log(memoized(5));
console.log(memoized(5));

