const buttonE1 = document.getElementById("roll-button");
const diceE1 = document.getElementById("dice");
const diceHistory = document.getElementById("dice-history");

function rollDice(){
    const rollResult = Math.floor(Math.random()* 6) + 1;
    const Diceface = getDiceFace(rollResult);
    diceHistory.insertRow(-1).innerHTML = `<tr><th><div class="dice">${rollResult}</div></th><th><div class="dice">${Diceface}</div></th></tr>`;
    
    diceE1.innerHTML = Diceface;
}

function getDiceFace(rollResult){
    switch (rollResult) {
        case 1:
            return "&#x2680;";
        case 2:
            return "&#x2681;";
        case 3:
                return "&#x2682;";
        case 4:
            return "&#x2683;";
        case 5:
            return "&#x2684;";
        case 6:
            return "&#x2685;";
        default:
            return " ";
    }
}
buttonE1.addEventListener("click",()=>{
    diceE1.classList.add("roll-animation");
    setTimeout(()=>{
        diceE1.classList.remove("roll-animation");
        rollDice();
    },1000);
})