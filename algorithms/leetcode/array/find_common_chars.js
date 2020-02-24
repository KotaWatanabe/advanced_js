// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]

// Input: ["cool","lock","cook"]
// Output: ["c","o"]

var commonChars = function(A) {
    debugger;
    let result = [];
    const firstLength = A[0].length;
    const arrayLength = A.length;
    for(let i = 0; i < firstLength; i++) {
        let counter = 0;
        for(let j = 1; j < arrayLength; j++) {
            let wordArr = A[j].split('')
            if(wordArr.includes(A[0][i])) {
                let indexOfElement = wordArr.indexOf(A[0][i])
                wordArr.splice(indexOfElement, 1);
                counter++
                if(counter === arrayLength-1) {
                    result.push(A[0][i])
                }
            }
        }
    }
    return result;
};

console.log(commonChars(["bella","label","roller"]))
console.log(commonChars(["cool","lock","cook"]))


