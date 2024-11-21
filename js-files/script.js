const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("play");

song.onloadedmetadata = ()=>{
    progress.max = song.duration;
    progress.value = song.currentTime;

}


function playPause(){
    if(ctrlIcon.classList.contains("bxs-right-arrow")){

        song.play();
        ctrlIcon.classList.remove("bxs-right-arrow");
        ctrlIcon.classList.add("bx-pause");

    }
    else{
        song.pause();
        ctrlIcon.classList.remove("bx-pause");
        ctrlIcon.classList.add("bxs-right-arrow");
       
        
    }
    if(!song.paused){
        setInterval(()=>{
            progress.value = song.currentTime;
        },500);
    }

}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("bxs-right-arrow");
    ctrlIcon.classList.add("bx-pause");
}

