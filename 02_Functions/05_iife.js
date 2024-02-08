// Immediately Invoked Functions Expressions (IIFE)

/* Yah ek tarika hai jisame kisi function ko decliartion ke turant bad hi 
call karana hota hai to use karate hai.*/

/* Main use DATABASE CONNECT ya GLOBLE VARIABLE ke pollution se bachane ke liye kiya
jata hai. */

//syntax (DECLIARATION OF FUNCTION )(CALLING OF FUCNTION)
//(;) Is mandetory after one IIFE function

(function chai(){
    console.log(`DB CONNECTED`);
})();
// ++++ ya +++

(
    ()=>{
        console.log(`DB CONNECTED TWO`);
    }
)()
