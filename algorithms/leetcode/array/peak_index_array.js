// 852. Peak Index in a Mountain Array

// Example 1:

// Input: [0,1,0]
// Output: 1
// Example 2:

// Input: [0,2,1,0]
// Output: 1
// Note:

// 3 <= A.length <= 10000
// 0 <= A[i] <= 10^6
// A is a mountain, as defined above.

// var peakIndexInMountainArray = function(A) {
//     return A.indexOf(Math.max(...A));
// };

var peakIndexInMountainArray = function(A) {
    debugger;
    let low = 0, high = A.length-1;
    if (!A.length) 
    return -1

    const mid = ((low + high) / 2) | 0

    if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1])
        return mid

    if (A[mid] < A[mid - 1]) 
        return peakIndexInMountainArray(A, low, mid)

    if (A[mid] < A[mid + 1])
        return peakIndexInMountainArray(A, mid, high)
};

console.log(peakIndexInMountainArray([0,1,0]))
console.log(peakIndexInMountainArray([0,2,1,0]))
