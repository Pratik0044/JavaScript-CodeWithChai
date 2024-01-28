const user={
    username: "Pratik",
    price: 900,
    
    welcomMsg: function(){
        console.log(`${this.username} Welcome to website`);// THIS is a current context
        console.log(this);
    }


}

// user.welcomMsg();
// user.username="Ranjeet";
// user.welcomMsg()

console.log(this)//jab ham node invironment me hote hai to this {} print karta hai 
// jise empty object bolate hai

function chai(){
    console.log(this);
}

chai()