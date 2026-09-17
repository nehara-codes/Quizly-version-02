// =========================
// SCREEN ELEMENTS
// =========================

const welcomeScreen =
    document.getElementById("welcome-screen");

const setupScreen =
    document.getElementById("setup-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const finalScoreSpan =
    document.getElementById("final-score");

const maxScoreSpan =
    document.getElementById("max-score");

const resultMessage =
    document.getElementById("result-message");

const percentageSpan =
    document.getElementById("percentage");

const playAgainButton =
    document.getElementById("play-again-btn");

const reviewContainer =
    document.getElementById("review-container");

const explanation=document.getElementById("explanation");
const answerFeedback=document.getElementById("answer-feedback");
const timerDisplay=document.getElementById("timer");
const bestScoreSpan=document.getElementById("best-score");
// =========================
// BUTTONS
// =========================

const startButton =
    document.getElementById("start-btn");

const beginQuizButton =
    document.getElementById("begin-quiz-btn");


// =========================
// QUIZ ELEMENTS
// =========================

const questionText =
    document.getElementById("question-text");

const questionCategory =
    document.getElementById("question-category");

const answersContainer =
    document.getElementById("answers-container");

const currentQuestionSpan =
    document.getElementById("current-question");

const totalQuestionsSpan =
    document.getElementById("total-questions");

const scoreSpan =
    document.getElementById("score");

const progressBar =
    document.getElementById("progress");


// =========================
// QUESTION DATA
// =========================

const quizQuestions = [

    // =========================
    // GENERAL KNOWLEDGE - EASY
    // =========================

    {
        question: "What is the capital of France?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false }
        ],
        explanation: "Paris is the capital and largest city of France."
    },

    {
        question: "How many days are there in a week?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ],
        explanation: "A week contains seven days."
    },

    {
        question: "Which animal is known as the King of the Jungle?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Lion", correct: true },
            { text: "Elephant", correct: false },
            { text: "Bear", correct: false }
        ],
        explanation: "The lion is commonly known as the King of the Jungle."
    },

    {
        question: "Which color is created by mixing red and blue?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Green", correct: false },
            { text: "Orange", correct: false },
            { text: "Purple", correct: true },
            { text: "Yellow", correct: false }
        ],
        explanation: "Mixing red and blue produces purple."
    },


    // =========================
    // GENERAL KNOWLEDGE - MEDIUM
    // =========================

    {
        question: "Who painted the Mona Lisa?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Michelangelo", correct: false }
        ],
        explanation: "Leonardo da Vinci painted the Mona Lisa during the Renaissance."
    },

    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "France", correct: true },
            { text: "Italy", correct: false },
            { text: "Spain", correct: false },
            { text: "Germany", correct: false }
        ],
        explanation: "France gifted the Statue of Liberty to the United States in 1886."
    },

    {
        question: "Which language has the most native speakers in the world?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "English", correct: false },
            { text: "Spanish", correct: false },
            { text: "Mandarin Chinese", correct: true },
            { text: "French", correct: false }
        ],
        explanation: "Mandarin Chinese has the largest number of native speakers."
    },

    {
        question: "What is the smallest prime number?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ],
        explanation: "2 is the smallest prime number and the only even prime number."
    },


    // =========================
    // GENERAL KNOWLEDGE - HARD
    // =========================

    {
        question: "Which ancient civilization built Machu Picchu?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Maya", correct: false },
            { text: "Aztec", correct: false },
            { text: "Inca", correct: true },
            { text: "Roman", correct: false }
        ],
        explanation: "Machu Picchu was built by the Inca civilization in the Andes."
    },

    {
        question: "Which element has the atomic number 6?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: false }
        ],
        explanation: "Carbon has the atomic number 6."
    },

    {
        question: "Who wrote the novel '1984'?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "George Orwell", correct: true },
            { text: "Ernest Hemingway", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Charles Dickens", correct: false }
        ],
        explanation: "George Orwell wrote the dystopian novel 1984."
    },

    {
        question: "What is the longest bone in the human body?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Tibia", correct: false },
            { text: "Femur", correct: true },
            { text: "Humerus", correct: false },
            { text: "Radius", correct: false }
        ],
        explanation: "The femur is the longest and strongest bone in the human body."
    },


    // =========================
    // SCIENCE - EASY
    // =========================

    {
        question: "Which planet is known as the Red Planet?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ],
        explanation: "Mars is called the Red Planet because of iron minerals on its surface."
    },

    {
        question: "What gas do humans need to breathe?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Carbon dioxide", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Hydrogen", correct: false },
            { text: "Helium", correct: false }
        ],
        explanation: "Humans need oxygen for cellular respiration."
    },

    {
        question: "What force pulls objects toward Earth?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Magnetism", correct: false },
            { text: "Friction", correct: false },
            { text: "Gravity", correct: true },
            { text: "Electricity", correct: false }
        ],
        explanation: "Gravity attracts objects toward the Earth."
    },

    {
        question: "What is H2O commonly known as?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: false },
            { text: "Water", correct: true },
            { text: "Salt", correct: false }
        ],
        explanation: "H2O is the chemical formula for water."
    },


    // =========================
    // SCIENCE - MEDIUM
    // =========================

    {
        question: "What is the chemical symbol for gold?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Go", correct: false },
            { text: "Gd", correct: false },
            { text: "Au", correct: true },
            { text: "Ag", correct: false }
        ],
        explanation: "Au is the chemical symbol for gold, derived from the Latin word aurum."
    },

    {
        question: "Which organ pumps blood throughout the human body?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Liver", correct: false },
            { text: "Lungs", correct: false },
            { text: "Heart", correct: true },
            { text: "Kidney", correct: false }
        ],
        explanation: "The heart pumps blood throughout the body."
    },

    {
        question: "What is the process by which plants make food using sunlight?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Photosynthesis", correct: true },
            { text: "Digestion", correct: false },
            { text: "Fermentation", correct: false }
        ],
        explanation: "Plants use photosynthesis to convert light energy into chemical energy."
    },

    {
        question: "Which particle has a negative electric charge?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Proton", correct: false },
            { text: "Neutron", correct: false },
            { text: "Electron", correct: true },
            { text: "Nucleus", correct: false }
        ],
        explanation: "Electrons carry a negative electric charge."
    },


    // =========================
    // SCIENCE - HARD
    // =========================

    {
        question: "What is the powerhouse of the cell?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Ribosome", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Cell wall", correct: false }
        ],
        explanation: "Mitochondria produce much of the usable energy in cells."
    },

    {
        question: "What is the speed of light in a vacuum approximately?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "300,000 km/s", correct: true },
            { text: "30,000 km/s", correct: false },
            { text: "3,000 km/s", correct: false },
            { text: "3,000,000 km/s", correct: false }
        ],
        explanation: "Light travels through a vacuum at approximately 300,000 kilometers per second."
    },

    {
        question: "Which blood cells are primarily responsible for fighting infections?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Red blood cells", correct: false },
            { text: "White blood cells", correct: true },
            { text: "Platelets", correct: false },
            { text: "Plasma cells", correct: false }
        ],
        explanation: "White blood cells are key components of the immune system."
    },

    {
        question: "What is the basic unit of heredity?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Cell", correct: false },
            { text: "Tissue", correct: false },
            { text: "Gene", correct: true },
            { text: "Organ", correct: false }
        ],
        explanation: "A gene is a unit of heredity that carries genetic information."
    },


    // =========================
    // GEOGRAPHY - EASY
    // =========================

    {
        question: "What is the largest ocean on Earth?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ],
        explanation: "The Pacific Ocean is the largest ocean on Earth."
    },

    {
        question: "Which continent is Egypt located in?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Europe", correct: false },
            { text: "South America", correct: false }
        ],
        explanation: "Egypt is primarily located in northeastern Africa."
    },

    {
        question: "Which country is famous for the Great Wall?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Japan", correct: false },
            { text: "China", correct: true },
            { text: "India", correct: false },
            { text: "Thailand", correct: false }
        ],
        explanation: "The Great Wall is located in China."
    },

    {
        question: "Which is the smallest continent by land area?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Europe", correct: false },
            { text: "Australia", correct: true },
            { text: "Antarctica", correct: false },
            { text: "South America", correct: false }
        ],
        explanation: "Australia is the smallest continent by land area."
    },


    // =========================
    // GEOGRAPHY - MEDIUM
    // =========================

    {
        question: "Which river is the longest in South America?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Amazon River", correct: true },
            { text: "Nile River", correct: false },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ],
        explanation: "The Amazon River is the longest river in South America."
    },

    {
        question: "Which country has the largest land area in the world?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Canada", correct: false },
            { text: "China", correct: false },
            { text: "Russia", correct: true },
            { text: "United States", correct: false }
        ],
        explanation: "Russia is the world's largest country by land area."
    },

    {
        question: "Mount Everest is part of which mountain range?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Andes", correct: false },
            { text: "Alps", correct: false },
            { text: "Himalayas", correct: true },
            { text: "Rockies", correct: false }
        ],
        explanation: "Mount Everest is located in the Himalayas."
    },

    {
        question: "Which desert is the largest hot desert in the world?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Gobi Desert", correct: false },
            { text: "Sahara Desert", correct: true },
            { text: "Kalahari Desert", correct: false },
            { text: "Atacama Desert", correct: false }
        ],
        explanation: "The Sahara is the world's largest hot desert."
    },


    // =========================
    // GEOGRAPHY - HARD
    // =========================

    {
        question: "Which country is completely surrounded by South Africa?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Botswana", correct: false },
            { text: "Lesotho", correct: true },
            { text: "Namibia", correct: false },
            { text: "Eswatini", correct: false }
        ],
        explanation: "Lesotho is an independent country completely surrounded by South Africa."
    },

    {
        question: "Which strait separates Europe from Africa?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Strait of Malacca", correct: false },
            { text: "Strait of Gibraltar", correct: true },
            { text: "Bering Strait", correct: false },
            { text: "Bosporus Strait", correct: false }
        ],
        explanation: "The Strait of Gibraltar separates southern Spain from northern Africa."
    },

    {
        question: "Which lake is the deepest freshwater lake in the world?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Lake Superior", correct: false },
            { text: "Lake Victoria", correct: false },
            { text: "Lake Baikal", correct: true },
            { text: "Lake Tanganyika", correct: false }
        ],
        explanation: "Lake Baikal in Siberia is the deepest freshwater lake in the world."
    },

    {
        question: "Which country contains the city of Marrakech?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Morocco", correct: true },
            { text: "Egypt", correct: false },
            { text: "Turkey", correct: false },
            { text: "Jordan", correct: false }
        ],
        explanation: "Marrakech is a major city in Morocco."
    },


    // =========================
    // PROGRAMMING - EASY
    // =========================

    {
        question: "Which of these is NOT a programming language?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "Banana", correct: true },
            { text: "JavaScript", correct: false }
        ],
        explanation: "Banana is not a programming language."
    },

    {
        question: "What does HTML stand for?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HighText Machine Language", correct: false },
            { text: "HyperTool Multi Language", correct: false },
            { text: "HomeText Markup Language", correct: false }
        ],
        explanation: "HTML stands for HyperText Markup Language."
    },

    {
        question: "Which language is mainly used to style web pages?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false }
        ],
        explanation: "CSS is used to style and visually design web pages."
    },

    {
        question: "Which symbol is commonly used to write a single-line comment in JavaScript?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "//", correct: true },
            { text: "##", correct: false },
            { text: "<!--", correct: false },
            { text: "**", correct: false }
        ],
        explanation: "Two forward slashes (//) begin a single-line comment in JavaScript."
    },


    // =========================
    // PROGRAMMING - MEDIUM
    // =========================

    {
        question: "Which JavaScript keyword is used to declare a variable that cannot be reassigned?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "const", correct: true },
            { text: "static", correct: false }
        ],
        explanation: "The const keyword declares a variable binding that cannot be reassigned."
    },

    {
        question: "Which method adds an element to the end of an array?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "slice()", correct: false }
        ],
        explanation: "The push() method adds one or more elements to the end of an array."
    },

    {
        question: "Which method is commonly used to loop through every item in an array?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "forEach()", correct: true },
            { text: "findOne()", correct: false },
            { text: "repeat()", correct: false },
            { text: "loopAll()", correct: false }
        ],
        explanation: "forEach() executes a provided function once for each array element."
    },

    {
        question: "What does DOM stand for?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Management", correct: false },
            { text: "Document Operation Method", correct: false },
            { text: "Digital Object Model", correct: false }
        ],
        explanation: "DOM stands for Document Object Model and represents the structure of a web page."
    },


    // =========================
    // PROGRAMMING - HARD
    // =========================

    {
        question: "Which JavaScript method creates a new array containing elements that pass a test?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "filter()", correct: true },
            { text: "forEach()", correct: false },
            { text: "find()", correct: false },
            { text: "push()", correct: false }
        ],
        explanation: "filter() creates a new array containing elements that satisfy a condition."
    },

    {
        question: "Which method returns the first element that satisfies a condition in an array?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "filter()", correct: false },
            { text: "find()", correct: true },
            { text: "map()", correct: false },
            { text: "reduce()", correct: false }
        ],
        explanation: "find() returns the first array element that satisfies the provided testing function."
    },

    {
        question: "What does JSON stand for?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "JavaScript Object Notation", correct: true },
            { text: "Java Standard Object Network", correct: false },
            { text: "JavaScript Online Network", correct: false },
            { text: "Java Object Naming", correct: false }
        ],
        explanation: "JSON stands for JavaScript Object Notation and is commonly used for structured data."
    },

    {
        question: "Which Web Storage API stores data with no automatic expiration date?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "sessionStorage", correct: false },
            { text: "localStorage", correct: true },
            { text: "cookieStorage", correct: false },
            { text: "browserStorage", correct: false }
        ],
        explanation: "localStorage stores data across browser sessions until it is explicitly removed."
    }


];


