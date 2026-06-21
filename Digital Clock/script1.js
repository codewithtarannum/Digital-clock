function updateClock() {
    let now = new Date();

    // Get hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Convert to 2 digits
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Select elements
    let hourDivs = document.querySelectorAll(".hour div");
    let minuteDivs = document.querySelectorAll(".minute div");
    let secondDivs = document.querySelectorAll(".seconds div");

    // Update hours
    hourDivs[0].innerText = hours[0];
    hourDivs[1].innerText = hours[1];

    // Update minutes
    minuteDivs[0].innerText = minutes[0];
    minuteDivs[1].innerText = minutes[1];

    // Update seconds
    secondDivs[0].innerText = seconds[0];
    secondDivs[1].innerText = seconds[1];
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);