function nextDate(dayIndex) {
    let today = new Date();
    today.setUTCDate(today.getUTCDate() + (dayIndex - 1 - today.getUTCDay() + 7) % 7 + 1);
    today.setUTCHours(2, 0, 0, 0);

    if (today.getUTCDay() === 0 && today.getUTCHours() < 2) {
        today.setUTCDate(today.getUTCDate() - 7);
    }


    return today;
}

let countDownDate = nextDate(0);
//var countDownDate = new Date("Aug 6, 2023 03:00:00").getTime();

// Update the count down every 1 second
setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days.toString().split("").length === 1) {
        days = "0" + days;
    }

    if (hours.toString().split("").length === 1) {
        hours = "0" + hours;
    }

    if (minutes.toString().split("").length === 1) {
        minutes = "0" + minutes;
    }

    if (seconds.toString().split("").length === 1) {
        seconds = "0" + seconds;
    }

    // Output the result in an element with id="demo"
    document.getElementById("counter").innerHTML = days + " : " + hours + " : "
        + minutes + " : " + seconds + " ";

    // If the count down is over, write some text
    if (distance <= 0) {
        countDownDate = nextDate(0);
    }
}, 1000);
