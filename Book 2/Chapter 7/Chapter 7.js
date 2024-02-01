document.getElementById("lefteye").style.backgroundColor = "blue";
document.getElementById("head").style.transform = "rotate(15deg)";

// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px black solid";

// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "50px";

// Put yellow dots around his right eye.
document.getElementById("righteye").style.border = "4px red dotted";

// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

// Change the text color.
document.getElementById("body").style.color = "#FF0000";

// Give Douglas hair.
document.getElementById("head").style.borderTop = "15px black solid";

//My turn to Animate the robot

document.getElementById("head").style.transform = "rotate(-15deg)";

document.getElementById("nose").style.borderRadius = "150%";

document.getElementById("rightarm").style.backgroundColor = "#4BE344";

document.getElementById("mouth").style.backgroundColor = "Pink";

//Make Douglas Dance! EVENTS

let rightEye = document.getElementById("righteye");

rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
let robotPart = e.target;
let top = 0;
let animation = setInterval(frame, 70);

function frame () {
    robotPart.style.top = top  + "%";
    top++;

    if (top === 20) {
clearInterval(animation);
    }
}
}

//left Eye Animation

let lefttEye = document.getElementById("lefteye");

lefttEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
let robotPart = e.target;
let top = 0;
let animation = setInterval(frame, 70);

function frame () {
    robotPart.style.top = top  + "%";
    top++;

    if (top === 20) {
clearInterval(animation);
    }
}
}

leftArm.addEventListener("click", moveRightLeft);
function moveRightLeft(e) {
    let robotPart = e.target;
    let left = 0;
    let animation = setInterval(frame, 10) // draw every 10ms
    function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 70){
    clearInterval(animation);
      }
     }
    }




