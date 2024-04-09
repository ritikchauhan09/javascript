const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*()_/";
const total = document.querySelector("#total");
const upper = document.querySelector("#upperCase");
const lower = document.querySelector("#lowerCase");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const passBox = document.querySelector("#pass");


const generateRandom = (dataset) =>{
    return dataset[Math.floor(Math.random() * dataset.length)];
}
const generatePassword = (password = "") =>{
    if(upper.checked){
        password += generateRandom(upperSet);
    }
    if(lower.checked){
        password += generateRandom(lowerSet);
    }
    if(number.checked){
        password += generateRandom(numberSet);
    }
    if(symbol.checked){
        password += generateRandom(symbolSet)
    }
    if(password.length < total.value){
        return generatePassword(password);
    }
    passBox.innerText = truncateString(password, total.value);

}

document.getElementById("butn").addEventListener("click", ()=>{
    generatePassword();
})

const truncateString = (str,num) =>{
    if(str.length > num){
        let subStr = str.substring(0,num);
        return subStr;
    }else{
        return str;
    }
}