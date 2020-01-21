async function fetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    await console.log(data)
} 

fetchUser();


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try{
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(res => res.json())))
        console.log(users)
        console.log(posts)
        console.log(albums)
    } catch(err) {
        console.log('ooops',err)
    }
}

const getData2 = async function() {
    try {
        const arrayOfPromises = urls.map(url => fetch(url));
        for await (let res of arrayOfPromises) {
            const data = await res.json();
            console.log(data);
        }
    } catch(err) {
        consoel.log('ooops',err)
    }
}
