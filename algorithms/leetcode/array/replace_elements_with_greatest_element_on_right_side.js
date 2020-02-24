// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

var replaceElements = function(arr) {
    var replaceElements = function(arr) {
        for (let i = 0; i < arr.length; i += 1) {
          if (i !== arr.length - 1) {
            arr[i] = Math.max(...arr.slice(i + 1));
          } else {
            arr[i] = -1;
          }
        }
        return arr;
      };
};

console.log(replaceElements([17,18,5,4,6,1]));
