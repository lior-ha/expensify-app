const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Mike',
            age: 35
        });
        reject('Something went wrong')
    }, 1500);
});

console.log('before')

promise
    .then((data) => {
        console.log(data);
        return 'Promise Chaining'; //Optional
    })
    .then((returnFromReturn) => { // Will run even without returnFromReturn
        console.log(returnFromReturn)
    })
    .catch((error) => {
        console.log(error)
    })

    
promise
.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Im data, from the 1st Promise!');
        }, 1500);
    });
})
.then((promise) => { // Will run only when above promise resolves
    console.log(`The data from first promise: ${promise}`)
})
.catch((error) => {
    console.log(error)
})


promise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})

// promise.then((data) => {
//     console.log('2', data)
// });

console.log('after');