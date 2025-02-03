const questions = [

    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false}
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "sahara", correct: false},
            { text: "Anatarctica", correct: true}
        ]
    },
    {
        question: "Which is the smallest Continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false}
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false}
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Which country invented pizza?",
        answers: [
            { text: "France", correct: false },
            { text: "Italy", correct: true },
            { text: "Greece", correct: false },
            { text: "USA", correct: false }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Nile", correct: false },
            { text: "Amazon", correct: true },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false }
        ]
    },
    {
        question: "Which animal is known as the Ship of the Desert?",
        answers: [
            { text: "Camel", correct: true },
            { text: "Horse", correct: false },
            { text: "Elephant", correct: false },
            { text: "Llama", correct: false }
        ]
    },
    {
        question: "Who was the first man to walk on the moon?",
        answers: [
            { text: "Neil Armstrong", correct: true },
            { text: "Buzz Aldrin", correct: false },
            { text: "Yuri Gagarin", correct: false },
            { text: "John Glenn", correct: false }
        ]
    },
    {
        question: "Which chemical element has the symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Ozone", correct: false },
            { text: "Opium", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Niels Bohr", correct: false },
            { text: "Galileo Galilei", correct: false }
        ]
    },
    {
        question: "What is the fastest land animal?",
        answers: [
            { text: "Cheetah", correct: true },
            { text: "Lion", correct: false },
            { text: "Tiger", correct: false },
            { text: "Elephant", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Brain", correct: false },
            { text: "Heart", correct: false },
            { text: "Liver", correct: false },
            { text: "Skin", correct: true }
        ]
    },
    {
        question: "Who wrote the novel '1984'?",
        answers: [
            { text: "George Orwell", correct: true },
            { text: "Aldous Huxley", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "J.K. Rowling", correct: false }
        ]
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        answers: [
            { text: "USA", correct: false },
            { text: "Australia", correct: true },
            { text: "South Africa", correct: false },
            { text: "Brazil", correct: false }
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: false },
            { text: "Mercury", correct: true },
            { text: "Pluto", correct: false }
        ]
    },
    {
        question: "Which bird is the symbol of peace?",
        answers: [
            { text: "Eagle", correct: false },
            { text: "Dove", correct: true },
            { text: "Owl", correct: false },
            { text: "Parrot", correct: false }
        ]
    },
    {
        question: "In which year did World War II end?",
        answers: [
            { text: "1940", correct: false },
            { text: "1945", correct: true },
            { text: "1950", correct: false },
            { text: "1939", correct: false }
        ]
    },
    {
        question: "Which country is famous for producing chocolate?",
        answers: [
            { text: "France", correct: false },
            { text: "Belgium", correct: true },
            { text: "Italy", correct: false },
            { text: "USA", correct: false }
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "Malta", correct: false },
            { text: "Singapore", correct: false }
        ]
    },
    {
        question: "Which famous artist is known for his work 'The Starry Night'?",
        answers: [
            { text: "Vincent van Gogh", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false },
            { text: "Leonardo da Vinci", correct: false }
        ]
    },
    {
        question: "Which sea creature has three hearts?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Octopus", correct: true },
            { text: "Whale", correct: false },
            { text: "Dolphin", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Pb", correct: false },
            { text: "Fe", correct: false }
        ]
    },
    {
        question: "Who was the first female Prime Minister of the UK?",
        answers: [
            { text: "Margaret Thatcher", correct: true },
            { text: "Theresa May", correct: false },
            { text: "Angela Merkel", correct: false },
            { text: "Hilary Clinton", correct: false }
        ]
    },
    {
        question: "Which country is the origin of the Eiffel Tower?",
        answers: [
            { text: "Germany", correct: false },
            { text: "France", correct: true },
            { text: "USA", correct: false },
            { text: "Italy", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Won", correct: false },
            { text: "Yuan", correct: false },
            { text: "Yen", correct: true },
            { text: "Ringgit", correct: false }
        ]
    },
    {
        question: "Which sport is known as 'The King of Sports'?",
        answers: [
            { text: "Football", correct: true },
            { text: "Cricket", correct: false },
            { text: "Tennis", correct: false },
            { text: "Basketball", correct: false }
        ]
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        answers: [
            { text: "Amelia Earhart", correct: true },
            { text: "Harriet Tubman", correct: false },
            { text: "Rosie the Riveter", correct: false },
            { text: "Valentina Tereshkova", correct: false }
        ]
    },
    {
        question: "Which is the largest continent by area?",
        answers: [
            { text: "Asia", correct: true },
            { text: "Africa", correct: false },
            { text: "Europe", correct: false },
            { text: "North America", correct: false }
        ]
    },
    {
        question: "What is the name of the longest-running Broadway musical?",
        answers: [
            { text: "Les Misérables", correct: false },
            { text: "The Phantom of the Opera", correct: true },
            { text: "Cats", correct: false },
            { text: "Hamilton", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false },
                { text: "Pacific Ocean", correct: true }
            ]
        },
        {
            question: "What year did the Titanic sink?",
            answers: [
                { text: "1910", correct: false },
                { text: "1912", correct: true },
                { text: "1905", correct: false },
                { text: "1915", correct: false }
            ]
        },
        {
            question: "Which planet is closest to the Sun?",
            answers: [
                { text: "Venus", correct: false },
                { text: "Earth", correct: false },
                { text: "Mercury", correct: true },
                { text: "Mars", correct: false }
            ]
        },
        {
            question: "Who invented the telephone?",
            answers: [
                { text: "Alexander Graham Bell", correct: true },
                { text: "Thomas Edison", correct: false },
                { text: "Nikola Tesla", correct: false },
                { text: "Albert Einstein", correct: false }
            ]
        },
        {
            question: "What is the chemical symbol for water?",
            answers: [
                { text: "H2O", correct: true },
                { text: "O2", correct: false },
                { text: "HO", correct: false },
                { text: "CO2", correct: false }
            ]
        },
        {
            question: "Which animal is the largest mammal?",
            answers: [
                { text: "African Elephant", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Giraffe", correct: false },
                { text: "Shark", correct: false }
            ]
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            answers: [
                { text: "China", correct: false },
                { text: "Japan", correct: true },
                { text: "South Korea", correct: false },
                { text: "India", correct: false }
            ]
        },
        {
            question: "In which year did the Berlin Wall fall?",
            answers: [
                { text: "1987", correct: false },
                { text: "1989", correct: true },
                { text: "1991", correct: false },
                { text: "1985", correct: false }
            ]
        },
        {
            question: "What is the longest-running animated TV show?",
            answers: [
                { text: "Family Guy", correct: false },
                { text: "The Simpsons", correct: true },
                { text: "South Park", correct: false },
                { text: "The Flintstones", correct: false }
            ]
        },
        {
            question: "What is the capital of Canada?",
            answers: [
                { text: "Vancouver", correct: false },
                { text: "Ottawa", correct: true },
                { text: "Toronto", correct: false },
                { text: "Montreal", correct: false }
            ]
        },
        {
            question: "What is the hardest natural substance on Earth?",
            answers: [
                { text: "Iron", correct: false },
                { text: "Gold", correct: false },
                { text: "Diamond", correct: true },
                { text: "Platinum", correct: false }
            ]
        },
        {
            question: "Who was the first President of the United States?",
            answers: [
                { text: "Abraham Lincoln", correct: false },
                { text: "George Washington", correct: true },
                { text: "Thomas Jefferson", correct: false },
                { text: "John Adams", correct: false }
            ]
        },
        {
            question: "Which is the largest island in the world?",
            answers: [
                { text: "Australia", correct: false },
                { text: "Greenland", correct: true },
                { text: "New Guinea", correct: false },
                { text: "Borneo", correct: false }
            ]
        },
        {
            question: "Which famous scientist developed the theory of evolution?",
            answers: [
                { text: "Charles Darwin", correct: true },
                { text: "Isaac Newton", correct: false },
                { text: "Albert Einstein", correct: false },
                { text: "Louis Pasteur", correct: false }
            ]
        },
        {
            question: "What is the longest bone in the human body?",
            answers: [
                { text: "Femur", correct: true },
                { text: "Humerus", correct: false },
                { text: "Tibia", correct: false },
                { text: "Radius", correct: false }
            ]
        },
        {
            question: "Which bird is known for its ability to mimic human speech?",
            answers: [
                { text: "Parrot", correct: true },
                { text: "Crow", correct: false },
                { text: "Canary", correct: false },
                { text: "Peacock", correct: false }
            ]
        },
        {
            question: "Which city is known as the Eternal City?",
            answers: [
                { text: "Athens", correct: false },
                { text: "Rome", correct: true },
                { text: "Paris", correct: false },
                { text: "New York", correct: false }
            ]
        },
        {
            question: "Which country is home to the Pyramids of Giza?",
            answers: [
                { text: "Greece", correct: false },
                { text: "Egypt", correct: true },
                { text: "Mexico", correct: false },
                { text: "Turkey", correct: false }
            ]
        },
        {
            question: "What is the largest volcano on Earth?",
            answers: [
                { text: "Mount Vesuvius", correct: false },
                { text: "Mount Fuji", correct: false },
                { text: "Mauna Loa", correct: true },
                { text: "Krakatoa", correct: false }
            ]
        },
        {
            question: "Which is the largest ocean in the world?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false },
                { text: "Pacific Ocean", correct: true }
            ]
        },
        {
            question: "What year did the Titanic sink?",
            answers: [
                { text: "1910", correct: false },
                { text: "1912", correct: true },
                { text: "1905", correct: false },
                { text: "1915", correct: false }
            ]
        },
        {
            question: "Which planet is closest to the Sun?",
            answers: [
                { text: "Venus", correct: false },
                { text: "Earth", correct: false },
                { text: "Mercury", correct: true },
                { text: "Mars", correct: false }
            ]
        },
        {
            question: "Who invented the telephone?",
            answers: [
                { text: "Alexander Graham Bell", correct: true },
                { text: "Thomas Edison", correct: false },
                { text: "Nikola Tesla", correct: false },
                { text: "Albert Einstein", correct: false }
            ]
        },
        {
            question: "What is the chemical symbol for water?",
            answers: [
                { text: "H2O", correct: true },
                { text: "O2", correct: false },
                { text: "HO", correct: false },
                { text: "CO2", correct: false }
            ]
        }
              

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const NextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    NextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    NextButton.style.display ="none";

    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrrect = selectedBtn.dataset.correct === "true";

    if(isCorrrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    NextButton.style.display = "block";

}

function showScore(){
    resetState();

    questionElement.innerHTML = `you Scored ${score} out of ${questions.length}!`;
    NextButton.innerHTML = "Start Quiz Again";
    NextButton.style.display = "block";
}

let timeLeft = 10; // Set the initial time in seconds
const timerElement = document.getElementById("timer");

function updateTimer() {
    // Update the timer display
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    // Decrease the time by 1 second
    timeLeft--;

    // When the timer reaches 0, stop it
    if (timeLeft < 0) {
        clearInterval(timerInterval); // Stop the timer
        timerElement.textContent = "Time's up!";
        // You can add additional actions when time is up (e.g., disabling quiz buttons)
    }
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

NextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
})

window.addEventListener("load",_=>{
    //showQuestion()

    startQuiz();
})

