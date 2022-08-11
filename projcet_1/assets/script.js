let thumbUp = 0;
let thumbDown = 0;

function like() {
    thumbUp++;
    document.getElementById('tumbsUp').innerHTML = thumbUp;
}

function unlike() {
    thumbDown++;
    document.getElementById('tumbsDown').innerHTML = thumbDown;
}

function restart() {
    thumbDown = 0;
    thumbUp = 0;
    document.getElementById('tumbsUp').innerHTML = "";
    document.getElementById('tumbsDown').innerHTML = "";
}