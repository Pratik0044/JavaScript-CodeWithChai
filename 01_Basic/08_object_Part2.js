const user=new Object();

user.id="0044";
user.name="Pratik";
user.location="Lucknow ";

console.log(user);

const newUser={
    email:"new@gmail.com",
    fullname:{
        fistname: "Pratik",
        lastname: "Vish"
    },
    mob:"23222332323"
}

console.log(newUser.fullname.fistname);

// to murge two object like array

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={
    5:"e",
    6:"f"
}
const obj={obj1,obj2,obj3};
console.log(obj);

const newobj=Object.assign({},obj1,obj2,obj3);
console.log(newobj);

// or

const newobj2={...obj1,...obj2,...obj3};
console.log(newobj2);
