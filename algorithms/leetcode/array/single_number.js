// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Input: [2,2,1]
// Output: 1

// Input: [4,1,2,1,2]
// Output: 4

var singleNumber = function(nums) {
    let history = {};
    nums.forEach(num => {
        if(history[num]) {
            history[num]++;
        }else {
            history[num] = 1;
        }
    })
    for (let n in history) {
        if (history[n] === 1) return Number(n);
    }
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
