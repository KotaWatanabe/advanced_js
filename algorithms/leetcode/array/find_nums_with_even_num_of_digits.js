// Given an array nums of integers, return how many of them contain an even number of digits.

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.

// var findNumbers = function(nums) {
//     let count = 0;
//     nums.forEach(num => {
//         let modifiedNum = num.toString();
//         if(modifiedNum.length % 2 === 0) {
//             count++;
//         }
//     })
//     return count;
// };

var findNumbers = function(nums) {

    const isEvenNums = num => {
        return String(num).length % 2 === 0;  
    };
    
    return nums.filter(elem => isEvenNums(elem)).length;
    
};

console.log(findNumbers([12,345,2,6,7896]))
console.log(findNumbers([555,901,482,1771]));
