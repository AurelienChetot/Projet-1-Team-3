const startQuizButton = document.getElementById("start-quiz");
let timer = document.getElementById("timer");
const timerButton = document.getElementById("display-start-quiz");
const backGroundSize = document.getElementById("container-quiz");
let temps = 10;

    function time() {
        timer.innerHTML = "Time Left : " + (temps < 10 ? "" : "") + temps;
        if (temps > 0) {
            temps--;
        }
}
    function startTimer() {
        setInterval(time, 1000);
}    
    document.querySelector("#next-question").addEventListener("click", function() {
        temps = 10;
    });

    function startQuiz() {
        startQuizButton.style.display = "none";    
        timerButton.style.justifyContent = "center";
        timerButton.style.paddingLeft = "0px";
        timer.style.width = "250px";
        timer.style.fontSize = "1.9rem";
        // backGroundSize.style.height = "39rem";

        startTimer();
        afficherQuestion(0);
}
startQuizButton.addEventListener("click", startQuiz);

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

let optionQuestion = document.getElementById("question");
let option1 = document.getElementById("op1");
let option2 = document.getElementById("op2");
let option3 = document.getElementById("op3");
let option4 = document.getElementById("op4");

    function afficherQuestion(idQuestion) {
        const realQuestion = questions[idQuestion];
        optionQuestion.innerHTML = realQuestion.q;
        
        option1.textContent = realQuestion.a[0].text;
        option2.textContent = realQuestion.a[1].text;
        option3.textContent = realQuestion.a[2].text;
        option4.textContent = realQuestion.a[3].text;
    }
    // afficherQuestion(0);


const prochaineQuestion = document.getElementById("next-question");




