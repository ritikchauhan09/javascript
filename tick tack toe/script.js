let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msgbox = document.querySelector(".msg");
let msg = document.querySelector("#messg");

let turn0 = true;

let winPat  = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

]

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkwiner();
        
        
    })

});

const restart = () =>{
    turn0 = true;
    enableBox();
    msgbox.classList.add("hide");
}

const disbtn = () =>{
    for (const box of boxes) {
        box.disabled = true;
    }
};
const enableBox = () =>{
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
let showWinner = (winner) =>{
    msg.innerText = `congratulations winner is ${winner}`;
    msgbox.classList.remove("hide");
    disbtn();
};


let checkwiner = () =>{
    for (let pat of winPat) {
        let pos1 = boxes[pat[0]].innerHTML;
        let pos2 = boxes[pat[1]].innerHTML;
        let pos3 = boxes[pat[2]].innerHTML;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner is", pos1);
                showWinner(pos1);
            }
        }
    }
}

newGame.addEventListener("click", restart);
resetbtn.addEventListener("click", restart);
// let resetgame = () =>{
//     turn0 = 
// }