// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let max = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      let current = nums[i];
      maxSoFar = Math.max(current, current + maxSoFar);
      max = Math.max(max, maxSoFar);
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))