// Given two arrays, write a function to compute their intersection.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

// Each element in the result must be unique.
// The result can be in any order.

var intersection = function(nums1, nums2) {
   let resultSet = new Set();
   for(let i = 0; i < nums1.length; i++) {
       for(let j = 0; j < nums2.length; j++) {
           if(nums1[i] === nums2[j]) {
               resultSet.add(nums1[i])
           }
       }
   } 
   return [...resultSet];
};

function intersect(nums1 , nums2){
    let setNum1 = new Set(nums1);

    return [...new Set(nums2.filter(num => setNum1.has(num)))];
}

console.log(intersection([1,2,2,1],[2,2]))
console.log(intersection([4,9,5],[9,4,9,8,4]))
