const header = document.querySelector(".header");
const taskContainer = document.querySelector(".inp-container")
const addBtn = document.querySelector("#addBtn");
const done = document.querySelector("#done");


addBtn.addEventListener("click",()=>{
    taskContainer.removeAttribute("hidden");
    header.setAttribute("hidden", true)

})




// get data

const getTask = JSON.parse(localStorage.getItem("taskName")) || [];
const getDesc = JSON.parse(localStorage.getItem("taskDesc")) || [];

console.log(getTask,getDesc);


// add data

const addTask = document.querySelector("#addTask");
const description = document.querySelector("#Description");

done.addEventListener("click",()=>{
    // let titleValue = {[getTask.length] : addTask.value}
    // let desValue = {[getDesc.length] : description.value}
    // console.log(addTask.value, description.value);
    getTask.push(addTask.value);
    getDesc.push(description.Value);
    localStorage.setItem("taskName", JSON.stringify(getTask));
    localStorage.setItem("taskDesc", JSON.stringify(getDesc));

})

// show data


const itemList = document.querySelector("#tasks");
const showTask = () =>{
    getTask.forEach(element => {
        console.log(element);
        let li = document.createElement("li");
        let btn = document.createElement("button");
        li.textContent = element;
        btn.innerText = "delete";
        itemList.append(li);
        itemList.append(btn);

        btn.addEventListener("click", () =>{
            localStorage.();
            li.remove();
            btn.remove();
        })
    });
}                                  
showTask();