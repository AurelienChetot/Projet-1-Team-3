const startQuizButton = document.getElementById("start-quiz");
const timerButton = document.getElementById("display-start-quiz");
const backGroundSize = document.getElementById("container-quiz");
const nextQuestion = document.getElementById("next-question");
const score = document.getElementById("score");
const numberQuestion = document.getElementById("number-question");
const button1 = document.getElementById("op0");
const button2 = document.getElementById("op1");
const button3 = document.getElementById("op2");
const button4 = document.getElementById("op3");
const indication = document.getElementById("indication");
const optionQuestion = document.getElementById("question");
const answersButton = document.querySelectorAll(".answer-btn");

let timer = document.getElementById("timer");
let temps = 10;
let nbQuestion = 0;
let currentScore = 0;

nextQuestion.disabled = true;

function time() {
    timer.innerHTML = "Time Left : " + (temps < 10 ? "" : "") + temps;

    if (temps > 0) {
        temps--;
    } else {        
        if (nbQuestion < 14) { 
            nbQuestion++;           
            numberQuestion.innerHTML = "Question " + (nbQuestion ? "" : "") + questions[1].id++ + "/15";
            afficherQuestion(nbQuestion);
            temps = 10;
        } 
        /* Pour remplacer la condition en haut (else) afin de verrouiller les boutons si le timer arrive à 0*/

        // button1.disabled = true;
        // button2.disabled = true;
        // button3.disabled = true;
        // button4.disabled = true;
    }
}

function startTimer() {
    /**
     * setInterval prend 2 arguments 
     * - la function `time`
     * - le temps (en millisecond)
     */
    intervalId = setInterval(time, 1000);
}    
/* document.getElementById("questions").innerHTML = nbQuestion + 1; */
nextQuestion.addEventListener("click", function() {
    if (nbQuestion < 14) {
        nbQuestion++;
        numberQuestion.innerHTML = "Question " + (nbQuestion ? "" : "") + questions[1].id++ + "/15";
    }
    afficherQuestion(nbQuestion)
    temps = 10;
    if (nbQuestion === 14) {
        nextQuestion.innerHTML = "Clique ici pour terminer !";
    };
    if (nextQuestion.innerHTML === "Clique ici pour terminer !") {
        nextQuestion.addEventListener("click", function() {
            nextQuestion.disabled = true;
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
            nextQuestion.innerHTML = "Quiz complété! Bravo ^^";
            timerButton.style.display = "none";
            const lastDiv = document.querySelector(".end-message");
            const congrats = document.createElement("p");
            lastDiv.appendChild(congrats);
            lastDiv.style.margin = "30px 0";
            lastDiv.style.fontSize = "2rem";
            lastDiv.style.fontStyle = "italic";
            lastDiv.style.fontWeight
            if (currentScore === 0) {
                congrats.innerHTML = "Tu n'as obtenu aucune bonne réponse... tu es une énigme statistique 🧐 En plus de ne pas être très doué.";
            } else if (currentScore > 0 && currentScore <= 4) {
                congrats.innerHTML = "Tu as obtenu entre 1 et 4 bonnes réponses... intéressant... tu sais qu'il y a des quêtes pour apprendre des trucs ? 😅";
            } else if (currentScore > 4 && currentScore <= 8) {
                congrats.innerHTML = "Tu as obtenu entre 5 et 8 bonnes réponses, c'est pas mal jeune padawan ! 🤓 Mais pose ce sabre laser s'il te plaît.";
            } else if (currentScore > 8 && currentScore <= 11) {
                congrats.innerHTML = "Tu as obtenu entre 9 et 11 bonnes réponses, là on discute 😃 Mais prends pas la grosse tête, c'est jamais qu'un pauvre quiz codé avec les pieds...";
            } else if (currentScore > 11 && currentScore <= 14) {
                congrats.innerHTML = "Tu as obtenu entre 12 et 14 bonnes réponses, t'es un ouf malade toi 😁 Qu'est-ce que tu fais ce soir ?";
            } else {
                congrats.innerHTML = "Tu n'as commis aucune erreur !! Tu es l'Elu Neo 🤩 Maintenant va prendre ta pilule.";
            }
            console.log(congrats.innerHTML);
            
        })
    };
});
console.log(questions[0].id)

function startQuiz() {
    numberQuestion.innerHTML = "Question " + (nbQuestion ? "" : "") + questions[0].id++ + "/15";
    indication.style.display = "none";
    startQuizButton.style.display = "none";    
    timerButton.style.justifyContent = "center";
    timerButton.style.paddingLeft = "0px";
    timer.style.width = "250px";
    timer.style.fontSize = "1.9rem";
    nextQuestion.disabled = false;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;

    startTimer();
    afficherQuestion(nbQuestion);
}

startQuizButton.addEventListener("click", startQuiz);

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

// const answersButton = document.querySelectorAll(".answer-btn");

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
    const score = document.getElementById("score");

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
        if (currentScore < 15) {
        currentScore++;
        }
        score.innerHTML = "Score " + (currentScore < 11 ? "" : "") + currentScore + "/15";
                                                    /*? correspond au if : correspond au else*/
    } else {
        response.style.background = "#c94b4b";
        console.log("Mauvaise réponse !");
    }
}


/*Permet de désactiver les autres boutons que celui cliqué ! */
button1.addEventListener("click", () => {
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
/*intervalId stock setInterval pour rendre utilisable/fonctionnel clearInterval */
    clearInterval(intervalId);
    
});

button2.addEventListener("click", () => {
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    clearInterval(intervalId);
});

button3.addEventListener("click", () => {
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    clearInterval(intervalId);
});

button4.addEventListener("click", () => {
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    clearInterval(intervalId);
});



nextQuestion.addEventListener("click", () => {
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    clearInterval(intervalId);
    startTimer();
    
    // Si le nombre de question == 14 (0-14) alors on désactive le bouton de la question suivante
    // if (nbQuestion === 14) {
    //     nextQuestion.disabled = true;
    // }
});
