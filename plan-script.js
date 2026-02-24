// --- DATA: The Curriculum Structure ---
// Based on "Code with Mosh" Timeline
const curriculum = [
    {
        id: "m1",
        title: "Month 1: Python Fundamentals",
        subtitle: "The Foundation | Variables, Loops, Functions",
        weeks: [
            {
                title: "Week 1: Python Basics",
                days: [
                    "Day 1: Install Python & VS Code",
                    "Day 2: Variables & Data Types (Int, Float, Str)",
                    "Day 3: String Methods & Formatting",
                    "Day 4: Arithmetic & Math Functions",
                    "Day 5: If/Else Statements & Logic",
                    "Day 6: While Loops & For Loops",
                    "Day 7: Build a Calculator Project"
                ]
            },
            {
                title: "Week 2: Data Structures",
                days: [
                    "Day 8: Lists (Add, Remove, Sort)",
                    "Day 9: Tuples & Unpacking",
                    "Day 10: Sets & Dictionaries",
                    "Day 11: Dictionary Methods",
                    "Day 12: Functions & Parameters",
                    "Day 13: *args and **kwargs",
                    "Day 14: Mini Project: To-Do List CLI"
                ]
            },
            {
                title: "Week 3: Advanced Python",
                days: [
                    "Day 15: Exceptions (Try/Except)",
                    "Day 16: File Handling (Read/Write TXT)",
                    "Day 17: Modules & Packages",
                    "Day 18: Intro to Classes (OOP)",
                    "Day 19: Constructors & Methods",
                    "Day 20: Inheritance",
                    "Day 21: Review & Practice"
                ]
            },
            {
                title: "Week 4: Libraries & Virtual Envs",
                days: [
                    "Day 22: PIP & Virtual Environments",
                    "Day 23: Intro to NumPy (Arrays)",
                    "Day 24: Intro to Pandas (DataFrames)",
                    "Day 25: Intro to Matplotlib (Plotting)",
                    "Day 26: Web Scraping Basics",
                    "Day 27: Final Month Project: Data Analyzer",
                    "Day 28: Rest & Review"
                ]
            }
        ]
    },
    {
        id: "m2",
        title: "Month 2: Version Control & DSA Start",
        subtitle: "Git, GitHub & Algorithms",
        weeks: [
            {
                title: "Week 5: Git & GitHub Mastery",
                days: [
                    "Day 29: Git Init, Add, Commit",
                    "Day 30: Branching & Merging",
                    "Day 31: Handling Merge Conflicts",
                    "Day 32: GitHub Repos & Push/Pull",
                    "Day 33: Forking & Pull Requests",
                    "Day 34: .gitignore & Best Practices",
                    "Day 35: Collaborate on a Dummy Repo"
                ]
            },
            {
                title: "Week 6: Algorithms - Complexity",
                days: [
                    "Day 36: What is Big O Notation?",
                    "Day 37: Time vs Space Complexity",
                    "Day 38: Linear Search vs Binary Search",
                    "Day 39: Bubble Sort & Selection Sort",
                    "Day 40: Insertion Sort",
                    "Day 41: Recursion Basics",
                    "Day 42: Practice Problems (LeetCode Easy)"
                ]
            }
        ]
    },
    {
        id: "m3",
        title: "Month 3-4: SQL & Databases",
        subtitle: "Mastering Data Storage",
        weeks: [
            {
                title: "Week 9: SQL Basics",
                days: ["Select & Where", "Order By & Limits", "Insert, Update, Delete", "Practice SQL Bolt"]
            },
            {
                title: "Week 10: Advanced SQL",
                days: ["Joins (Inner, Left, Right)", "Group By & Aggregates", "Subqueries", "Database Design (Normalization)"]
            }
        ]
    },
    {
        id: "m4",
        title: "Month 5-6: Math & Statistics",
        subtitle: "The Brain of Machine Learning",
        weeks: [
            {
                title: "Week 17: Linear Algebra",
                days: ["Vectors & Scalars", "Matrix Multiplication", "Dot Products", "Eigenvalues"]
            },
            {
                title: "Week 18: Statistics",
                days: ["Mean, Median, Mode", "Standard Deviation", "Probability Distributions", "Bayes Theorem"]
            }
        ]
    },
    {
        id: "m5",
        title: "Month 7-9: Machine Learning",
        subtitle: "Supervised & Unsupervised Learning",
        weeks: [
            {
                title: "Month 7 Focus",
                days: ["Linear Regression", "Logistic Regression", "Decision Trees", "Scikit-Learn Implementation"]
            },
            {
                title: "Month 8 Focus",
                days: ["Random Forests", "K-Means Clustering", "PCA", "Model Evaluation (ROC/AUC)"]
            }
        ]
    },
    {
        id: "m6",
        title: "Month 10-12: Deep Learning",
        subtitle: "Neural Networks & TensorFlow",
        weeks: [
            { title: "Foundations", days: ["Perceptrons", "Activation Functions", "Backpropagation"] },
            { title: "Computer Vision", days: ["CNN Architecture", "Pooling Layers", "Image Classification Project"] },
            { title: "NLP", days: ["RNNs & LSTMs", "Tokenization", "Word Embeddings"] }
        ]
    }
];

