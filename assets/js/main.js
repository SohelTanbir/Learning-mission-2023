function initialize(){
    
const prevBtn = document.getElementById("previous-btn");
const playBtn = document.getElementById("plya-btn");
const pauseBtn = document.getElementById("pause-btn");
const nextBtn = document.getElementById("next-btn");
const innerCircleElement = document.querySelector(".inner-circle");
const audioFile = "./assets/audio/audio.mp3";
const audioFiles = [
    "./assets/audio/audio-2.mp3",
    "./assets/audio/audio-6.mp3",
    "./assets/audio/audio-3.mp3",
    "./assets/audio/audio-4.mp3",
    "./assets/audio/audio-6.mp3",
    "./assets/audio/audio-1.mp3",

];
let currentIndext = 0;
let previousIndex = 0;
let nextIndex = 0;
const audioObjects = [];

for(let i = 0; i <audioFiles.length; i++) {
    const audio  = new Audio(audioFiles[i]);
    audioObjects.push(audio);
}


console.log(audioObjects);

    
function playAudio(index) {
    const audio = audioObjects[index]
    audio.play();
    innerCircleElement.classList.add('playing');
    console.log("playing =", index);
}
    
function pauseAudio(index) {
    const audio = audioObjects[index]
    audio.pause();
    innerCircleElement.classList.remove('playing');
    console.log("pause =", index );
}

function previousAudio() {
    if(nextIndex >0){
        nextIndex--;
        playAudio(nextIndex);
        console.log("prev index =", nextIndex);
    }
}
function nextAudio() {
    if(nextIndex < audioObjects.length){
        nextIndex++;
        playAudio(nextIndex);
        console.log("nextIndex =", nextIndex);
    }
   
      
}
// add eventlistener 
playBtn.addEventListener("click", function(e) {
    playAudio(currentIndext)
})
pauseBtn.addEventListener("click", function(e) {
    pauseAudio()
})
prevBtn.addEventListener("click", function(e) {
    previousAudio()
})
nextBtn.addEventListener("click", function(e) {
    nextAudio()
})

}
initialize()