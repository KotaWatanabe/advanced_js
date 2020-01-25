const insertionSort = (nums) => {
    //i is current element I am sorting
    for (let i = 1; i < nums.length; i++) {
      //j starts at i-1 and iterates from right-to-left until it finds the correct location to place the element
      let j = i - 1
      let tmp = nums[i]
      while (j >= 0 && nums[j] > tmp) {
        nums[j + 1] = nums[j]
        j--
      }
      nums[j+1] = tmp
    }
    return nums
}

console.log(insertionSort([1,5,7,8,2]));

// 1,5,7,8,2
// //1
// i=1
// j=0
// temp = 5

// //2
// i=2 
// j=1
// temp=7

// i=4
// j=3
// temp=2
