// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Input: [3,2,3]
// Output: 3

// Input: [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    let dictionary = {};
    nums.forEach(num => {
        if(dictionary[num]) {
            dictionary[num]++
        }else {
            dictionary[num] = 1;
        }
    })
    const keysArr = Object.keys(dictionary);
    let max = dictionary[keysArr[0]];
    let maxKey = keysArr[0]
    for(let i = 1; i < keysArr.length; i++) {
        if(dictionary[keysArr[i]]>max) {
            max = dictionary[keysArr[i]]
            maxKey = keysArr[i]
        }
    }
    return maxKey;
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
