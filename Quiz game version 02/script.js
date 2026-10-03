

const welcomeScreen = document.getElementById("welcome-screen");
const setupScreen =document.getElementById("setup-screen");
const quizScreen =document.getElementById("quiz-screen");
const resultScreen =document.getElementById("result-screen");
const finalScoreSpan =document.getElementById("final-score");
const maxScoreSpan =document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const percentageSpan =document.getElementById("percentage");
const playAgainButton =document.getElementById("play-again-btn");
const reviewContainer =document.getElementById("review-container");
const explanation=document.getElementById("explanation");
const answerFeedback=document.getElementById("answer-feedback");
const timerDisplay=document.getElementById("timer");
const bestScoreSpan=document.getElementById("best-score");


const startButton = document.getElementById("start-btn");
const beginQuizButton =document.getElementById("begin-quiz-btn");

const questionText =document.getElementById("question-text");
const questionCategory =document.getElementById("question-category");
const answersContainer =document.getElementById("answers-container");
const currentQuestionSpan =document.getElementById("current-question");
const totalQuestionsSpan =document.getElementById("total-questions");
const scoreSpan =document.getElementById("score");
const progressBar =document.getElementById("progress");


// QUESTION DATA


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
    },

    // =========================
    // ADDITIONAL GENERAL KNOWLEDGE - EASY
    // =========================

    {
        question: "Which month comes after March?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "May", correct: false },
            { text: "April", correct: true },
            { text: "February", correct: false },
            { text: "June", correct: false }
        ],
        explanation: "April comes immediately after March."
    },

    {
        question: "How many hours are in one day?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "12", correct: false },
            { text: "24", correct: true },
            { text: "48", correct: false },
            { text: "36", correct: false }
        ],
        explanation: "A full day has 24 hours."
    },

    {
        question: "Which shape has three sides?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Square", correct: false },
            { text: "Triangle", correct: true },
            { text: "Circle", correct: false },
            { text: "Rectangle", correct: false }
        ],
        explanation: "A triangle has three sides."
    },

    {
        question: "Which is the largest land animal?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Giraffe", correct: false },
            { text: "African elephant", correct: true },
            { text: "Hippopotamus", correct: false },
            { text: "Rhinoceros", correct: false }
        ],
        explanation: "The African elephant is the largest living land animal."
    },

    {
        question: "What do bees produce?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Milk", correct: false },
            { text: "Honey", correct: true },
            { text: "Silk", correct: false },
            { text: "Wax only", correct: false }
        ],
        explanation: "Bees produce honey from nectar; they also produce beeswax."
    },

    {
        question: "Which instrument has black and white keys?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Flute", correct: false },
            { text: "Piano", correct: true },
            { text: "Drum", correct: false },
            { text: "Trumpet", correct: false }
        ],
        explanation: "A piano keyboard has black and white keys."
    },

    {
        question: "How many legs does a spider have?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ],
        explanation: "Spiders are arachnids and have eight legs."
    },

    {
        question: "Which season comes after summer?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Spring", correct: false },
            { text: "Autumn", correct: true },
            { text: "Winter", correct: false },
            { text: "Monsoon", correct: false }
        ],
        explanation: "In the four-season cycle, autumn follows summer."
    },

    {
        question: "What is the opposite of 'hot'?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Warm", correct: false },
            { text: "Cold", correct: true },
            { text: "Dry", correct: false },
            { text: "Bright", correct: false }
        ],
        explanation: "Cold is the opposite of hot."
    },

    {
        question: "Which bird is famous for not being able to fly?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Eagle", correct: false },
            { text: "Penguin", correct: true },
            { text: "Sparrow", correct: false },
            { text: "Swallow", correct: false }
        ],
        explanation: "Penguins are birds adapted for swimming rather than flight."
    },

    {
        question: "What is the first letter of the English alphabet?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "B", correct: false },
            { text: "A", correct: true },
            { text: "C", correct: false },
            { text: "Z", correct: false }
        ],
        explanation: "A is the first letter of the English alphabet."
    },

    {
        question: "Which meal is usually eaten in the morning?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Dinner", correct: false },
            { text: "Breakfast", correct: true },
            { text: "Supper", correct: false },
            { text: "Dessert", correct: false }
        ],
        explanation: "Breakfast is traditionally the first meal of the day."
    },

    {
        question: "How many sides does a square have?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ],
        explanation: "A square has four equal sides."
    },

    {
        question: "Which animal gives us wool?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Cow", correct: false },
            { text: "Sheep", correct: true },
            { text: "Horse", correct: false },
            { text: "Goat", correct: false }
        ],
        explanation: "Sheep are a major source of wool."
    },

    {
        question: "What color is a ripe banana usually?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Blue", correct: false },
            { text: "Yellow", correct: true },
            { text: "Purple", correct: false },
            { text: "Black", correct: false }
        ],
        explanation: "Ripe bananas are commonly yellow."
    },

    {
        question: "Which device is mainly used to take photographs?",
        category: "General Knowledge",
        difficulty: "Easy",
        answers: [
            { text: "Printer", correct: false },
            { text: "Camera", correct: true },
            { text: "Speaker", correct: false },
            { text: "Router", correct: false }
        ],
        explanation: "A camera is designed to capture photographs."
    },

    // =========================
    // ADDITIONAL GENERAL KNOWLEDGE - MEDIUM
    // =========================

    {
        question: "Who was the first person to walk on the Moon?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Yuri Gagarin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Buzz Aldrin", correct: false },
            { text: "John Glenn", correct: false }
        ],
        explanation: "Neil Armstrong became the first human to walk on the Moon in 1969."
    },

    {
        question: "Which currency is used in Japan?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Won", correct: false },
            { text: "Yen", correct: true },
            { text: "Rupee", correct: false },
            { text: "Yuan", correct: false }
        ],
        explanation: "Japan's currency is the Japanese yen."
    },

    {
        question: "Which planet is the largest in our solar system?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Earth", correct: false },
            { text: "Neptune", correct: false }
        ],
        explanation: "Jupiter is the largest planet in the solar system."
    },

    {
        question: "What is the hardest natural substance?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Quartz", correct: false },
            { text: "Diamond", correct: true },
            { text: "Iron", correct: false },
            { text: "Granite", correct: false }
        ],
        explanation: "Diamond is the hardest naturally occurring mineral on the Mohs scale."
    },

    {
        question: "Which famous ship sank in 1912 after hitting an iceberg?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Britannic", correct: false },
            { text: "Titanic", correct: true },
            { text: "Mayflower", correct: false },
            { text: "Endurance", correct: false }
        ],
        explanation: "The RMS Titanic sank in 1912 after striking an iceberg."
    },

    {
        question: "Who wrote Romeo and Juliet?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Jane Austen", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Homer", correct: false },
            { text: "Leo Tolstoy", correct: false }
        ],
        explanation: "William Shakespeare wrote Romeo and Juliet."
    },

    {
        question: "Which metal is liquid at room temperature?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Copper", correct: false },
            { text: "Mercury", correct: true },
            { text: "Aluminum", correct: false },
            { text: "Iron", correct: false }
        ],
        explanation: "Mercury is liquid under normal room-temperature conditions."
    },

    {
        question: "How many players are on a soccer team on the field at one time?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "9", correct: false },
            { text: "11", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ],
        explanation: "A standard soccer team has 11 players on the field."
    },

    {
        question: "Which organ is primarily responsible for filtering blood and producing urine?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Heart", correct: false },
            { text: "Kidneys", correct: true },
            { text: "Lungs", correct: false },
            { text: "Stomach", correct: false }
        ],
        explanation: "The kidneys filter blood and produce urine."
    },

    {
        question: "What is the largest internal organ in the human body?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Heart", correct: false },
            { text: "Liver", correct: true },
            { text: "Lung", correct: false },
            { text: "Kidney", correct: false }
        ],
        explanation: "The liver is the largest internal organ."
    },

    {
        question: "Which ancient city was buried by Mount Vesuvius?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Athens", correct: false },
            { text: "Pompeii", correct: true },
            { text: "Sparta", correct: false },
            { text: "Carthage", correct: false }
        ],
        explanation: "Pompeii was buried by the eruption of Mount Vesuvius in 79 CE."
    },

    {
        question: "What is the main language spoken in Brazil?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Spanish", correct: false },
            { text: "Portuguese", correct: true },
            { text: "English", correct: false },
            { text: "French", correct: false }
        ],
        explanation: "Portuguese is Brazil's official and predominant language."
    },

    {
        question: "Which scientist developed the theory of relativity?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Charles Darwin", correct: false }
        ],
        explanation: "Albert Einstein developed the theories of special and general relativity."
    },

    {
        question: "Which ocean lies between Africa and Australia?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: true },
            { text: "Arctic Ocean", correct: false },
            { text: "Southern Ocean", correct: false }
        ],
        explanation: "The Indian Ocean lies between Africa, Asia, and Australia."
    },

    {
        question: "What is the freezing point of water in Celsius?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "10°C", correct: false },
            { text: "0°C", correct: true },
            { text: "32°C", correct: false },
            { text: "100°C", correct: false }
        ],
        explanation: "Pure water freezes at 0°C under standard atmospheric pressure."
    },

    {
        question: "Which country is home to the ancient city of Petra?",
        category: "General Knowledge",
        difficulty: "Medium",
        answers: [
            { text: "Lebanon", correct: false },
            { text: "Jordan", correct: true },
            { text: "Egypt", correct: false },
            { text: "Greece", correct: false }
        ],
        explanation: "Petra is an ancient city in modern-day Jordan."
    },

    // =========================
    // ADDITIONAL GENERAL KNOWLEDGE - HARD
    // =========================

    {
        question: "Which treaty formally ended World War I between Germany and the Allied Powers?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Treaty of Paris", correct: false },
            { text: "Treaty of Versailles", correct: true },
            { text: "Treaty of Rome", correct: false },
            { text: "Treaty of Vienna", correct: false }
        ],
        explanation: "The Treaty of Versailles was signed in 1919 and imposed peace terms on Germany."
    },

    {
        question: "Who composed the Ninth Symphony known as the 'Choral' Symphony?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Mozart", correct: false },
            { text: "Ludwig van Beethoven", correct: true },
            { text: "Bach", correct: false },
            { text: "Haydn", correct: false }
        ],
        explanation: "Beethoven composed his Ninth Symphony, first performed in 1824."
    },

    {
        question: "Which empire used the title 'pharaoh' for its rulers?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Roman Empire", correct: false },
            { text: "Ancient Egypt", correct: true },
            { text: "Ottoman Empire", correct: false },
            { text: "Mali Empire", correct: false }
        ],
        explanation: "Pharaoh was the traditional title associated with rulers of ancient Egypt."
    },

    {
        question: "What is the smallest country in the world by area?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: false }
        ],
        explanation: "Vatican City is the world's smallest sovereign state by area."
    },

    {
        question: "Which philosopher wrote 'The Republic'?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Aristotle", correct: false },
            { text: "Plato", correct: true },
            { text: "Socrates", correct: false },
            { text: "Epicurus", correct: false }
        ],
        explanation: "Plato wrote The Republic, a major work of ancient Greek philosophy."
    },

    {
        question: "Which civilization developed cuneiform writing?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Romans", correct: false },
            { text: "Sumerians", correct: true },
            { text: "Aztecs", correct: false },
            { text: "Vikings", correct: false }
        ],
        explanation: "The Sumerians of Mesopotamia developed cuneiform writing."
    },

    {
        question: "Which artist painted the ceiling of the Sistine Chapel?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Raphael", correct: false },
            { text: "Michelangelo", correct: true },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Donatello", correct: false }
        ],
        explanation: "Michelangelo painted the famous ceiling of the Sistine Chapel."
    },

    {
        question: "What is the approximate age of Earth?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "540 million years", correct: false },
            { text: "4.54 billion years", correct: true },
            { text: "14 billion years", correct: false },
            { text: "1.2 billion years", correct: false }
        ],
        explanation: "Scientific evidence places Earth's age at about 4.54 billion years."
    },

    {
        question: "Which language is the primary official language of Iran?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Arabic", correct: false },
            { text: "Persian", correct: true },
            { text: "Turkish", correct: false },
            { text: "Urdu", correct: false }
        ],
        explanation: "Persian, also called Farsi, is Iran's official language."
    },

    {
        question: "Which ancient wonder stood in Alexandria?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Hanging Gardens", correct: false },
            { text: "Lighthouse of Alexandria", correct: true },
            { text: "Colossus of Rhodes", correct: false },
            { text: "Temple of Artemis", correct: false }
        ],
        explanation: "The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World."
    },

    {
        question: "Who wrote the epic poem The Odyssey?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Virgil", correct: false },
            { text: "Homer", correct: true },
            { text: "Sophocles", correct: false },
            { text: "Herodotus", correct: false }
        ],
        explanation: "The Odyssey is traditionally attributed to the ancient Greek poet Homer."
    },

    {
        question: "Which branch of government typically interprets laws in a constitutional system?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Legislature", correct: false },
            { text: "Judiciary", correct: true },
            { text: "Executive", correct: false },
            { text: "Cabinet", correct: false }
        ],
        explanation: "The judiciary generally interprets laws and resolves legal disputes."
    },

    {
        question: "Which economic term describes a sustained rise in general price levels?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Deflation", correct: false },
            { text: "Inflation", correct: true },
            { text: "Recession", correct: false },
            { text: "Liquidity", correct: false }
        ],
        explanation: "Inflation is a sustained increase in the general level of prices."
    },

    {
        question: "What is the name of the ancient trade route connecting East Asia with the Mediterranean world?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Amber Road", correct: false },
            { text: "Silk Road", correct: true },
            { text: "Royal Road", correct: false },
            { text: "Spice Route", correct: false }
        ],
        explanation: "The Silk Road was a network of trade routes linking East Asia with regions farther west."
    },

    {
        question: "Which Nobel Prize category was not part of Alfred Nobel's original will?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Physics", correct: false },
            { text: "Economic Sciences", correct: true },
            { text: "Chemistry", correct: false },
            { text: "Peace", correct: false }
        ],
        explanation: "The economics prize was established later by Sweden's central bank in 1968."
    },

    {
        question: "What is the study of ancient human societies through material remains called?",
        category: "General Knowledge",
        difficulty: "Hard",
        answers: [
            { text: "Astronomy", correct: false },
            { text: "Archaeology", correct: true },
            { text: "Linguistics", correct: false },
            { text: "Ecology", correct: false }
        ],
        explanation: "Archaeology studies past human societies through material remains and sites."
    },

    // =========================
    // ADDITIONAL SCIENCE - EASY
    // =========================

    {
        question: "What is the center of an atom called?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Electron cloud", correct: false },
            { text: "Nucleus", correct: true },
            { text: "Molecule", correct: false },
            { text: "Cell", correct: false }
        ],
        explanation: "The nucleus contains protons and neutrons."
    },

    {
        question: "Which sense organ is used for hearing?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Eye", correct: false },
            { text: "Ear", correct: true },
            { text: "Nose", correct: false },
            { text: "Tongue", correct: false }
        ],
        explanation: "The ears detect sound and are responsible for hearing."
    },

    {
        question: "What temperature does water normally boil at at sea level?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "50°C", correct: false },
            { text: "100°C", correct: true },
            { text: "0°C", correct: false },
            { text: "150°C", correct: false }
        ],
        explanation: "Water boils at about 100°C at standard atmospheric pressure."
    },

    {
        question: "Which vitamin is commonly produced in the skin through sunlight exposure?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: true },
            { text: "Vitamin B12", correct: false },
            { text: "Vitamin K", correct: false }
        ],
        explanation: "Sunlight helps the skin produce vitamin D."
    },

    {
        question: "What do plants absorb from the air for photosynthesis?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: false }
        ],
        explanation: "Plants use carbon dioxide as a carbon source during photosynthesis."
    },

    {
        question: "Which part of a plant usually absorbs water from soil?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Flowers", correct: false },
            { text: "Roots", correct: true },
            { text: "Fruits", correct: false },
            { text: "Leaves", correct: false }
        ],
        explanation: "Roots absorb water and minerals from the soil."
    },

    {
        question: "What is the nearest star to Earth?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Sirius", correct: false },
            { text: "Sun", correct: true },
            { text: "Polaris", correct: false },
            { text: "Proxima Centauri", correct: false }
        ],
        explanation: "The Sun is the nearest star to Earth."
    },

    {
        question: "Which state of matter has a fixed shape and fixed volume?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Liquid", correct: false },
            { text: "Solid", correct: true },
            { text: "Gas", correct: false },
            { text: "Plasma only", correct: false }
        ],
        explanation: "A solid has a definite shape and volume."
    },

    {
        question: "What organ helps humans breathe by exchanging gases?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Liver", correct: false },
            { text: "Lungs", correct: true },
            { text: "Stomach", correct: false },
            { text: "Kidney", correct: false }
        ],
        explanation: "The lungs exchange oxygen and carbon dioxide with the blood."
    },

    {
        question: "Which force resists motion between two surfaces?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Gravity", correct: false },
            { text: "Friction", correct: true },
            { text: "Buoyancy", correct: false },
            { text: "Magnetism", correct: false }
        ],
        explanation: "Friction opposes relative motion between surfaces."
    },

    {
        question: "What is the chemical symbol for oxygen?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Ox", correct: false },
            { text: "O", correct: true },
            { text: "Og", correct: false },
            { text: "C", correct: false }
        ],
        explanation: "O is the chemical symbol for oxygen."
    },

    {
        question: "Which natural satellite orbits Earth?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Mars", correct: false },
            { text: "Moon", correct: true },
            { text: "Venus", correct: false },
            { text: "Europa", correct: false }
        ],
        explanation: "The Moon is Earth's natural satellite."
    },

    {
        question: "What type of energy comes from moving objects?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Chemical energy", correct: false },
            { text: "Kinetic energy", correct: true },
            { text: "Nuclear energy", correct: false },
            { text: "Potential energy only", correct: false }
        ],
        explanation: "Kinetic energy is the energy associated with motion."
    },

    {
        question: "Which body system carries blood around the body?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Digestive system", correct: false },
            { text: "Circulatory system", correct: true },
            { text: "Skeletal system", correct: false },
            { text: "Respiratory system", correct: false }
        ],
        explanation: "The circulatory system transports blood throughout the body."
    },

    {
        question: "What do we call animals that eat only plants?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Carnivores", correct: false },
            { text: "Herbivores", correct: true },
            { text: "Omnivores", correct: false },
            { text: "Decomposers", correct: false }
        ],
        explanation: "Herbivores primarily consume plant material."
    },

    {
        question: "Which material is attracted strongly to a magnet?",
        category: "Science",
        difficulty: "Easy",
        answers: [
            { text: "Glass", correct: false },
            { text: "Iron", correct: true },
            { text: "Wood", correct: false },
            { text: "Plastic", correct: false }
        ],
        explanation: "Iron is a ferromagnetic material and is strongly attracted to magnets."
    },

    // =========================
    // ADDITIONAL SCIENCE - MEDIUM
    // =========================

    {
        question: "What is the pH of a neutral solution at 25°C?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "0", correct: false },
            { text: "7", correct: true },
            { text: "5", correct: false },
            { text: "14", correct: false }
        ],
        explanation: "A neutral aqueous solution has a pH of about 7 at 25°C."
    },

    {
        question: "Which gas makes up the largest portion of Earth's atmosphere?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon dioxide", correct: false },
            { text: "Argon", correct: false }
        ],
        explanation: "Nitrogen makes up roughly 78% of Earth's atmosphere."
    },

    {
        question: "What is the SI unit of force?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Joule", correct: false },
            { text: "Newton", correct: true },
            { text: "Watt", correct: false },
            { text: "Pascal", correct: false }
        ],
        explanation: "The newton is the SI unit of force."
    },

    {
        question: "Which type of blood vessel carries blood away from the heart?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Vein", correct: false },
            { text: "Artery", correct: true },
            { text: "Capillary", correct: false },
            { text: "Alveolus", correct: false }
        ],
        explanation: "Arteries carry blood away from the heart."
    },

    {
        question: "What molecule carries genetic information in most living organisms?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "ATP", correct: false },
            { text: "DNA", correct: true },
            { text: "Glucose", correct: false },
            { text: "Hemoglobin", correct: false }
        ],
        explanation: "DNA stores genetic information in most organisms."
    },

    {
        question: "Which planet has the most prominent ring system?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Mercury", correct: false },
            { text: "Saturn", correct: true },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false }
        ],
        explanation: "Saturn is famous for its extensive and bright ring system."
    },

    {
        question: "What is the process of cell division that produces two genetically similar daughter cells?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Meiosis", correct: false },
            { text: "Mitosis", correct: true },
            { text: "Fertilization", correct: false },
            { text: "Transcription", correct: false }
        ],
        explanation: "Mitosis generally produces two genetically similar daughter cells."
    },

    {
        question: "Which subatomic particle has no electric charge?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Proton", correct: false },
            { text: "Neutron", correct: true },
            { text: "Electron", correct: false },
            { text: "Positron", correct: false }
        ],
        explanation: "Neutrons have no net electric charge."
    },

    {
        question: "What is the main pigment involved in photosynthesis?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Melanin", correct: false },
            { text: "Chlorophyll", correct: true },
            { text: "Keratin", correct: false },
            { text: "Hemoglobin", correct: false }
        ],
        explanation: "Chlorophyll absorbs light energy for photosynthesis."
    },

    {
        question: "Which layer of Earth is liquid and surrounds the inner core?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Crust", correct: false },
            { text: "Outer core", correct: true },
            { text: "Mantle", correct: false },
            { text: "Lithosphere", correct: false }
        ],
        explanation: "Earth's liquid outer core surrounds the solid inner core."
    },

    {
        question: "What is the unit of electrical resistance?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Volt", correct: false },
            { text: "Ohm", correct: true },
            { text: "Ampere", correct: false },
            { text: "Coulomb", correct: false }
        ],
        explanation: "The ohm is the SI unit of electrical resistance."
    },

    {
        question: "Which process converts a liquid into a gas at its surface?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Condensation", correct: false },
            { text: "Evaporation", correct: true },
            { text: "Freezing", correct: false },
            { text: "Sublimation", correct: false }
        ],
        explanation: "Evaporation is the conversion of liquid to gas at the surface."
    },

    {
        question: "What type of bond involves sharing electrons between atoms?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Ionic bond", correct: false },
            { text: "Covalent bond", correct: true },
            { text: "Metallic bond", correct: false },
            { text: "Hydrogen bond", correct: false }
        ],
        explanation: "Covalent bonds involve shared pairs of electrons."
    },

    {
        question: "Which organelle contains most of a eukaryotic cell's DNA?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Ribosome", correct: false },
            { text: "Nucleus", correct: true },
            { text: "Golgi apparatus", correct: false },
            { text: "Lysosome", correct: false }
        ],
        explanation: "The nucleus contains most of the DNA in eukaryotic cells."
    },

    {
        question: "What is the approximate acceleration due to gravity near Earth's surface?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "3.0 m/s²", correct: false },
            { text: "9.8 m/s²", correct: true },
            { text: "20 m/s²", correct: false },
            { text: "98 m/s²", correct: false }
        ],
        explanation: "The standard approximate gravitational acceleration is 9.8 m/s²."
    },

    {
        question: "Which hormone helps regulate blood glucose by lowering it?",
        category: "Science",
        difficulty: "Medium",
        answers: [
            { text: "Adrenaline", correct: false },
            { text: "Insulin", correct: true },
            { text: "Thyroxine", correct: false },
            { text: "Melatonin", correct: false }
        ],
        explanation: "Insulin lowers blood glucose by promoting glucose uptake and storage."
    },

    // =========================
    // ADDITIONAL SCIENCE - HARD
    // =========================

    {
        question: "What is the second law of thermodynamics broadly associated with?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Conservation of mass", correct: false },
            { text: "Increase of entropy", correct: true },
            { text: "Universal gravitation", correct: false },
            { text: "Quantum superposition", correct: false }
        ],
        explanation: "The second law describes the tendency of entropy to increase in an isolated system."
    },

    {
        question: "Which particle mediates the electromagnetic force?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Gluon", correct: false },
            { text: "Photon", correct: true },
            { text: "Graviton", correct: false },
            { text: "Neutrino", correct: false }
        ],
        explanation: "In the Standard Model, photons mediate the electromagnetic interaction."
    },

    {
        question: "What is the approximate Avogadro constant?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "9.81 × 10²", correct: false },
            { text: "6.022 × 10²³", correct: true },
            { text: "3.00 × 10⁸", correct: false },
            { text: "1.602 × 10⁻¹⁹", correct: false }
        ],
        explanation: "The Avogadro constant is approximately 6.022 × 10²³ entities per mole."
    },

    {
        question: "Which law states that pressure and volume of a fixed amount of gas are inversely related at constant temperature?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Charles's law", correct: false },
            { text: "Boyle's law", correct: true },
            { text: "Ohm's law", correct: false },
            { text: "Hooke's law", correct: false }
        ],
        explanation: "Boyle's law relates pressure and volume inversely at constant temperature."
    },

    {
        question: "What is the process by which RNA is synthesized from a DNA template?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Translation", correct: false },
            { text: "Transcription", correct: true },
            { text: "Replication", correct: false },
            { text: "Mutation", correct: false }
        ],
        explanation: "Transcription produces RNA using a DNA template."
    },

    {
        question: "Which electromagnetic radiation has the shortest wavelength?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Radio waves", correct: false },
            { text: "Gamma rays", correct: true },
            { text: "Microwaves", correct: false },
            { text: "Infrared", correct: false }
        ],
        explanation: "Gamma rays occupy the shortest-wavelength end of the electromagnetic spectrum."
    },

    {
        question: "What is the name of the boundary around a black hole beyond which light cannot escape?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Photon sphere", correct: false },
            { text: "Event horizon", correct: true },
            { text: "Accretion disk", correct: false },
            { text: "Singularity surface", correct: false }
        ],
        explanation: "The event horizon marks the boundary beyond which escape is impossible in the classical description."
    },

    {
        question: "Which enzyme unwinds the DNA double helix during replication?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Ligase", correct: false },
            { text: "Helicase", correct: true },
            { text: "Amylase", correct: false },
            { text: "Pepsin", correct: false }
        ],
        explanation: "Helicase separates the DNA strands during replication."
    },

    {
        question: "What principle explains why a moving fluid can have lower pressure as its speed increases?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Pascal's principle", correct: false },
            { text: "Bernoulli's principle", correct: true },
            { text: "Archimedes' principle", correct: false },
            { text: "Hubble's law", correct: false }
        ],
        explanation: "Bernoulli's principle relates fluid speed and pressure under suitable conditions."
    },

    {
        question: "Which particle is made of three quarks and is positively charged?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Electron", correct: false },
            { text: "Proton", correct: true },
            { text: "Photon", correct: false },
            { text: "Neutron", correct: false }
        ],
        explanation: "A proton consists of two up quarks and one down quark and has positive charge."
    },

    {
        question: "What is the dominant force holding planets in orbit around the Sun?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Electromagnetism", correct: false },
            { text: "Gravity", correct: true },
            { text: "Strong nuclear force", correct: false },
            { text: "Friction", correct: false }
        ],
        explanation: "Gravity provides the main attractive force governing planetary orbits."
    },

    {
        question: "Which type of spectroscopy is especially useful for identifying molecular vibrations?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Gamma spectroscopy", correct: false },
            { text: "Infrared spectroscopy", correct: true },
            { text: "Ultraviolet only", correct: false },
            { text: "X-ray diffraction", correct: false }
        ],
        explanation: "Infrared spectroscopy probes molecular vibrational transitions."
    },

    {
        question: "What is the approximate half-life of carbon-14?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "573 years", correct: false },
            { text: "5,730 years", correct: true },
            { text: "57,300 years", correct: false },
            { text: "1,000,000 years", correct: false }
        ],
        explanation: "Carbon-14 has a half-life of about 5,730 years."
    },

    {
        question: "Which structure controls what enters and leaves a cell?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Nucleolus", correct: false },
            { text: "Cell membrane", correct: true },
            { text: "Centrosome", correct: false },
            { text: "Chromosome", correct: false }
        ],
        explanation: "The cell membrane regulates movement of substances into and out of the cell."
    },

    {
        question: "What is the main function of red blood cell hemoglobin?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Digest proteins", correct: false },
            { text: "Transport oxygen", correct: true },
            { text: "Produce antibodies", correct: false },
            { text: "Clot blood", correct: false }
        ],
        explanation: "Hemoglobin binds oxygen and helps transport it through the blood."
    },

    {
        question: "Which fundamental interaction is responsible for radioactive beta decay?",
        category: "Science",
        difficulty: "Hard",
        answers: [
            { text: "Strong nuclear force", correct: false },
            { text: "Weak nuclear force", correct: true },
            { text: "Gravity", correct: false },
            { text: "Electromagnetic force", correct: false }
        ],
        explanation: "Beta decay is governed by the weak nuclear interaction."
    },

    // =========================
    // ADDITIONAL GEOGRAPHY - EASY
    // =========================

    {
        question: "What is the capital city of Japan?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Kyoto", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Osaka", correct: false },
            { text: "Hiroshima", correct: false }
        ],
        explanation: "Tokyo is the capital of Japan."
    },

    {
        question: "Which country is shaped roughly like a boot?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Greece", correct: false },
            { text: "Italy", correct: true },
            { text: "Portugal", correct: false },
            { text: "Chile", correct: false }
        ],
        explanation: "Italy is commonly described as boot-shaped."
    },

    {
        question: "Which continent is Brazil in?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Africa", correct: false },
            { text: "South America", correct: true },
            { text: "Europe", correct: false },
            { text: "Asia", correct: false }
        ],
        explanation: "Brazil is located in South America."
    },

    {
        question: "What is the largest country in South America by area?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Argentina", correct: false },
            { text: "Brazil", correct: true },
            { text: "Peru", correct: false },
            { text: "Colombia", correct: false }
        ],
        explanation: "Brazil is the largest country in South America by area."
    },

    {
        question: "Which ocean is on the east coast of the United States?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Pacific Ocean", correct: false },
            { text: "Atlantic Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ],
        explanation: "The Atlantic Ocean borders the eastern United States."
    },

    {
        question: "What is the capital of China?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Shanghai", correct: false },
            { text: "Beijing", correct: true },
            { text: "Guangzhou", correct: false },
            { text: "Shenzhen", correct: false }
        ],
        explanation: "Beijing is the capital of China."
    },

    {
        question: "Which country is directly south of the United States?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Canada", correct: false },
            { text: "Mexico", correct: true },
            { text: "Cuba", correct: false },
            { text: "Brazil", correct: false }
        ],
        explanation: "Mexico lies directly south of the United States."
    },

    {
        question: "Which continent contains the Sahara Desert?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Australia", correct: false },
            { text: "Europe", correct: false }
        ],
        explanation: "The Sahara Desert spans much of northern Africa."
    },

    {
        question: "What is the capital of Sri Lanka?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Colombo", correct: false },
            { text: "Sri Jayawardenepura Kotte", correct: true },
            { text: "Kandy", correct: false },
            { text: "Galle", correct: false }
        ],
        explanation: "Sri Jayawardenepura Kotte is Sri Lanka's official administrative capital."
    },

    {
        question: "Which country is known for the city of Paris?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Belgium", correct: false },
            { text: "France", correct: true },
            { text: "Switzerland", correct: false },
            { text: "Austria", correct: false }
        ],
        explanation: "Paris is the capital of France."
    },

    {
        question: "Which mountain is the highest above sea level?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Mont Blanc", correct: false }
        ],
        explanation: "Mount Everest has the highest elevation above sea level."
    },

    {
        question: "Which ocean surrounds the Maldives?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: true },
            { text: "Pacific Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ],
        explanation: "The Maldives is an island country in the Indian Ocean."
    },

    {
        question: "Which country has the city of Sydney?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "New Zealand", correct: false },
            { text: "Australia", correct: true },
            { text: "Canada", correct: false },
            { text: "South Africa", correct: false }
        ],
        explanation: "Sydney is a major city in Australia."
    },

    {
        question: "Which continent is the coldest?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Europe", correct: false },
            { text: "Antarctica", correct: true },
            { text: "Asia", correct: false },
            { text: "North America", correct: false }
        ],
        explanation: "Antarctica is Earth's coldest continent."
    },

    {
        question: "Which line divides Earth into Northern and Southern Hemispheres?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Prime Meridian", correct: false },
            { text: "Equator", correct: true },
            { text: "Tropic of Cancer", correct: false },
            { text: "Arctic Circle", correct: false }
        ],
        explanation: "The Equator is at 0° latitude and divides the two hemispheres."
    },

    {
        question: "Which country is famous for the city of Venice?",
        category: "Geography",
        difficulty: "Easy",
        answers: [
            { text: "Spain", correct: false },
            { text: "Italy", correct: true },
            { text: "Croatia", correct: false },
            { text: "France", correct: false }
        ],
        explanation: "Venice is a historic city in northeastern Italy."
    },

    // =========================
    // ADDITIONAL GEOGRAPHY - MEDIUM
    // =========================

    {
        question: "What is the capital of Canada?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Vancouver", correct: false },
            { text: "Montreal", correct: false }
        ],
        explanation: "Ottawa is Canada's capital city."
    },

    {
        question: "Which river flows through Egypt?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Nile", correct: true },
            { text: "Danube", correct: false },
            { text: "Ganges", correct: false }
        ],
        explanation: "The Nile flows through Egypt and is central to its geography."
    },

    {
        question: "Which country has the largest population in Africa?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Egypt", correct: false },
            { text: "Nigeria", correct: true },
            { text: "Ethiopia", correct: false },
            { text: "South Africa", correct: false }
        ],
        explanation: "Nigeria has the largest population in Africa."
    },

    {
        question: "What is the world's largest island that is not considered a continent?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Borneo", correct: false },
            { text: "Greenland", correct: true },
            { text: "Madagascar", correct: false },
            { text: "New Guinea", correct: false }
        ],
        explanation: "Greenland is the world's largest island under this classification."
    },

    {
        question: "Which sea lies between Europe and Africa?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Caribbean Sea", correct: false },
            { text: "Mediterranean Sea", correct: true },
            { text: "Baltic Sea", correct: false },
            { text: "Arabian Sea", correct: false }
        ],
        explanation: "The Mediterranean Sea separates much of southern Europe from northern Africa."
    },

    {
        question: "Which country contains the Atacama Desert?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Mexico", correct: false },
            { text: "Chile", correct: true },
            { text: "Morocco", correct: false },
            { text: "Australia", correct: false }
        ],
        explanation: "The Atacama Desert is primarily in northern Chile."
    },

    {
        question: "Which river flows through London?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Seine", correct: false },
            { text: "Thames", correct: true },
            { text: "Tiber", correct: false },
            { text: "Rhine", correct: false }
        ],
        explanation: "The River Thames flows through London."
    },

    {
        question: "Which country is known for the fjords around Bergen?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Norway", correct: true },
            { text: "Finland", correct: false },
            { text: "Denmark", correct: false }
        ],
        explanation: "Norway is famous for its fjords, including those near Bergen."
    },

    {
        question: "Which mountain range separates much of Europe from Asia in traditional geography?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Andes", correct: false },
            { text: "Ural Mountains", correct: true },
            { text: "Alps", correct: false },
            { text: "Himalayas", correct: false }
        ],
        explanation: "The Ural Mountains are commonly used as part of the Europe-Asia boundary."
    },

    {
        question: "Which African lake is the largest by surface area?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Lake Tanganyika", correct: false },
            { text: "Lake Victoria", correct: true },
            { text: "Lake Malawi", correct: false },
            { text: "Lake Chad", correct: false }
        ],
        explanation: "Lake Victoria is Africa's largest lake by surface area."
    },

    {
        question: "Which country contains the region of Transylvania?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Hungary", correct: false },
            { text: "Romania", correct: true },
            { text: "Bulgaria", correct: false },
            { text: "Serbia", correct: false }
        ],
        explanation: "Transylvania is a historical region in central Romania."
    },

    {
        question: "Which strait connects the Black Sea with the Sea of Marmara?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Gibraltar", correct: false },
            { text: "Bosphorus", correct: true },
            { text: "Hormuz", correct: false },
            { text: "Malacca", correct: false }
        ],
        explanation: "The Bosphorus connects the Black Sea and Sea of Marmara."
    },

    {
        question: "Which country has the most time zones when including overseas territories?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Russia", correct: false },
            { text: "France", correct: true },
            { text: "United States", correct: false },
            { text: "China", correct: false }
        ],
        explanation: "France has many time zones because of its overseas territories."
    },

    {
        question: "Which capital city lies on the Danube River?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Madrid", correct: false },
            { text: "Budapest", correct: true },
            { text: "Lisbon", correct: false },
            { text: "Oslo", correct: false }
        ],
        explanation: "Budapest is situated on the Danube River."
    },

    {
        question: "Which country is the largest in the Arabian Peninsula by area?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Yemen", correct: false },
            { text: "Saudi Arabia", correct: true },
            { text: "Oman", correct: false },
            { text: "United Arab Emirates", correct: false }
        ],
        explanation: "Saudi Arabia occupies most of the Arabian Peninsula and is its largest country."
    },

    {
        question: "Which desert covers much of northern China and southern Mongolia?",
        category: "Geography",
        difficulty: "Medium",
        answers: [
            { text: "Sahara", correct: false },
            { text: "Gobi Desert", correct: true },
            { text: "Kalahari", correct: false },
            { text: "Mojave", correct: false }
        ],
        explanation: "The Gobi extends across southern Mongolia and northern China."
    },

    // =========================
    // ADDITIONAL GEOGRAPHY - HARD
    // =========================

    {
        question: "Which country has the world's highest average elevation?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Nepal", correct: false },
            { text: "Bhutan", correct: true },
            { text: "Switzerland", correct: false },
            { text: "Tajikistan", correct: false }
        ],
        explanation: "Bhutan is commonly cited as having the highest average elevation among sovereign states."
    },

    {
        question: "Which river forms part of the border between the United States and Mexico?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Colorado River", correct: false },
            { text: "Rio Grande", correct: true },
            { text: "Missouri River", correct: false },
            { text: "Columbia River", correct: false }
        ],
        explanation: "The Rio Grande forms a significant portion of the U.S.-Mexico border."
    },

    {
        question: "Which country contains the largest share of the Amazon rainforest?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Peru", correct: false },
            { text: "Brazil", correct: true },
            { text: "Colombia", correct: false },
            { text: "Bolivia", correct: false }
        ],
        explanation: "Brazil contains the largest share of the Amazon rainforest."
    },

    {
        question: "Which African country has coastlines on both the Atlantic and Indian Oceans?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Kenya", correct: false },
            { text: "South Africa", correct: true },
            { text: "Ghana", correct: false },
            { text: "Morocco", correct: false }
        ],
        explanation: "South Africa has coastlines on both the Atlantic and Indian Oceans."
    },

    {
        question: "Which lake is shared by Tanzania, Uganda, and Kenya?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Lake Baikal", correct: false },
            { text: "Lake Victoria", correct: true },
            { text: "Lake Superior", correct: false },
            { text: "Lake Titicaca", correct: false }
        ],
        explanation: "Lake Victoria borders Tanzania, Uganda, and Kenya."
    },

    {
        question: "Which channel separates Great Britain from France?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Mozambique Channel", correct: false },
            { text: "English Channel", correct: true },
            { text: "Bering Strait", correct: false },
            { text: "Dover Strait only", correct: false }
        ],
        explanation: "The English Channel separates southern Great Britain from northern France."
    },

    {
        question: "Which country contains the geologic region known as the Altiplano?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Egypt", correct: false },
            { text: "Bolivia", correct: true },
            { text: "Iceland", correct: false },
            { text: "Japan", correct: false }
        ],
        explanation: "The Altiplano is a high plateau extending across Bolivia and neighboring Andean countries."
    },

    {
        question: "Which river is the principal river flowing through Baghdad?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Euphrates", correct: false },
            { text: "Tigris", correct: true },
            { text: "Jordan", correct: false },
            { text: "Indus", correct: false }
        ],
        explanation: "Baghdad lies on the Tigris River."
    },

    {
        question: "Which country has the largest land area in Africa?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Democratic Republic of the Congo", correct: false },
            { text: "Algeria", correct: true },
            { text: "Sudan", correct: false },
            { text: "Libya", correct: false }
        ],
        explanation: "Algeria is Africa's largest country by land area."
    },

    {
        question: "Which two countries share the island of Hispaniola?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Cuba and Haiti", correct: false },
            { text: "Haiti and Dominican Republic", correct: true },
            { text: "Jamaica and Haiti", correct: false },
            { text: "Dominican Republic and Puerto Rico", correct: false }
        ],
        explanation: "Haiti and the Dominican Republic share Hispaniola."
    },

    {
        question: "Which European country has the exclave of Kaliningrad?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Poland", correct: false },
            { text: "Russia", correct: true },
            { text: "Lithuania", correct: false },
            { text: "Belarus", correct: false }
        ],
        explanation: "Kaliningrad is a Russian exclave on the Baltic Sea."
    },

    {
        question: "Which mountain range contains Aconcagua?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Rockies", correct: false },
            { text: "Andes", correct: true },
            { text: "Alps", correct: false },
            { text: "Caucasus", correct: false }
        ],
        explanation: "Aconcagua is located in the Andes of Argentina."
    },

    {
        question: "Which sea is the saltiest large body of water commonly called a sea?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Red Sea", correct: false },
            { text: "Dead Sea", correct: true },
            { text: "Caspian Sea", correct: false },
            { text: "Black Sea", correct: false }
        ],
        explanation: "The Dead Sea has extremely high salinity, though it is technically a lake."
    },

    {
        question: "Which river has historically been associated with the ancient civilization of Mesopotamia alongside the Euphrates?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Niger", correct: false },
            { text: "Tigris", correct: true },
            { text: "Volga", correct: false },
            { text: "Mekong", correct: false }
        ],
        explanation: "Mesopotamia developed between the Tigris and Euphrates rivers."
    },

    {
        question: "Which country has the world's northernmost national capital among sovereign states?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Norway", correct: false },
            { text: "Iceland", correct: true },
            { text: "Finland", correct: false },
            { text: "Canada", correct: false }
        ],
        explanation: "Reykjavik, Iceland, is the northernmost national capital of a sovereign state."
    },

    {
        question: "Which tectonic plate contains most of the Indian subcontinent?",
        category: "Geography",
        difficulty: "Hard",
        answers: [
            { text: "Pacific Plate", correct: false },
            { text: "Indian Plate", correct: true },
            { text: "Nazca Plate", correct: false },
            { text: "Arabian Plate", correct: false }
        ],
        explanation: "Most of the Indian subcontinent lies on the Indian Plate."
    },

    // =========================
    // ADDITIONAL PROGRAMMING - EASY
    // =========================

    {
        question: "Which language is used to structure the content of web pages?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "CSS", correct: false },
            { text: "HTML", correct: true },
            { text: "SQL", correct: false },
            { text: "Java", correct: false }
        ],
        explanation: "HTML structures web page content."
    },

    {
        question: "Which language is commonly used to add interactivity to web pages?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "HTML", correct: false },
            { text: "JavaScript", correct: true },
            { text: "CSS", correct: false },
            { text: "XML", correct: false }
        ],
        explanation: "JavaScript is widely used for browser-side web interactivity."
    },

    {
        question: "What symbol starts an ID selector in CSS?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: ".", correct: false },
            { text: "#", correct: true },
            { text: "@", correct: false },
            { text: "&", correct: false }
        ],
        explanation: "A hash symbol (#) begins an ID selector in CSS."
    },

    {
        question: "Which HTML tag creates a hyperlink?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "<link>", correct: false },
            { text: "<a>", correct: true },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false }
        ],
        explanation: "The <a> element creates hyperlinks."
    },

    {
        question: "Which HTML tag creates a paragraph?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "<para>", correct: false },
            { text: "<p>", correct: true },
            { text: "<text>", correct: false },
            { text: "<pg>", correct: false }
        ],
        explanation: "The <p> element represents a paragraph."
    },

    {
        question: "Which CSS property changes text color?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "font-style", correct: false },
            { text: "color", correct: true },
            { text: "text-fill", correct: false },
            { text: "background", correct: false }
        ],
        explanation: "The color property sets the foreground text color."
    },

    {
        question: "Which JavaScript function prints a message to the console?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "print()", correct: false },
            { text: "console.log()", correct: true },
            { text: "echo()", correct: false },
            { text: "console.write()", correct: false }
        ],
        explanation: "console.log() writes a value to the browser console."
    },

    {
        question: "Which symbol is used for strict equality in JavaScript?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "=", correct: false },
            { text: "!==", correct: false }
        ],
        explanation: "The === operator checks equality without type coercion."
    },

    {
        question: "Which JavaScript keyword can declare a block-scoped variable that can be reassigned?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "const", correct: false },
            { text: "let", correct: true },
            { text: "varies", correct: false },
            { text: "define", correct: false }
        ],
        explanation: "let declares a block-scoped binding that can be reassigned."
    },

    {
        question: "Which HTML attribute provides alternative text for an image?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "src", correct: false },
            { text: "alt", correct: true },
            { text: "href", correct: false },
            { text: "title-only", correct: false }
        ],
        explanation: "The alt attribute provides alternative text for an image."
    },

    {
        question: "Which CSS property changes the background color?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "color-background", correct: false },
            { text: "background-color", correct: true },
            { text: "bg", correct: false },
            { text: "background-style", correct: false }
        ],
        explanation: "background-color sets the background color of an element."
    },

    {
        question: "Which file extension is commonly used for JavaScript files?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: ".java", correct: false },
            { text: ".js", correct: true },
            { text: ".jsx-only", correct: false },
            { text: ".script", correct: false }
        ],
        explanation: "JavaScript source files commonly use the .js extension."
    },

    {
        question: "Which data type represents true or false in JavaScript?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "String", correct: false },
            { text: "Boolean", correct: true },
            { text: "Number", correct: false },
            { text: "Object", correct: false }
        ],
        explanation: "Boolean values are true and false."
    },

    {
        question: "Which method removes the last element from a JavaScript array?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "push()", correct: false },
            { text: "pop()", correct: true },
            { text: "shift()", correct: false },
            { text: "removeLast()", correct: false }
        ],
        explanation: "pop() removes and returns the last array element."
    },

    {
        question: "Which HTML element is normally used for the largest heading?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "<h6>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<head>", correct: false },
            { text: "<heading>", correct: false }
        ],
        explanation: "h1 is the highest-level standard HTML heading."
    },

    {
        question: "Which CSS unit is relative to the root element's font size?",
        category: "Programming",
        difficulty: "Easy",
        answers: [
            { text: "px", correct: false },
            { text: "rem", correct: true },
            { text: "cm", correct: false },
            { text: "pt", correct: false }
        ],
        explanation: "The rem unit is relative to the root element's font size."
    },

    // =========================
    // ADDITIONAL PROGRAMMING - MEDIUM
    // =========================

    {
        question: "What does CSS stand for?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "Computer Style Syntax", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Styling System", correct: false },
            { text: "Coded Style Sheets", correct: false }
        ],
        explanation: "CSS stands for Cascading Style Sheets."
    },

    {
        question: "Which JavaScript method converts a JSON string into an object?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.parse()", correct: true },
            { text: "JSON.convert()", correct: false },
            { text: "parse.JSON()", correct: false }
        ],
        explanation: "JSON.parse() converts valid JSON text into a JavaScript value."
    },

    {
        question: "Which JavaScript method converts an object into a JSON string?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "JSON.parse()", correct: false },
            { text: "JSON.stringify()", correct: true },
            { text: "JSON.toObject()", correct: false },
            { text: "string.JSON()", correct: false }
        ],
        explanation: "JSON.stringify() serializes a JavaScript value into JSON text."
    },

    {
        question: "What does API stand for?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "Applied Program Internet", correct: false },
            { text: "Application Programming Interface", correct: true },
            { text: "Application Process Instruction", correct: false },
            { text: "Advanced Programming Input", correct: false }
        ],
        explanation: "API stands for Application Programming Interface."
    },

    {
        question: "Which data structure follows First In, First Out?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "Stack", correct: false },
            { text: "Queue", correct: true },
            { text: "Tree", correct: false },
            { text: "Graph", correct: false }
        ],
        explanation: "A queue follows FIFO: first in, first out."
    },

    {
        question: "Which data structure follows Last In, First Out?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "Queue", correct: false },
            { text: "Stack", correct: true },
            { text: "Heap only", correct: false },
            { text: "Graph", correct: false }
        ],
        explanation: "A stack follows LIFO: last in, first out."
    },

    {
        question: "What does SQL primarily work with?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "Image editing", correct: false },
            { text: "Relational databases", correct: true },
            { text: "Operating systems", correct: false },
            { text: "Graphics rendering", correct: false }
        ],
        explanation: "SQL is primarily used to query and manage relational databases."
    },

    {
        question: "Which SQL command is used to retrieve data?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "GET", correct: false },
            { text: "SELECT", correct: true },
            { text: "FETCHALL", correct: false },
            { text: "READ", correct: false }
        ],
        explanation: "SELECT retrieves rows and columns from a database."
    },

    {
        question: "Which JavaScript method creates a new array by transforming each element?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "filter()", correct: false },
            { text: "map()", correct: true },
            { text: "reduce()", correct: false },
            { text: "forEachOnly()", correct: false }
        ],
        explanation: "map() returns a new array containing transformed elements."
    },

    {
        question: "What is an event listener used for in JavaScript?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "Creating databases", correct: false },
            { text: "Responding to events", correct: true },
            { text: "Compiling CSS", correct: false },
            { text: "Encrypting passwords automatically", correct: false }
        ],
        explanation: "An event listener runs code when a specified event occurs."
    },

    {
        question: "Which HTTP method is commonly used to retrieve data?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "POST", correct: false },
            { text: "GET", correct: true },
            { text: "DELETE", correct: false },
            { text: "PATCH", correct: false }
        ],
        explanation: "GET is commonly used to request data from a server."
    },

    {
        question: "Which HTTP status code means 'Not Found'?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "200", correct: false },
            { text: "404", correct: true },
            { text: "301", correct: false },
            { text: "500", correct: false }
        ],
        explanation: "HTTP 404 indicates that the requested resource was not found."
    },

    {
        question: "What is Git primarily used for?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "Database hosting", correct: false },
            { text: "Version control", correct: true },
            { text: "Web design", correct: false },
            { text: "Video compression", correct: false }
        ],
        explanation: "Git is a distributed version control system."
    },

    {
        question: "Which Git command copies a remote repository to your computer?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "git copy", correct: false },
            { text: "git clone", correct: true },
            { text: "git pull-new", correct: false },
            { text: "git download", correct: false }
        ],
        explanation: "git clone creates a local copy of a remote repository."
    },

    {
        question: "What does DOM manipulation mean?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "Changing CPU voltage", correct: false },
            { text: "Changing the web page structure through JavaScript", correct: true },
            { text: "Editing database tables only", correct: false },
            { text: "Compiling HTML", correct: false }
        ],
        explanation: "DOM manipulation changes document elements, attributes, or content through scripts."
    },

    {
        question: "Which JavaScript operator is used for logical AND?",
        category: "Programming",
        difficulty: "Medium",
        answers: [
            { text: "||", correct: false },
            { text: "&&", correct: true },
            { text: "!", correct: false },
            { text: "^^", correct: false }
        ],
        explanation: "The && operator represents logical AND."
    },

    // =========================
    // ADDITIONAL PROGRAMMING - HARD
    // =========================

    {
        question: "What is the time complexity of binary search on a sorted array?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: true },
            { text: "O(n²)", correct: false },
            { text: "O(1) always", correct: false }
        ],
        explanation: "Binary search halves the search space each step, giving O(log n) time."
    },

    {
        question: "What is a closure in JavaScript?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "A closed browser tab", correct: false },
            { text: "A function retaining access to its lexical scope", correct: true },
            { text: "A database connection", correct: false },
            { text: "A CSS rule", correct: false }
        ],
        explanation: "A closure lets a function retain access to variables from its surrounding lexical scope."
    },

    {
        question: "Which JavaScript feature allows a function to pause and resume execution?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "Callback only", correct: false },
            { text: "Generator function", correct: true },
            { text: "Promise constructor only", correct: false },
            { text: "Class field", correct: false }
        ],
        explanation: "Generator functions can pause with yield and later resume."
    },

    {
        question: "What does asynchronous JavaScript allow?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "All code to run simultaneously", correct: false },
            { text: "Work to continue without blocking on every operation", correct: true },
            { text: "JavaScript to skip errors", correct: false },
            { text: "HTML to execute on the server automatically", correct: false }
        ],
        explanation: "Asynchronous patterns allow operations such as I/O to progress without blocking the main flow."
    },

    {
        question: "Which data structure is commonly used to implement breadth-first search?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "Stack", correct: false },
            { text: "Queue", correct: true },
            { text: "Hash only", correct: false },
            { text: "Array sort", correct: false }
        ],
        explanation: "BFS processes nodes level by level and commonly uses a queue."
    },

    {
        question: "Which algorithmic technique solves a problem by combining solutions to smaller subproblems?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "Brute force only", correct: false },
            { text: "Divide and conquer", correct: true },
            { text: "Random guessing", correct: false },
            { text: "Linear probing", correct: false }
        ],
        explanation: "Divide and conquer breaks a problem into smaller subproblems and combines their results."
    },

    {
        question: "What does Big O notation describe?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "Exact runtime in seconds", correct: false },
            { text: "Growth of resource usage with input size", correct: true },
            { text: "Programming language speed", correct: false },
            { text: "CPU brand", correct: false }
        ],
        explanation: "Big O describes asymptotic growth of resource requirements as input size increases."
    },

    {
        question: "Which JavaScript collection stores unique values?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "Array", correct: false },
            { text: "Set", correct: true },
            { text: "Tuple", correct: false },
            { text: "WeakString", correct: false }
        ],
        explanation: "A Set stores unique values."
    },

    {
        question: "Which JavaScript collection stores key-value pairs?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "Set", correct: false },
            { text: "Map", correct: true },
            { text: "ArrayBuffer", correct: false },
            { text: "String", correct: false }
        ],
        explanation: "A Map stores key-value pairs and allows keys of various types."
    },

    {
        question: "What is event bubbling?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "An event being deleted", correct: false },
            { text: "An event propagating from a target toward ancestor elements", correct: true },
            { text: "A network packet retry", correct: false },
            { text: "A CSS animation", correct: false }
        ],
        explanation: "In event bubbling, an event propagates from the target upward through ancestors."
    },

    {
        question: "Which database normalization goal reduces unnecessary data duplication?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "Increasing duplicate rows", correct: false },
            { text: "Reducing redundancy", correct: true },
            { text: "Removing all keys", correct: false },
            { text: "Disabling constraints", correct: false }
        ],
        explanation: "Normalization organizes data to reduce redundancy and update anomalies."
    },

    {
        question: "What is a primary key used for in a relational database?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "Sorting every table alphabetically", correct: false },
            { text: "Uniquely identifying rows", correct: true },
            { text: "Encrypting the database", correct: false },
            { text: "Storing only text", correct: false }
        ],
        explanation: "A primary key uniquely identifies each row in a table."
    },

    {
        question: "Which SQL operation combines rows from related tables?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "MERGE_TEXT", correct: false },
            { text: "JOIN", correct: true },
            { text: "CONNECT", correct: false },
            { text: "BIND", correct: false }
        ],
        explanation: "JOIN combines related rows from multiple tables using matching conditions."
    },

    {
        question: "What is recursion?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "A loop that never runs", correct: false },
            { text: "A function calling itself directly or indirectly", correct: true },
            { text: "A database query", correct: false },
            { text: "A CSS inheritance rule", correct: false }
        ],
        explanation: "Recursion occurs when a function invokes itself directly or through another function."
    },

    {
        question: "Which HTTP status code commonly means a successful request?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "404", correct: false },
            { text: "200", correct: true },
            { text: "500", correct: false },
            { text: "403", correct: false }
        ],
        explanation: "HTTP 200 indicates a successful request."
    },

    {
        question: "What is a promise in JavaScript?",
        category: "Programming",
        difficulty: "Hard",
        answers: [
            { text: "A CSS variable", correct: false },
            { text: "An object representing eventual completion or failure of an asynchronous operation", correct: true },
            { text: "A database table", correct: false },
            { text: "A compiler directive", correct: false }
        ],
        explanation: "A Promise represents the eventual result of an asynchronous operation."
    }

];



