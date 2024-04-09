const head1 = document.querySelectorAll(".head");

head1.forEach((head)=>{
    head.addEventListener("mouseenter", (e)=>{
        head.childNodes[3].style.opacity = 1;
    })
    head.addEventListener("mouseleave", (e)=>{
        head.childNodes[3].style.opacity = 0;
        // head.childNodes[3].style.backgroundColor = "black";
    })
    head.addEventListener("mousemove", (e) =>{
        head.childNodes[3].style.left = e.x + "px";
        head.childNodes[3].style.top = e.y + "px";
    })
    
})

