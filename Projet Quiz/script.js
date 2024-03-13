window.onload = function() {
    let temps = 8;
    let timer = document.querySelector("#timer");
    let timerInterval;

    function time() {
        timer.innerHTML = "Time Left : " + (temps < 10 ? "0" : "") + temps;
        if (temps > 0) {
            temps--;
        } else {
            clearInterval(timerInterval);
        }
    }

    function startTimer() {
        timerInterval = setInterval(time, 1000);
    }

    startTimer();

    document.querySelector("#next-question").addEventListener("click", function() {

        temps = 8;

        clearInterval(timerInterval);

        startTimer();
    });
};
