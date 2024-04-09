document.cookie = "name=ritik";
document.cookie = "name1=rachit";
document.cookie = "name=ritika";

const key = prompt("enter the key: ");
const value = prompt("enter the value: ");
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
console.log(document.cookie);
 