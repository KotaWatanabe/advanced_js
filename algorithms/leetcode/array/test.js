// fetch('https://api-prod.linkin.bio/api/pub/linkinbio_posts?instagram_profile_id=32192')
//   .then((response) => {
//     resolve(response)
//     return response.json();
//   })
//   .then((data) => {
//     let linkibio_post = data[0];
//     console.log(linkibio_post.caption);
// })
// .catch(rejected => {
//     console.log(rejected);
// });
fetch('https://api-prod.linkin.bio/api/pub/linkinbio_posts?instagram_profile_id=32192', {
    mode: 'cors',
})
.then((response) => {
    return response.json();
  })
  .then((data) => {
    let linkibio_post = data[0];
    console.log(linkibio_post.caption);
  })
.catch(rejected => {
    console.log(rejected);
});

const getLaterEmail = (firstName, callback) => {
    return new Promise(resolve => {
        setTimeout(() => {
            if (!firstName) {
              return resolve(callback(new Error('firstName parameter required'))) ;
            }
            const email = `${firstName}@later.com`;
            return resolve(callback(email));
        }, 2000);
    })
};

  const sleep = (waitSeconds, someFunction) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(someFunction())
		}, waitSeconds * 1000)
	})	
}

sleep(5, printHoge)
