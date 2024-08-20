//  var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//  for(var i=0; i<numberOfDrumButtons; i++)
//  {
//  document.querySelectorAll(".drum")[i].addEventListener("click",function()
//  {
//   var buttonInnerHTML = this.innerHTML;

//      switch(buttonInnerHTML){

//         case "s" :    
//         var tom1 = new Audio("sounds/tom1.mp3");
//         tom1.play();
//         break;

//         case"u":
//         var tom2 = new Audio("sounds/tom2.mp3");
//         tom2.play(); 
//         break;

//         case "n":
//         var tom3 = new Audio("sounds/tom3.mp3");
//         tom3.play();
//         break;

//         case"k":
//         var tom4 = new Audio("sounds/tom4.mp3");
//         tom4.play();
//         break;

//         case"y":
//         var crash = new Audio("sounds/kick.mp3");
//         crash.play();
//         break;

//         case"r":
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;

//         case"j":
//         var kick = new Audio("sounds/crash.mp3");
//         kick.play();
//         break;

//         default:
//           console.log(buttonInnerHTML);
//         }
  






//  });
// }


//Detecting Button press 
    var numberOfDrumButtons = document.querySelectorAll(".drum").length;

    for (var i = 0; i < numberOfDrumButtons; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
            
        });
    }

    // Detecting keyword press
    document.addEventListener("keypress",function(event){
    makeSound(event.key);
    });

function makeSound(key){

    switch (key) {
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "u":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "n":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "y":
        
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
           

        case "r":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

            break;

        default:
            console.log( buttonInnerHTML);
          
    }
}

