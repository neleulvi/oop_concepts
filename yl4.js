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
class Square extends Shape {
    #side
    constructor(color, side){
        super(color)
        this.#side = side
    }
    getArea (){
        return this.#side*this.#side
    }
    print (){
        return 'Square (a: {side}, color: {color})'
    }
}
class Rectangle extends Shape {
    #width
    #length
    constructor (color, width, length){
        super(color)
        this.#width = width;
        this.#length = length;
    }
    getArea (){
        return this.#width*this.#length
    }
    print (){
        return 'Rectangle (l: {length}, w: {width}, color: {color})'
    }
}

class Paint {
    constructor(){
        this.shapes = [];
    }
    addShape(shape){
        if(shape instanceof Shape){
            //instanceof tagastab true, kui on pandud kas ring, ruut, ristkülik
            this.shapes.push(shape)
            
        }
    }
    getShapes(){
        return this.shapes
    }
    calculateTotalArea() {
        //meetod reduce läbib massiivis kõik shapes elemendid, 0 tähendab, et iteratsioon algab nullist
        return this.shapes.reduce((total, shape) => total + shape.area (), 0)
    }
    getCircles (){

        return this.shapes.filter(shape => shape instanceof Circle)
    }
    getRectangles (){
        return this.shapes.filter(shape => shape instanceof Rectangle)
    }
    getSquares (){
        return this.shapes.filter(shape => shape instanceof Square)
    }
}


const circle1 = new Circle ('blue', 5)
console.log(circle1.getArea())

const square1 = new Square ('green', 5)
console.log(square1.getColor())
console.log(square1.getArea())

const rectangle1 = new Rectangle ('yellow',5, 6)
console.log(rectangle1.getColor())
console.log(rectangle1.getArea())

const paint = new Paint ()
paint.addShape(new Square (5))
console.log(paint.getShapes())
