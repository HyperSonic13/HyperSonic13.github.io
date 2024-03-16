document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const overlay = document.querySelector(".maincontent");
    const acceptButton = document.getElementById("c-btn-q-r-w--2");
    let hasClicked = false;

    // Hide the video element initially
    video.style.display = "none";

    window.onbeforeunload = function() {
        if (hasClicked) return "Are you sure you want to leave this page?";
    };

    function buttonClick(event) {
        event.preventDefault();
        if (!hasClicked) {
            hasClicked = true;
            // Show the video when the button is clicked
            video.style.display = "block";
            overlay.style.display = "none";
            video.play();
        }
        videoClick(event); // Pass the event parameter
    }

    function videoClick(event) {
        if (event) event.preventDefault();
        // if not fullscreen
        const { documentElement } = document;
        if (documentElement.requestFullscreen) documentElement.requestFullscreen();
        else if (documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
        else if (documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
        else if (documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
    }

    acceptButton.addEventListener("click", buttonClick);
    video.addEventListener("click", videoClick);
});