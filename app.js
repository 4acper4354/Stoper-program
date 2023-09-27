const startBtn = document.querySelector("#startBtn")
const stopBtn = document.querySelector("#stopBtn")
const resetBtn = document.querySelector("#resetBtn")
const timeLabel = document.querySelector("#timeLabel")

let paused = true;
let startTime = 0;
let elapsedTime = 0;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000)
    }
})
stopBtn.addEventListener("click", () => {
    if(!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime
        clearInterval(intervalId)
    }
})
resetBtn.addEventListener("click", () => {
    paused = true;
    elapsedTime = 0;
    startTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    clearInterval(intervalId)
    timeLabel.textContent = "00:00:00"
})

function updateTime() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60)
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60)
    hrs = Math.floor((elapsedTime / (1000 * 3600)) % 60)

    secs = zeroFormating(secs)
    mins = zeroFormating(mins)
    hrs = zeroFormating(hrs)

    timeLabel.textContent = `${hrs}:${mins}:${secs}`
}
function zeroFormating(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit
}