// --- RENDER LOGIC ---

const timelineContainer = document.getElementById('timelineContainer');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

// Load saved progress from LocalStorage
const savedProgress = JSON.parse(localStorage.getItem('studyProgress')) || {};

function renderTimeline() {
    timelineContainer.innerHTML = ''; // Clear container

    curriculum.forEach(month => {
        // Create Month Card
        const card = document.createElement('div');
        card.className = 'month-card';

        // Header
        const header = document.createElement('div');
        header.className = 'month-header';
        header.innerHTML = `
            <div class="month-title">
                <h2>${month.title}</h2>
                <span>${month.subtitle}</span>
            </div>
            <div class="toggle-icon">▼</div>
        `;

        // Content Container
        const content = document.createElement('div');
        content.className = 'month-content';

        // Loop through Weeks
        month.weeks.forEach(week => {
            const weekBlock = document.createElement('div');
            weekBlock.className = 'week-block';
            weekBlock.innerHTML = `<div class="week-title">${week.title}</div>`;

            // Loop through Days
            week.days.forEach(dayText => {
                const dayId = dayText.replace(/[^a-zA-Z0-9]/g, ''); // Generate unique ID
                const isChecked = savedProgress[dayId] ? 'checked' : '';
                const isCompleted = savedProgress[dayId] ? 'completed' : '';

                const dayItem = document.createElement('div');
                dayItem.className = `day-item ${isCompleted}`;
                dayItem.innerHTML = `
                    <input type="checkbox" class="checkbox-custom" id="${dayId}" ${isChecked}>
                    <label for="${dayId}" class="day-text">${dayText}</label>
                `;

                // Add Event Listener for Checkbox
                const checkbox = dayItem.querySelector('input');
                checkbox.addEventListener('change', (e) => {
                    toggleTask(dayId, e.target.checked);
                    dayItem.classList.toggle('completed');
                });

                weekBlock.appendChild(dayItem);
            });

            content.appendChild(weekBlock);
        });

        // Toggle Accordion
        header.addEventListener('click', () => {
            card.classList.toggle('active');
            if (card.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });

        card.appendChild(header);
        card.appendChild(content);
        timelineContainer.appendChild(card);
    });

    updateProgressUI();
}

function toggleTask(id, status) {
    savedProgress[id] = status;
    localStorage.setItem('studyProgress', JSON.stringify(savedProgress));
    updateProgressUI();
}

function updateProgressUI() {
    const totalTasks = document.querySelectorAll('.checkbox-custom').length;
    const completedTasks = Object.values(savedProgress).filter(val => val === true).length;
    
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    
    progressBar.style.width = `${percentage}%`;
    progressText.innerText = `${percentage}%`;
}

// Initialize
renderTimeline();