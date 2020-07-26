const video = document.querySelector("video");

function playback(){
    console.log("hi")
    if(video.paused){
        video.play();
    }
    else{
        video.paused();
    }
}
console.log("uo")
video.addEventListener("click",playback);