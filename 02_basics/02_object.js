const tinderUser =new Object() //this is a singleton 

// const tinderUser = {
//      //this is a non singleton
// }

tinderUser.id="123abc"
tinderUser.name= "sammy"
tinderUser.isLogedIn = false

console.log(tinderUser);

const regularUser ={
    email: "some@email.com",
    fullname:{
        userfullname:{
            fisrtname:"sourav",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fisrtname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// const obj3= {obj1,obj2}
//  o/p => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }   

// const obj3=Object.assign({},obj1,obj2) // this {} is the target (optional) and the array assigned are source
// o/p=> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1,...obj2} //same this called spread
console.log(obj3);

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLogedIn' ] 
console.log(Object.values(tinderUser));//[ '123abc', 'sammy', false ] 
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLogedIn', false ] ] 

console.log(tinderUser.hasOwnProperty('isLogedIn'));
//check that thisproperty is in the object;










