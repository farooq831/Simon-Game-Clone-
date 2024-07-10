let gameseq = [];
let userseq = [];
let started = false;
let btns = ["red", "yellow", "green", "purple"];
let level = 0;

let heading1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!started) {
        started = true;
        level = 0;  
        gameseq = [];  
        levelUp();
    }
});

function btnsplash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function usersplash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    userseq = []; 

    let randomIdx = Math.floor(Math.random() * btns.length);
    let randomColor = btns[randomIdx];
    let ranbtn = document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);

    btnsplash(ranbtn);
}

function checkAns() {
    let idx = userseq.length - 1;

    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over: Your score was <b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        started = false;
    }
}

function btnpress() {
    let btn = this;
    usersplash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns();
}

let allbtns = document.querySelectorAll(".box");
allbtns.forEach(btn => btn.addEventListener("click", btnpress));
