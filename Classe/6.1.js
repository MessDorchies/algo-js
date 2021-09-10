class Circle{

    constructor(xPos,yPos,radius){
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;

    }

    move(xOffset,yOffset){

        this.xPos = xOffset;
        this.yPos = yOffset;
    }

    get surface(){
        return this.Calcsurface();
    }

    Calcsurface(){
        return Math.PI * (this.radius*this.radius);
    }
 
}

let myCircle = new Circle(10,2,25);
console.log(myCircle.surface);