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
    const realAnswer = questions[idQuestion];
    optionQuestion.innerHTML = realAnswer.q;
        
    option1.textContent = realAnswer.a[0].text;
    option2.textContent = realAnswer.a[1].text;
    option3.textContent = realAnswer.a[2].text;
    option4.textContent = realAnswer.a[3].text;
}
// afficherQuestion(0);

const answersButton = document.querySelectorAll(".answer-btn");
function answerColor (idQuestion) {
    const realAnswer2 = questions[idQuestion];
    
    const true0 = realAnswer2.a[0].correct;
    const true1 = realAnswer2.a[1].correct;
    const true2 = realAnswer2.a[2].correct;
    const true3 = realAnswer2.a[3].correct;

    if (true0 === questions) {
        answersButton.style.backgroundColor ="green";
    }
    answersButton.addEventListener("click", answerColor);
}





// a.addEventListener("click");


// option1.addEventListener("click", () => {
//     option1.style.backgroundColor = "green";
//     option2.style.backgroundColor = "red";
//     option3.style.backgroundColor = "red";
//     option4.style.backgroundColor = "red";
// })




