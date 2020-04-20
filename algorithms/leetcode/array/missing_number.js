// 268. Missing Number

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

// var missingNumber = function(nums) {
//     for(let i = 0; i <= nums.length; i++) {
//         if(!nums.includes(i)) {
//             return i;
//         }
//     }
// };

var missingNumber = function(nums) {
    debugger;
    let len = nums.length;//length of array.
    let sum = (len*(len+1))/2; // sum of all nos from 0 to n by series formula
    let sum2 = nums.reduce((a,c)=> a+c); //sum of array elements.
    return sum-sum2; //difference is the answer
};

console.log(missingNumber([3,0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
