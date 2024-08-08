function countdown() {
    // Set the date and time to countdown to (4:30 PM today)
    const now = new Date();
    let countdownDate = new Date();
    countdownDate.setHours(16, 30, 0, 0); // 4:30 PM
    
    // If it's already past 4:30 PM, set the countdown for tomorrow's 4:30 PM
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

    // If the countdown is finished, show celebration GIFs
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Time's up!";
        showCelebrationGIFs();
    }
}

function showCelebrationGIFs() {
    // Array of celebration GIF URLs
    const gifURLs = [
        'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
        'https://media.giphy.com/media/l41lVSY5H4MogTqeI/giphy.gif',
        'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
        'https://media.giphy.com/media/xT9IgIc0lryrxvqV6w/giphy.gif',
        'https://media.giphy.com/media/3og0INyCmHlNylks9O/giphy.gif'
    ];

    // Container to hold the GIFs
    const gifContainer = document.createElement('div');
    gifContainer.style.position = 'fixed';
    gifContainer.style.top = '0';
    gifContainer.style.left = '0';
    gifContainer.style.width = '100%';
    gifContainer.style.height = '100%';
    gifContainer.style.display = 'flex';
    gifContainer.style.flexWrap = 'wrap';
    gifContainer.style.justifyContent = 'center';
    gifContainer.style.alignItems = 'center';
    gifContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';

    // Create an image element for each GIF and add to the container
    gifURLs.forEach(url => {
        const gif = document.createElement('img');
        gif.src = url;
        gif.style.width = '200px';
        gif.style.margin = '10px';
        gif.style.borderRadius = '10px';
        gifContainer.appendChild(gif);
    });

    // Add the GIF container to the body
    document.body.appendChild(gifContainer);
}

// Update the countdown every 1 second
const x = setInterval(countdown, 1000);
