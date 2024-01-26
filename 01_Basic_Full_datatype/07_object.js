// Singleton: when we create a object using CONSTRUCTURE then that objects are singleton
// object.create

//Object Literals: create direct ways

const user={
    name: "Pratik",
    "location": "Lucknow",
    surName:"Vish",
    age:23,
    email:"pratik@git.com",
    isLogin:false,
    lastLoginDate: ["Manday","Saturday"]
}

//console.log(user.name);
//console.log(user["email"]);
//Location can't used by . operator
//console.log(user["location"]);

//adding a symbole in js object
let symbole=Symbol("key1");// declearation of symbol

const user2={
    name: "Ranjeet",
    "location": "Lucknow",
    [symbole]:"mysymbol", // adding a symbol into  a object ****important****
    surName:"Yadav",
    age:23,
    email:"pk@google.com",
    isLogin:true,
    lastLoginDate: ["Manday","Saturday"]
}

//console.log(user2[symbole]);// to access the symbol of object
//console.log(typeof (user2[symbole]));// string but not symbol

// console.log(user2);

 user.email="Pratik004@gmail.com";
// console.log(user);
//Object.freeze(user);// to locking the value of all keys using freeze method
user.email="Pratik004@yahoo.com"//  changes not occure
// console.log(user);

user.greeting=function(){
    console.log("Hello user");
}

user.greeting2=function(){
    console.log(`Hello user ${this.name}`);
}
console.log(user.greeting());

console.log(user.greeting2());
