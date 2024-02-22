const user = {
    username: "Pratik",
    price: 900,

    welcomMsg: function () {
        console.log(`${this.username} Welcome to website`);// THIS is a current context
        console.log(this);
    }


}

// user.welcomMsg();
// user.username="Ranjeet";
// user.welcomMsg()

console.log(this)//jab ham node invironment me hote hai to this {} print karta hai 
// jise empty object bolate hai

// function chai(){
//     const user="pratik"
//     console.log(this.user);// (THIS) kuchh to hai jise kewal object me use kar sakate hai 
// }

// chai()

//++++++++++++Another way to declear an function ++++++++++++
const chai = function () {
    console.log("Fucntion calling");
}
// chai()

//?????????????  ARROW FUNCTION   ????????????

const arrowChai = () => {
    console.log("Arrow Fucntion is calling")
}

arrowChai()

const arrowFun = (n1,n2)=>{
    return n1+n2 //ham bina return ke bhi arrow function bana sakate hai
}
console.log(arrowFun(3,5));

// const arrowFun2=(n1,n2)=> n1+n2 

//bina { } bhi arrow function likha jata hai magar esaka matalab hota hai ki value return karana hai

// console.log(arrowFun2(8,7));


//------------ ya ek aur tarika hai ------------
const arrowFun2=(n1,n2)=> (n1+n2) //ye tarika jyada sahi hota hai kyoki object return karane me pahala wala fail ho jata hai
console.log(arrowFun2(8,0));

const arrowFucntion=()=>({name: "pratik"})

console.log(arrowFucntion());