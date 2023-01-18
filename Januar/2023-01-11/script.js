function makeColor() {
    let r = Math.round(Math.random() * 256)   
    let g = Math.round(Math.random() * 256)   
    let b = Math.round(Math.random() * 256)   
    return `rgb(${(r)}, ${g}, ${b})`
}

let squareArr=document.querySelectorAll('.negyzet')
let colors = []
let msg = document.querySelector(".msg")

function init() {
    colors = []
    for(let obj of squareArr){
        let color = makeColor()
        colors.push(color)
        obj.style.backgroundColor = color
    }    
    let index = Math.round(Math.random() * 5)
    document.getElementById("color").innerHTML = colors[index]
    document.querySelector("h1").style.backgroundColor = "white"
    msg.innerHTML = ""
}

function verify(e) {
    console.log(e.target.style.backgroundColor)
    let clickedColor = e.target.style.backgroundColor
    if(clickedColor == document.getElementById("color").innerHTML){
        document.querySelector("h1").style.backgroundColor = clickedColor
        msg.innerHTML = "😀"
    }else{
        msg.innerHTML = "😒"
    }
}

init()