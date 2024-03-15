const startQuizButton = document.getElementById("start-quiz");
const timerButton = document.getElementById("display-start-quiz");
const backGroundSize = document.getElementById("container-quiz");
const nextQuestion = document.querySelector("#next-question");

let timer = document.getElementById("timer");
let temps = 10;
let nbQuestion = 0;

function time() {
    timer.innerHTML = "Time Left : " + (temps < 10 ? "" : "") + temps;
    if (temps > 0) {
        temps--;
    }
}

function startTimer() {
    /**
     * setInterval prend 2 arguments 
     * - la function `time`
     * - le temps (en millisecond)
     */
    setInterval(time, 1000);
}    

nextQuestion.addEventListener("click", function() {
    nbQuestion++;
    afficherQuestion(nbQuestion)
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
    afficherQuestion(nbQuestion);
}

startQuizButton.addEventListener("click", startQuiz);

const questions = [{
    id : 1,
    q: "Quelle balise HTML est utilisée pour créer une liste non ordonée ?",
    a: [
        { text: "<ul>", correct: true },
        { text: "<li>", correct: false },
        { text: "<ol>", correct: false },
        { text: "<lu>", correct: false },
    ]
}, {
    id : 2,
    q: "Quelle est la best team ?",
    a: [
        { text: "CrewDragon", correct: true },
        { text: "1", correct: false },
        { text: "2", correct: false },
        { text: "3", correct: false },
    ]
}];


const optionQuestion = document.getElementById("question");
const option1 = document.getElementById("op1");
const option2 = document.getElementById("op2");
const option3 = document.getElementById("op3");
const option4 = document.getElementById("op4");

function afficherQuestion(idQuestion) {
    const realAnswer = questions[idQuestion];
    optionQuestion.innerHTML = realAnswer.q;
    
    /** option1.textContent remplace l'HTML par la valeur donnée, ici realAnswer.a[0].text; */
    option1.textContent = realAnswer.a[0].text;
    /** option1.value ajouter sur l'HTML la valeur donnée, ici realAnswer.a[0].text; */
    option1.value =  realAnswer.a[0].text;
    option2.textContent = realAnswer.a[1].text;
    option2.value =  realAnswer.a[1].text;
    option3.textContent = realAnswer.a[2].text;
    option3.value =  realAnswer.a[2].text;
    option4.textContent = realAnswer.a[3].text;
    option4.value =  realAnswer.a[3].text;
}


const answersButton = document.querySelectorAll(".answer-btn");

for(const answerButton of answersButton){
    answerButton.addEventListener("click", (event) => {
        answerUser(nbQuestion, event.target.value)
    })
}

function answerUser(idQuestion, response) {

    /**
     * Comparer la réponse de l'utilisateur (response) avec la vrai réponse du quiz
     */

    const correctReponse = questions.filter(question => question.a.includes(response => console.log(response)))

    console.log(correctReponse)

    // const realAnswer2 = questions[idQuestion];
    
    // const true0 = realAnswer2.a[0].correct;
    // const true1 = realAnswer2.a[1].correct;
    // const true2 = realAnswer2.a[2].correct;
    // const true3 = realAnswer2.a[3].correct;

    // if (true0 === questions) {
    //     answersButton.style.backgroundColor ="green";
    // }
    // answersButton.addEventListener("click", answerColor);
}





// a.addEventListener("click");


// option1.addEventListener("click", () => {
//     option1.style.backgroundColor = "green";
//     option2.style.backgroundColor = "red";
//     option3.style.backgroundColor = "red";
//     option4.style.backgroundColor = "red";
// })




