const questions = [
    {
        question: "Which is the largest animal in the world",
        answers: [
            { text: "shark", correct: false },
            { text: "blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Girrafe", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world",
        answers: [
            { text: "Asia", correct: false },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
            { text: "Austrailiya", correct: true },
        ]
    },
    {
        question: "Which is the largest desert in the world",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Antarctica", correct: true },
            { text: "Sahara", correct: false },

        ]
    },
    {
        question: "Which is the smallest country in the world",
        answers: [
            { text: "Vaticann City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri lanka", correct: false },
        ]
    },
]




const questionElement = document.getElementById("question");
const NextButton = document.getElementById("nxt-btn");
const AnsButton = document.getElementById("ans-btn");


let currQuestion = 0;
let score = 0;
let questionNo = currQuestion + 1;


function startQuiz() {
    currQuestion = 0;
    score = 0;
    NextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    currQuestion = questions[currQuestion];
    questionElement.innerHTML = questionNo + ". " + currQuestion.question;

    currQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        AnsButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns);

    });
}


function resetState() {
    NextButton.style.display = "none";
    while (AnsButton.firstChild) {
        AnsButton.removeChild(AnsButton.firstChild)
    };

};



function selectAns(e) {
    const selectBtn = e.target;
    const IsCorrect = selectBtn.dataset.correct === "true";
    if (IsCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    };
    Array.from(AnsButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    NextButton.style.display = "block";
};



function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    NextButton.innerHTML = "Play Again";
    NextButton.style.display = "blocked";
};

function handleNextbtn() {
    currQuestion++;
    if (currQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    };
};

NextButton.addEventListener("click", NextFunc);

function NextFunc() {
    if (currQuestion < questions.length) {
        handleNextbtn();
    } else {
        startQuiz();
    };
};
startQuiz();