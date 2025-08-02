// Quiz Game JavaScript
class QuizGame {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedCategory = 'general';
        this.selectedDifficulty = 'easy';
        this.timer = null;
        this.timeLeft = 30;
        this.startTime = null;
        this.totalTime = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        
        this.initializeEventListeners();
        this.loadQuestions();
    }

    // Initialize all event listeners
    initializeEventListeners() {
        // Category selection
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
                e.target.closest('.category-btn').classList.add('selected');
                this.selectedCategory = e.target.closest('.category-btn').dataset.category;
                this.updateStartButton();
            });
        });

        // Difficulty selection
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.selectedDifficulty = e.target.dataset.difficulty;
                this.updateStartButton();
            });
        });

        // Start button
        document.getElementById('start-btn').addEventListener('click', () => {
            this.startQuiz();
        });

        // Next button
        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Results screen buttons
        document.getElementById('retry-btn').addEventListener('click', () => {
            this.retryQuiz();
        });

        document.getElementById('home-btn').addEventListener('click', () => {
            this.goHome();
        });
    }

    // Load questions based on category and difficulty
    loadQuestions() {
        this.questions = this.getQuestionsByCategory(this.selectedCategory, this.selectedDifficulty);
    }

    // Get questions for specific category and difficulty
    getQuestionsByCategory(category, difficulty) {
        const allQuestions = {
            general: {
                easy: [
                    {
                        question: "What is the capital of France?",
                        options: ["London", "Berlin", "Paris", "Madrid"],
                        correct: 2
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        correct: 1
                    },
                    {
                        question: "What is the largest ocean on Earth?",
                        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                        correct: 3
                    },
                    {
                        question: "Who painted the Mona Lisa?",
                        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                        correct: 2
                    },
                    {
                        question: "What is the chemical symbol for gold?",
                        options: ["Ag", "Au", "Fe", "Cu"],
                        correct: 1
                    },
                    {
                        question: "Which year did World War II end?",
                        options: ["1943", "1944", "1945", "1946"],
                        correct: 2
                    },
                    {
                        question: "What is the main component of the sun?",
                        options: ["Liquid lava", "Molten iron", "Hydrogen gas", "Solid rock"],
                        correct: 2
                    },
                    {
                        question: "Which country is home to the kangaroo?",
                        options: ["New Zealand", "South Africa", "Australia", "India"],
                        correct: 2
                    },
                    {
                        question: "What is the largest mammal?",
                        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                        correct: 1
                    },
                    {
                        question: "How many continents are there?",
                        options: ["5", "6", "7", "8"],
                        correct: 2
                    }
                ],
                medium: [
                    {
                        question: "What is the square root of 144?",
                        options: ["10", "11", "12", "13"],
                        correct: 2
                    },
                    {
                        question: "Which element has the chemical symbol 'O'?",
                        options: ["Osmium", "Oxygen", "Oganesson", "Osmium"],
                        correct: 1
                    },
                    {
                        question: "What is the largest desert in the world?",
                        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
                        correct: 3
                    },
                    {
                        question: "Who wrote 'Romeo and Juliet'?",
                        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                        correct: 1
                    },
                    {
                        question: "What is the speed of light?",
                        options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "499,792 km/s"],
                        correct: 0
                    },
                    {
                        question: "Which country has the most islands?",
                        options: ["Indonesia", "Sweden", "Norway", "Finland"],
                        correct: 1
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Heart", "Brain", "Liver", "Skin"],
                        correct: 3
                    },
                    {
                        question: "Which year did the first moon landing occur?",
                        options: ["1967", "1968", "1969", "1970"],
                        correct: 2
                    },
                    {
                        question: "What is the currency of Japan?",
                        options: ["Yen", "Won", "Yuan", "Ringgit"],
                        correct: 0
                    },
                    {
                        question: "How many bones are in the human body?",
                        options: ["206", "216", "196", "226"],
                        correct: 0
                    }
                ],
                hard: [
                    {
                        question: "What is the value of π (pi) to 5 decimal places?",
                        options: ["3.14159", "3.14160", "3.14158", "3.14161"],
                        correct: 0
                    },
                    {
                        question: "Which planet has the most moons?",
                        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                        correct: 1
                    },
                    {
                        question: "What is the atomic number of carbon?",
                        options: ["4", "5", "6", "7"],
                        correct: 2
                    },
                    {
                        question: "Who discovered penicillin?",
                        options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
                        correct: 0
                    },
                    {
                        question: "What is the largest prime number less than 100?",
                        options: ["89", "91", "97", "99"],
                        correct: 2
                    },
                    {
                        question: "Which country has the highest life expectancy?",
                        options: ["Japan", "Switzerland", "Singapore", "Hong Kong"],
                        correct: 3
                    },
                    {
                        question: "What is the molecular formula for glucose?",
                        options: ["C6H12O6", "C12H22O11", "C6H6O6", "C12H12O12"],
                        correct: 0
                    },
                    {
                        question: "Which year did the Berlin Wall fall?",
                        options: ["1987", "1988", "1989", "1990"],
                        correct: 2
                    },
                    {
                        question: "What is the largest living organism on Earth?",
                        options: ["Blue Whale", "Giant Sequoia", "Great Barrier Reef", "Honey Fungus"],
                        correct: 2
                    },
                    {
                        question: "How many chromosomes do humans have?",
                        options: ["42", "44", "46", "48"],
                        correct: 2
                    }
                ]
            },
            science: {
                easy: [
                    {
                        question: "What is the hardest natural substance on Earth?",
                        options: ["Steel", "Diamond", "Granite", "Iron"],
                        correct: 1
                    },
                    {
                        question: "What is the chemical symbol for water?",
                        options: ["H2O", "CO2", "O2", "N2"],
                        correct: 0
                    },
                    {
                        question: "Which gas do plants absorb from the air?",
                        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                        correct: 1
                    },
                    {
                        question: "What is the closest planet to the Sun?",
                        options: ["Venus", "Mercury", "Earth", "Mars"],
                        correct: 1
                    },
                    {
                        question: "What is the study of fossils called?",
                        options: ["Archaeology", "Paleontology", "Geology", "Biology"],
                        correct: 1
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Heart", "Brain", "Liver", "Skin"],
                        correct: 3
                    },
                    {
                        question: "Which element is most abundant in the Earth's crust?",
                        options: ["Iron", "Oxygen", "Silicon", "Aluminum"],
                        correct: 1
                    },
                    {
                        question: "What is the speed of sound in air?",
                        options: ["300 m/s", "340 m/s", "400 m/s", "500 m/s"],
                        correct: 1
                    },
                    {
                        question: "What is the chemical symbol for gold?",
                        options: ["Ag", "Au", "Fe", "Cu"],
                        correct: 1
                    },
                    {
                        question: "Which gas makes up most of the Earth's atmosphere?",
                        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                        correct: 2
                    }
                ],
                medium: [
                    {
                        question: "What is the molecular formula for glucose?",
                        options: ["C6H12O6", "C12H22O11", "C6H6O6", "C12H12O12"],
                        correct: 0
                    },
                    {
                        question: "Which planet has the most moons?",
                        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                        correct: 1
                    },
                    {
                        question: "What is the atomic number of carbon?",
                        options: ["4", "5", "6", "7"],
                        correct: 2
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Heart", "Brain", "Liver", "Skin"],
                        correct: 3
                    },
                    {
                        question: "Which element has the chemical symbol 'O'?",
                        options: ["Osmium", "Oxygen", "Oganesson", "Osmium"],
                        correct: 1
                    },
                    {
                        question: "What is the speed of light?",
                        options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "499,792 km/s"],
                        correct: 0
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Heart", "Brain", "Liver", "Skin"],
                        correct: 3
                    },
                    {
                        question: "Which year did the first moon landing occur?",
                        options: ["1967", "1968", "1969", "1970"],
                        correct: 2
                    },
                    {
                        question: "What is the currency of Japan?",
                        options: ["Yen", "Won", "Yuan", "Ringgit"],
                        correct: 0
                    },
                    {
                        question: "How many bones are in the human body?",
                        options: ["206", "216", "196", "226"],
                        correct: 0
                    }
                ],
                hard: [
                    {
                        question: "What is the value of π (pi) to 5 decimal places?",
                        options: ["3.14159", "3.14160", "3.14158", "3.14161"],
                        correct: 0
                    },
                    {
                        question: "Which planet has the most moons?",
                        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                        correct: 1
                    },
                    {
                        question: "What is the atomic number of carbon?",
                        options: ["4", "5", "6", "7"],
                        correct: 2
                    },
                    {
                        question: "Who discovered penicillin?",
                        options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
                        correct: 0
                    },
                    {
                        question: "What is the largest prime number less than 100?",
                        options: ["89", "91", "97", "99"],
                        correct: 2
                    },
                    {
                        question: "Which country has the highest life expectancy?",
                        options: ["Japan", "Switzerland", "Singapore", "Hong Kong"],
                        correct: 3
                    },
                    {
                        question: "What is the molecular formula for glucose?",
                        options: ["C6H12O6", "C12H22O11", "C6H6O6", "C12H12O12"],
                        correct: 0
                    },
                    {
                        question: "Which year did the Berlin Wall fall?",
                        options: ["1987", "1988", "1989", "1990"],
                        correct: 2
                    },
                    {
                        question: "What is the largest living organism on Earth?",
                        options: ["Blue Whale", "Giant Sequoia", "Great Barrier Reef", "Honey Fungus"],
                        correct: 2
                    },
                    {
                        question: "How many chromosomes do humans have?",
                        options: ["42", "44", "46", "48"],
                        correct: 2
                    }
                ]
            },
            history: {
                easy: [
                    {
                        question: "Which year did World War II end?",
                        options: ["1943", "1944", "1945", "1946"],
                        correct: 2
                    },
                    {
                        question: "Who was the first President of the United States?",
                        options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
                        correct: 2
                    },
                    {
                        question: "Which empire was ruled by Julius Caesar?",
                        options: ["Greek", "Roman", "Egyptian", "Persian"],
                        correct: 1
                    },
                    {
                        question: "What year did Columbus discover America?",
                        options: ["1490", "1491", "1492", "1493"],
                        correct: 2
                    },
                    {
                        question: "Which country was ruled by Queen Victoria?",
                        options: ["France", "Germany", "Spain", "United Kingdom"],
                        correct: 3
                    },
                    {
                        question: "What year did the Titanic sink?",
                        options: ["1910", "1911", "1912", "1913"],
                        correct: 2
                    },
                    {
                        question: "Who was the first Emperor of Rome?",
                        options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
                        correct: 1
                    },
                    {
                        question: "Which year did the French Revolution begin?",
                        options: ["1787", "1788", "1789", "1790"],
                        correct: 2
                    },
                    {
                        question: "Who was the first female Prime Minister of the UK?",
                        options: ["Margaret Thatcher", "Theresa May", "Liz Truss", "None of the above"],
                        correct: 0
                    },
                    {
                        question: "What year did the Berlin Wall fall?",
                        options: ["1987", "1988", "1989", "1990"],
                        correct: 2
                    }
                ],
                medium: [
                    {
                        question: "Which year did the first moon landing occur?",
                        options: ["1967", "1968", "1969", "1970"],
                        correct: 2
                    },
                    {
                        question: "Who wrote 'Romeo and Juliet'?",
                        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                        correct: 1
                    },
                    {
                        question: "Which year did the Berlin Wall fall?",
                        options: ["1987", "1988", "1989", "1990"],
                        correct: 2
                    },
                    {
                        question: "Who was the first Emperor of Rome?",
                        options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
                        correct: 1
                    },
                    {
                        question: "Which year did the French Revolution begin?",
                        options: ["1787", "1788", "1789", "1790"],
                        correct: 2
                    },
                    {
                        question: "Who was the first female Prime Minister of the UK?",
                        options: ["Margaret Thatcher", "Theresa May", "Liz Truss", "None of the above"],
                        correct: 0
                    },
                    {
                        question: "What year did the Berlin Wall fall?",
                        options: ["1987", "1988", "1989", "1990"],
                        correct: 2
                    },
                    {
                        question: "Which year did the first moon landing occur?",
                        options: ["1967", "1968", "1969", "1970"],
                        correct: 2
                    },
                    {
                        question: "Who wrote 'Romeo and Juliet'?",
                        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                        correct: 1
                    },
                    {
                        question: "Which year did the Berlin Wall fall?",
                        options: ["1987", "1988", "1989", "1990"],
                        correct: 2
                    }
                ],
                hard: [
                    {
                        question: "Who discovered penicillin?",
                        options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
                        correct: 0
                    },
                    {
                        question: "Which year did the Berlin Wall fall?",
                        options: ["1987", "1988", "1989", "1990"],
                        correct: 2
                    },
                    {
                        question: "What is the largest living organism on Earth?",
                        options: ["Blue Whale", "Giant Sequoia", "Great Barrier Reef", "Honey Fungus"],
                        correct: 2
                    },
                    {
                        question: "How many chromosomes do humans have?",
                        options: ["42", "44", "46", "48"],
                        correct: 2
                    },
                    {
                        question: "What is the value of π (pi) to 5 decimal places?",
                        options: ["3.14159", "3.14160", "3.14158", "3.14161"],
                        correct: 0
                    },
                    {
                        question: "Which planet has the most moons?",
                        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                        correct: 1
                    },
                    {
                        question: "What is the atomic number of carbon?",
                        options: ["4", "5", "6", "7"],
                        correct: 2
                    },
                    {
                        question: "Who discovered penicillin?",
                        options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
                        correct: 0
                    },
                    {
                        question: "What is the largest prime number less than 100?",
                        options: ["89", "91", "97", "99"],
                        correct: 2
                    },
                    {
                        question: "Which country has the highest life expectancy?",
                        options: ["Japan", "Switzerland", "Singapore", "Hong Kong"],
                        correct: 3
                    }
                ]
            },
            geography: {
                easy: [
                    {
                        question: "What is the capital of France?",
                        options: ["London", "Berlin", "Paris", "Madrid"],
                        correct: 2
                    },
                    {
                        question: "Which country is home to the kangaroo?",
                        options: ["New Zealand", "South Africa", "Australia", "India"],
                        correct: 2
                    },
                    {
                        question: "What is the largest ocean on Earth?",
                        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                        correct: 3
                    },
                    {
                        question: "Which country has the most islands?",
                        options: ["Indonesia", "Sweden", "Norway", "Finland"],
                        correct: 1
                    },
                    {
                        question: "What is the currency of Japan?",
                        options: ["Yen", "Won", "Yuan", "Ringgit"],
                        correct: 0
                    },
                    {
                        question: "Which is the largest continent?",
                        options: ["North America", "South America", "Europe", "Asia"],
                        correct: 3
                    },
                    {
                        question: "What is the capital of Brazil?",
                        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                        correct: 2
                    },
                    {
                        question: "Which country has the highest population?",
                        options: ["India", "China", "United States", "Indonesia"],
                        correct: 1
                    },
                    {
                        question: "What is the largest desert in the world?",
                        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
                        correct: 3
                    },
                    {
                        question: "Which is the smallest country in the world?",
                        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                        correct: 2
                    }
                ],
                medium: [
                    {
                        question: "Which country has the most islands?",
                        options: ["Indonesia", "Sweden", "Norway", "Finland"],
                        correct: 1
                    },
                    {
                        question: "What is the currency of Japan?",
                        options: ["Yen", "Won", "Yuan", "Ringgit"],
                        correct: 0
                    },
                    {
                        question: "Which is the largest continent?",
                        options: ["North America", "South America", "Europe", "Asia"],
                        correct: 3
                    },
                    {
                        question: "What is the capital of Brazil?",
                        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                        correct: 2
                    },
                    {
                        question: "Which country has the highest population?",
                        options: ["India", "China", "United States", "Indonesia"],
                        correct: 1
                    },
                    {
                        question: "What is the largest desert in the world?",
                        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
                        correct: 3
                    },
                    {
                        question: "Which is the smallest country in the world?",
                        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                        correct: 2
                    },
                    {
                        question: "Which country has the most islands?",
                        options: ["Indonesia", "Sweden", "Norway", "Finland"],
                        correct: 1
                    },
                    {
                        question: "What is the currency of Japan?",
                        options: ["Yen", "Won", "Yuan", "Ringgit"],
                        correct: 0
                    },
                    {
                        question: "Which is the largest continent?",
                        options: ["North America", "South America", "Europe", "Asia"],
                        correct: 3
                    }
                ],
                hard: [
                    {
                        question: "Which country has the highest life expectancy?",
                        options: ["Japan", "Switzerland", "Singapore", "Hong Kong"],
                        correct: 3
                    },
                    {
                        question: "What is the largest living organism on Earth?",
                        options: ["Blue Whale", "Giant Sequoia", "Great Barrier Reef", "Honey Fungus"],
                        correct: 2
                    },
                    {
                        question: "Which country has the most islands?",
                        options: ["Indonesia", "Sweden", "Norway", "Finland"],
                        correct: 1
                    },
                    {
                        question: "What is the currency of Japan?",
                        options: ["Yen", "Won", "Yuan", "Ringgit"],
                        correct: 0
                    },
                    {
                        question: "Which is the largest continent?",
                        options: ["North America", "South America", "Europe", "Asia"],
                        correct: 3
                    },
                    {
                        question: "What is the capital of Brazil?",
                        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                        correct: 2
                    },
                    {
                        question: "Which country has the highest population?",
                        options: ["India", "China", "United States", "Indonesia"],
                        correct: 1
                    },
                    {
                        question: "What is the largest desert in the world?",
                        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
                        correct: 3
                    },
                    {
                        question: "Which is the smallest country in the world?",
                        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                        correct: 2
                    },
                    {
                        question: "Which country has the highest life expectancy?",
                        options: ["Japan", "Switzerland", "Singapore", "Hong Kong"],
                        correct: 3
                    }
                ]
            }
        };

        return allQuestions[category]?.[difficulty] || allQuestions.general.easy;
    }

    // Update start button state
    updateStartButton() {
        const startBtn = document.getElementById('start-btn');
        startBtn.disabled = false;
    }

    // Start the quiz
    startQuiz() {
        this.showLoading(true);
        
        setTimeout(() => {
            this.showLoading(false);
            this.showScreen('quiz-screen');
            this.resetQuiz();
            this.loadQuestions();
            this.displayQuestion();
            this.startTimer();
        }, 1000);
    }

    // Show loading overlay
    showLoading(show) {
        const overlay = document.getElementById('loading-overlay');
        if (show) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
    }

    // Show specific screen
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    // Reset quiz state
    resetQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.timeLeft = 30;
        this.startTime = Date.now();
        this.totalTime = 0;
        
        this.updateProgress();
        this.updateScore();
        this.updateTimer();
    }

    // Display current question
    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        if (!question) return;

        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.dataset.index = index;
            
            optionBtn.addEventListener('click', () => {
                this.selectOption(index);
            });
            
            optionsContainer.appendChild(optionBtn);
        });
        
        this.updateProgress();
        document.getElementById('next-btn').disabled = true;
    }

    // Handle option selection
    selectOption(selectedIndex) {
        const question = this.questions[this.currentQuestionIndex];
        const optionButtons = document.querySelectorAll('.option-btn');
        
        // Disable all options
        optionButtons.forEach(btn => {
            btn.disabled = true;
            btn.classList.add('disabled');
        });
        
        // Mark correct and incorrect answers
        optionButtons.forEach((btn, index) => {
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && selectedIndex !== question.correct) {
                btn.classList.add('incorrect');
            }
        });
        
        // Update score
        if (selectedIndex === question.correct) {
            this.score += this.calculatePoints();
            this.correctAnswers++;
        } else {
            this.incorrectAnswers++;
        }
        
        this.updateScore();
        document.getElementById('next-btn').disabled = false;
    }

    // Calculate points based on time left and difficulty
    calculatePoints() {
        const basePoints = 10;
        const timeBonus = Math.floor(this.timeLeft / 3);
        const difficultyMultiplier = {
            'easy': 1,
            'medium': 1.5,
            'hard': 2
        };
        
        return Math.floor((basePoints + timeBonus) * difficultyMultiplier[this.selectedDifficulty]);
    }

    // Next question
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= this.questions.length) {
            this.endQuiz();
        } else {
            this.timeLeft = 30;
            this.updateTimer();
            this.displayQuestion();
        }
    }

    // End quiz and show results
    endQuiz() {
        this.stopTimer();
        this.totalTime = Math.floor((Date.now() - this.startTime) / 1000);
        this.showResults();
    }

    // Show results screen
    showResults() {
        this.showScreen('results-screen');
        
        const percentage = Math.round((this.score / (this.questions.length * 10)) * 100);
        
        document.getElementById('final-score-text').textContent = `Score: ${this.score}/${this.questions.length * 10}`;
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        document.getElementById('correct-answers').textContent = this.correctAnswers;
        document.getElementById('incorrect-answers').textContent = this.incorrectAnswers;
        document.getElementById('time-taken').textContent = `${this.totalTime}s`;
        
        this.setPerformanceMessage(percentage);
    }

    // Set performance message based on score
    setPerformanceMessage(percentage) {
        const titleElement = document.getElementById('performance-title');
        const messageElement = document.getElementById('performance-message');
        
        if (percentage >= 90) {
            titleElement.textContent = 'Excellent!';
            messageElement.textContent = 'Outstanding performance! You\'re a true master of knowledge.';
        } else if (percentage >= 70) {
            titleElement.textContent = 'Great Job!';
            messageElement.textContent = 'Well done! You have a solid understanding of the subject.';
        } else if (percentage >= 50) {
            titleElement.textContent = 'Good Effort!';
            messageElement.textContent = 'Not bad! Keep learning and you\'ll improve even more.';
        } else {
            titleElement.textContent = 'Keep Learning!';
            messageElement.textContent = 'Don\'t worry! Every attempt is a step toward improvement.';
        }
    }

    // Timer functions
    startTimer() {
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimer();
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    updateTimer() {
        const timerElement = document.getElementById('timer');
        timerElement.textContent = `Time: ${this.timeLeft}s`;
        
        if (this.timeLeft <= 10) {
            timerElement.classList.add('timer-warning');
        } else {
            timerElement.classList.remove('timer-warning');
        }
    }

    timeUp() {
        this.stopTimer();
        this.incorrectAnswers++;
        this.nextQuestion();
    }

    // Update progress bar
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('question-counter').textContent = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
    }

    // Update score display
    updateScore() {
        document.getElementById('current-score').textContent = `Score: ${this.score}`;
    }

    // Retry quiz
    retryQuiz() {
        this.showScreen('welcome-screen');
        this.loadQuestions();
    }

    // Go back to home
    goHome() {
        this.showScreen('welcome-screen');
        this.stopTimer();
    }
}

// Initialize the quiz game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizGame();
}); 