const array = [1,2,3]

function removeLastItem(arr) {
    const newArray = [...array];
    newArray.pop()
    return newArray;
}
function multiplyBy2(arr) {
    return arr.map(item => item*2)
}

removeLastItem(array)
// mutateArray2(array);
//side effect
console.log(array)
console.log(multiplyBy2(array))
