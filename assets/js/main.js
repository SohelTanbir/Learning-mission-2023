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
let previousIndex =currentIndext -1;
let nextIndex =currentIndext +1
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
    console.log("playing audio", index);
}
    
function pauseAudio(index) {
    const audio = audioObjects[index]
    audio.pause();
    innerCircleElement.classList.remove('playing');
}

function previousAudio() {
    if(previousIndex < audioObjects.length){
        previousIndex = currentIndext-1;
        console.log("prev index", previousIndex);
        pauseAudio(previousIndex)
       playAudio(previousIndex);
    }
}
function nextAudio() {
    if(nextIndex < audioObjects.length){
        nextIndex += currentIndext+1;
        console.log("next index", nextIndex-1);
        pauseAudio(nextIndex-1)
       playAudio(nextIndex);
    }
}

// add eventlistener 
playBtn.addEventListener("click", function(e) {
    playAudio(currentIndext)
})
pauseBtn.addEventListener("click", function(e) {
    pauseAudio(currentIndext)
})
prevBtn.addEventListener("click", function(e) {
    previousAudio()
})
nextBtn.addEventListener("click", function(e) {
    nextAudio()
})

}
initialize()