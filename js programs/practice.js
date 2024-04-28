// this is a practice problem 1

// const profile = {
//     userName:'ritik chauhan',
//     follow: true,
//     posts:195,
//     followers:569,
//     following:4,
//     handleName:'@chauhanritik',
//     bio:'entrepreneur',

// }
// console.log(profile)


// --------------------------------------------------------------------------

// get input from user using prompt. and checck the number is a multiple of 5 or not.

// let num = prompt("enter a number:");
// if(num%5==0){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }

// --------------------------------------------------------------------------


// write a code which can give grades to students according to their scores:

// let num = prompt("enter the marks: ");
// if(num>80 && num <100){
//     console.log("A");
// }
// else if(num>70 && num <79){
//     console.log("B");
// }
// else if(num>60 && num <69){
//     console.log("C");
// }
// if(num>50 && num <59){
//     console.log("D");
// }
// if(num>0 && num <49){
//     console.log("F");
// }

// --------------------------------------------------------------------------

// even numbers from 0 to 100

// for(let i = 0;i<100;i++){
//     if(i%2==0){
//         console.log(i,"is even");
//     }
// }


// --------------------------------------------------------------------------

// const PNUM = 12;
// let con = true;
// while(con){
//     let num = prompt("guess the number between 1 - 25");
//     if(num == PNUM){
//         console.log("correct guess!!! congratulatios");
//         con = false;
//     }
//     else{
//         console.log("try again!!!");
//     }
// }


// --------------------------------------------------------------------------

// prompt the user to enter their full name. generate a username for them based on the input.
// start username with @, followed by their full name and ending with the fullname length.

// let username = prompt("enter the username");
// let len= username.length;
// console.log(`@${username}${len}`);


// --------------------------------------------------------------------------

// find average marks of the entire class

// let arr = [85,97,44,37,76,60];
// let sum=0;

// for (const i of arr) {
//     sum += i;
// }
// console.log(sum/arr.length);


// --------------------------------------------------------------------------


// change the array to store final price after applying offer

// let arr1= [250,645, 300, 900, 50];
// let arr2 = [];
// for(const i in arr1){
//     let result = arr1[i] * 10/100;
//     arr2[i]= arr1[i] - result;
// }
// console.log(arr2);


// --------------------------------------------------------------------------

// slice and splice

// let arr = [1,2,3,4,5,6,7];

// slice

// console.log(arr.slice(2,6));

// ṛeplace element

// arr.splice(2,1,0);
// console.log(arr);

// add elements

// arr.splice(2,0,10,20,30);
// console.log(arr);

// delete element

// arr.splice(2,3);
// console.log(arr);



// --------------------------------------------------------------------------

// let companies = ["blomberg","microsoft","uber","google","ibm","netflix"];

// companies.splice(0,1);
// companies.splice(1,1,"ola");
// companies.push("amazon");
// console.log(companies);

 

// --------------------------------------------------------------------------

// functions

// function printHello(){
//     console.log("hello");
// }

// printHello();
// printHello();
// printHello();
// printHello();


// --------------------------------------------------------------------------

// arrow function 

// const sumnum = (a,b) =>{
//     return a+b;
// }

// console.log(sumnum(2,3));


// --------------------------------------------------------------------------

// create a function using the function keyword 
// return the number of vowels in the string

// let str = 'hello';

// function vowel(str){
//     let count=0;
//     for(const i of str){
//         if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(vowel(str));

// same task using arrow function

// const vowel = (str) =>{
//     let count=0;
//         for(const i of str){
//             if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
//                 count++;
//             }
//         }
//         return count;
// }
// console.log(vowel(str));

// --------------------------------------------------------------------------

// print the square of each value using the foreach loop

// let arr= [2,3,4,5,6,7]

// arr.forEach((value) => {
//     console.log(value*value);
// });

// arr.map((value)=>{
//     console.log(value);
// })


// --------------------------------------------------------------------------


// given array of marks of students. filter out the marks of students that score 90+

// let marks = [50,60,95,100,38,93];

// let result = marks.filter((x)=>{
//     if(x>90){
//         return x;
//     }
// })

// console.log(result);


// --------------------------------------------------------------------------

// let num = parseInt(prompt("enter a number: "));
// let arr= []
// for(let i=1;i<=num;i++){
//     arr[i] = i;
// }
// let addsum = arr.reduce((x,y)=>{
//     return x+y;
// })

// let mul = arr.reduce((x,y)=>{
//     return x*y;
// })
// console.log(addsum,mul);


// --------------------------------------------------------------------------


// let head = document.querySelector("h2");
// head.innerText = "from apna college student"

// let divv = document.querySelectorAll(".box");
// divv[0].innerHTML = 1;
// divv[1].innerHTML = 2;
// divv[2].innerHTML = 3;


// --------------------------------------------------------------------------

// let btn = document.createElement("button");

// btn.innerText = "click me";

// btn.style.backgroundColor = "green";
// btn.style.color = "white";
// btn.style.borderBlockColor = "red"
// let body = document.querySelector("body");

// body.append(btn);


// --------------------------------------------------------------------------


// let p = document.createElement("p");

// p.classList.add("para");
// p.innerText = "this is a paragraph";
// p.style.color = "white";
// p.style.backgroundColor = "green";


