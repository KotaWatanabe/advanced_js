// 1299. Replace Elements with Greatest Element on Right Side

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

 

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

// var replaceElements = function(arr) {
//     let max = -1;
//     const result = [];
//     for(let i = arr.length-1; i >= 0; i--) {
//         result.unshift(max);
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return result;
//  };

const replaceElements = arr => {
    const result = new Array(arr.length);
    result[arr.length - 1] = -1;
    
    for (let i = arr.length - 1; i > 0; i -= 1) {
        result[i - 1] = Math.max(arr[i], result[i]);
    }
    
    return result;
};

console.log(replaceElements([17,18,5,4,6,1]));
