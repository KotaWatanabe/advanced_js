// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

// Return the number of negative numbers in grid.

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Input: grid = [[3,2],[1,0]]
// Output: 0

// Input: grid = [[1,-1],[-1,-1]]
// Output: 3

// Input: grid = [[-1]]
// Output: 1

var countNegatives = function(grid) {
    let concatArr = [];
    for(let i = 0; i < grid.length; i++) {
        concatArr.push(...grid[i])
    }
    let count = 0;
    concatArr.forEach(el => {
        if(el < 0) {
            count++
        }
    })
    return count;
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
console.log(countNegatives([[3,2],[1,0]]))
console.log(countNegatives([[1,-1],[-1,-1]]))
console.log(countNegatives([[-1]]))
