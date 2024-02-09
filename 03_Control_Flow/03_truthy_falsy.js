const userEmail="p@gmail.com";

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// FALSY value
// false, 0, -0, BigInt,0n,"",null,undefined,NaN
//-------------------------------------------------------
// TRUTHY values
// "0","false"," ",[],{},function(){}

if(userEmail.length===0)
    console.log("Array is empty");
else
    console.log("Array is not empty");
const obj={}

if(Object.keys(obj).length===0)
    console.log("Object is empty");
else
    console.log("Object is not empty");

