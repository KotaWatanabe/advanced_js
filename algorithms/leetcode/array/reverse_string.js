// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function(s) {
    let beginPointer = 0
    let endPointer = s.length - 1;
    while(beginPointer < endPointer) {
        [s[beginPointer],s[endPointer]] = [s[endPointer],s[beginPointer]]
        beginPointer++;
        endPointer--;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));
