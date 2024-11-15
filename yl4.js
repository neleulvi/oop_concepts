//polümorfism
//sööma-meetod, rakendus-lusikas, kahvel, pulgad
//ülemklass ja alamklass, meetod sama, erinev sisu
//meetod käitub sõltuvalt klassist erinevalt
//alamklass pärib(inhertits) ülemklassi omandused
//alamklass laiendab ülemklassi(extends), lisandub spetsiifilised atribuudid
//alamklass kirjutab üle aka override

class Shape {
    #color
    constructor(color){
        this.#color = color;
    }
    getArea (){
        return null
    }
    getColor (){
        return this.#color
    }
    setColor (color){
        this.#color = color
    }
}
const shape1 = new Shape('red')
console.log(shape1.getColor())//see on functs, kasuta sulge

class Circle extends Shape{ //alamklass extends ülemklass
    #radius
    constructor(color, radius){
        //super sest pärib ülevalt 
        super(color)
            this.#radius = radius
        }
        getArea (){
            return Math.PI * Math.pow(this.#radius, 2)
        }  
        print(){
            return 'Circle (r: ${(this.#radius)}, color: ${(this.#color)})'
        }     
} 

const circle1 = new Circle ('blue', 5)
console.log(circle1.getArea())


