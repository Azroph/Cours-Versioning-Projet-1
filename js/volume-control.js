var volumeControl = document.getElementById("button-volume");
var videoHeader = document.getElementById("video-header");
var isUnmuted = false;

volumeControl.addEventListener("click",function() {

    if (isUnmuted) {
        volumeControl.classList.add("muted");
        volumeControl.classList.remove("unmuted");

        videoHeader.muted = true;

    } else {
        volumeControl.classList.add("unmuted");
        volumeControl.classList.remove("muted");

        videoHeader.muted = false;
    }

    isUnmuted = !isUnmuted;

});