const randColor = ["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF",'#000000',"#FFFFFF","#808080","#A52A2A","#FFA500","#800080","#FFC0CB","#FFD700","#C0C0C0","#CD7F32","#008080","#000080","#800000","#808000","#8B0000","#006400","#00008B","#D3D3D3","#A9A9A9","#D2B48C","#8B4513","#FFDAB9","#FF8C00","#E6E6FA", "#4B0082","#FFB6C1","#FF69B4","#FFEC8B","#B8860B","#EAEAEA", "#848484","#00CED1","#008B8B", "#0000CD","#000080","#B03060","#800000","#6B8E23","#556B2F"];
const btn = document.querySelector("#btn");
const para = document.querySelector("p");
const main = document.querySelector(".main");
btn.addEventListener("click", ()=>{
    let randIndex = Math.floor(Math.random(randColor)* randColor.length);
    para.innerText = randColor[randIndex];
    main.style.backgroundColor= randColor[randIndex];
})