// =========================
// QUIZ SETTINGS
// =========================

let selectedCategory = null;

let selectedDifficulty = null;

let selectedQuestionCount = null;


// =========================
// QUIZ STATE
// =========================

let selectedQuestions = [];

let currentQuestionIndex = 0;

let score = 0;

let answerSelected = false;

let userAnswers = [];
let timeLeft=15;
let timerInterval;
let soundEnabled=true;


// IMPORTANT:
// This is GLOBAL because
// both showQuestion()
// and selectAnswer()
// need it.

let currentQuestion;


// =========================
// START SCREEN
// =========================

startButton.addEventListener(
    "click",()=>{playSound(600, 0.15);
    showSetupScreen()
});

playAgainButton.addEventListener(
    "click",
    playAgain
);


function showSetupScreen() {

    welcomeScreen.classList.remove("active");

    setupScreen.classList.add("active");

}


// =========================
// CATEGORY SELECTION
// =========================

const categoryButtons =
    document.querySelectorAll(".category-btn");


categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        selectedCategory =
            button.dataset.category;


        categoryButtons.forEach((btn) => {

            btn.classList.remove("selected");

        });


        button.classList.add("selected");

    });

});


// =========================
// DIFFICULTY SELECTION
// =========================

const difficultyButtons =
    document.querySelectorAll(".difficulty-btn");


