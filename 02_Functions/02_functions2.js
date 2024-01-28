function calculateCartPrice(num1){
    return num1;
}

// console.log(calculateCartPrice(200,300,400));//only single argument is return from funcion

// use REST(...) parameter to return undefined numbers of parameter

function calculateCartPrice2(...num1){
    return num1;
}

// console.log(calculateCartPrice2(200,300,400));

function calculateCartPrice3(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice3(200,300,400,555,666,999));

// passing an object to a function

const user={
    name: "Pratik",
    age:23,
    location: "Lucknow"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}

// handleObject(user)

// we can pass an array as an argument 
var array=[2,6,9,7,5,2];
function findSecondElement(arr){
    return arr[1];
}
console.log(findSecondElement(array));

