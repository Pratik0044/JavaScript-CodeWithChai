const coding=["js","java","cpp","python","ruby"]

coding.forEach(function (item) {
    // console.log(item);
})

coding.forEach((value)=>{
    // console.log(value);
})

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)


coding.forEach((element,index,arr)=>{
    // console.log(element,index,arr);
})

const myCoding=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
