const score=500

const balance=new Number(400)// object of numer
console.log(score);
console.log(balance);

console.log(typeof(balance.toString()));
console.log(balance.toFixed(2));

const newnumber=95.656878
console.log(newnumber.toPrecision(5));

const zeroscount=1200100000
console.log(zeroscount.toLocaleString('en-IN'));

//++ math

console.log(Math)
console.log(Math.abs(-128)) // for mode
console.log(Math.round(-128.6)) // for round off
console.log(Math.ceil(-128.2))// find topest value
console.log(Math.floor(-128.9)) // find lowest value

console.log(Math.random()) // for a random number which is lies between 0 and 1
console.log(Math.random()*10) // to find random number multiply with 10 
console.log((Math.random()*10 )+1)//to find random number multiply with 10 and add 1

console.log((Math.floor(Math.random()*10 )+1))

const max=50;
const min=10;

console.log(Math.random() *(max-min+1) +min) // desired value between max and min given number


