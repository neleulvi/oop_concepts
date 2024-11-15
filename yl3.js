//kapseldamine aitab peita sisu projektis, et see oleks kaitstud, siis ei saa klassi sisu muuta.
//ligipääsu piiramine meetoditele ja muutujatele, väljast ei saa muuta
//js kasutatakse #
//getter, keyword get
//setter, keyword set
//get ja set asemel saab tavalisi meetodeid kasutada, mis määravbad vastavale klassile väärtuse 

class Student {
    #name
    #id
    #status

    constructor(name, id,){
        this.#name = name
        this.#id = id
        //constructori sulgudesse ei pane statust sest see peab olema siin vaikimisi võimalus
        this.#status = 'Active';
    }
    getId (){
        return this.#id
    }
    setName(name){
        this.#name = name
    }
    getName(){
        return this.#name
    }
    getStatus(){
        return this.#status
    }
    setStatus(status){
        const statuses = ['Active', 'Expelled', 'Finished', 'Inactive']
        if(statuses.includes(status)){
            this.#status = status
        }

    }

}

const student1 = new Student('John', 1)
console.log(student1) // {} konsoolis, sest muutujad on privaatsed
console.log(student1.getName()) // getName() sest see on functsioon, peavad sulud ka olema
student1.setName('Alo') //siin on punkt, mitte = sest see objekt, funkts ja muutuja kutsun esile punktiga
console.log(student1.getName()) //eelmises panid set ja nüüd uue samiseks get
console.log(student1.getStatus())
student1.setStatus('Finished')//muutused kutsud esile muutujates ja funktsioonides punktiga
console.log(student1.getStatus())//sulud ka sest funktsioon