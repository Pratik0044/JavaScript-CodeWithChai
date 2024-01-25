const herosMarval=["ironman","thor","spiderman","haukaee"];
const herosDc=["superman","flash","batman","deadpool"];

// herosMarval.push(herosDc);

// console.log(herosMarval);
// console.log(herosMarval[4][2]);

// OR

let allHeros=herosMarval.concat(herosDc); 
// console.log(allHeros);

// Easy of Concat

const allHerosNew=[...herosMarval,...herosDc];
// console.log(allHerosNew);

let secondArray=[1,2,3,[4,5,6],7,[6,8,2,9,[4,6,3]]];
let realSecondArray= secondArray.flat(Infinity);// to make a simple array by use of nested array

// console.log(realSecondArray);

console.log(Array.isArray("Pratik"));
console.log(Array.from("Pratik"));
console.log(Array.from({name: "Pratik"})); // intresting part

// Create a array from some variable
let a=2;
let b="Pratik";
let c="Vishwakarma";
let d="Ak"
console.log(Array.of(a,b,c,d));