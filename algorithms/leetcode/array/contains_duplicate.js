// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Input: [1,2,3,1]
// Output: true

// Input: [1,2,3,4]
// Output: false

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

//my solution
// var containsDuplicate = function(nums) {
//     let history = {};
//     for(let i = 0; i < nums.length; i++) {
//         if(!history[nums[i]]) {
//             history[nums[i]] = 1
//         }else {
//             return true;
//         }
//     }
//     return false;
// };

//one line solution
// var containsDuplicate = function(nums) {
//     return new Set(nums).size < nums.length;
// };

// We can also use sort which is slower O(n log n) time but improved O(1) space (although we mutate the input):

var containsDuplicate = function(nums) {
    return nums.sort().some((a, i) => {
        console.log(a,i)
        a === nums[i - 1]
    });
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
