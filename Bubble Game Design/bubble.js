var timer1 = undefined;
var timer2 = undefined;
var ABCD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
var count = 0;
var score = 0;
var beark = 0;
var count1 = 0;
var color = ["yellow", "red", "green", "pink", "lightblue"];
window.onload = function () {
    if (localStorage.getItem("CurrentScore") !=  null && localStorage.getItem("l1") != null) {
        console.log(localStorage.getItem("CurrentScore").toString())
        document.getElementById("lbl2").innerHTML = localStorage.getItem("CurrentScore").toString();
        lbl3.innerHTML = localStorage.getItem("l1").toString();
    }
}
function StartBtn() {
    if (timer1 == undefined) {
        timer1 = setInterval(timerfun1, 1000);
    }
    if (timer2 == undefined) {
        timer2 = setInterval(BubbleUp, 10);
    }
}

function StopBtn() {
    clearInterval(timer1);
    timer1 = undefined;
    clearInterval(timer2);
    timer2 = undefined;
}
function ResetBtn() {
    clearInterval(timer1);
    timer1 = undefined;
    clearInterval(timer2);
    timer2 = undefined;
    var Bubble = document.querySelectorAll(".Round");
    for (let i = 0; i < Bubble.length; i++) {
        const SingleBubble = Bubble[i];
        document.getElementById("bodyid").removeChild(SingleBubble);

    }
    var t1 = lbl1.innerHTML;
    localStorage.setItem("CurrentScore", t1);
    if (localStorage.getItem("CurrentScore") != null) {
        console.log(localStorage.getItem("CurrentScore").toString())
        document.getElementById("lbl2").innerHTML = localStorage.getItem("CurrentScore").toString();
    }

    box1.style.backgroundColor = "white";
    box2.style.backgroundColor = "white";
    box3.style.backgroundColor = "white";
    box4.style.backgroundColor = "white";
    box5.style.backgroundColor = "white";
    count = 0;
    beark = 0;
    lbl1.innerHTML = count;

}
function timerfun1() {
    var circle = document.createElement("div");
    circle.className = "Round";
    circle.style.backgroundColor = color[count];
    if (count <= 4) {
        count++;
    }
    else {
        count = 0;
    }
    document.getElementById("bodyid").appendChild(circle);

    var windowHight = window.innerHeight;
    var windowWidth = window.innerWidth;
    randomChar = Math.floor(Math.random() * ABCD.length);
    Xpos = Math.floor((Math.random() * (windowWidth - 100)));
    Ypos = Math.floor((Math.random() * (windowHight - 100)));

    circle.style.left = Xpos + "px";
    // circle.style.top = Ypos + "px";
    circle.style.bottom = "100px";
    circle.innerHTML = ABCD[randomChar];


}

function BubbleUp() {
    var Bubble = document.querySelectorAll(".Round");
    for (let i = 0; i < Bubble.length; i++) {
        const SingleBubble = Bubble[i];
        SingleBubble.style.bottom = (parseInt(SingleBubble.style.bottom) + 1) + "px";
        if (SingleBubble.style.bottom == "500px") {
            document.getElementById("bodyid").removeChild(SingleBubble);
            beark++;
            if (beark == 1) {
                box1.style.backgroundColor = "red";

            }
            if (beark == 2) {
                box2.style.backgroundColor = "red";

            }
            if (beark == 3) {
                box3.style.backgroundColor = "red";

            }
            if (beark == 4) {
                box4.style.backgroundColor = "red";

            }
            if (beark == 5) {
                box5.style.backgroundColor = "red";
                var t1 = lbl1.innerHTML;
                localStorage.setItem("CurrentScore", t1);
                if(parseInt(lbl1.innerHTML) > parseInt(lbl3.innerHTML)){
                    var t2 = lbl1.innerHTML;
                    localStorage.setItem("l1", t2);
                }
                alert("Game Over");
                window.location.reload();
            }

        }
    }
}

function BodyKeyPressEvent(event) {
    var KeyChar = event.key;
    var Bubble = document.querySelectorAll(".Round");
    for (let i = 0; i < Bubble.length; i++) {
        const SingleBubble = Bubble[i];
        if (SingleBubble.innerHTML == KeyChar) {
            score++;
            lbl1.innerHTML = score;
            document.getElementById("bodyid").removeChild(SingleBubble);
        }
    }
}