const sayDate = function(){
    console.log("hello", Date.now())
}

const ref = setInterval(sayDate,1000);

document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(ref);
})

document.querySelector("#start").addEventListener("click", function(){
    setInterval(sayDate,1000);
})