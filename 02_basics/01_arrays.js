//ARRAYS

/*
 The Array object, as with arrays in other programming 
 languages, enables storing a collection of multiple items 
 under a single variable name, and has members for performing 
 common array operations.
*/

const myArr = [0,1,2,3,4,5] //the value inside the array is called element

//js arrays are resizable 
//mixof any data type
// ** JavaScript array-copy operations create shallow copies.
//SHALLOW COPY:: the changes are happening in the main array

const myHeroes = ["shaktiman", "naagraaj"];

const myArr2 = new Array(1,2,3,4)

console.log(myArr[0]); //print the 0th index of this array

//ARRAY METHOD

myArr.push(6) 
//push method add element at the end. 
console.log(myArr);


myArr.pop()
//pop used to removing the last element
console.log(myArr);

myArr.unshift(9)
//unshift add any element at the begin of the array.
//for that all index are shifted or changed
console.log(myArr);

myArr.shift()
//shift remove any element at 0 the index
console.log(myArr);


console.log(myArr.includes(9));
//includes cheack that wheather element is exists in the array or not and return true and false

console.log(myArr.indexOf(3));
//indexof access the element of the given idx

const newArr = myArr.join()
//join makes the array bind and tpye of a string
console.log(newArr);
console.log(typeof newArr);


// ==SLICE AND SPLICE==

console.log("A",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1); //[ 1, 2 ]
console.log("b",myArr); // b [ 0, 1, 2, 3, 4, 5 ]

/* In case of slice only range value is given, stored in a new variable
    Original arry has no change.
   also it start from the initial range to before the final range.
*/

const myn2 = myArr.splice(1,3);
console.log(myn2); //[ 1, 2, 3 ]
console.log("c",myArr); //c [ 0, 4, 5 ]

/* In case of splice the total range valure including first and last range is stored into a new var
    also the main arry will change , remaing el of the the array 
    stayed. */







