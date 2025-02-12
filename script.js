// 1. Store Questions
const questions = [
    { 
        question: 'Which tag is used to insert an image in HTML?', 
        options: ['<pic>', '<image>', '<img>', '<src>'], 
        answer: '<img>' 
    },
    { 
        question: 'What does the `&lt;a&gt;` tag define?', 
        options: ['An article', 'An anchor link', 'An abbreviation', 'An aside'], 
        answer: 'An anchor link' 
    },
    { 
        question: 'What is the correct way to define an unordered list?', 
        options: ['<ul>', '<ol>', '<list>', '<unordered>'], 
        answer: '<ul>' 
    },
    { 
        question: 'Which tag is used for inserting a line break in HTML?', 
        options: ['<lb>', '<br>', '<break>', '<newline>'], 
        answer: '<br>' 
    },
    { 
        question: 'Which tag is used for the largest heading in HTML?', 
        options: ['<h6>', '<h1>', '<heading>', '<title>'], 
        answer: '<h1>' 
    },

    { 
        question: 'What is the correct way to define a paragraph in HTML?', 
        options: ['<p>', '<para>', '<paragraph>', '<text>'], 
        answer: '<p>' 
    },
    { 
        question: 'Which tag is used to define a table row?', 
        options: ['<tr>', '<td>', '<th>', '<row>'], 
        answer: '<tr>' 
    },
    { 
        question: 'Which attribute is used to specify an image source?', 
        options: ['href', 'src', 'alt', 'link'], 
        answer: 'src' 
    },
    { 
        question: 'What does the `alt` attribute provide for images?', 
        options: ['A tooltip', 'An alternative text', 'A hyperlink', 'A title'], 
        answer: 'An alternative text' 
    },
    { 
        question: 'Which tag is used to define a form in HTML?', 
        options: ['<form>', '<input>', '<fieldset>', '<submit>'], 
        answer: '<form>' 
    },

    { 
        question: 'Which tag is used for the main content of a webpage?', 
        options: ['<main>', '<body>', '<section>', '<div>'], 
        answer: '<main>' 
    },
    { 
        question: 'What is the output of the following HTML?', 
        code: '&lt;p&gt;This is &lt;b&gt;bold&lt;/b&gt; text&lt;/p&gt;', 
        options: ['This is bold text', 'This is <b>bold</b> text', 'This is &lt;b&gt;bold&lt;/b&gt; text', 'Error'], 
        answer: 'This is <b>bold</b> text' 
    },
    { 
        question: 'Which of the following is a correct self-closing tag?', 
        options: ['<br>', '<div>', '<p>', '<h1>'], 
        answer: '<br>' 
    },
    { 
        question: 'What does the `&lt;meta&gt;` tag do?', 
        options: ['Defines metadata', 'Creates a paragraph', 'Adds an image', 'Links a CSS file'], 
        answer: 'Defines metadata' 
    },
    { 
        question: 'Which tag is used to create a dropdown list?', 
        options: ['<dropdown>', '<select>', '<list>', '<option>'], 
        answer: '<select>' 
    },

    { 
        question: 'What will be the output of this code?', 
        code: '&lt;h2&gt;Welcome&lt;/h2&gt;', 
        options: ['Welcome (biggest size)', 'Welcome (smallest size)', 'Welcome (medium size)', 'Error'], 
        answer: 'Welcome (medium size)' 
    },
    { 
        question: 'Which tag is used to group block elements in HTML?', 
        options: ['<span>', '<div>', '<section>', '<article>'], 
        answer: '<div>' 
    },
    { 
        question: 'What will be the output of this code?', 
        code: '&lt;button&gt;Click me&lt;/button&gt;', 
        options: ['A clickable button', 'A bold text "Click me"', 'A link', 'Error'], 
        answer: 'A clickable button' 
    },
    { 
        question: 'Which tag is used to create a numbered list?', 
        options: ['<ol>', '<ul>', '<list>', '<numlist>'], 
        answer: '<ol>' 
    },
    { 
        question: 'Which tag is used to insert a horizontal line?', 
        options: ['<line>', '<hr>', '<br>', '<hl>'], 
        answer: '<hr>' 
    },

    { 
        question: 'Which tag is used to define the footer of a webpage?', 
        options: ['<footer>', '<bottom>', '<end>', '<section>'], 
        answer: '<footer>' 
    },
    { 
        question: 'Which tag is used to link an external CSS file?', 
        options: ['<link>', '<style>', '<css>', '<head>'], 
        answer: '<link>' 
    },
    { 
        question: 'What does the `target="_blank"` attribute do in an anchor tag?', 
        options: ['Opens in the same tab', 'Opens in a new tab', 'Creates a button', 'Adds an underline'], 
        answer: 'Opens in a new tab' 
    },
    { 
        question: 'What will the following code do?', 
        code: '&lt;input type="checkbox"&gt;', 
        options: ['Creates a text box', 'Creates a checkbox', 'Creates a radio button', 'Creates a dropdown'], 
        answer: 'Creates a checkbox' 
    },
    { 
        question: 'Which tag is used to create an interactive text field?', 
        options: ['<input>', '<text>', '<field>', '<textarea>'], 
        answer: '<input>' 
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