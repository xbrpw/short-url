var gameList = ["https://static01.nyt.com/images/2011/08/21/magazine/21mag-abstractimages-slide-XOE4/21mag-abstractimages-slide-XOE4-jumbo.jpg", "https://static01.nyt.com/images/2011/08/21/magazine/21mag-abstractimages-slide-2T4N/21mag-abstractimages-slide-2T4N-jumbo.jpg", "https://static01.nyt.com/images/2011/08/21/magazine/21mag-abstractimages-slide-IRQ1/21mag-abstractimages-slide-IRQ1-jumbo.jpg"],

    RandomNum,

    randomImage,

    result = document.getElementById("result");

// ========================================================

function myGame() {

    'use strict';

    RandomNum = Math.floor(Math.random() * 3),

        randomImage = gameList[RandomNum];

    var comp = document.getElementById("comp");

    comp.style.backgroundImage = "url(" + randomImage + ")";

    if (comp.style.backgroundImage == mine.style.backgroundImage) {
        result.className = "even";
        result.textContent = "empate";
    }

}

// ======================================================
var mine = document.getElementById("mine");

document.getElementById("rock").onclick = function() {
    mine.style.backgroundImage = "url(" + gameList[0] + ")";
    myGame();

    if (RandomNum == "1") {
        result.className = "lose";
        result.textContent = "pierdes";

    } else if (RandomNum == "2") {
        result.className = "win";
        result.textContent = "ganas";
    }

}

document.getElementById("paper").onclick = function() {
    mine.style.backgroundImage = "url(" + gameList[1] + ")";
    myGame();

    if (RandomNum == "0") {
        result.className = "win";
        result.textContent = "you win";

    } else if (RandomNum == "2") {
        result.className = "lose";
        result.textContent = "you lose";
    }

}

document.getElementById("scis").onclick = function() {
    mine.style.backgroundImage = "url(" + gameList[2] + ")";
    myGame();

    if (RandomNum == "0") {
        result.className = "lose";
        result.textContent = "you lose";

    } else if (RandomNum == "1") {
        result.className = "win";
        result.textContent = "you win";
    }

}

// =============================

// creating my image link

var link = document.createElement("a");
document.body.appendChild(link);

link.href = "https://www.xbr.pw";
link.target = "_blank";

var photo = document.createElement("img");
link.appendChild(photo);

photo.src =
    "favicon.png";
photo.alt = "mo7amed";

photo.style =
    "border-radius:50%;position:fixed;bottom:20px;right:20px;transition:all 0.5s ease;width:80px;height:80px;z-index:30";

photo.onmouseover = function() {
    this.style.transform = "scale(1.1,1.1)";
    this.style.boxShadow = "5px 5px 15px #000";
};

photo.onmouseout = function() {
    this.style.transform = "scale(1,1)";
    this.style.boxShadow = "none";
};