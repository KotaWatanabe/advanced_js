// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Input: arr = [1,2]
// Output: false

var uniqueOccurrences = function(arr) {
    let dictionary = {};
    for(let i = 0; i < arr.length; i++) {
        if(dictionary[arr[i]]) {
            dictionary[arr[i]]++;
        }else {
            dictionary[arr[i]] = 1;
        }
    }
    let uniqueList = new Set();
    for(let val of Object.values(dictionary)) {
        if(uniqueList.has(val)) {
            return false;
        }else {
            uniqueList.add(val);
        }
    } 
    return true;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));
console.log(uniqueOccurrences([1,2]));
console.log(uniqueOccurrences([6,6,-1]));
