function reverse(str) {
    //////// 1. for loop
    const length = str.length;
    let resultArr = [];
    for(let i = length -1; i >= 0; i--) {
        resultArr.push(str[i]);
    }
    return resultArr.join('');

    ///////// 2. 
    // const resultArr = strArr.reduce((acc, current) => {

    // })


    
}

console.log(reverse("Hi My name is Andrei"));
// ierdnA si eman yM iH

