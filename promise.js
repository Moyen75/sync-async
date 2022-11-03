const hasAccess = null;
const promise1 = new Promise((resolve, reject) => {
    if (hasAccess) {
        resolve("Welcome to our Family");
    } else {
        reject("Sorry! You are not authorized!")
    }
});

promise1
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err)
    });