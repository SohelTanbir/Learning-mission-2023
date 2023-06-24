function initialize(){
    
const prevBtn = document.getElementById("previous-btn");
const playBtn = document.getElementById("plya-btn");
const pauseBtn = document.getElementById("pause-btn");
const nextBtn = document.getElementById("next-btn");
const innerCircleElement = document.querySelector(".inner-circle");

const audioFiles = [
    "./assets/audio/audio-1.mp3",
    "./assets/audio/audio-2.mp3",
    "./assets/audio/audio-3.mp3",
    "./assets/audio/audio-4.mp3",
    "./assets/audio/audio-5.mp3",
    "./assets/audio/audio-6.mp3",
];
let currentIndext = 0;
let nextIndex = 0;
const audioObjects = [];
for(let i = 0; i <audioFiles.length; i++) {
    const audio  = new Audio(audioFiles[i]);
    audioObjects.push(audio);
}

function playAudio(index) {
        const audio = audioObjects[index];
        audio.play();
        innerCircleElement.classList.add('playing');

}
    
function pauseAudio(index) {
    const audio = audioObjects[index]
    audio.pause();
    innerCircleElement.classList.remove('playing');
}

function previousAudio() {
    if(nextIndex >0){
        nextIndex--;
        pauseAudio(nextIndex+1)
        setAudioCurrentTime(nextIndex+1);
        playAudio(nextIndex);
    }
}
function nextAudio() {
    if(nextIndex < audioObjects.length-1){
        nextIndex++;
        pauseAudio(nextIndex-1)
        setAudioCurrentTime(nextIndex-1);
        playAudio(nextIndex);
    }
   
}

// set audio current time
function setAudioCurrentTime(index){
    const audio = audioObjects[index];
    audio.currentTime = 0
}
// add eventlistener 
playBtn.addEventListener("click", function(e) {
    playAudio(currentIndext);
    pauseBtn.classList.remove("hide");
    playBtn.classList.add("hide");
})
pauseBtn.addEventListener("click", function(e) {
    pauseAudio(nextIndex);
    pauseBtn.classList.add("hide");
    playBtn.classList.remove("hide");
})
prevBtn.addEventListener("click", function(e) {
    previousAudio()
})
nextBtn.addEventListener("click", function(e) {
    nextAudio()
})

}
initialize()