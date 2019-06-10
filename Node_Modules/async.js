console.log("Before");
getUser(1, (user) => {
    console.log(user);

    getUserRepositories(user.githubUsername, (repos) => {
        console.log(repos);
    });
});
console.log("After");

function getUser(id, callback){
    setTimeout(() => {
        console.log("Reading user from database ...");
        callback({id : id, githubUsername : "chhabrabhishek"});
    },2000);
}

function getUserRepositories(githubUsername, callback){
    setTimeout(() => {
        console.log(githubUsername);
        callback(['repo1', 'repo2', 'repo3']);
    },2000);
}