// const obj = {
//     name : "ritik",
//     email : "123@gmail.com",
//     number : 1234567878,
// }

// console.log(obj);


// class person {
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }

//     myName() {
//         console.log(`my name is ${this.name}`);
//     }

//     myAge(){
//         console.log(`my age is ${this.age}`);
//     }
// }


// let obj = new person("ritik", 23);
// obj.myName();
// obj.myAge();


class father{
    constructor(name,surname,property,pesa){
        this.name = "name",
        this.surname = "surname",
        this.property = "property",
        this.pesa = "pesa"
    }
    name(){
        console.log("my name is ritik")
    }
}

class son extends father{
    constructor(name,surname,property,pesa){
        super(name,surname,property,pesa)
    }
};

let obj = new son();
