//Dom Manipulation

// (Attributes)

//getAttribute(attr)// to get the attribute value

//setAttribute(attr,value)//to set/change the attribute val th


//(Style)

//node.style

// let div = document.querySelector("div")
// console.log(div)

// let id = div.getAttribute("id")//here get attribute is a method in which id attribute value is given
// console.log(id)//box

// let name = div.getAttribute("name")
// console.log(name)//JS Div


// let parah = document.querySelector("p")
// console.log(parah.getAttribute("class"))//para 

// let parah = document.querySelector("p")
// console.log(parah.setAttribute("class","umarpara"))//class attribute value will become umarpara


// let div = document.querySelector("div")
// console.log(div)

// let p= document.querySelector("p")
// console.log(p)


// div.style.backgroundColor="green"

// p.style.backgroundColor="red"




// DOM Manipulation (Insert Elements)

let newBtn = document.createElement("button")
newBtn.innerText="click Me!"
console.log(newBtn)


// let div = document.querySelector("div")
// div.append(newBtn)//wil display button in the last


// let div = document.querySelector("div")
// div.prepend(newBtn)//wil display the button in the start

// let div = document.querySelector("div")
// div.before(newBtn)//will display the button before starting the div

// let div = document.querySelector("div")
// div.after(newBtn)//will display the button after the div 


// let p = document.querySelector("p")
// p.after(newBtn)//button wil display after the paragraph



let newHeading = document.createElement("h1")
newHeading.innerHTML = "<i>Hi I am ,new </i>"


document.querySelector("body").prepend(newHeading);


// let p = document.querySelector("p")
// p.remove()//will delete the paragraph

// newHeading.remove()//will remove the new heading directly