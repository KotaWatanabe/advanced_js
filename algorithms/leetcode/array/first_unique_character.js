// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

var firstUniqChar = function(s) {
    let hashMap = {};
    for(let i = 0; i < s.length; i++) {
        if(!hashMap[s[i]]) {
            hashMap[s[i]] = 1;
        } else {
            hashMap[s[i]]++;
        }
    }
    for(let key in hashMap) {
        if(hashMap[key]===1) {
            return s.indexOf(key)
        }
    }
    return -1;
};

//Smarter way

// var firstUniqChar = function(s) {
//     for(i=0; i<s.length; i++)
//         if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
//     return -1
// };

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
