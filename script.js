let coins = Number(localStorage.getItem("coins")) || 0;
let energy = Number(localStorage.getItem("energy")) || 100;

const coin = document.getElementById("coin");
const coinsText = document.getElementById("coins");
const energyText = document.getElementById("energy");
const profileCoins = document.getElementById("profileCoins");

coinsText.innerText = coins;
energyText.innerText = energy;

if (profileCoins) {
    profileCoins.innerText = coins;
}

setInterval(() => {

    if (energy < 100) {

        energy++;

        energyText.innerText = energy;

        localStorage.setItem("energy", energy);

    }

}, 1000);

coin.addEventListener("click", (e) => {

    if (energy <= 0) return;

    energy--;

    coins += tapPower;
addXP(1);
    coinsText.innerText = coins;
    energyText.innerText = energy;

    if (profileCoins) {
        profileCoins.innerText = coins;
    }

    localStorage.setItem("coins", coins);
    localStorage.setItem("energy", energy);

    coin.style.transform = "scale(.9)";

    setTimeout(() => {
        coin.style.transform = "scale(1)";
    }, 80);

    const plus = document.createElement("div");

    plus.innerText = "+" + tapPower;

    plus.className = "plusOne";

    plus.style.left = e.clientX + "px";
    plus.style.top = e.clientY + "px";

    document.body.appendChild(plus);

    const flash = document.createElement("div");

    flash.className = "tapFlash";

    flash.style.left = (e.clientX - 9) + "px";
    flash.style.top = (e.clientY - 9) + "px";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 500);

    setTimeout(() => {
        plus.remove();
    }, 1000);

});