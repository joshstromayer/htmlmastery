// 1. Store Questions
const questions = [
    { 
        question: 'What will be the output of the following code?', 
        code: 'console.log(typeof null);', 
        options: ['null', 'object', 'undefined', 'boolean'], 
        answer: 'object' 
    },
    { 
        question: 'What does NaN stand for in JavaScript?', 
        options: ['Not a Number', 'Null and None', 'Negative and Null', 'Non-Assigned Name'], 
        answer: 'Not a Number' 
    },
    { 
        question: 'What is the output of the following code?', 
        code: 'console.log(5 == "5");', 
        options: ['true', 'false', 'TypeError', 'NaN'], 
        answer: 'true' 
    },
    { 
        question: 'What is the output of the following?', 
        code: 'console.log(Boolean([]));', 
        options: ['true', 'false', 'undefined', 'Error'], 
        answer: 'true' 
    },
    { 
        question: 'Which keyword is used to declare a constant variable in JavaScript?', 
        options: ['var', 'let', 'const', 'define'], 
        answer: 'const' 
    },

    { 
        question: 'What is the output of the following code?', 
        code: 'let x; console.log(x);', 
        options: ['null', 'undefined', 'Error', '0'], 
        answer: 'undefined' 
    },
    { 
        question: 'Which of the following is NOT a primitive data type in JavaScript?', 
        options: ['Boolean', 'String', 'Object', 'Number'], 
        answer: 'Object' 
    },
    { 
        question: 'What will be the output?', 
        code: 'console.log(typeof NaN);', 
        options: ['number', 'NaN', 'undefined', 'object'], 
        answer: 'number' 
    },
    { 
        question: 'What is the output of the following code?', 
        code: 'console.log(typeof([]));', 
        options: ['array', 'object', 'undefined', 'null'], 
        answer: 'object' 
    },
    { 
        question: 'What will be the output of the following code?', 
        code: 'let a = "5" + 5; console.log(a);', 
        options: ['10', "'55'", '5', 'Error'], 
        answer: "'55'" 
    },

    { 
        question: 'What is the output of the following function call?', 
        code: 
        'function sayHello() {\n' +
        '    return "Hello";\n' +
        '}\n' +
        'console.log(sayHello);', 
        options: ['Hello', 'undefined', '[Function: sayHello]', 'TypeError'], 
        answer: '[Function: sayHello]' 
    },
    { 
        question: 'What will be the output?', 
        code: 
        'function sum(a, b) {\n' +
        '    console.log(a + b);\n' +
        '}\n' +
        'sum(2);', 
        options: ['2', 'NaN', 'undefined', 'Error'], 
        answer: 'NaN' 
    },
    { 
        question: 'Which keyword is used to define a function?', 
        options: ['func', 'def', 'function', 'method'], 
        answer: 'function' 
    },
    { 
        question: 'What is the output of this immediately invoked function expression (IIFE)?', 
        code: '(function() { return "Hello"; })();', 
        options: ['Hello', 'undefined', 'TypeError', 'null'], 
        answer: 'Hello' 
    },
    { 
        question: 'What will this return?', 
        code: 
        'function multiply(a, b = 2) {\n' +
        '    return a * b;\n' +
        '}\n' +
        'console.log(multiply(5));', 
        options: ['10', '5', 'undefined', 'NaN'], 
        answer: '10' 
    },

    { 
        question: 'What will be the output of the following loop?', 
        code: 
        'for (let i = 0; i < 3; i++) {\n' +
        '    console.log(i);\n' +
        '}', 
        options: ['0 1 2', '1 2 3', '0 1 2 3', 'Error'], 
        answer: '0 1 2' 
    },
    { 
        question: 'What will be the output?', 
        code: 
        'let i = 0;\n' +
        'while (i < 3) {\n' +
        '    console.log(i);\n' +
        '    i++;\n' +
        '}', 
        options: ['0 1 2', '1 2 3', '0 1 2 3', 'Error'], 
        answer: '0 1 2' 
    },
    { 
        question: 'What will be printed?', 
        code: 
        'let i = 0;\n' +
        'do {\n' +
        '    console.log(i);\n' +
        '    i++;\n' +
        '} while (i < 3);', 
        options: ['0 1 2', '1 2 3', '0 1 2 3', 'Error'], 
        answer: '0 1 2' 
    },

    { 
        question: 'What will be the output?', 
        code: 
        'let obj = { name: "John", age: 30 };\n' +
        'console.log(obj.name);', 
        options: ['John', '30', 'undefined', 'Error'], 
        answer: 'John' 
    },
    { 
        question: 'What will be the output?', 
        code: 
        'let arr = [10, 20, 30];\n' +
        'console.log(arr.length);', 
        options: ['2', '3', '4', 'Error'], 
        answer: '3' 
    },
    { 
        question: 'What will be printed?', 
        code: 
        'let obj = { name: "Jane" };\n' +
        'console.log(obj["name"]);', 
        options: ['Jane', 'undefined', 'Error', 'null'], 
        answer: 'Jane' 
    },
    { 
        question: 'Which method removes the last element from an array?', 
        options: ['pop()', 'shift()', 'remove()', 'splice()'], 
        answer: 'pop()' 
    },
    { 
        question: 'What will this return?', 
        code: 
        'let arr = [1, 2, 3];\n' +
        'arr.push(4);\n' +
        'console.log(arr);', 
        options: ['[1,2,3,4]', '[1,2,3]', '[4,1,2,3]', 'Error'], 
        answer: '[1,2,3,4]' 
    }
];

