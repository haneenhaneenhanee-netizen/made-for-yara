let questions = [
    {
        question: "ما هي عاصمة مصر؟",
        answers: ["القاهرة", "الإسكندرية", "الأقصر", "أسوان"],
        correct: "القاهرة"
    },

    {
        question: "كم عدد قارات العالم؟",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    },

    {
        question: "ما هو أكبر كوكب في المجموعة الشمسية؟",
        answers: ["الأرض", "المشتري", "المريخ", "زحل"],
        correct: "المشتري"
    },

    {
        question: "ما هو رمز الماء الكيميائي؟",
        answers: ["CO2", "H2O", "O2", "NaCl"],
        correct: "H2O"
    },

    {
        question: "ما هي عاصمة فرنسا؟",
        answers: ["لندن", "روما", "باريس", "مدريد"],
        correct: "باريس"
    },

    {
        question: "كم عدد أيام الأسبوع؟",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    },

    {
        question: "أي حيوان يُلقب بسفينة الصحراء؟",
        answers: ["الأسد", "الجمل", "الحصان", "الفيل"],
        correct: "الجمل"
    },

    {
        question: "ما هو أسرع حيوان بري؟",
        answers: ["الفهد", "الأسد", "الذئب", "الحصان"],
        correct: "الفهد"
    },

    {
        question: "ما هو الكوكب المعروف بالكوكب الأحمر؟",
        answers: ["المريخ", "الزهرة", "زحل", "نبتون"],
        correct: "المريخ"
    },

    {
        question: "من هي ألطف وأرق فتاة في العالم؟",
        answers: [
            "يارا محمد أحمد عبد الغني (تحفة حنين)",
            "Aishwarya Rai Bachchan",
            "Olivia Culpo",
            "Bella Hadid"
        ],
        correct: "يارا محمد أحمد عبد الغني (تحفة حنين)"
    }
];

let currentQuestion = 0;
let score = 0;

let questionElement = document.getElementById("question");
let answersElement = document.getElementById("answers");
let scoreElement = document.getElementById("score");

function showQuestion() {

    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    let current = questions[currentQuestion];

    questionElement.textContent =
        "السؤال " + (currentQuestion + 1) + " من 10";

    let questionText = document.createElement("div");
    questionText.textContent = current.question;
    questionText.style.marginTop = "20px";
    questionText.style.fontSize = "28px";
    questionText.style.fontWeight = "bold";

    answersElement.innerHTML = "";
    answersElement.appendChild(questionText);

    current.answers.forEach(function(answer) {

        let button = document.createElement("button");

        button.textContent = answer;

        button.onclick = function() {

            let allButtons = answersElement.querySelectorAll("button");

            allButtons.forEach(function(btn) {
                btn.disabled = true;
            });

            if (answer === current.correct) {

                button.classList.add("correct");
                score++;

            } else {

                button.classList.add("wrong");

                allButtons.forEach(function(btn) {
                    if (btn.textContent === current.correct) {
                        btn.classList.add("correct");
                    }
                });
            }

            setTimeout(function() {
                currentQuestion++;
                showQuestion();
            }, 1000);
        };

        answersElement.appendChild(button);
    });
}

function showResult() {

    questionElement.textContent = "🎉 انتهت اللعبة!";

    answersElement.innerHTML = "";

    scoreElement.style.display = "block";
    scoreElement.textContent = "نتيجتك: " + score + " / 10";

    let restartButton = document.createElement("button");

    restartButton.id = "restart";
    restartButton.textContent = "🔄 العب مرة أخرى";

    restartButton.onclick = function() {
        currentQuestion = 0;
        score = 0;
        scoreElement.style.display = "none";
        showQuestion();
    };

    answersElement.appendChild(restartButton);
}

showQuestion();