// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Jai Shree Ram"
for (const greet of greetings) {
    if(greet ===" ")
        continue;
    // console.log(`Each char is ${greet}`)
}

// Maps
/* It is same like a array but, It holds KEY VALUE PAIR. All are uniqe value */

const mapA = new Map() // Syntax to decleartion
mapA.set('IN', "India")
mapA.set('USA', "United States of America")
mapA.set('Fr', "France")
mapA.set('IN', "India")// it only one India because it store only uniqe value


// console.log(mapA);
for(const key of mapA){
    // console.log(key);
}

for (const [key, value] of mapA) { // Syntax to print seprate value of map (Array destructure)
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

//----------------------------------------------------------
/* For of LOOP is not itratable on object */