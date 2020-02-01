const array1 = ['a','b', 'c', 'x'];
const array2 = ['z','y','i'];
const array3 = ['z','y','x'];


function hasSameItem(arr1, arr2) {
    // for(let i = 0; i < arr1.length; i++) {
    //    for(let j = 0; j < arr2.length; j++) {
    //        if(arr1[i]===arr2[j]) {
    //            return true;
    //        } else {
    //            return false;
    //        }
    //    }
    // }
    // O(a*b)  this is bad...
    //O(1) Space Complexity

    let map = {};
    for(let i = 0; i < arr1.length; i++) {
        if(!map[i]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    for(let j = 0; j < arr2.length; j++) {
        if(map[arr2[j]]){
            return true;
        }
    }
    return false;
}
// O(a + b)
// O(a)space complexity

/// some funcion check if one of the item is true or not
function hasSameItem2(arr1,arr2) {
    return arr1.some(item => arr2.includes(item))
}

// console.log(hasSameItem(array1,array3));
console.log(hasSameItem2(array1,array2));
