// 704. Binary Search
// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function(nums, target) {
    debugger;
    let lo = 0, hi = nums.length-1;
	while (lo < hi) {
		let mid = lo + Math.floor((hi-lo+1)/2);
		if (target < nums[mid]) {
			hi = mid - 1
		} else {
			lo = mid; 
		}
	}
	return nums[lo]==target?lo:-1;
};

console.log(search([-1,0,3,5,9,12],9))
console.log(search([-1,0,3,5,9,12],2))
