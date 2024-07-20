// function display(result) {
//     document.getElementById("demo1").innerHTML = result;
//   }
  
//   function calculate(n1,n2, myCallback) {
//     var result=n1+n2;
//     myCallback(result);
//   }
  
//   calculate(5,10, display);


//----------------------------------CallBack example--------------------------------------------------//
// function sum(total){
//   console.log(total)
// }
// function calculator(a,b, sumCallback){
//   var c=a+b
//   sumCallback(c)
// }
// calculator(1,2,sum)


// calculator(1,2(a,b) => {s
//   console.log(a+b)
// })


//------------------------------------About the Chapter-------------------------------- 

// Call Back 
//What this chapter is about
//async await>>promice chains>>callback hell

// function hello()
// {
//   console.log("hello")
// }
// setTimeout(() => {
//   console.log("hello")
// },2000)//set timeout is used to execute a function according to our time we will decide when to execute
// 2s=2000ms//will execute after two seconds


//-------------------------------------------------------------------------------------------
// console.log("one")
// console.log("two")

// setTimeout ( () =>{
//   console.log("hello")
// } ,4000)

// console.log("Three")
// console.log("four")//example of asynchronous programming

//--------------------------------CallBacks----------------------------------------------

// A callback is a function passed as an argument to another function

// function sum(a, b){
//   console.log(a + b)
// }

// function calculator(a, b, sum, Callback){
//   sum, Callback(a, b)
// }
// calculator(1,2,sum)


// // type anfn for arrow function

// const hello = () => {
//   console.log("hello")
// }

// setTimeout(hello,3000)//here callback is working in asynchronous method//setTimeout takes callback



//---------------------------------Callback Hell------------------------------------
//Nested Callbacks stacked below one another forming a pyramid structure
//(Pyramid of Doom)

// the style of programming becomes difficult to understand and manage


// let age=19
// if(age>=18){
// if(age>=60){
//   console.log("senior")
// }
// else
// {
//   console.log("middle")
// }
// }
// else
// {
//   console.log("child")
// }
//inside if there is if else it is called nested if else



// let data
// function getData(dataId){//getdata returns data  data id is set to(dataId)
//   console.log(data, dataId)
// }




// let data
// function getData(dataId){
//   setTimeout(() => {
//     console.log(data, dataId)
//   },2000)
  
// }

// getData(1)//1//returns data


// function getData(dataId){
//   return new Promise((resolve, reject) => {
//     setTimeout (() => {
//       console.log("data",dataId)
//       resolve("success")
     
      
//     },3000);
    
//   })
  
// }
// //adding promise chain

//  getData(1).then((res) => {//.then will execute after the promise is resolved
//   console.log(res)

//   getData(2).then((res) => {//data 2 request will go and the result will be printed 
//     console.log(res)
    
//   })
// })

//adding promise chain 2nd method

//  getData(1)     
//  .then((res) => {//.then will return promise 
//   return getData(2)//will return get data 2 promise
//   })
//   .then((res) => {//will return final result
//     console.log(res)
//   }
//   )



//---------- callback hell because in one callback we have given another callhell----------
// getData(1,() => {
//   console.log("getting data2.....")
//   getData(2, () => {
//     console.log("getting data3.....")
//     getData(3)      
//     } )
   
//   } )
 

// to solve callback hell problems we use promices
  
//------------------------------------Promices-------------------------------------------------

//Promices is for eventual completion of task.it is an object is JS. 
//It is an solution to callback hell

// resolve and reject are callback provided by js


//Promise is an object in javascript which have three states (1)Pending (2)Fullfill(resolved)(3)rejected
// let promise = new Promise((resolve,reject) => { //resolve and reject are two handlers

//   console.log("I am a Promise")

//   // resolve("success")//here we are calling resolve with the value success

//   reject("some error occured")//will display an error
// })



//in Promise resolve and reject are callbacks provided by js

