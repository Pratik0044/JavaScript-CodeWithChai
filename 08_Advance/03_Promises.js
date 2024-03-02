
//--------------Promise 1------------------------
const promise1= new Promise(function(resolve, reject){ // resolve ka connection .then ke sath hota hai
    // Koi bhi async task kiya jata hai
    // DB calls, cryptography, network
    
    setTimeout(function(){
        console.log("Async task is completed:");
        resolve(); // Bina resolve ko use kiye .then ko connect nahi kar sakate hai
    },1000)
})

promise1.then(function(){
    console.log("Promise consumed: ");
})
//--------------Promise 2------------------------

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolve Complete");
})

//----------------Promise 3--------------------

const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "Pratik", email: "pratik@demo.com"})
        console.log();
    },1000)
})

promise3.then(function(data){
    console.log(data);
})

//----------------Promise 4----------------------

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
    const error=false;
    if(error){
        reject("Error: Something went wrong!")
    }
    else{
        resolve({userName: "Pratik", email: "pratik@demo.com"})
    }
},1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.userName;
}).then(function(data){
    console.log(data);
}).catch((error)=>{console.log(error);})
