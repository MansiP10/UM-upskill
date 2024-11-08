let secondselaped = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value){
    return String(value).padStart(2,"0");
}
function setTime(){
    time.innerHTML = secondselaped;
    const hours = Math.floor(secondselaped / 3600);
    const minutes = Math.floor((secondselaped % 3600) / 60);
    const seconds = secondselaped % 60;
    
    time.innerHTML = `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}`;
}

function timmer(){
    secondselaped++;
    setTime();
}

function startClock(){
    if(interval){
        return;
    }
    interval = setInterval(timmer,1000);
}

function stopClock(){
    clearInterval(interval);
}

function resetClock(){
    stopClock();
    secondselaped = 0;
    setTime();

}