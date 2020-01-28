const large = new Array(10000).fill('nemo');

function findNemo(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo(large);//O(n) ----> Linear Time

////////////////////////////////////
function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)
  
    for (let i = 0; i < input.length; i++) { //O(n)
      anotherFunction(); //O(n)
      let stranger = true; //O(n)
      a++; //O(n)
    }
    return a; //O(1)
}

// BIG O(3+4n)

console.log(funChallenge('test'))

////////////////////////////

function anotherFunChallenge(input) {
    let a = 5; //O(1)
    let b = 10;//O(1)
    let c = 50;//O(1)
    for (let i = 0; i < input; i++) { //O(n)
      let x = i + 1;//O(n)
      let y = i + 2;//O(n)
      let z = i + 3;//O(n)
  
    }
    for (let j = 0; j < input; j++) { //O(n)
      let p = j * 2;//O(n)
      let q = j * 2;//O(n)
    }
    let whoAmI = "I don't know";//O(n)
  }
