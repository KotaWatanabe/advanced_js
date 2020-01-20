// basic promise

// const promise = new Promise((resolve, reject) => {
//     if(true) {
//       resolve('Stuff Worked');
//     }else {
//       reject('Error, it broke')
//     }
// })


// promise
//     .then(result => result + '!')
//     .then(result2 => result2 + '?')
//     .catch(() => console.log('errrror!'))
//     .then(result3 => {
//         console.log(result3 + '!')
//     })


// real world example

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))
