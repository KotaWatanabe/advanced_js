// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

 

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3

//for 
// var heightChecker = function(heights) {
//     const orderedHeights = [...heights].sort((a,b) => a - b) 
//     // heights.slice().sort((a,b) => a - b)
//     let counter = 0;
//     for(let i = 0; i < heights.length; i++) {
//         if(heights[i] !== orderedHeights[i]) {
//             counter ++;
//         }
//     }
//     return counter;
// };

//reduce
const heightChecker = (heights) => {
    const orderedHeights = [...heights].sort((a,b) => a - b) 
    return heights.reduce((total,index) => heights[index] !== orderedHeights[index] ? total+1 : total,0)
}

console.log(heightChecker([1,1,4,2,1,3]));
