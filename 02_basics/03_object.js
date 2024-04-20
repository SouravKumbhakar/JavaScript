 const course ={
    coursename: "js in indi",
    price:"999",
    courseInstractor:"hitesh"
 }

//  course.courseInstractor

// const{courseInstractor} = course
 const{courseInstractor : instractor} = course


// console.log(courseInstractor) //hitesh
console.log(instractor); //hitesh


//API>> jabbhi apko apna kaam kisi aur ke upar dalna 
//hota hai usiko api kahte hai

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// } 