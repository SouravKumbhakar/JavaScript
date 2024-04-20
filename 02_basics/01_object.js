//Singleton

//Object literals
// Object.create // constructor method in there singleton occur


const mySym= Symbol("key1");


const jsUser = {
    name: "sourav",
    "Full name": "sourav kumbhakar",
    [mySym]: "mykey1",
    age:18,
    location:"adisaptagram",
    isLoggedIn:false,
    lastLogInDays: ["mon","sat"]
}
// console.log(jsUser.age);
// console.log(jsUser["age"]); //same output

// console.log(jsUser["Full name"]);// in this dot method not applied
// console.log(jsUser[mySym]);
// console.log(typeof mySym);

//freez

// Object.freeze(jsUser) //no change apply in object now

// jsUser.age=20;

// console.log(jsUser);

//-----------------
jsUser.greeting= function(){
    console.log("hello user");
}

// console.log(jsUser.greeting); //undefined
console.log(jsUser.greeting());// hello user


jsUser.greetingtwo= function(){
    console.log(`hello user, ${this["Full name"]}`);
}

console.log(jsUser.greetingtwo());

console.log(jsUser);