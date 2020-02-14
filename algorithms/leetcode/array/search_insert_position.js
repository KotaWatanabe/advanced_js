// Input: [1,3,5,6], 5
// Output: 2

// Input: [1,3,5,6], 2
// Output: 1

// Input: [1,3,5,6], 7
// Output: 4

// Input: [1,3,5,6], 0
// Output: 0

var searchInsert = function(nums, target) {
    if(target === 0) {
        return 0;
    }
    if(nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        let counter = 0;
        for(let i =0 ; i < nums.length; i++) {
            while(target > nums[i]) {
                counter++
                break;
            }
        }
        return counter;
    }

    // one line code
    // return nums.includes(target) ? nums.indexOf(target) : nums.filter(elem => elem < target).length;
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));
