// let num=(prompt("enter a number"))
// if(num%5===0)//if our number is divided by five and gives remainer zero then it is multiple of five
//     {
//         console.log(num," is multiple of five")
//     }
//     else{
//         console.log(num,"is not multiple of five")
//     }




let score=parseInt(prompt("enter your score 0 to 100:"))
let grade
if(score>=90 && score<=100)
    {
       grade="A"
    }
    else if(score>=70 && score<=89)
        {
            grade="B"
        }
        else if(score>=60 && score<=69)
            {
                grade="C"
            }
            else if(score>=50 && score<=59)
                {
                    grade="D"
                }
                else(score>=0 && score<=49)
                {
                    grade="F"
                }
console.log("according to your scores, your grade was:",grade)
  