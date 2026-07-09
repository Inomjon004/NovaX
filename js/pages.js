const homePage = document.querySelector(".center");
const boostPage = document.getElementById("boostPage");
const tasksPage = document.getElementById("tasksPage");
const friendsPage = document.getElementById("friendsPage");
const profilePage = document.getElementById("profilePage");

const homeBtn = document.getElementById("homeBtn");
const boostBtn = document.getElementById("boostBtn");
const tasksBtn = document.getElementById("tasksBtn");
const friendsBtn = document.getElementById("friendsBtn");
const profileBtn = document.getElementById("profileBtn");

function hideAllPages() {
    homePage.style.display = "none";
    boostPage.style.display = "none";
    tasksPage.style.display = "none";
    friendsPage.style.display = "none";
    profilePage.style.display = "none";
}

homeBtn.onclick = () => {
    hideAllPages();
    homePage.style.display = "flex";
};

boostBtn.onclick = () => {
    hideAllPages();
    boostPage.style.display = "block";
};

tasksBtn.onclick = () => {
    hideAllPages();
    tasksPage.style.display = "block";
};

friendsBtn.onclick = () => {
    hideAllPages();
    friendsPage.style.display = "block";
};

profileBtn.onclick = () => {
    hideAllPages();
    profilePage.style.display = "block";
};
