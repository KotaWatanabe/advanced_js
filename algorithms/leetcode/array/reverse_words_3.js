// 557. Reverse Words in a String III

// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

// var reverseWords = function(s) {
//     const reverseString = [...s].reverse().join('').split(' ');
//     let result = [];
//     for(let i = reverseString.length-1; i >= 0; i --) {
//         result.push(reverseString[i]);
//     }
//     return result.join(' ')
// };

// var reverseWords = function(s) {
//     debugger;
//     let res = '';
//     let word = '';
//     for (let c of s) {
//         if (c === ' ') {
//             res += word + c;
//             word = '';
//         } else {
//             word = c + word;
//         }
//     }
//     return res + word;
// };

var reverseWords = function(s) {
    debugger;
    return s.split(' ').reduce((reversed, curr) => {
        reversed.push(curr.split('').reverse().join(''))
        return reversed;
    }, []).join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"))
