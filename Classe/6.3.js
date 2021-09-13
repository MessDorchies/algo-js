class Rectangle{

    constructor(topLeftXPos, topLeftYPos, width, length){
        
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collide(otherReclangle = new Rectangle()){

        if (this.topLeftXPos < otherReclangle.topLeftXPos + otherReclangle.width &&
            this.topLeftXPos + this.width > otherReclangle.topLeftXPos &&
            this.topLeftYPos < otherReclangle.topLeftYPos + otherReclangle.length &&
            this.length + this.topLeftYPos > otherReclangle.topLeftYPos){
                return true;
            }
        else{
            return false;
        } 
    }
}

function generateAndDisplay(){

    let allRectangle = [];
    let allCollide = [];
    for(i = 0; i<=1000; i++){

        allRectangle[i] = new Rectangle(Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100));
    }
    for(j = 0; j <= 1000; j++){
        let k = 0;
        while(allRectangle[j].collide(allRectangle[k]) === false){
            k++;
            if(allRectangle[j].collide(allRectangle[k])){
                allCollide.push(allRectangle[j]);
            }
        }
        
    }
    return allCollide;
}

console.log(generateAndDisplay());