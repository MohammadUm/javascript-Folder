// for(let num=1;num<=100;num++)
//     {
//         if(num%2===0)
//             console.log("num=",num)
//     }

//practice question 2
//create a game where you start with any random number.Ask the user to keep guessing the game number
//until the user enters correct value
let gameNum=25
let userNum=prompt("guess the game number: ")

while(userNum != gameNum){
      userNum=prompt("you entered the wromg number, guess the number again: ")//anything promp returns in a form of a number it returns a string that why we use single =

}
console.log("congratulations, you have entered the right number")