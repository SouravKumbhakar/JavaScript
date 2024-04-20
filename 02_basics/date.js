//Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toDateString()); //here as this is an 
                                           // object so 0 is reps 1st month;

// let myCreatedDate = new Date(2023,0,23,5,3);
let myCreatedDate = new Date("2023-01-14");
// let myCreatedDate = new Date("01-12-22022");  //🤣

// let myCreatedDate = new Date("14-03-2024");// not valid process



console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()       
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday:"short",

})



