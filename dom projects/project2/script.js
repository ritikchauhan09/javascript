const likeBtn = document.querySelector("#like");
const like1 = document.querySelector("#like1");
const image = document.querySelector("#image");
const likeImage = document.querySelector("#likeimg");
let count = 0;
likeBtn.addEventListener("click", () =>{
    if(count === 0){
        like1.src = "heart.png";
        count++;
    }
    else if(count === 1){
        like1.src = "love.png";
        count--;
    }

})

image.addEventListener("dblclick", () =>{
    likeImage.style.transform = "translate(-50%, 50%) scale(1)";
    setTimeout(()=>{
        likeImage.style.transform = "translate(-50%, 50%) scale(0)";
    },(700))
    like1.src = "heart.png";
    count++;
})
