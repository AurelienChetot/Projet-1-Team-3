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
        { 
            text: "JavaScript Object Natation", 
            correct: false },
        { text: "JavaSuper Object Notation", 
            correct: false },
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


function afficherQuestion(idQuestion) {
    const blockQuestion = questions[idQuestion];
    optionQuestion.innerHTML = blockQuestion.q;

    // On boucle chaque élement du tableau "a" pour rajouter le texte ainsi que la clé du tableau via la propriété "data-id".
    blockQuestion.a.forEach(function(element, index) {
        // index = 0 | element = "{ text: "HyperText Mega Language", correct: false }"
        // index = 1 | element = "{ text: "Hyper Text Modify Language", correct: false }"
        // index = 2 | element = "{ text: "Hyper Text Mega Language", correct: true }"
        // index = 3 | element = "{ text: "Hyper Text Markup Language", correct: true }"
        const button = document.getElementById("op" + index);

        // On enlève tout les CSS de l'attribut "style" de chaque bouton.
        button.removeAttribute('style');

        button.textContent = blockQuestion.a[index].text;
        button.dataset.id = index;
    });

    // Chaque question contient un tableau de 4 réponse, par conséquent
    // nous faisont une boucle for sur ce tableau et nous récupérons l'index de chaque élement via la variable "i".
    /*for(let i = 0; i < 4; i++) {
        const button = document.getElementById("op" + i);
        console.log(i);

        button.textContent = blockQuestion.a[i].text;
        button.dataset.id = i;
    }*/
}

const answersButton = document.querySelectorAll(".answer-btn");

for(const answerButton of answersButton){
    answerButton.addEventListener("click", (event) => {
        console.log(event.target);
        answerUser(nbQuestion, event.target);
    })
}


function answerUser(idQuestion, response) {
    console.log(idQuestion, response);

    // On récupère l'ID de la réponse, cet ID correspond à l'entrée dans le tableau "a"
    const dataId = response.dataset.id;

    // On va récupérer la ligne correspondante à la bonne réponse dans le tableau du "a"
    /*
        a: [
        dataId -> 0: { text: "HyperText Mega Language", correct: false },
            1: { text: "Hyper Text Modify Language", correct: false },
            2: { text: "Hyper Text Mega Language", correct: false },
            3: { text: "Hyper Text Markup Language", correct: true },
        ]
    */
    const answer = questions[idQuestion].a[dataId];

    // On vérifie si la réponse est la bonne réponse ou non.
    if (answer.correct) {
        console.log(`Bonne réponse !`);
        response.style.background = "#6be585";
    } else {
        response.style.background = "#c94b4b";
        console.log("Mauvaise réponse !");
    }

}