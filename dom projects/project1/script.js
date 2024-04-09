const isStatus = document.querySelector("h5");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");

add.addEventListener("click", ()=>{
    if(isStatus.innerText === "Stranger"){
        add.innerText = "Remove";
        add.style.backgroundColor = "grey";
        add.style.color = "black";
        isStatus.innerText = "Friend";
        isStatus.style.color = "green";
    }
    else if(isStatus.innerText === "Friend"){
        add.innerText = "Add Friend";
        add.style.backgroundColor = "rgb(2, 64, 123)";
        add.style.color = "white";
        isStatus.innerText = "Stranger";
        isStatus.style.color = "red";
    }
    
    
})

// remove.addEventListener("click", () =>{
//     isStatus.innerText = "Stranger";
//     isStatus.style.color = "red";
// })