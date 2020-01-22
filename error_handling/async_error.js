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
