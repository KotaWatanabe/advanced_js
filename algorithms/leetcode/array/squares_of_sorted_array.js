// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function(A) {
    return A.map(num => Math.pow(num,2)).sort((a,b) => a-b)
};
var sortedSquares2 = function(A) {
    const length = A.length;
    const squares = Array(length);
    let start = 0;
    let end = length -1;

    for(let i = end; i >= 0; i--) {
        const sq1 = A[start] ** 2;
        const sq2 = A[end] ** 2;

        if(sq1 > sq2) {
            squares[i] = sq1;
            start++;
        } else {
            squares[i] = sq2;
            end --;
        }
    }
    return squares;
};

// console.log(sortedSquares([-4,-1,0,3,10]))
// console.log(sortedSquares([-7,-3,2,3,11]))

console.log(sortedSquares2([-4,-1,0,3,10]))
console.log(sortedSquares2([-7,-3,2,3,11]))
