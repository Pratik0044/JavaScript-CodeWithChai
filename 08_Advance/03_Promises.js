
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

//--------------Promise 3------------------------

const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "Pratik", email: "pratik@demo.com"})
        console.log();
    },1000)
})

promise3.then(function(data){
    console.log(data);
})

//--------------Promise 4------------------------

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
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected."))


//--------------Promise 5------------------------

const promise5= new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(error){
            reject('Error: JS went wrong')
        }
        else{
            resolve({userName: "js", password: "123456"})
        }
    }, 1000);
})

async function consumePromise5(){
    try{
        const response = await promise5;// esame resolve aur reject dono respons esi me aata hai
    console.log(response);
}   catch(error){
    console.log(error);
}
}
 
consumePromise5() // Agar response me error aajata hai to catch use karana padata hai


// async function getAllUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json();
//     console.log(data);
//     }
//     catch(error){
//         console.log("E:" ,error); 
//     }
// }

// getAllUser();



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))
