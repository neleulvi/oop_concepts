class Person {
    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.age = 0
    }
}
class Student {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const person1 = new Person
person1.firstName = 'John';
person1.lastName = 'Doe';
person1.age = 32
//console.log(person1)

const person2 = new Person;
person2.firstName = 'Mary';
person2.lastName = 'Doe';
person2.age = 30;
//console.log(person2)

const person3 = new Person;
person3.firstName = 'Nele';
person3.lastName = 'Ulvi';
person3.age = 30;
//console.log(person3)

const student1 = new Student('John', 'Doe', 32);
const student2 = new Student('Mary', 'Doe', 30);
const student3 = new Student('Nele', 'Ulvi', 33)
//console.log(student1)
//console.log(student2)
//console.log(student3)
console.log(person1, person2, person3, student1, student2, student3)