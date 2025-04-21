document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        'Do you say, "My life is a movie"?',
        'Do you have "stop lurking" or "caught you stalking" in your social media bios?',
        'Do you prop up your phone in public and not care about others walking by?',
        'Do you think everyone else around you is an "NPC"?',
        "Do you have a deep desire to become famous and don't care if it may harm others?",
        "Do you have a deep sense of self-importance?"
    ];

    let currentQuestionIndex = 0;
    let hasMainCharacterSyndrome = false;

    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");
    const submitButton = document.getElementById("submit");
    const resultElement = document.getElementById("result");
    const messageElement = document.getElementById("message");
    const nextButton = document.getElementById("next");
    const tryAgainButton = document.getElementById("try-again");
    const quizElement = document.getElementById("quiz");

    function checkAnswer() {
        const answer = answerElement.value.toLowerCase();

        if (answer === "yes") {
            hasMainCharacterSyndrome = true;
            showMessage();
        } else {
            moveToNextQuestion();
        }
    }

    function showMessage() {
        if (hasMainCharacterSyndrome) {
            messageElement.innerText = "You have main character syndrome!";
            nextButton.style.display = "none";
            tryAgainButton.style.display = "block";
        } else {
            messageElement.innerText = "You don't have main character syndrome... loser!";
        }
        resultElement.style.display = "block";
        quizElement.style.display = "none"; // Hide the quiz elements
    }

    function moveToNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            questionElement.innerText = questions[currentQuestionIndex];
            answerElement.value = "";
            resultElement.style.display = "none";
            hasMainCharacterSyndrome = false;
        } else {
            if (!hasMainCharacterSyndrome) {
                messageElement.innerText = "You don't have main character syndrome...loser!";
                resultElement.style.display = "block";
                quizElement.style.display = "none"; // Hide the quiz elements
                nextButton.style.display = "none"; // Hide the "Next Question" button
                tryAgainButton.style.display = "block"; // Show the "Try Again" button
            }
        }
    }

    function moveToPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            questionElement.innerText = questions[currentQuestionIndex];
            answerElement.value = "";
            resultElement.style.display = "none";
            hasMainCharacterSyndrome = false;
        }
    }

    tryAgainButton.addEventListener("click", function () {
        currentQuestionIndex = 0;
        questionElement.innerText = questions[currentQuestionIndex];
        resultElement.style.display = "none";
        hasMainCharacterSyndrome = false;
        nextButton.style.display = "block"; // Show the "Next Question" button
        tryAgainButton.style.display = "none"; // Hide the "Try Again" button
        quizElement.style.display = "block"; // Show the quiz elements
    });

    submitButton.addEventListener("click", checkAnswer);
    nextButton.addEventListener("click", moveToNextQuestion);

    questionElement.innerText = questions[currentQuestionIndex];


    new Glide("#glide1", {
        type: "slider",
        startAt: 0,
        perView: 4,
    }).mount();

    // Initialize the second carousel with ID "glide2"
    new Glide("#glide2", {
        type: "slider",
        startAt: 0,
        perView: 4,
    }).mount();

    new Glide("#glide3", {
        type: "slider",
        startAt: 0,
        perView: 4,
    }).mount();
});
