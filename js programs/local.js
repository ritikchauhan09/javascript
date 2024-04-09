const userName = document.querySelector("#name");
const pass = document.querySelector("#password");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const button = document.querySelector(".btn button");

button.addEventListener("click", (e)=>{
    e.preventDefault;
    localStorage.setItem("name", userName.value);
    localStorage.setItem("password", pass.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("number", number.value);
    window.location.href = "login.html";
    alert("you have signed in as a user!!!");
});


