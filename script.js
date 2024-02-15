var questions = [
    {
        question: "What is the “World Ocean Assessment”?",
        answers: ["A novel about the ocean", "A movie about marine life", "A music album inspired by the ocean", "A publication providing information and guidance on Goal 14"],
        correctAnswer: "A publication providing information and guidance on Goal 14"
    },
    {
        question: "What is the main topic of the news article about building a sustainable blue economy?",
        answers: ["The importance of Goal 14", "The challenges of Goal 14", "The progress of Goal 14", "The targets and indicators of Goal 14"],
        correctAnswer: "The importance of Goal 14"
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