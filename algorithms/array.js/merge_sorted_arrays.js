function mergeSortedArrays(arr1,arr2) {
    let mergerdArray = [];
    let i = 1;
    let j = 1;
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    
    while(array1Item || array2Item) {
        console.log(array1Item,array2Item);
        if(!array2Item || array1Item < array2Item) {
            mergerdArray.push(array1Item);
            array1Item = arr1[i]
            i++
        }else{
            mergerdArray.push(array2Item);
            array2Item = arr2[j]
            j++
        }
    }
    
    return mergerdArray;

}

console.log(mergeSortedArrays([0,3,4,31],[4,6,30]));
