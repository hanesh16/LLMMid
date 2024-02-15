var questions = [
    {
        question: "1.What is the “World Ocean Assessment”?",
        answers: ["A novel about the ocean", "A movie about marine life", "A music album inspired by the ocean", "A publication providing information and guidance on Goal 14"],
        correctAnswer: "A publication providing information and guidance on Goal 14"
    },
    {
        question: "2.What is the main topic of the news article about building a sustainable blue economy?",
        answers: ["The importance of Goal 14", "The challenges of Goal 14", "The progress of Goal 14", "The targets and indicators of Goal 14"],
        correctAnswer: "The importance of Goal 14"
    },
    {
        question: "3.What is the main focus of the UN Ocean Conference 2025?",
        answers: ["To discuss issues related to desertification", "To discuss issues related to deforestation", "To discuss issues related to ocean conservation", "To discuss issues related to urban development"],
        correctAnswer: "To discuss issues related to ocean conservation"
    },
    {
        question: "4.What is the purpose of the 4th International Conference on Small Island Developing States?",
        answers: ["To promote sustainable agriculture", "To promote sustainable energy", "To promote sustainable ocean use", "To promote sustainable urban development"],
        correctAnswer: "To promote sustainable ocean use"
    },
    {
        question: "5.What is the main topic of the Global Ocean Science Report?",
        answers: ["The state of global ocean science", "The state of global desert science", "The state of global forest science", "The state of global urban science"],
        correctAnswer: "The state of global ocean science"
    },
    {
        question: "6.What is the Handbook on the Least Developed Country Category about?",
        answers: ["It provides guidance on the least developed countries", "It provides guidance on the most developed countries", "It provides guidance on the moderately developed countries", "It provides guidance on all countries"],
        correctAnswer: "It provides guidance on the least developed countries"
    },
    {
        question: "7.Who made a statement on ocean action?",
        answers: ["The UN Secretary-General", "The President of the United States", "The Prime Minister of the United Kingdom", "The President of France"],
        correctAnswer: "The UN Secretary-General"
    },
    
];

// Function to display the questions
function displayQuestions() {
    var quizDiv = document.getElementById('quiz');
    for (var i = 0; i < questions.length; i++) {
        var question = document.createElement('h2');
        question.innerText = questions[i].question;
        quizDiv.appendChild(question);

        for (var j = 0; j < questions[i].answers.length; j++) {
            var answer = document.createElement('input');
            answer.type = 'radio';
            answer.name = 'question' + i;
            answer.value = questions[i].answers[j];
            quizDiv.appendChild(answer);

            var label = document.createElement('label');
            label.innerText = questions[i].answers[j];
            quizDiv.appendChild(label);

            quizDiv.appendChild(document.createElement('br'));
        }
    }
}

// Function to calculate the score
function calculateScore() {
    var score = 0;
    for (var i = 0; i < questions.length; i++) {
        var answer = document.querySelector('input[name="question' + i + '"]:checked');
        if (answer && answer.value === questions[i].correctAnswer) {
            score++;
        }
    }
    alert('Your score is ' + score);
}

// Display the questions when the page loads
displayQuestions();

// Handle the form submission
document.getElementById('submit').addEventListener('click', calculateScore);