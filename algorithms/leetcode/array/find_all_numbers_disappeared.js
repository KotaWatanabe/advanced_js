// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

var findDisappearedNumbers = function(nums) {
    if(!nums) return false;
	
	let arr = Array.from(nums.keys(), num => num += 1);
    
    for(let i of nums){
        arr[i - 1] = null;
    }

    return arr.filter(e => e !== null);
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
