/// 1

const findInterSection = (strArr) => {
    const commonElement = [];
    const arr1 = strArr[0].split(',');
    const arr2 = strArr[1].split(',');
    console.log(arr1)

    arr1.forEach(eArr1 => {
        const numArr1 = parseInt(eArr1);
        arr2.forEach(eArr2 => {
            const numArr2 = parseInt(eArr2);
            if(numArr1 === numArr2) {
                commonElement.push(numArr1)
            }
        })
    })
    return commonElement.join(',')
}

console.log('case:1',findInterSection(['1,3,9,10,17','1,4,9,10'])) 
/// this aproach is not efficient
/// if there are no matches ---> still I need to iterate through every element in the second string
/// The time complexity would be O(nm)

// efficient way 

const findInterSection2 = (strArr) => {
    const commonElement = [];
    const arr1 = strArr[0].split(',');
    const arr2 = strArr[1].split(',');

    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        let a = arr1[i] | 0;
        let b = arr2[j] | 0;
        
        if(a === b) {
            commonElement.push(a);
            i++;
            j++;
        } else if(a > b) {
            j++;
        } else if(a < b) {
            i++;
        }
    }
    return commonElement.join(',')
}

console.log('case:2',findInterSection2(['1,3,9,10,17','1,4,9,10']))  /// 1,9,10

///3

const findInterSection3 = (strArr) => {
    const [s1,s2] = strArr.map(a => new Set(a.split(",")));
    const interSection = [...s1].filter(x => s2.has(x));
    return interSection.length === 0 ? 'false' : interSection.join(',');
}

console.log('case:3',findInterSection3(['1,3,9,10,17','1,4,9,10'])) 


