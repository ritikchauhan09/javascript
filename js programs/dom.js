let newBtn = document.createElement("button");

newBtn.innerText= "click me";

let div1 = document.querySelector(".div1")
div1.after(newBtn);

newBtn.remove();

let div = document.createElement("div");

div.innerHTML = "this is a div";

div1.appendChild(div);

div1.removeChild(div);