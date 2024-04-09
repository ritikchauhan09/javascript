const generate = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalID;
const startChange = function(){
    if(intervalID === null){
        intervalID = setInterval(changeColor,1000);
    }

    function changeColor(){
        document.querySelector("body").style.backgroundColor = generate() ;
    }
}
const stopChange = function(){
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector("#start").addEventListener("click", startChange);

document.querySelector("#stop").addEventListener("click", stopChange);