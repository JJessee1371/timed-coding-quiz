let minutesDisplay = document.getElementById('minutes-display');
let secondsDisplay = document.getElementById('seconds-display');
let startButton = document.getElementById('begin');



function startTimer() {
    let totalMinutes = 5;
    let totalSeconds = totalMinutes * 60;

    const interval = setInterval( function() {
        totalSeconds--;
        secondsDisplay.textContent = totalSeconds;

        if (totalSeconds <= 0) {
            clearInterval(interval);
        };
    }, 1000);

};





startButton.addEventListener('click', startTimer);

    