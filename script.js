'use strict';

let startTime = 0;

let height = 0;

let width = 0;

function setRandomBackgroundColor () {

    let letters = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i <6; i++) {

        color+= letters[Math.floor(Math.random() * 16)];

    }

    document.getElementById("shape-div").style.backgroundColor = color;

}

function setRandomBorders () {

    let borderTopLeft = Math.floor(Math.random()*50);

    let borderTopRight= Math.floor(Math.random()*50);

    let borderBottomLeft = Math.floor(Math.random()*50);

    let borderBottomRight = Math.floor(Math.random()*50);

    document.getElementById("shape-div").style.borderTopLeftRadius= borderTopLeft + "%";

    document.getElementById("shape-div").style.borderTopRightRadius= borderTopRight + "%";

    document.getElementById("shape-div").style.borderBottomLeftRadius= borderBottomLeft + "%";

    document.getElementById("shape-div").style.borderBottomRightRadius= borderBottomRight + "%"; 

}

function setRandomDimensions () {

    width = (50 + Math.floor(Math.random()*400));

    height = (50 + Math.floor(Math.random()*400));

    document.getElementById("shape-div").style.width = width + "px";

    document.getElementById("shape-div").style.height = height + "px";

}

function setRandomPosition () {

    let topPosition = -1;

    let leftPosition = -1;

    while (topPosition < 0) {

        topPosition = Math.floor(Math.random()* 700) - height;

    }

    while (leftPosition < 0) {

        leftPosition = Math.floor(Math.random()* 700) - width;

    }

    document.getElementById("shape-div").style.position = "relative";

    document.getElementById("shape-div").style.top = topPosition;

    document.getElementById("shape-div").style.left = leftPosition;
    
}

function startGame () {

    setRandomBackgroundColor ()

    setRandomBorders ();

    setRandomDimensions ();

    setRandomPosition ();

}

function startTimer() {

    startTime = new Date();

}

function endTimer() {

    let endTime = new Date ();

    let timeDiff = endTime - startTime;

    let seconds = timeDiff/1000;

    document.getElementById("time-to-click").innerHTML = seconds;

    document.getElementById("time-to-click").style.fontWeight = "bold";

}

document.getElementById("main-div").style.width = window.innerWidth;

document.getElementById("main-div").style.height = window.innerHeight;

document.getElementById("start-game").onclick = function() {

    startGame();
    
    startTimer();

}

document.getElementById("shape-div").onclick = function() {

    endTimer ();

}