// 2. Shuffle Questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 3. Setup Quiz Variables
let previouslyIncorrect = new Set();
let shuffledQuestions = [...questions];
shuffleArray(shuffledQuestions);
let currentQuestionIndex = 0;
let correctAnswers = 0;
let uniqueQuestionsSeen = 0;
let uniqueCorrectQuestions = new Set(); 
let incorrectQuestions = [];
let uniqueQuestionsSet = new Set(); 

// 4. Select Elements
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const nextButton = document.getElementById("next-button");

// Create Score Tracker
const scoreTracker = document.createElement("p");
scoreTracker.id = "score-tracker";
document.getElementById("quiz-container").appendChild(scoreTracker);

// 5. Function to Display a Question
function displayQuestion() {
    if (shuffledQuestions.length === 0) {
        // ✅ Only ends when ALL questions are correctly answered
        questionText.innerText = `You've finished all of our questions! Refresh to play again!`;
        answerOptions.innerHTML = "";
        nextButton.style.display = "none";
        scoreTracker.innerText = `Final Score: ${correctAnswers} / ${uniqueQuestionsSeen} (${((correctAnswers / Math.max(uniqueQuestionsSeen, 1)) * 100).toFixed(2)}%)`;
        return;
    }

    nextButton.style.display = "none";

    // Reset the current question index if necessary
    if (currentQuestionIndex >= shuffledQuestions.length) {
        currentQuestionIndex = 0;
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    let questionHTML = "";
    
    if (previouslyIncorrect.has(currentQuestion.question)) {
        questionHTML += `<span style="color: red;">(Previously Incorrect) </span>`;
    }
    
    questionHTML += `${currentQuestion.question}<br><br>`;
    
    if (currentQuestion.code) {
        questionHTML += `<div class="code-example">
    <pre><code>${currentQuestion.code}</code></pre>
</div>`;
    }
    
    questionText.innerHTML = questionHTML;
    
    answerOptions.innerHTML = "";

    // Create answer buttons
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-button");
        button.onclick = () => selectAnswer(button, currentQuestion.answer);
        answerOptions.appendChild(button);
    });
}

// 6. Handle Answer Selection
function selectAnswer(button, correctAnswer) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    // ✅ Track unique questions seen (only adds the first time)
    uniqueQuestionsSet.add(currentQuestion.question);
    
    // ✅ Increase total unique questions seen (Y)
    uniqueQuestionsSeen++;

    if (button.innerText === correctAnswer) {
        button.style.backgroundColor = "lightgreen"; // Correct answer
        correctAnswers++; // Increase total correct answers (X)

        // ✅ Only increase unique correct count if this is the first correct attempt
        if (!uniqueCorrectQuestions.has(currentQuestion.question)) {
            uniqueCorrectQuestions.add(currentQuestion.question);
        }

        // ✅ Remove this question from the game entirely (it has been answered correctly)
        shuffledQuestions.splice(currentQuestionIndex, 1);
    } else {
        button.style.backgroundColor = "lightcoral"; // Wrong answer

        // Highlight correct answer
        Array.from(answerOptions.children).forEach(btn => {
            if (btn.innerText === correctAnswer) {
                btn.style.backgroundColor = "lightgreen";
            }
        });

        previouslyIncorrect.add(currentQuestion.question);
        const incorrectQuestion = shuffledQuestions.splice(currentQuestionIndex, 1)[0];
        const randomIndex = Math.floor(Math.random() * shuffledQuestions.length);
        shuffledQuestions.splice(randomIndex, 0, incorrectQuestion);
    }

    // Disable all answer buttons
    Array.from(answerOptions.children).forEach(btn => btn.disabled = true);

    // ✅ Show the "Next" button after an answer is selected
    nextButton.style.display = "block"; 

    // Update score
    updateScore();
}

// 7. Next Button Functionality
nextButton.addEventListener("click", () => {
    // ✅ Check if a question was answered
    const answered = Array.from(answerOptions.children).some(btn => btn.disabled);

    if (!answered) {
        // User skipped the question → Store it to show later
        incorrectQuestions.push(shuffledQuestions[currentQuestionIndex]);
    }

    // Move to the next question
    currentQuestionIndex++;
    displayQuestion();
});

// 8. Update Score Functionality
function updateScore() {
    scoreTracker.innerHTML = `
    Correct Answers: ${correctAnswers} / ${uniqueQuestionsSeen} <br>
    Score Percentage: ${((uniqueCorrectQuestions.size / Math.max(uniqueQuestionsSet.size, 1)) * 100).toFixed(2)}%
`;
}

// 9. Initialize Quiz
displayQuestion();

// 1️⃣ Select the Toggle Button
const themeToggle = document.getElementById("theme-toggle");

// 2️⃣ Check Local Storage for Theme Preference (Default to Dark)
const currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);

// 3️⃣ Update Button Text Based on Theme
themeToggle.innerText = currentTheme === "dark" ? "☀️" : "🌙";

// 4️⃣ Toggle Theme on Button Click
themeToggle.addEventListener("click", () => {
    let newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    
    // Apply Theme
    document.documentElement.setAttribute("data-theme", newTheme);
    
    // Save to Local Storage
    localStorage.setItem("theme", newTheme);

    // Update Button Text
    themeToggle.innerText = newTheme === "dark" ? "☀️" : "🌙";
});