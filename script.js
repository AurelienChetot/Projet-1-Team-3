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
    q: "Qu'est-ce que signifie HTML ?",
    a: [
        { text: "HyperText Mega Language", correct: false },
        { text: "Hyper Text Modify Language", correct: false },
        { text: "Hyper Text Mega Language", correct: false },
        { text: "Hyper Text Markup Language", correct: true },
    ]
}, {
    id : 2,
    q: "Comment récupérer une classe en CSS ?",
    a: [
        { text: "element", correct: false },
        { text: "#element", correct: false },
        { text: ".element", correct: true },
        { text: "-element", correct: false },
    ]
}, {
    id : 3,
    q: "Qui a fondé JavaScript ?",
    a: [
        { text: "Antho", correct: false },
        { text: "Brendan Eich", correct: true },
        { text: "Bryan Eich", correct: false },
        { text: "La Wild Code School", correct: false },
    ]
}, {
    id : 4,
    q: "Que veut dire JSON",
    a: [
        { text: "JavaScript Object Natation", correct: false },
        { text: "JavaSuper Object Notation", correct: false },
        { text: "JavaSans Object Notation", correct: false },
        { text: "JavaScript Object Notation", correct: true },
    ]
}, {
    id : 5,
    q: "Quelle balise HTML est utilisée pour créer une liste non ordonée ?",
    a: [
        { text: "<ul>", correct: true },
        { text: "<li>", correct: false },
        { text: "<ol>", correct: false },
        { text: "<lu>", correct: false },
    ]
},
];


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
    //  */

const correctReponse = questions.filter(question => question.a.includes(response => console.log(response)));

if (correctReponse === questions[a].value) {
    console.log(`Bonne réponse !`);
} else {
    console.log("Mauvaise réponse !");
}

console.log(correctReponse)

}