let selectedCategory = null;
let selectedDifficulty = null;
let selectedQuestionCount = null;


let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answerSelected = false;
let userAnswers = [];
let timeLeft=15;
let timerInterval;
let soundEnabled=true;
let currentQuestion;

// START SCREEN

startButton.addEventListener(
    "click",()=>{playSound(600, 0.15);
    showSetupScreen()
});

playAgainButton.addEventListener(
    "click",playAgain);


function showSetupScreen() {

    welcomeScreen.classList.remove("active");
    setupScreen.classList.add("active");
}


// CATEGORY SELECTION


const categoryButtons =document.querySelectorAll(".category-btn");
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


// DIFFICULTY SELECTION
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

// QUESTION COUNT

const countButtons =document.querySelectorAll(".count-btn");
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


// FILTER QUESTIONS


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

// BEGIN QUIZ

beginQuizButton.addEventListener(
    "click",
    startQuiz);
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
    [...filteredQuestions].sort(() => Math.random() - 0.5).slice(0, selectedQuestionCount);
    // RESET QUIZ

    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    currentQuestion = null;
    clearInterval(timerInterval);
    explanation.textContent="";
    answerFeedback.textContent="";
    scoreSpan.textContent =score;
    totalQuestionsSpan.textContent =selectedQuestions.length;
    setupScreen.classList.remove(
        "active");
    quizScreen.classList.add(
        "active"
    );
    showQuestion();

}


