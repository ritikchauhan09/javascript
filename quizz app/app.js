const que = [{
    "que": "Html stands for _______?",
    "a":"Hyper Trainer Marking Language",
    "b":"Hyper Text Marketing Language",
    "c":"Hyper Text Markup Language",
    "d":"Hyper Text Markup Leveler",
    "ans":"c"
},
{
    "que": "Which of the following is the correct way to use the standard namespace in C++?",
    "a":"Using namespace std;",
    "b":"Using namespace standard;",
    "c":"Using standard namespace;",
    "d":"Standard namespace used;",
    "ans":"a"
},
{
    "que": "Method overloading is done during _______?",
    "a":"Runtime",
    "b":"Dynamic binding",
    "c":"Program compilation",
    "d":"Late binding",
    "ans":"c"
},
{
    "que": "At run-time, a Java program is nothing more than objects ‘talking’ to?",
    "a":"Other objects",
    "b":"Other methods",
    "c":"Other classes",
    "d":"Other binders",
    "ans":"a"
},{
    "que": "Which one is true?",
    "a":"The programming process is a problem solving process.",
    "b":"The programming process is a data transformation process.",
    "c":"The programming process is a coding process.",
    "d":"The programming process is problem-defining process.",
    "ans":"a"
},
]

let index = 0;
let total = que.length;
let right = 0, wrong = 0;
const question = document.querySelector("#que");
const inp = document.querySelectorAll(".options");
const btn = document.querySelector(".btn");
const load = () =>{
    if(index == total){
        return end();
    }

    reload();
    const data = que[index];
    question.innerText = `${index+1}) ${data.que}`;
    inp[0].nextElementSibling.innerText = data.a;
    inp[1].nextElementSibling.innerText = data.b;
    inp[2].nextElementSibling.innerText = data.c;
    inp[3].nextElementSibling.innerText = data.d;
}


const handleSubmit = () =>{
    const data = que[index];
    const answer = getAnswer();
    if(data.ans === answer){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    load();
    return;
    
}
const getAnswer = () =>{
    let answer = ""
    inp.forEach((input)=>{
        if(input.checked){
            answer = input.value;
        }
        
    })
    return answer;
}

const reload = () =>{
    inp.forEach((input)=>{
        input.checked = false;
    })
}

const end = () =>{
    document.querySelector(".card").innerHTML = `
    <div style="text-align:center;background-color:violet;height: 367px;color:white;
    width: 800px;border-radius:1rem;box-shadow:4px 4px 40px white;">
    <h2>Thank You For Playing</h2>
    <h1>correct = ${right} / wrong = ${wrong}</h1>
    </div>`
}

load();