difficultyButtons.forEach((button) => {

    button.addEventListener("click", () => {

        selectedDifficulty =
            button.dataset.difficulty;


        difficultyButtons.forEach((btn) => {

            btn.classList.remove("selected");

        });


        button.classList.add("selected");

    });

});


// =========================
// QUESTION COUNT
// =========================

const countButtons =
    document.querySelectorAll(".count-btn");


countButtons.forEach((button) => {

    button.addEventListener("click", () => {

        selectedQuestionCount =
            Number(button.dataset.count);


        countButtons.forEach((btn) => {

            btn.classList.remove("selected");

        });


        button.classList.add("selected");

    });

});


// =========================
// FILTER QUESTIONS
// =========================

function getFilteredQuestions() {

    return quizQuestions.filter((question) => {

        return (
            question.category ===
                selectedCategory &&

            question.difficulty ===
                selectedDifficulty
        );

    });

}


// =========================
// BEGIN QUIZ
// =========================

beginQuizButton.addEventListener(
    "click",
    startQuiz
);


function startQuiz() {

    if (
        selectedCategory === null ||
        selectedDifficulty === null ||
        selectedQuestionCount === null
    ) {

        alert(
            "Please choose a category, difficulty, and number of questions."
        );

        return;
    }


    const filteredQuestions =
        getFilteredQuestions();


    if (filteredQuestions.length === 0) {

        alert(
            `Only ${filteredQuestions.length} questions are available for these choices.Please choose a smaller question count.`
        );

        return;

      
    }


    selectedQuestions =
    [...filteredQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, selectedQuestionCount);


    // RESET QUIZ

    currentQuestionIndex = 0;

    score = 0;

    userAnswers = [];

    currentQuestion = null;
    clearInterval(timerInterval);
    explanation.textContent="";
    answerFeedback.textContent="";



    scoreSpan.textContent =
        score;

    totalQuestionsSpan.textContent =
        selectedQuestions.length;


    setupScreen.classList.remove(
        "active"
    );

    quizScreen.classList.add(
        "active"
    );


    showQuestion();

}


