const uName = document.querySelector("#uname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const comment = document.querySelector("#comment");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    if(uName.value === ""){
        alert("enter the user name");
    } 
    if(email.value === ""){
        alert("enter your email address");
    }
    if(phone.value === ""){
        alert("enter your mobile number");
    }
    if(comment.value === ""){
        alert("write a comment");
    }

    
})