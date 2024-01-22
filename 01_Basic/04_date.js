// let date=new Date() // date is a object datatype
// console.log(date)
// console.log(date.toString()) // convert date into word format with time and indian standerd time
// console.log(date.toDateString())// convert date into word
// console.log(date.toISOString())// convert data into 2024-01-22T16:11:01.120Z
// console.log(date.toJSON()) //convert data into 2024-01-22T16:11:01.120Z
// console.log(date.toLocaleDateString())// 22/1/2024
// console.log(date.toLocaleString()) // 22/1/2024, 9:41:01 pm

// let mydate= new Date(2000,10,14,5,6,8) // to our desired date and time
// console.log(mydate.toLocaleString())

let myCreatedDate=new Date("12-10-2000")//mm:dd:yyyy
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp);//
// console.log(myCreatedDate.getDate())// return time in milisecond

console.log(Date.now())// return current time
console.log(Math.floor(Date.now()/1000))   

let newDate=new Date();
console.log(newDate.getMonth()+1);
newDate.toLocaleString('default',{
    weekday: "long"
})