// =========================
// SHOW QUESTION
// =========================

function showQuestion() {

    answerSelected = false;
    explanation.textContent="";
    answerFeedback.textContent="";
    clearInterval(timerInterval);
     timeLeft=15;
    timerDisplay.textContent=timeLeft;

    timerInterval=setInterval(()=>{
        timeLeft--;
        timerDisplay.textContent=timeLeft;
        if(timeLeft===0){
            clearInterval(timerInterval);
            timeUp();
        }
    },1000);
    


    // Update GLOBAL currentQuestion

    currentQuestion =
        selectedQuestions[
            currentQuestionIndex
        ];


    currentQuestionSpan.textContent =
        currentQuestionIndex + 1;


    questionText.textContent =
        currentQuestion.question;


    questionCategory.textContent =
        currentQuestion.category;


    const progressPercent =
        (
            currentQuestionIndex /
            selectedQuestions.length
        ) * 100;


    progressBar.style.width =
        progressPercent + "%";


    answersContainer.innerHTML = "";


    const shuffledAnswers =
    [...currentQuestion.answers]
        .sort(() => Math.random() - 0.5);

shuffledAnswers.forEach((answer) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type = "button";


            button.textContent =
                answer.text;


            button.classList.add(
                "answer-btn"
            );


            button.dataset.correct =
                answer.correct;


            button.addEventListener(
                "click",
                selectAnswer
            );


            answersContainer.appendChild(
                button
            );

        }
    );

}


