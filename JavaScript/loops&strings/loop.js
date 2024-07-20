//Loops are used to execute a piece of code again and again

// Print 1 to 5
// for(let count=1;count<=5;count++)
//     {
//         console.log("Apna college")
//     }

//Calculate sum of n numbers
// var sum=0
// let n=100
// for(let i=0;i<=n;i++)
//     {
//         sum=sum+i
//       console.log("sum",sum)
//       console.log("loop has ended")
//     }


// for(let i=1;i<=5;i++)
//     {
//         console.log("i=",i)//The scope of i is within the block cannot be executed outside the block
//     }//i= 1  i= 2 i= 3  i= 4  i= 5

 


    
    // for(var i=1;i<=5;i++)
    //   {
    //       console.log("i=",i)
    //   }

    //   console.log(i)//6
// Var is a global scope variable and can be executed anywhere in the code


//Note:
//Infinite loop that never ends: never do it in any program because of it the space of entire 
//system will become empty and our system can shutdown to


//While loop

// let i=1
// while(i<=5)
//   {
//     console.log("apna college")
//     i++
//   }
//in while loop condition will be checked first and in do-while loop condition will be checked 
//at last

//do-while loop

//example:
// do{
//   //do some work
// } while (condition);

//do-while loop
// let i=1;
// do{
//     console.log("apna college")
//     i++;
// }while(i<=10);//10 apna college


//in while loop condition will be checked first and in do-while loop condition will be checked 
//at last


//for-of loop

//Syntax
//for(let val of strVar){
//do some work
//}

// It is used to take a string of all characters value
//example 1
// let str="java script"
// for(let i of str){//i will be considered as  iterator that will help us to iterate->that will contain our characters
// console.log(i)
// }
//j
// a
// v
// a
// s
// c
// r
// i
// p
// t
//for-of loop
//example 2
// let str="javascript";
// let size=0;
// for(let val of str ){
//   console.log("val=",val)
//   size++;
// }


// console.log("string size",size)//10


//for in loop:Always return keys of the object
// let student={
//    name:"Umar",
//    age:24,
//    cgpa:7.5,
//    isPass:"true",
// };

// for(let i in student){//i is the name of our iterator (we can also write key insted of i)
//   console.log(i)

// }
//output
//name
//age
//cgpa
//ispass

// let student={
//     name:"Umar",
//      age:24,
//       cgpa:7.5,
//       isPass:"true",
//   };
  
//   for(let key in student){
//     console.log("key=",key, "value=", student[key])// no double quotes for key because it is a variable not a value
 // }

//output
//   key= name value= Umar
//  key= age value= 24
//  key= cgpa value= 7.5
//  key= isPass value= true



// //practice
for(let i=1;i<=100;i++)
    {
        if(i%2==0)
            console.log(i)
    }

