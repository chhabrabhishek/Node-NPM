console.log("Before");
const promise = getUser(1);
promise
    .then(user => getUserRepositories(user.githubUsername))
    .then(repos => console.log("Repos ",repos));
console.log("After");

function getUser(id){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading user from database ...");
            resolve({id : id, githubUsername : "chhabrabhishek"});
        },2000);
    })
    return promise;
}

function getUserRepositories(githubUsername){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(githubUsername);
            resolve(['repo1', 'repo2', 'repo3']);
        },2000);
    });
}