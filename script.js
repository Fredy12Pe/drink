function countdown() {
    // Set the date and time to countdown to (5 PM today)
    const now = new Date();
    let countdownDate = new Date();
    countdownDate.setHours(17, 0, 0, 0); // 5:00 PM
    
    // If it's already past 5 PM, set the countdown for tomorrow's 5 PM
    if (now > countdownDate) {
        countdownDate.setDate(countdownDate.getDate() + 1);
    }

    const nowTime = new Date().getTime();
    const distance = countdownDate - nowTime;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the corresponding HTML elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Time's up!";
    }
}

// Update the countdown every 1 second
const x = setInterval(countdown, 1000);
