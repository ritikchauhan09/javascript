const arr =[{
    "dp":"imggirl.jpg",
    "story":"https://i.pinimg.com/originals/3e/4e/3e/3e4e3ef7b9fa4812ab8a4b9ca74a9f3c.jpg",

},
{
    "dp":"https://th.bing.com/th/id/OIP.0I07lAl8zIEmIBicLXqLIQHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "story":"https://th.bing.com/th/id/OIP.wKBvF7oZOndMJDGqahapfwAAAA?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7",

},
{
    "dp":"https://th.bing.com/th/id/OIP.0DwUOybdwSMZxyBjCYED3AHaJ3?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "story":"https://th.bing.com/th/id/OIP.k69i6fk1aw7PQA9McLsfVgHaJQ?w=186&h=233&c=7&r=0&o=5&dpr=1.3&pid=1.7",

},
{
    "dp":"https://th.bing.com/th/id/OIP.idKAz5kN0BHVOmbeQY0ZOgHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "story":"https://i.etsystatic.com/10944019/r/il/769dca/884655377/il_1588xN.884655377_hm1q.jpg",

},

];

const story = document.querySelector(".stories");
const sDisplay = document.querySelector(".full-screen");
let clutter = "";
arr.forEach((e,i)=>{
    clutter += `<div class="story">
                    <img id=${i} src=${e.dp} alt="">
                </div>`;
})
document.querySelector(".stories").innerHTML = clutter;
story.addEventListener("click", (e)=>{
    let pic = arr[e.target.id].story;
    sDisplay.style.display = "block";
    sDisplay.style.backgroundImage = `url(${pic})`;
    setTimeout(()=>{
        sDisplay.style.display = "none";
    },3000)

})