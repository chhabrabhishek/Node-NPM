console.log("Before");
const promise = getUser(1);
// promise
//     .then(user => getUserRepositories(user.githubUsername))
//     .then(repos => console.log("Repos ",repos));

displayRepos();
console.log("After");

async function displayRepos(){
    try{
        const user = await getUser(1);
        console.log("User ",user);
        const repos = await getUserRepositories(user.githubUsername);
        console.log("Repos ",repos);
    }
    catch(err){
        console.log("Error ", err.message);
    }
}

function getUser(id){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading user from database ...");
            resolve({id : id, githubUsername : "chhabrabhishek"});
        },4000);
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