function updateClock() {
    let now = new Date();
    console.log(now);
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    let hourDivs = document.querySelectorAll(".hour div");
    let minDivs = document.querySelectorAll(".minute div");
    let secDivs = document.querySelectorAll(".seconds div");

    hourDivs[0].innerText = hours[0];
    hourDivs[1].innerText = hours[1];

    minDivs[0].innerText = minutes[0];
    minDivs[1].innerText = minutes[1];

    secDivs[0].innerText = seconds[0];
    secDivs[1].innerText = seconds[1];
}
updateClock();

setInterval(updateClock , 1000);