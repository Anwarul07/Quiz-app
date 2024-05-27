const questions = [
    {
        question:"Which is the largest animal in the world",
            answers: [
                { text: "shark", correct: false },
                { text: "blue whale", correct: true },
                { text: "Elephant", correct: false },
                { text: "Girrafe", correct: false },
        ]
    },
    {
        question:"Which is the smallest continent in the world",
        answers: [
            { text: "Asia", correct: false },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
            { text: "Austrailiya", correct: true },
    ]
    },
    {
        question:"Which is the largest desert in the world",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Antarctica", correct: true },
            { text: "Sahara", correct: false },
           
    ]
    },
    {
        question:"Which is the smallest country in the world",
        answers: [
            { text: "Vaticann City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri lanka", correct: false },
    ]
    },
]

const questionElement = document.getElementById("question");
const NextButton = document.getElementsByClassName("nxt-btn");
const AnsButton = document.getElementsByClassName("ans-btn");


let currQuestion= 0;
let score= 0;


function startQuiz(params) {
    currQuestion=0;
    score=0;
    NextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(params) {
    resetState();
    let currQuestion=questions[currQuestion];
    let questionNo= currQuestion+1;
    questionElement.innerHTML=questionNo+". "+ currQuestion.question;

    currQuestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        AnsButton.appendChild(button)
        if (answer.correct) {
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAns  )
        
    });
}

function resetState(params) {
    NextButton.style.display= "none";
    while (AnsButton.firstChild) {
        AnsButton.removeChild(AnsButton.firstChild ) 
    }
    
}



 function selectAns(e) {
    const selectBtn=e.target;
    const IsCorrect=selectBtn.dataset.correct==="true";
    if (IsCorrect) {
        selectBtn.classList.add("correct")
    } else {
        selectBtn.classList.add("incorrect")
    }
    Array.from(AnsButton.children).forEach(button=>{
        if (button.dataset.correct==="true") {
            button.classList.add("correct")
        }
        button.disabled= true;
    })
    NextButton.style.display="block"
 }
startQuiz()