// body.prepend (p);

// console.log(p);


// --------------------------------------------------------------------------

// let btn = document.querySelector('button');
// let num = 0;

// btn.addEventListener("click", (e)=>{
//     console.log("hello");
//     console.log(e.type);
// });

// btn.addEventListener("click", (e)=>{
//     console.log("world");
//     console.log(e.target);
// });

// --------------------------------------------------------------------------

// let body = document.querySelector("body");

// let btn = document.querySelector("button");
// let currmode = "light";
// const color = () =>{
//     if (currmode === "light"){
//         currmode = "dark";
//         body.style.backgroundColor = "white";
//     }
//     else{
//         currmode = "light";
//         body.style.backgroundColor = "black";

//     }
//     console.log(currmode);
// }


// btn.addEventListener("click", color);


// --------------------------------------------------------------------------


// class user{
//     constructor(name,email){
//         this.name = name,
//         this.email = email
//     }

//     viewData(){
//         console.log(`this is website data. this is name : ${this.name} and this is email : ${this.email}`);

//     }

// }

// class admin extends user{
//     editData(){
//         console.log()
//     }
// }
// let obj = new user('ritik','ritik@gmail.com');


// --------------------------------------------------------------------------

// function hello(){
//     console.log("hello");
// }

// setTimeout(hello, 5000);

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 3000);
//     })
// }

// promise chain

// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     console.log("success");
// })

// callback hell
// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3)
//     });
// });


// let promise = new Promise((resolve, reject) =>{
//     console.log("i am a promise");
//     reject("some error");
// })

// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise");
//         // resolve("success");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((result) => {
//     console.log("promise fulfilled",result)
// }).catch((err) => {
//     console.log("rejected",err);
// });


// promise chaining
// function async1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         }, 4000);
//     });
// };

// function async2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("success");
//         }, 4000);
//     });
// };


// console.log("fetching data1");
// let p1 = async1();
// p1.then((result) => {
//     console.log(result)
//     console.log("fetching data2");
//     let p2 = async2();
//     p2.then((result) => {
//         console.log(result)
//     }).catch((err) => {
//         console.log(err);
//     });
// }).catch((err) => {
//     console.log(err);
// });



// async await

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     })
// }
// async function getData(){
//     await api();
// }

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);
//     });
// }

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }


// fetch api

// const url = "https://cat-fact.herokuapp.com/facts";
// let para = document.querySelector("#para");
// let btn = document.querySelector("#btn");



// const getCat = async() =>{
//     let response = await fetch(url);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].text)
//     para.innerText = data[0].text;
// }

// function getCat(){
//     fetch(url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         para.innerText = data[0].text;

//     });
// }

// btn.addEventListener("click", getCat);



// callback function

// function hello(a, b){

//     console.log(a);
//     b();
// }

// let a = "hello";
// hello(a,function(){
//     console.log("world");
// });



// reverse a string

// let str = "welcome to this javascript course";
// console.log(str.length)
// str = str.split(" ");
// let str2 = "";
// for(let i=0;i<str.length;i++){
//     let str1 = str[i];
//     for(let j=str1.length-1;j>=0;j--){
//         str2 += str1[j];
//     }
//     str2 += " ";
// }
// str2 = str2.trim();
// console.log(str2)

// another method

// let reverseSentence = reverseStr(str, "");

// let reverseWord = reverseStr(reverseSentence, " ")

// function reverseStr(str1, sep){
//     return str1.split(sep).reverse().join(sep);
// }

// console.log(reverseWord);



// check if an object is an array or not USING JQUERY

// let arr = [1,2,3,4];
// if($.isArray(arr)){
//     console.log("array")
// }
// else{
//     console.log("not an array");
// }



// 

// function createBase(b_num){
//     return function(n){
//         return b_num + n;
//     }
// }

// var addSix = createBase(6);
// console.log(addSix(10));
// console.log(addSix(21));



// fizz buzz

// for(let i=1;i<=100;i++){
//     let a = i % 3 == 0;
//     let b = i % 5 == 0;
//     console.log(a ? (b ? "fizzbuzz" : "fizz") : b ? "buzz" : i);
// }


// return true if they are anagrams of one another

// let str1 = "Mary";
// let str2 = "Army";

// function isAnagram(s1,s2){
//     let a = s1.toLowerCase();
//     let b = s2.toLowerCase();

//     a = a.split("").sort().join("");
//     b = b.split("").sort().join("");
//     console.log(a,b);

//     return a == b;
// }

// console.log(isAnagram(str1, str2))



// reverse a string

str = "hello my name is ritik";

// function revString(s){
//     s = s.split(" ");
//     let s1 = "";
//     console.log(s.length);
//     for(let i = 0; i<s.length; i++){
//         let str = s[i];
//         for(let j = str.length - 1 ; j >= 0; j--){
//             s1 += str[j];
//         }
//         s1 += " ";
//     }
//     return s1.trim(" ");
// }




// function revstr(s){
//     s = s.split(" ");
//     let s1 = ""
//     for(let i=s.length-1; i>=0; i--){
//         s1 += s[i] + " ";
//     }

//     return s1.trim(" ");
// }


// console.log(revstr(str))



// check palindrome

