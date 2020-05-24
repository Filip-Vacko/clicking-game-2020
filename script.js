let letters = "0123456789ABCDEF";

let color = "#";

for (let i = 0; i <6; i++) {

    color+= letters[Math.floor(Math.random() * 16)];

}

document.getElementById("shape-div").style.backgroundColor = color;

function setRandomBorders () {

    let borderTopLeft = Math.floor(Math.random()*50);

    let  borderTopRight= Math.floor(Math.random()*50);

    let borderBottomLeft = Math.floor(Math.random()*50);

    let borderBottomRight = Math.floor(Math.random()*50);

    document.getElementById("shape-div").style.borderTopLeftRadius= borderTopLeft + "%";

    document.getElementById("shape-div").style.borderTopRightRadius= borderTopRight + "%";

    document.getElementById("shape-div").style.borderBottomLeftRadius= borderBottomLeft + "%";

    document.getElementById("shape-div").style.borderBottomRightRadius= borderBottomRight + "%"; 

}

function setRandomDimensions () {

    let width = (50 + Math.floor(Math.random()*400)) + "px";

    let height = (50 + Math.floor(Math.random()*400)) + "px";

    document.getElementById("shape-div").style.width = width;

    document.getElementById("shape-div").style.height = width;

    console.log(width, height);

}

setRandomBorders ();

setRandomDimensions ()