


let users=["Elcin","Oqtay","Aysel","Saida"]
let input=document.querySelector("#input")
let button1=document.querySelector("#button1")
let button2=document.querySelector("#button2")
let button3=document.querySelector("#button3")
let h2=document.querySelector("#h2")
let p=document.createElement("p")
p.innerHTML=users
document.body.appendChild(p)

button1.addEventListener("click",function () {
    
    users.push(input.value)
    console.log("add complated");
    
    p.innerHTML=users
document.body.appendChild(p)
})

button2.addEventListener("click", ()=> {
    users.pop()
    console.log(users);
    
    p.innerHTML=users
document.body.appendChild(p)
})

button3.addEventListener("click", ()=> {
    users.shift()
    console.log(users);
    
    p.innerHTML=users
document.body.appendChild(p)
})
button4.addEventListener("click", ()=> {
    users.unshift(input.value)
    console.log(users);
    
    p.innerHTML=users
document.body.appendChild(p)
})
button5.addEventListener("click", ()=> {
    users=users.filter((item)=>{
        // return item !== input.value
        if (item!==input.value) {
            return item
        }
    })
    console.log(users);
    
    p.innerHTML=users
document.body.appendChild(p)
})
button6.addEventListener("click", ()=> {
    users.splice(3,0,input.value)
    console.log(users);
    
    p.innerHTML=users
document.body.appendChild(p)
})






    







