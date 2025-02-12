// 1. Store Questions
const questions = [
    {
        question: "What will be the output of the following code?",
        code: "<h1>Hello World</h1><h2>Welcome</h2>",
        options: [
            "Hello World (large text), Welcome (smaller text)",
            "Hello World and Welcome in the same size",
            "Syntax error",
            "Only 'Hello World' is displayed"
        ],
        answer: "Hello World (large text), Welcome (smaller text)"
    },
    {
        question: "Which HTML tag is used to define a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hlink>"],
        answer: "<a>"
    },
    {
        question: "What does the `<meta charset='UTF-8'>` tag do?",
        options: [
            "It defines the character encoding for the document",
            "It adds metadata for SEO",
            "It creates a new character set",
            "It links an external CSS file"
        ],
        answer: "It defines the character encoding for the document"
    },
    {
        question: "What is the correct way to create an HTML comment?",
        options: [
            "// This is a comment",
            "/* This is a comment */",
            "<!-- This is a comment -->",
            "# This is a comment"
        ],
        answer: "<!-- This is a comment -->"
    },
    {
        question: "Which HTML element is used to embed JavaScript code?",
        options: ["<javascript>", "<js>", "<script>", "<code>"],
        answer: "<script>"
    },
    {
        question: "What will be the output of the following HTML?",
        code: "<p>First Paragraph</p><p>Second Paragraph</p>",
        options: [
            "Both paragraphs appear on the same line",
            "Second paragraph replaces the first",
            "Paragraphs appear on separate lines",
            "Syntax error"
        ],
        answer: "Paragraphs appear on separate lines"
    },
    {
        question: "Which tag is used for inserting an image in HTML?",
        options: ["<image>", "<pic>", "<img>", "<src>"],
        answer: "<img>"
    },
    {
        question: "Which tag is used to create a table row?",
        options: ["<td>", "<tr>", "<th>", "<table-row>"],
        answer: "<tr>"
    },
    {
        question: "What will the following HTML display?",
        code: "<ol><li>Item 1</li><li>Item 2</li></ol>",
        options: [
            "A bulleted list",
            "An ordered list with numbers",
            "A table",
            "Nothing, the syntax is incorrect"
        ],
        answer: "An ordered list with numbers"
    },
    {
        question: "What is the correct way to create a text input field in a form?",
        options: [
            "<input type='text'>",
            "<text-input>",
            "<form-text>",
            "<textfield>"
        ],
        answer: "<input type='text'>"
    },
    {
        question: "What will the following HTML code display?",
        code: "<div style='display: none;'>Hidden text</div>",
        options: [
            "Hidden text will be visible",
            "Hidden text will not be displayed",
            "Error: 'display: none;' is not a valid CSS rule",
            "The div will be displayed but with no text inside"
        ],
        answer: "Hidden text will not be displayed"
    },
    {
        question: "Which HTML tag is used for adding a description list?",
        options: ["<dl>", "<list>", "<ul>", "<ol>"],
        answer: "<dl>"
    },
    {
        question: "What will happen if you use `<input type='checkbox'>`?",
        options: [
            "A radio button will be displayed",
            "A checkbox will be displayed",
            "A button will be displayed",
            "A text input field will be displayed"
        ],
        answer: "A checkbox will be displayed"
    },
    {
        question: "Which HTML attribute is used to provide alternative text for an image?",
        options: ["alt", "title", "src", "desc"],
        answer: "alt"
    },
    {
        question: "What is the purpose of the `<iframe>` tag?",
        options: [
            "To insert an image into a webpage",
            "To create an inline frame within a webpage",
            "To display bold text",
            "To define a new section in a webpage"
        ],
        answer: "To create an inline frame within a webpage"
    },
    {
        question: "Which HTML5 element is used to define navigation links?",
        options: ["<nav>", "<menu>", "<sidebar>", "<header>"],
        answer: "<nav>"
    },
    {
        question: "Which HTML element is used to play audio files?",
        options: ["<sound>", "<audio>", "<mp3>", "<voice>"],
        answer: "<audio>"
    },
    {
        question: "What will be the output of this code?",
        code: "<span style='font-weight: bold;'>Bold Text</span>",
        options: [
            "Text will be displayed normally",
            "Text will be bold",
            "Syntax error",
            "Text will be italic"
        ],
        answer: "Text will be bold"
    },
    {
        question: "What is the default display property of a `<div>`?",
        options: ["inline", "block", "inline-block", "none"],
        answer: "block"
    },
    {
        question: "What will be the output of the following HTML?",
        code: "<button disabled>Click Me</button>",
        options: [
            "Button will be clickable",
            "Button will be disabled",
            "Button will be invisible",
            "Button will turn red"
        ],
        answer: "Button will be disabled"
    },
    {
        question: "Which HTML tag is used to define a footer for a document?",
        options: ["<footer>", "<bottom>", "<foot>", "<end>"],
        answer: "<footer>"
    },
    {
        question: "Which tag is used to group multiple form elements?",
        options: ["<fieldset>", "<group>", "<formgroup>", "<container>"],
        answer: "<fieldset>"
    },
    {
        question: "What will be the output of this HTML?",
        code: "<abbr title='World Health Organization'>WHO</abbr>",
        options: [
            "Displays 'WHO' with no effect",
            "Displays 'WHO' with a tooltip when hovered",
            "Displays 'World Health Organization'",
            "Displays 'WHO' in italics"
        ],
        answer: "Displays 'WHO' with a tooltip when hovered"
    },
    {
        question: "Which tag is used to define emphasized text in HTML?",
        options: ["<em>", "<i>", "<b>", "<strong>"],
        answer: "<em>"
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