// 1380. Lucky Numbers in a Matrix

// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

 

// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column
// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]

var luckyNumbers  = function(matrix) {
    let row = [];
    for(let i = 0; i < matrix.length; i++) {
        row.push(Math.min(...matrix[i]))
    }
    return row.sort((a,b) => a-b).slice(row.length-1)
};


console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))
console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]))
console.log(luckyNumbers([[7,8],[1,2]]))
