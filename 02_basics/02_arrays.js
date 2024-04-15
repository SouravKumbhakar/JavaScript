const marvel_heros = ["thor","iornman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heros.push(dc_heroes) 
// //in that case array inside arry occur
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// //basically it treat the second array as an el or data

// console.log(marvel_heros[3][1]); //flash


const new_heroes = marvel_heros.concat(dc_heroes)
console.log(new_heroes);


const all_new_heroes = [...marvel_heros, ...dc_heroes]
console.log(all_new_heroes);
// this method is known as spread method,

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//flat makesthe loop array to a flat array,
//flat(deepth)

console.log(Array.isArray("sourav")) //gives false
console.log(Array.from("sourav")); // tis from makes the string into array
console.log(Array.from({name: "sourav"}));//gives te empty 






