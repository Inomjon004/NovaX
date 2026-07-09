const taskTelegram = document.getElementById("taskTelegram");

let telegramReward =
localStorage.getItem("telegramReward") === "true";

function updateTask(){

    if(telegramReward){

        taskTelegram.innerText = "✅ Completed";
        taskTelegram.disabled = true;

    }

}

taskTelegram.onclick = ()=>{

    if(telegramReward) return;

    coins += 100;

    coinsText.innerText = coins;

    if(profileCoins){
        profileCoins.innerText = coins;
    }

    localStorage.setItem("coins", coins);

    telegramReward = true;

    localStorage.setItem("telegramReward","true");

    updateTask();

};

updateTask();