// =========================
// SELECT ANSWER
// =========================

function selectAnswer(event) {

    if (answerSelected) {

        return;

    }


    answerSelected = true;
    clearInterval(timerInterval);


    const selectedButton =
        event.target;


    const isCorrect =
        selectedButton.dataset.correct ===
        "true";


    const correctAnswer =
        currentQuestion.answers.find(
            (answer) => {

                return answer.correct === true;

            }
        );


    // SAVE ANSWER

    userAnswers.push({

        question:
            currentQuestion.question,

        selectedAnswer:
            selectedButton.textContent,

        correctAnswer:
            correctAnswer.text,

        isCorrect:
            isCorrect

    });


    // SCORE

    if (isCorrect) {

        score++;

        scoreSpan.textContent =
            score;
            playSound(700,0.15);

    }


    // SELECTED ANSWER STYLE

    if (isCorrect) {

        selectedButton.classList.add(
            "correct"
        );

    } else {

        selectedButton.classList.add(
            "incorrect"
        );


    }
    if (isCorrect) {
    answerFeedback.textContent =
        "🎉 Correct! Great job!";
} else {
    playSound(250,0.2);
    answerFeedback.textContent =
        "❌ Incorrect!";
}

    explanation.textContent=currentQuestion.explanation;


    // SHOW CORRECT ANSWER

    Array.from(
        answersContainer.children
    ).forEach((button) => {

        if (
            button.dataset.correct ===
            "true"
        ) {

            button.classList.add(
                "correct"
            );

        }

    });



    // NEXT QUESTION

    setTimeout(() => {

        currentQuestionIndex++;


        if (
            currentQuestionIndex <
            selectedQuestions.length
        ) {

            showQuestion();

        } else {

            showResults();

        }

    }, 3000);

}
function timeUp() {
    if (answerSelected) {
        return;
    }

    answerSelected = true;

    const correctAnswer =
        currentQuestion.answers.find(answer => answer.correct);

    explanation.textContent =
        currentQuestion.explanation;

    answerFeedback.textContent =
        "⏰ Time's up!";

    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

// =========================
// SHOW RESULTS
// =========================

function showResults() {

    quizScreen.classList.remove(
        "active"
    );

    resultScreen.classList.add(
        "active"
    );


    // SCORE

    finalScoreSpan.textContent =
        score;


    maxScoreSpan.textContent =
        selectedQuestions.length;


    // PERCENTAGE

    const percentage =
        (
            score /
            selectedQuestions.length
        ) * 100;


    percentageSpan.textContent =
        percentage + "%";

const savedBestScore=Number(localStorage.getItem("bestScore"));
if(score>savedBestScore){
    localStorage.setItem("bestScore",score);

}
bestScoreSpan.textContent=Math.max(score,savedBestScore);
    // MESSAGE

    if (percentage === 100) {
    resultMessage.textContent =
        "🏆 Perfect! You're a genius!";
} else if (percentage >= 80) {
    resultMessage.textContent =
        "🔥 Excellent! You really know your stuff!";
} else if (percentage >= 60) {
    resultMessage.textContent =
        "👍 Good job! Keep learning!";
} else {
    resultMessage.textContent =
        "💪 Keep practicing! You'll get better!";
}


    // =========================
    // ANSWER REVIEW
    // =========================

    reviewContainer.innerHTML = "";


    userAnswers.forEach(
        (answer, index) => {

            const reviewItem =
                document.createElement(
                    "div"
                );


            reviewItem.classList.add(
                "review-item"
            );


            reviewItem.innerHTML = `

                <h3>
                    Question ${index + 1}
                </h3>

                <p class="review-question">
                    ${answer.question}
                </p >

                <p>
                    Your answer:

                    <span class="${
                        answer.isCorrect
                            ? "correct-text"
                            : "incorrect-text"
                    }">

                        ${answer.selectedAnswer}

                    </span>
                </p >

                <p>

                    Correct answer:

                    <span class="correct-text">

                        ${answer.correctAnswer}

                    </span>

                </p >

            `;


            reviewContainer.appendChild(
                reviewItem
            );

        }
    );

}


// =========================
// PLAY AGAIN
// =========================

function playAgain() {

    resultScreen.classList.remove("active");

    setupScreen.classList.add("active");


    // Clear previous category selection
    categoryButtons.forEach((button) => {
        button.classList.remove("selected");
    });


    // Clear previous difficulty selection
    difficultyButtons.forEach((button) => {
        button.classList.remove("selected");
    });


    // Clear previous question-count selection
    countButtons.forEach((button) => {
        button.classList.remove("selected");
    });


    // Reset selected settings
    selectedCategory = null;
    selectedDifficulty = null;
    selectedQuestionCount = null;

}
let audioContext;

function playSound(frequency, duration) {
    if (!soundEnabled) {
        return;
    }

    if (!audioContext) {
        audioContext =
            new (window.AudioContext ||
            window.webkitAudioContext)();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;

    oscillator.start();

    gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + duration
    );

    oscillator.stop(
        audioContext.currentTime + duration
    );
}