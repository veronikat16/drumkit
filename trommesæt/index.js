var numberOfButtons = document.querySelectorAll(".drum").length; 

for(let i = 0; i < numberOfButtons; i++){
  
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;  

        makeSound(buttonInnerHTML);
        
   })

}
document.addEventListener("keypress", function (event){

    makeSound(event.key);
})

function makeSound(key){


    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();
            break;
            
        
    
    
            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3"); 
                tom3.play();
                break;
        
                case "d":
                    let tom4 = new Audio("sounds/tom-4.mp3"); 
                    tom4.play();
                    break;
        
                    case "j":
                        let tom5 = new Audio("sounds/crash.mp3"); 
                        tom5.play();
                        break;
                
            case "k":
                let tom6 = new Audio("sounds/kick-bass.mp3"); 
                tom6.play();
                break;
                
            case "l":
                let tom7 = new Audio("sounds/snare.mp3"); 
                tom7.play();
                break;
      
        default:
            console.log("intet bogstav passer, derfor default");
            break;
    }
    
    

}

function buttonAnimation(curentKey){
    let activeButton =document.querySelector("." + curentKey)
activeButton.classList.add("pressed");




}

// Dette er et simpelt program til at lave et trommeset. Måden det fungerer på er at man tager 
// den class som hedder drums fra ens html fil og definere den som en variabel. Efterfølgende
//  laver man et event når en knap eller tast bliver klikket. Man fortæller programmet at når 
// knappen eller tasten bliver klikket spilles en bestemt lyd.
