// ===== Telegram User =====

let userName = "Guest";
let userPhoto = "";


if(window.Telegram && Telegram.WebApp){

    Telegram.WebApp.ready();

    const user = Telegram.WebApp.initDataUnsafe.user;

    if(user){

        userName = user.first_name || "User";

        if(user.username){
            userName += " @" + user.username;
        }

        userPhoto = user.photo_url || "";

    }

}


// ===== Elements =====

const profileName = document.getElementById("profileName");
const profileAvatar = document.getElementById("profileAvatar");

const profileCoins = document.getElementById("profileCoins");
const profileLevel = document.getElementById("profileLevel");
const profileXP = document.getElementById("profileXP");
const profileFriends = document.getElementById("profileFriends");
const profilePower = document.getElementById("profilePower");


// ===== Update Profile =====

function updateProfile(){


    if(profileName){
        profileName.innerText = userName;
    }


    if(profileAvatar){

        if(userPhoto){

            profileAvatar.src = userPhoto;

        }else{

            profileAvatar.src =
            "https://cdn-icons-png.flaticon.com/512/149/149071.png";

        }

    }


    if(profileCoins){
        profileCoins.innerText =
        localStorage.getItem("coins") || 0;
    }


    if(profileLevel){
        profileLevel.innerText =
        localStorage.getItem("level") || 1;
    }


    if(profileXP){
        profileXP.innerText =
        localStorage.getItem("xp") || 0;
    }


    if(profileFriends){
        profileFriends.innerText =
        localStorage.getItem("friendsCount") || 0;
    }


    if(profilePower){
        profilePower.innerText =
        localStorage.getItem("tapPower") || 1;
    }


}


// Yangilash

updateProfile();


// Har 2 sekundda yangilab turadi

setInterval(()=>{

    updateProfile();

},2000);
