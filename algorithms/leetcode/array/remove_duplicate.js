// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.

// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.


var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        while(nums[i] === nums[i+1]) {
            nums.splice(i+1,1);
        }
    }
    console.log(nums)
    return nums.length
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));


