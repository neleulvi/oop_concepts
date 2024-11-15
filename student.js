//klassid üleval, objektid all
//klassid algavad suure tähega
//klassis ei kasuta sõna function, kasuta tavalist lähenemisviisi, siin ei ole =>
class Student {
    constructor(name){
        this.name = name;
        this.finished = false;
    }
}


//loo uus muutuja ja anna talle nimi, väärtuse saamiseks kasutame new Operaator
//kasutame const mitte let, obj, masiiv, fuktsioon, keeruline süs rohkemate väärtustega, 
//rakenda const mitte let, objekt on konstantne
const student = new Student('John')
console.log(student)
console.log(student.name) //John
console.log(student.finished) //John, false
//kui tahad,et john lõpetas kooli
student.finished = true
console.log(student)