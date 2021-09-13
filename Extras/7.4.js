const readLine = require("readline-sync");
function pizzaMenu(){
    let programOn = true;
    let allPizza = [];
    while(programOn){
        console.log("Please chopse your actions :");
        console.log("1 - List all pizza flavour");
        console.log("2 - Add a pizza flavour");
        console.log("3 - Remove a pizza flavour");
        console.log("4 - Exit this program");
        let action = readLine.question("Enter your action's number :");
        switch(action){
            case "1" :
                if(allPizza.length === 0){
                   console.log("Please add a pizza flavour first"); 
                }
                else{
                    console.log(allPizza);
                }
                break;
            case "2" :
                allPizza.push(readLine.question("Enter your flavor "));
                break;
            case "3" :
                let flavorToRemove = parseInt(readLine.question("Which one do you want to remove? "));
                for(let i = 0; i < allPizza.length ; i++){
                    if( i+1 === flavorToRemove){
                        allPizza.splice(i,1);
                    }
                }
                break;
            case "4" : 
                programOn = false;
                break;
        }
    }
    
}
console.log(pizzaMenu());