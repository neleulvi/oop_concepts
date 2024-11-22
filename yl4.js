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
//console.log(shape1.getColor())//see on functs, kasuta sulge

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
            return `Circle (r: ${(this.#radius)}, color: ${(this.getColor())})`
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
        return `Square (a: ${(this.#side)}, color: ${(this.getColor())})`
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
        return `Rectangle (l: ${(this.#length)}, w: ${(this.#width)}, color: ${(this.getColor())})`
    }
}
 // returnis peavad olema bäktikid 
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
 
        this.calculateTotalArea
        this.shapes.forEach(shape =>{
            this.totalArea = shape.getArea()
        })
        return this.totalArea
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


const circle = new Circle ('blue', 5)
console.log(circle.getColor())
console.log(circle.getArea())
console.log(circle.print())

const circle1 = new Circle ('pink', 10)
console.log(circle1.getColor())
console.log(circle1.getArea())
console.log(circle1.print())

const square = new Square ('green', 5)
console.log(square.getColor())
console.log(square.getArea())
console.log(square.print())

const rectangle = new Rectangle ('yellow',5, 6)
console.log(rectangle.getColor())
console.log(rectangle.getArea())
console.log(rectangle.print())

const paint = new Paint ()
paint.addShape(circle)
paint.addShape(circle1)
paint.addShape(square)
paint.addShape(rectangle)
console.log(paint.getShapes())
console.log(paint.calculateTotalArea())
paint.getCircles().forEach(shape => console.log(shape.print()))
paint.getRectangles().forEach(shape => console.log(shape.print()))
paint.getSquares().forEach(shape => console.log(shape.print()))
