let tapPower = Number(localStorage.getItem("tapPower")) || 1;

let autoTap = localStorage.getItem("autoTap") === "true";

const buyPower = document.getElementById("buyPower");
const buySuper = document.getElementById("buySuper");
const buyAuto = document.getElementById("buyAuto");

function updateButtons(){

    if(tapPower >= 2){
        buyPower.disabled = true;
        buyPower.innerHTML = "✅ Power Tap<br>Owned";
    }

    if(tapPower >= 5){
        buySuper.disabled = true;
        buySuper.innerHTML = "✅ Super Tap<br>Owned";
    }

    if(autoTap){
        buyAuto.disabled = true;
        buyAuto.innerHTML = "✅ Auto Tap<br>Active";
    }

}

buyPower.onclick = ()=>{

    if(coins < 100){
        alert("❌ NOVA yetarli emas!");
        return;
    }

    coins -= 100;
    tapPower = 2;

    localStorage.setItem("tapPower", tapPower);
    localStorage.setItem("coins", coins);

    coinsText.innerText = coins;

    updateButtons();

};

buySuper.onclick = ()=>{

    if(coins < 500){
        alert("❌ NOVA yetarli emas!");
        return;
    }

    coins -= 500;
    tapPower = 5;

    localStorage.setItem("tapPower", tapPower);
    localStorage.setItem("coins", coins);

    coinsText.innerText = coins;

    updateButtons();

};

buyAuto.onclick = ()=>{

    if(coins < 1000){
        alert("❌ NOVA yetarli emas!");
        return;
    }

    coins -= 1000;

    localStorage.setItem("coins", coins);

    autoTap = true;

    localStorage.setItem("autoTap","true");

    coinsText.innerText = coins;

    startAutoTap();

    updateButtons();

};

function startAutoTap(){

    if(window.autoTapStarted) return;

    window.autoTapStarted = true;

    setInterval(()=>{

        coins++;

        coinsText.innerText = coins;

        if(profileCoins){
            profileCoins.innerText = coins;
        }

        localStorage.setItem("coins",coins);

    },1000);

}

if(autoTap){
    startAutoTap();
}

updateButtons();
