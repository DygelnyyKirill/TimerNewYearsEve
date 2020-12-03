const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hourse');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
console.log(minsEl);
const newYears = "1 Jan 2021";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hourse = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(currentDate);
    daysEl.innerHTML = days;
    hoursEl.innerHTML =  formatTimer(hourse);
    minsEl.innerHTML = formatTimer(minutes);
    secondsEl.innerHTML = formatTimer(seconds);
}

function formatTimer(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);