const letters=['w','a','s','d','j','k','l'];
const soundURL=["sounds/tom-1.mp3",'sounds/tom-2.mp3','sounds/tom-3.mp3',
'sounds/tom-4.mp3','sounds/snare.mp3','sounds/crash.mp3','sounds/kick-bass.mp3'
]


var buttonLenght = document.querySelectorAll(".kit").length;
document.addEventListener("keydown", function(event){

    playSound(event.key);

    buttonAnimation(event.key);

}); 

    for(let count=0; count <=buttonLenght; count++){
        
        document.querySelectorAll(".kit")[count].addEventListener("click", function(){
            var innerTextOfTheButton = this.innerHTML;
            playSound(innerTextOfTheButton);
            buttonAnimation(innerTextOfTheButton);
        })
    }

  

function playSound(key)
{
        switch (key) {
            case 'w':
                var audio_W = new Audio(soundURL[letters.indexOf(key)]);
                audio_W.play();
                break;
            case 'a':
                var audio_A = new Audio(soundURL[letters.indexOf(key)]);
                audio_A.play();
                break;
            case 's':
                var audio_S = new Audio(soundURL[letters.indexOf(key)]);
                audio_S.play();
                break;
            case 'd':
                var audio_D = new Audio(soundURL[letters.indexOf(key)]);
                audio_D.play();
                break;
            case 'j':
                var audio_J = new Audio(soundURL[letters.indexOf(key)]);
                audio_J.play();
                break;
            case 'k':
                var audio_K = new Audio(soundURL[letters.indexOf(key)]);
                audio_K.play();
                break;
            case 'l':
                var audio_L = new Audio(soundURL[letters.indexOf(key)]);
                audio_L.play();
                break;
            default:
                console.log(key)
                break;
        }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }

