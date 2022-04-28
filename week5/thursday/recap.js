class Person{
    constructor(name,age){
        this.name= name;
        this.age = age;
    }

    sayAge(){
        console.log(`seb is ${this.age} years old`);
    }

}
const seb = new Person('Seb', 25)

console.log(seb.age);

