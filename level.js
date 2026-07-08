let level = Number(localStorage.getItem("level")) || 1;
let xp = Number(localStorage.getItem("xp")) || 0;

const levelText = document.getElementById("level");

function addXP(amount){

    xp += amount;

    while(xp >= 100){

        xp -= 100;

        level++;

    }

    localStorage.setItem("level", level);
    localStorage.setItem("xp", xp);

    levelText.innerText = level;

}

levelText.innerText = level;