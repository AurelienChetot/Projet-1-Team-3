window.onload = function() {
    let temps = 10;
    let timer = document.querySelector("#timer");
    let timerInterval;

    function time() {
        timer.innerHTML = "Time Left : " + (temps < 11 ? "" : "") + temps;
        if (temps > 0) {
            temps--;
        }
    }

    function startTimer() {
        timerInterval = setInterval(time, 1000);
    }

    startTimer();

    document.querySelector("#next-question").addEventListener("click", function() {

        temps = 10;

        clearInterval(timerInterval);

        startTimer();
    });
};
const questions = [{
    id : 0,
    q: "Quelle balise HTML est utilisée pour créer une liste non ordonée ?",
    a: [
        { text: "<ul>", correct: true },
        { text: "<li>", correct: false },
        { text: "<ol>", correct: false },
        { text: "<lu>", correct: false },
    ]
}];

const startQuizButton = document.getElementById("start-quiz");
const timerButton = document.getElementById("display-start-quiz");
const timer = document.getElementById("timer");
const backGroundSize = document.getElementById("container-quiz");

function startQuiz() {
        startQuizButton.style.display = "none";    
        timerButton.style.justifyContent = "center";
        timerButton.style.paddingLeft = "0px";
        timer.style.width = "250px";
        timer.style.fontSize = "1.9rem";
        backGroundSize.style.height = "34rem";
}
startQuizButton.addEventListener("click", startQuiz);



