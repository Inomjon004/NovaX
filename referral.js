let refCode = localStorage.getItem("refCode");

if(!refCode){

    refCode = "NOVA" + Math.floor(Math.random()*999999);

    localStorage.setItem("refCode", refCode);

}


let friendsCount =
Number(localStorage.getItem("friendsCount")) || 0;


let refBonus =
Number(localStorage.getItem("refBonus")) || 0;


const refCodeText = document.getElementById("refCode");
const friendsText = document.getElementById("friendsCount");
const bonusText = document.getElementById("refBonus");
const copyBtn = document.getElementById("copyRef");


refCodeText.innerText = refCode;

friendsText.innerText = friendsCount;

bonusText.innerText = refBonus;



copyBtn.onclick = ()=>{

    let link =
    "https://t.me/NovaXBot?start=" + refCode;


    navigator.clipboard.writeText(link);


    alert("🔗 Referral link nusxalandi!");

};