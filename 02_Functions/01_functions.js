// syntax
function name(params) {

}

// function call 
name()
// work on function

function add(n1,n2){
    console.log(n1+n2);
}
// add(5,8);

// we can store a function on any variable

// const result=add(4,5);
// console.log("result: ",result);

// other way to return value from a function
function add2(n1,n2){
    const ans=n1+n2;
    return ans;
}
// const ans=add2(5,9);
// console.log(ans);

function loginUserMsg(username){
    if(username===undefined){
        console.log("Please enter a user name: ");
        return
    }
    return `${username} just logged in`
}
//  or
// function loginUserMsg(username){
//     if(!username){
//         console.log("Please enter a user name: ");
//         return
//     }
//     return `${username} just logged in`
// }
//or

console.log(loginUserMsg("Pratik"));

console.log(loginUserMsg());


