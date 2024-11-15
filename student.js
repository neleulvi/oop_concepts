//klassid üleval, objektid all
//klassid algavad suure tähega
//klassis ei kasuta sõna function, kasuta tavalist lähenemisviisi, siin ei ole =>
class Student {
    constructor(name){
        this.name = name;
        this.finished = false;
    }
}
//
const student = new Student('John')
console.log(student)
console.log(student.name) //John
console.log(student.finished) //John, false