// SHOW QUESTION


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

    currentQuestionSpan.textContent =currentQuestionIndex + 1;
    questionText.textContent =currentQuestion.question;
    questionCategory.textContent =
        currentQuestion.category;
    const progressPercent =
        (currentQuestionIndex /selectedQuestions.length
        ) * 100;
progressBar.style.width =progressPercent + "%";
answersContainer.innerHTML = "";
const shuffledAnswers =
    [...currentQuestion.answers]
        .sort(() => Math.random() - 0.5);
shuffledAnswers.forEach((answer) => {
            const button = document.createElement("button");
            button.type = "button";
            button.textContent =answer.text;
            button.classList.add("answer-btn");
            button.dataset.correct =answer.correct;
            button.addEventListener(
                "click",selectAnswer);
            answersContainer.appendChild(
                button
            );
        }
    );
}


// SELECT ANSWER


function selectAnswer(event) {
    if (answerSelected) {
        return;
    }
    answerSelected = true;
    clearInterval(timerInterval);
    const selectedButton = event.target;
    const isCorrect =selectedButton.dataset.correct ==="true";
    const correctAnswer =currentQuestion.answers.find(
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
        scoreSpan.textContent =score;
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
"Time's Up"

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
    const correctAnswer = currentQuestion.answers.find(answer => answer.correct);

    explanation.textContent = currentQuestion.explanation;
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
        (score /selectedQuestions.length ) * 100;
    percentageSpan.textContent =percentage + "%";
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

    // ANSWER REVIEW


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

// PLAY AGAIN


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