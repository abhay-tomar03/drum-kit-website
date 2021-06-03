// addEventListerner is used to perform the task specified to it when it is called

/*  syntax target.addEventListener(type,listener)

1- type parameter it is inputed as a string

2- listener - The object that receives the notification

*/

// Now we have to apply the event listerner effect to all the buttons


// Detecting on the basis of button press



var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// to do this we can apply for loop by specifying the number of buttons to it



for (var i = 0; i< numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {


  //   alert("i got clicked!");


// Now we are adding sounds to each buttons

// we can use this keyword to determine the listener by that we can modify the several properties of it

  // this.innerHTML.color = "white"  
 
// we can use the switch statement to give the different sounds to different buttons

var  buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);

});
}

/* var audio = new Audio ("./sounds/tom-1.mp3");

audio.play();

*/



// detecting on the basis of keyboard press

  
   document.addEventListener("keypress" , function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);



   });


     




function makeSound(key) {



switch (key) {
    case "w":
        var tom1 = new Audio ("./sounds/tom-1.mp3");
        tom1.play();
        
        break;
    case "a":
        var tom2 = new Audio ("./sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        var tom3 = new Audio ("./sounds/tom-3.mp3");
        tom3.play();
        break;
        
    case "d":
        var tom4 = new Audio ("./sounds/tom-4.mp3");
        tom4.play();

        break;

    case "j":
        var crash = new Audio ("./sounds/crash.mp3");
        crash.play();
        break;
    case "k":
        var kick = new Audio ("./sounds/kick-bass.mp3");
        kick.play();
        
        break;

    case "l":
        var snare = new Audio ("./sounds/snare.mp3");
        snare.play();
        break;

    default:
        break;
}


}





// to add animation to the button we use buttonAnimation tool 




    function buttonAnimation(currentKey) {

        var buttonActive = document.querySelector("." + currentKey );
      
        buttonActive.classList.add("pressed");



      
      // we have to define a setinterval so that after the particular time the class should be removed 
      

    setInterval (function() {


        buttonActive.classList.remove("pressed");



    },100);


}

    
      
      
      
      
      
      








  

   
   


















 
