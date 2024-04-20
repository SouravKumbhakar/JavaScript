// function initialization
// referance
//execute

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers() //NaN
// addTwoNumbers(3,4)
// addTwoNumbers(3,"4") //34 as string
// addTwoNumbers(3,'a')//3a
// addTwoNumbers(3,null) //3 num

//pass value is called parameter or argument


function addTwoNumbers(num1,num2){
    // let result= num1+num2;
    // return result
    // console.log(sourav);// not returned after return statement;

    return num1+num2
}
const result = addTwoNumbers(3,5)
console.log("result:",result);


function logingUserMessage(username){ //if i assigned the username="sam" ,the if condition never execute
                                       //also if the value pass the username overwrite by the pass value,  
    //fixing the problem for empty pass
    if(username===undefined){ //!username
        console.log("please enter a username");
        return //this return for terninating the func during thhis condition
    }
    return `${username} just logged in`
}

console.log(logingUserMessage("sourav"));// if nothing pass by the referance
                                        //o/p: undefined just loggin

                                        