//example of get data API
// function getData(dataId, getNextdata){//it is a function that returns a promise
//   return new Promise((resolve, reject) => {
//     setTimeout (() => {
//       // resolve("success")//promise is resolved by success
//       reject("an error occured")
//       console.log("data",dataId)
//       if(getNextdata){
//         getNextdata()
//       }
      
//     },4000  );
//   })
// }
//--------------------------------------Output-------------------------------------
// let promise=getData(123)
// undefined
// script.js:170 data 123
// promise
// Promise {<fulfilled>: 'success'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "success"
//-------------------------------------------------------------------------------------

// function getData(dataId,getNextData)
// {
//   setTimeout(() => {
//     console.log("data",dataId)
//     if(getNextData)
//       {
//       getNextData()
//      }
//   },4000)
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3)
//   }
//   )
// }
// )

//----------------------------Promices Functions--------------------------------------
//.then()
//.catch()
//promise.then(res)=>{....}// after fullfill we want to do some work at that time we use (.then)

//promise.catch(err)=>{....}//after reject or we get some error at that time use use (.catch)




// const getPromise = () => {
// return new Promise((resolve, reject) => {
//   console.log("promise fullfilled")
//   resolve("success")  
//   // reject("error")
//  })
  
// }

// let promise =getPromise()
// promise.then((res) => {//res(result) is the parameter of the function which we are using
//   console.log("promise fullfilled",res)
// }
// )

// promise.catch((err) => {//(err(error))
//   console.log("rejected",err)//err is used to access reject value/where as res is used to access fullfilled value
// }
// )



//-----------------------------Interview Question---------------------------------



  

  

 const testPromise = new Promise((resolve, reject) => {
  
  let age=4;

  if(age<=4)
  {
    resolve("value is less than 4")
  }
  else
  {
    reject("value is greater than 4")
  }
 })

 testPromise()
.then((result) => {
  console.log("res")
  .catch((err) => {
    console.log("err")
    
  })
})




// const Promise = new Promise((resolve, reject) => {
  


//   if(i%2==0)
//   {
//     console.log("even")
//     resolve(" number is even")
//   }
//   else
//   {
//     reject("odd")
//     console.log("number is odd")
//   }
// })
// Promise()
// .then((result) => {
//   console.log("res")
//   .catch((err) => {
//     console.log("err")
    
//   })
// })



//-----------------------------Promices Chain-------------------------------------------



// function asyncfunc1(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("sum data 1")
//       resolve("success")
//     },4000)
//   })
// }
// function asyncfunc2(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("sum data 1")
//       resolve("success")
//     },6000)
//   })
// }

// console.log("fetching data 1")
// let p1 = asyncfunc1()
// .then((res) => {
  
// }
// )
// console.log("fetching data 2")
// let p2 = asyncfunc2()
// .then((res) => {
  
// }
// )

//inside promise we want to return anything we pass these function (resolve and reject)
//.then will execute after the promise is resolved


//2nd method
// console.log("fetching data1....")//fetching data 1
// asyncFunc1().then((res) => {//we will call async Function and it will return promise
// })
// console.log("fetching data2......")//fetching data 2
// asyncFunc2().then((res) => {//we will call async Function and it will return promise
// })


// Chaining means we are adding more then one (.then)




//------------------------------Async-Await--------------------------------------------------

//Async function always returns a promise

//async function myFunc(){....}

//await pauses the execution of its surrounding asynchronous function until the promise is settled

//async await are two keywords in javascript whose work is to make work simpler of asynchronous programming

//we can use await inside an async function


// function api(){
//  return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data")
//       resolve("200")//200 represents a successfull API call
//     },2000)
    
//   })
// }

// async function getWeatherData(){
//   await api()
  
  
// }

// async function hello(){//async function always returns a promise
//   console.log("hello")
// }





// function getData(dataId){
//  return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data",dataId)
//       resolve("success")
//     },3000)
//   })
// }

// async function getAllData(){

//   console.log("getting data 1.....")

//   await getData(1)

//   console.log("getting data 2....")

//   await getData(2)

//   console.log("getting data 2....")

//   await getData(2)

// }
//In maximum scenarios we will use async await