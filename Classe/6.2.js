class Rectangle{

    constructor(topLeftXPos, topLeftYPos, width, length){
        
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collide(otherReclangle = new Rectangle()){

        if((this.topLeftXPos + this.length) === otherReclangle.topLeftXPos || (this.topLeftYPos + this.width) === otherReclangle.topLeftYPos || this.topLeftXPos === (otherReclangle.topLeftXPos + otherReclangle.length) || this.topLeftYPos === (otherReclangle.topLeftYPos + otherReclangle.width)){
            return true;
        }
        else{
            return false;
        } 
    }
}

let rectangle1 = new Rectangle(9,9,3,3);
let rectangle2 = new Rectangle(6,6,3,3);
console.log(rectangle1.collide(rectangle2));