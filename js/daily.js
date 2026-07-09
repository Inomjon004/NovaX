const today = new Date().toDateString();

let lastLogin = localStorage.getItem("lastLogin");

if (lastLogin !== today) {

    coins += 100;

    localStorage.setItem("coins", coins);
    localStorage.setItem("lastLogin", today);

    coinsText.innerText = coins;

    if (profileCoins) {
        profileCoins.innerText = coins;
    }

    alert("🎁 Daily Login Bonus: +100 NOVA");
}
