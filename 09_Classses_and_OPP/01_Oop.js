// const user = {
//     username: "Pratik",
//     loginCount: 10,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got User details from DataBase.");
//     }
// }

function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = new user("Pratik", 13, true);
const userTwo = new user("Suraj", 15, 0);

console.log(userOne.constructor);