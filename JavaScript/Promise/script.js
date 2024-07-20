let rbtn = document.getElementById("btn-res")
let rjbtn = document.getElementById("btn-rej")

const p = new Promise((resolve, reject) => {
    rjbtn.addEventListener("click",() => {
      reject("error")
    }
    )
    
    rbtn.addEventListener("click", () => {
      resolve("Successful")
    }

    )
})

// console.log(p)
// p.then((data) =>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

// const xhr = new XMLHttpRequest();
// xhr.responseType='json'
// xhr.open('GET','https://dummyjson.com/products')
// xhr.send()
// console.log(xhr)




