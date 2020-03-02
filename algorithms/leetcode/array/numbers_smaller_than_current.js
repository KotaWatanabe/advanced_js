// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

// var smallerNumbersThanCurrent = function(nums) {
//     let resultArr = []
//     for(let i = 0; i < nums.length; i++) {
//         let counter = 0;
//         for(let j = 0; j < nums.length; j++) {
//             if(nums[i] > nums[j]) {
//                 counter++;
//             }
//         }
//         resultArr.push(counter);
//     }
//     return resultArr
// };

var smallerNumbersThanCurrent = function(nums) {
    let hashMap = {}
    let arr = nums.slice().sort((a,b) => a - b);
    
    for (let i = 0; i < arr.length; i++) {
        if(hashMap[arr[i]] === undefined) {
            hashMap[arr[i]] = i; 
        }
    } 
    for (let i = 0; i < nums.length; i++) nums[i] = hashMap[nums[i]];
    return nums;
};

// console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
// console.log(smallerNumbersThanCurrent([6,5,4,8]));
console.log(smallerNumbersThanCurrent([7,7,7,7]));
