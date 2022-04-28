// class Person{
//     constructor(name,age){
//         this.name= name;
//         this.age = age;
//     }

//     sayAge(){
//         console.log(`seb is ${this.age} years old`);
//     }

// }
// const seb = new Person('Seb', 25)

// console.log(seb.age);

// class Animal{
//     constructor(name, age, isSleeping){
//         this.name = name;
//         this.age = age;
//         this.isSleeping = isSleeping;
//     }

//     eat(){
//         console.log(`${this.name} is eating`);
//     }
//     move(){
//         console.log(`${this.name} is walking`);
//     }
    
// }

// class Bird extends Animal{
//     constructor(name, age, isSleeping, flowDistance){
//         super(name,age,isSleeping);
//         this.flowDistance = flowDistance;
//     }
    
//     fly(){
//         console.log(`${this.name} is flying`);
//     }
// }

// const obj = {
//     person: "Susanne",
//     age: 38,
//     experience:13
// }
// const {age, person} = obj
// console.log(age);
// console.log(person);


// const dominic = {
//     person: "Dominic",
//     age: 22,
//     experience:NaN
// }

// const {age,person,experience}= dominic;
// console.log(age,person,experience);

// let myName = 'dominic';

// const dominic = {
//     [myName] : 'Dominic',
//     [1+2] : 'test',
//     experience:NaN
// }

// console.log(dominic[myName]);
// console.log(dominic[1+2]);

