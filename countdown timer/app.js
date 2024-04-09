let setDate = "27 march 2024 4:13 PM";
const time = document.querySelector("#btn");
document.querySelector("h3").innerHTML = setDate;
const input = document.querySelectorAll("input");
const clock = () =>{
    let dateNow= new Date();
    let datethen = new Date(setDate);
    let diff = (datethen-dateNow)/1000;
    if(diff<0)return;
    let days = Math.floor(diff /( 3600  * 24));
    input[0].value = days;
    let hours = Math.floor(diff / 3600) % 24;
    input[1].value = hours;
    let min = Math.floor(diff / 60)% 60;
    input[2].value = min;
    let sec = Math.floor(diff % 60);
    input[3].value = sec;
}
clock();
setInterval(
    () =>{
            clock();
        
    }, 1000);

time.addEventListener("click", ()=>{
    const newDate = prompt("enter new date: ");
    document.querySelector("h3").innerText = newDate;
    setDate =  newDate;
    console.log(setDate)
    clock();
})