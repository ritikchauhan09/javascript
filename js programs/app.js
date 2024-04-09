// add two numbers

// let num1 = parseInt(prompt("enter the first number: "));
// let num2 = parseInt(prompt("enter the second number: "));
// alert(`the sum of ${num1} + ${num2} = ${num1+num2}`);


// ---------------------------------------------------------------------------------------

// multiplication of two numbers

// let num1 = parseInt(prompt("enter the first number: "));
// let num2 = parseInt(prompt("enter the second number: "));
// console.log(`the product of ${num1} * ${num2} = ${num1*num2}`);

// ---------------------------------------------------------------------------------------

// add float numbers

// let num1 = parseFloat(prompt("enter the first number: "));
// let num2 = parseFloat(prompt("enter the second number: "));
// console.log(`the sum of ${num1} + ${num2} = ${num1+num2}`);

// ---------------------------------------------------------------------------------------

// even odd number

// let num = parseInt(prompt("enter the number: "));
// if(num%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// ---------------------------------------------------------------------------------------

// check if number is positive, negative or zero

// let num = parseInt(prompt("enter the number: "));
// if(num == 0){
//     console.log("zero")
// }else if(num < 0){
//     console.log("negative")
// }else{
//     console.log("positive");
// }


// // ---------------------------------------------------------------------------------------


// swap two numbers

// let num1 = parseInt(prompt("enter the first number: "));
// let num2 = parseInt(prompt("enter the second number: "));
// console.log(`before swapping num1 = ${num1} and num2 = ${num2}`);
// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;
// console.log(`after swapping num1 = ${num1} and num2 = ${num2}`);


// ---------------------------------------------------------------------------------------

// sum of natural numbers

// let num = parseInt(prompt("enter the number: "));
// let result = 0;
// for(let i=1;i<=num;i++){
//     result += i;
// }
// console.log(result);


// ---------------------------------------------------------------------------------------

// armstrong numbers

// let num = parseInt(prompt("enter the number: "));
// let temp = num;
// let res = 0;
// while(temp){
//     rem = temp%10;
//     res += rem*rem*rem;
//     temp = Math.floor(temp/10);
// }
// if(res===num){
//     console.log("this is an armstrong number");
// }else{
//     console.log("not am armstrong number");
// }


// ---------------------------------------------------------------------------------------

// palindrome

// let num = parseInt(prompt("enter the number: "));
// let temp = num;
// let res = 0;
// while(temp){
//     let rem = temp%10;
//     res = res*10 + rem;
//     temp = Math.floor(temp/10);
// }
// if(res===num){
//     console.log("palindrome");
// }else{
//     console.log("not a palindrome");
// }

// ---------------------------------------------------------------------------------------

// area of traingle
// when base and height are given

// let base = parseInt(prompt("enter the base: "));
// let height = parseInt(prompt("enter the height: "));

// let area = (base*height)/2;
// console.log(area);

// when all sides are known

// let side1 = parseInt(prompt("enter the side1: "));
// let side2 = parseInt(prompt("enter the side2: "));
// let side3 = parseInt(prompt("enter the side3: "));

// let s = (side1 + side2 + side3)/2;

// let area = Math.sqrt(s* ((s-side1) * (s-side2) * (s-side3)));
// console.log(area);

// ---------------------------------------------------------------------------------------

// convert celsius to fahrenheit

// function fht(c){
//     let feh = c*9/5 + 32;
//     return feh;
// }
// let celsius = parseInt(prompt("enter the celsius temprature: "));
// console.log(fht(celsius));

// ---------------------------------------------------------------------------------------

// generate random number
// using Math.random() function

// let start = parseInt(prompt("enter the start range: "));
// let end = parseInt(prompt("enter the end range: "));

// for(let i=0;i<=10;i++){
//     console.log(parseInt(Math.random()* (end-start) + start));
// }


// ---------------------------------------------------------------------------------------

// check prime number

// let num = parseInt(prompt("enter the number: "));
// let flag = false;
// for(let i=2;i<num;i++){
//     if(num%i==0){
//         flag=true;
//         break;
//     }
// }
// if(flag){
//     console.log("not prime");
// }else{
//     console.log("prime");
// }


// ---------------------------------------------------------------------------------------

// find largest among three

// let input = prompt("enter three numbers separated by spaces: ");
// let [num1,num2,num3] = input.split(" ").map(num=> parseInt(num.trim()));
// if(num1 > num2){
//     if(num1 > num3){
//         console.log(num1);
//     }else{
//         console.log(num3);
//     }
// }else{
//     if(num2 > num3){
//         console.log(num2);
//     }else{
//         console.log(num3);
//     }
// }

// ---------------------------------------------------------------------------------------

// find all prime numbers in an interval

// let start = parseInt(prompt("enter the start range:"));
// let end = parseInt(prompt("enter the end range: "));

// for(let i=start;i<end;i++){
//     let flag = false;
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag = true;
//             break;
//         }
//     }
//     if(flag === false){
//         console.log(i);
//     }
// }


// ---------------------------------------------------------------------------------------

// check if two number have the same last digit

// let num1 = parseInt(prompt("enter the first number: "));
// let num2 = parseInt(prompt("enter the second number: "));

// let lastNum1 = num1%10;
// let lastNum2 = num2%10;

// if(lastNum1 === lastNum2){
//     console.log("true");
// }else{
//     console.log("false");
// }

// ---------------------------------------------------------------------------------------

// guess number


// let randNum = parseInt(Math.random()* 25);
// while(true){
//     let num = parseInt(prompt("guess the number between 1 - 25: "));
//     if(num === randNum){
//         alert("you won");
//         break;
//     }else if(num < randNum){
//         alert("entered number is smaller");
//         continue;
//     }else if(num > randNum){
//         alert("entered number is greater");
//         continue;
//     }
//     else{
//         alert("try again");
//         continue;
//     }
// }


// ---------------------------------------------------------------------------------------

// split a number into individual digits

// let num = prompt("enter the number:");
// let arr = [];

// for(let i=0;i<num.length;i++){
//     arr[i] = parseInt(num[i]);
// }
// console.log(arr);


// ---------------------------------------------------------------------------------------

// find missing number

// let arr = [1, 4, 3, 2, 6, 5, 7, 10, 9];
// arr = arr.sort((a,b)=>a-b);
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     if(arr[i]+1 === arr[i+1]){
//         continue;
//     }else{
//         console.log(arr[i]+1);
//         break;
//     }
// }


// ---------------------------------------------------------------------------------------

// find the factors of the number

// let num = parseInt(prompt("enter the number: "));
// for(let i=1;i<=num;i++){
//     if(num%i==0){
//         console.log(i);
//     }
// }


// ---------------------------------------------------------------------------------------

// program to compute power of a number

// let base = parseInt(prompt("enter the base: "))
// let pow = parseInt(prompt("enter the power: "))
// let res = 1;
// for(let i=0;i<pow;i++){
//     res *= base;
// }
// console.log(res);

// ---------------------------------------------------------------------------------------

// find the square root

// let num = parseInt(prompt("enter the number:"));
// console.log(Math.sqrt(num));


// ---------------------------------------------------------------------------------------

