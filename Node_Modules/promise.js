const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
        reject(new Error("Something's went wrong!"));
    },2000);
});

promise
    .then(result => console.log("Result ", result))
    .catch(err => console.log(err.message));