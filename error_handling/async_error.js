Promise.resolve('asyncfail')
    .then(res => {
        Promise.resolve().then(() => {
            throw new Error('#3 fail')
        }).catch(console.log)
        return 5
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log('final error',err)
    })

//async await
(async function() {
    try {
        await Promise.resolve('ooopsie #1')
        await Promise.reject('oopsie #2')
    } catch (err) {
        console.log(err)
    }
    console.log('is this still good?')
})()
