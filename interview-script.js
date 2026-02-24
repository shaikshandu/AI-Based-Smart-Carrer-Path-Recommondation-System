// --- INTERVIEW DATA (100+ Questions) ---
const interviewData = [
    // ---------------- PYTHON (1-20) ----------------
    { id: 1, category: "python", question: "Difference between List and Tuple?", answer: "Lists are mutable (can be changed) and slower. Tuples are immutable (cannot be changed) and faster. Use tuples for constant data." },
    { id: 2, category: "python", question: "What is PEP 8?", answer: "PEP 8 is the style guide for Python code. It recommends best practices like using 4 spaces for indentation and snake_case for function names." },
    { id: 3, category: "python", question: "What is the difference between 'is' and '=='?", answer: "'==' checks for value equality. 'is' checks for reference equality (if two variables point to the exact same object in memory)." },
    { id: 4, category: "python", question: "What are Decorators?", answer: "Decorators are functions that modify the behavior of other functions without changing their source code. They use the @ symbol.", code: "@my_decorator\ndef func(): pass" },
    { id: 5, category: "python", question: "What is the GIL (Global Interpreter Lock)?", answer: "A mutex that allows only one thread to execute Python bytecode at a time. This means Python multithreading is not truly parallel on multi-core CPUs." },
    { id: 6, category: "python", question: "Difference between range() and xrange()?", answer: "In Python 2, range() created a list, xrange() created a generator. In Python 3, range() is a generator (efficient)." },
    { id: 7, category: "python", question: "What are Lambda functions?", answer: "Anonymous, small functions defined with the 'lambda' keyword. They can have any number of arguments but only one expression.", code: "add = lambda x, y: x + y" },
    { id: 8, category: "python", question: "Explain List Comprehension.", answer: "A concise way to create lists. It consists of brackets containing an expression followed by a for clause.", code: "[x**2 for x in range(10)]" },
    { id: 9, category: "python", question: "What is __init__?", answer: "The constructor method in Python classes. It is automatically called when a new object (instance) of a class is created." },
    { id: 10, category: "python", question: "Deep copy vs Shallow copy?", answer: "Shallow copy creates a new object but inserts references into it. Deep copy creates a new object and recursively copies the objects found in the original." },
    { id: 11, category: "python", question: "What are *args and **kwargs?", answer: "*args allows passing variable positional arguments (tuple). **kwargs allows passing variable keyword arguments (dictionary)." },
    { id: 12, category: "python", question: "How is memory managed in Python?", answer: "Python uses a private heap space. Memory management is handled by the Python Memory Manager and Garbage Collector (using reference counting)." },
    { id: 13, category: "python", question: "What is the difference between remove() and del?", answer: "remove() deletes the first matching value. del removes an item at a specific index." },
    { id: 14, category: "python", question: "What is a Generator?", answer: "A function that returns an iterator using the 'yield' keyword. It generates values one at a time, saving memory." },
    { id: 15, category: "python", question: "What is docstring?", answer: "A string literal specified in source code that is used to document a specific segment of code like a function or class." },
    { id: 16, category: "python", question: "Explain try, except, finally.", answer: "Try block lets you test a block of code for errors. Except handles the error. Finally lets you execute code regardless of the result." },
    { id: 17, category: "python", question: "What is slicing?", answer: "A mechanism to select a range of items from sequence types like strings or lists.", code: "my_list[1:5:2]" },
    { id: 18, category: "python", question: "Dictionary vs JSON?", answer: "A Dictionary is a Python data structure. JSON is a string format for data exchange. You use json.loads() to convert JSON to Dict." },
    { id: 19, category: "python", question: "What is self?", answer: "Self represents the instance of the class. By using the 'self' keyword we can access the attributes and methods of the class." },
    { id: 20, category: "python", question: "Pass vs Continue?", answer: "Pass does nothing (placeholder). Continue skips the current iteration of the loop and moves to the next one." },

    // ---------------- SQL (21-40) ----------------
    { id: 21, category: "sql", question: "What is Primary Key vs Foreign Key?", answer: "Primary Key uniquely identifies a record. Foreign Key is a field that links to the Primary Key of another table." },
    { id: 22, category: "sql", question: "Explain ACID properties.", answer: "Atomicity (all or nothing), Consistency (valid state), Isolation (transactions don't interfere), Durability (saved permanently)." },
    { id: 23, category: "sql", question: "Difference between WHERE and HAVING?", answer: "WHERE filters rows before aggregation. HAVING filters groups after the GROUP BY clause." },
    { id: 24, category: "sql", question: "Types of Joins?", answer: "INNER (matches), LEFT (all left + matches), RIGHT (all right + matches), FULL (all records)." },
    { id: 25, category: "sql", question: "What is Normalization?", answer: "The process of organizing data to minimize redundancy. 1NF (atomic), 2NF (no partial dependency), 3NF (no transitive dependency)." },
    { id: 26, category: "sql", question: "What is a View?", answer: "A virtual table based on the result-set of an SQL statement. It does not store data physically." },
    { id: 27, category: "sql", question: "Truncate vs Delete?", answer: "DELETE removes rows (can be rolled back, slower). TRUNCATE removes all rows by resetting the table (cannot be rolled back, faster)." },
    { id: 28, category: "sql", question: "What is an Index?", answer: "A data structure (B-Tree) that improves the speed of data retrieval operations on a database table." },
    { id: 29, category: "sql", question: "UNION vs UNION ALL?", answer: "UNION removes duplicate records. UNION ALL includes duplicates (faster)." },
    { id: 30, category: "sql", question: "What is a Stored Procedure?", answer: "A prepared SQL code that you can save, so the code can be reused over and over again." },
    { id: 31, category: "sql", question: "SQL vs NoSQL?", answer: "SQL is relational, table-based, uses schemas (MySQL). NoSQL is non-relational, document/key-value based, flexible schemas (MongoDB)." },
    { id: 32, category: "sql", question: "What is a Trigger?", answer: "A set of SQL statements that automatically executes when a specific event (INSERT, UPDATE, DELETE) occurs." },
    { id: 33, category: "sql", question: "Count(*) vs Count(column)?", answer: "Count(*) counts all rows including NULLs. Count(column) counts only non-NULL values in that column." },
    { id: 34, category: "sql", question: "What is a Self Join?", answer: "A regular join, but the table is joined with itself. Useful for hierarchical data." },
    { id: 35, category: "sql", question: "Explain Cross Join (Cartesian Product).", answer: "Returns the Cartesian product of rows from tables in the join. Returns (rows in table1) x (rows in table2)." },
    { id: 36, category: "sql", question: "Rank() vs Dense_Rank()?", answer: "Rank skips numbers for ties (1, 2, 2, 4). Dense_Rank does not skip (1, 2, 2, 3)." },
    { id: 37, category: "sql", question: "What is DDL vs DML?", answer: "DDL (Data Definition) = Create, Alter, Drop. DML (Data Manipulation) = Select, Insert, Update, Delete." },
    { id: 38, category: "sql", question: "What is a Cursor?", answer: "A database object used to retrieve, manipulate, and traverse through a result set row by row." },
    { id: 39, category: "sql", question: "Difference between Char and Varchar?", answer: "Char is fixed length (padding added). Varchar is variable length (saves space)." },
    { id: 40, category: "sql", question: "What is Denormalization?", answer: "Adding redundant data to a normalized database to read performance (reduce joins)." },

    // ---------------- MACHINE LEARNING (41-65) ----------------
    { id: 41, category: "ml", question: "Supervised vs Unsupervised Learning?", answer: "Supervised uses labeled data (Regression, Classification). Unsupervised uses unlabeled data (Clustering, PCA)." },
    { id: 42, category: "ml", question: "What is Bias vs Variance?", answer: "Bias is error from wrong assumptions (underfitting). Variance is sensitivity to noise (overfitting). High bias = simple model. High variance = complex model." },
    { id: 43, category: "ml", question: "Explain Overfitting.", answer: "Model learns noise/details of training data so well that it performs poorly on new data. Solutions: Regularization, more data, simpler model." },
    { id: 44, category: "ml", question: "Precision vs Recall?", answer: "Precision = TruePos / (TruePos + FalsePos) [Quality]. Recall = TruePos / (TruePos + FalseNeg) [Quantity/Coverage]." },
    { id: 45, category: "ml", question: "What is F1 Score?", answer: "Harmonic mean of Precision and Recall. Good for imbalanced datasets." },
    { id: 46, category: "ml", question: "L1 (Lasso) vs L2 (Ridge) Regularization?", answer: "L1 shrinks coefficients to zero (feature selection). L2 shrinks coefficients near zero (prevents overfitting)." },
    { id: 47, category: "ml", question: "How does KNN work?", answer: "K-Nearest Neighbors classifies a point based on the majority class of its 'K' nearest neighbors in the feature space." },
    { id: 48, category: "ml", question: "Type I vs Type II Error?", answer: "Type I = False Positive (Convicting innocent). Type II = False Negative (Acquitting guilty)." },
    { id: 49, category: "ml", question: "What is Cross-Validation?", answer: "Resampling procedure used to evaluate models. K-Fold splits data into K subsets, training on K-1 and testing on 1." },
    { id: 50, category: "ml", question: "How does a Decision Tree work?", answer: "Splits data into branches based on feature values to maximize information gain (reduce entropy) at each node." },
    { id: 51, category: "ml", question: "Random Forest vs Decision Tree?", answer: "Random Forest is an ensemble of many decision trees (bagging). It reduces overfitting compared to a single tree." },
    { id: 52, category: "ml", question: "What is Gradient Descent?", answer: "Optimization algorithm to minimize the cost function by iteratively moving in the direction of the steepest descent." },
    { id: 53, category: "ml", question: "What is PCA?", answer: "Principal Component Analysis. A dimensionality reduction technique that projects data onto orthogonal vectors (components) maximizing variance." },
    { id: 54, category: "ml", question: "Explain ROC Curve.", answer: "Plot of True Positive Rate vs False Positive Rate. AUC (Area Under Curve) measures performance (1.0 is perfect)." },
    { id: 55, category: "ml", question: "What is Boosting?", answer: "Ensemble technique where models are built sequentially, with each new model attempting to correct errors of the previous one (e.g., XGBoost)." },
    { id: 56, category: "ml", question: "What is the Curse of Dimensionality?", answer: "As features increase, data becomes sparse, making it hard for models to find patterns without massive amounts of data." },
    { id: 57, category: "ml", question: "What is Naive Bayes?", answer: "Probabilistic classifier based on Bayes Theorem, assuming independence between features." },
    { id: 58, category: "ml", question: "Standardization vs Normalization?", answer: "Standardization scales data to mean 0, std 1 (Z-score). Normalization scales data to range [0, 1]." },
    { id: 59, category: "ml", question: "What is Imbalanced Data?", answer: "When classes are not represented equally (e.g., 99% healthy, 1% sick). Handle via SMOTE, undersampling, or class weights." },
    { id: 60, category: "ml", question: "Difference between Epoch, Batch, Iteration?", answer: "Epoch = one pass of full dataset. Batch = subset of data. Iteration = one update step (Total Data / Batch Size)." },
    { id: 61, category: "ml", question: "What is SVM?", answer: "Support Vector Machine. Finds the hyperplane that maximizes the margin between classes." },
    { id: 62, category: "ml", question: "What is Entropy?", answer: "Measure of impurity or randomness in data. High entropy = high disorder." },
    { id: 63, category: "ml", question: "What is Information Gain?", answer: "Reduction in entropy achieved by splitting data on a specific attribute." },
    { id: 64, category: "ml", question: "What is a Confusion Matrix?", answer: "Table showing TP, TN, FP, FN. Used to calculate accuracy, precision, etc." },
    { id: 65, category: "ml", question: "Explain K-Means Clustering.", answer: "Unsupervised algorithm. 1. Pick K centroids. 2. Assign points to nearest centroid. 3. Recalculate centroids. 4. Repeat." },

    // ---------------- DEEP LEARNING (66-85) ----------------
    { id: 66, category: "dl", question: "Activation Functions: ReLU vs Sigmoid?", answer: "Sigmoid squashes values to (0,1), causes vanishing gradient. ReLU (max(0,x)) avoids this and is faster." },
    { id: 67, category: "dl", question: "What is Backpropagation?", answer: "Algorithm to calculate gradients of the loss function with respect to weights by applying Chain Rule backwards." },
    { id: 68, category: "dl", question: "Vanishing Gradient Problem?", answer: "Gradients become too small during backprop in deep layers, stopping learning. Solved by ReLU, ResNets, LSTMs." },
    { id: 69, category: "dl", question: "What is a CNN?", answer: "Convolutional Neural Network. Uses convolution filters to extract spatial features (edges, textures). Great for images." },
    { id: 70, category: "dl", question: "What is Pooling?", answer: "Downsampling (e.g., Max Pooling). Reduces dimensionality and computation, makes features invariant to small translations." },
    { id: 71, category: "dl", question: "RNN vs LSTM?", answer: "RNNs have short-term memory (vanishing gradient). LSTMs (Long Short-Term Memory) use gates (input, output, forget) to keep long-term context." },
    { id: 72, category: "dl", question: "What is Dropout?", answer: "Regularization technique. Randomly sets a fraction of neurons to zero during training to prevent co-adaptation (overfitting)." },
    { id: 73, category: "dl", question: "What is Batch Normalization?", answer: "Normalizing layer inputs to have mean 0 and variance 1. Stabilizes learning and speeds up convergence." },
    { id: 74, category: "dl", question: "What is Transfer Learning?", answer: "Using a pre-trained model (e.g., VGG16) on a new, similar task with smaller data." },
    { id: 75, category: "dl", question: "Softmax vs Sigmoid?", answer: "Sigmoid is for binary classification. Softmax turns a vector of K real values into probabilities summing to 1 (multi-class)." },
    { id: 76, category: "dl", question: "What is an Autoencoder?", answer: "Unsupervised NN that learns to compress data (Encoder) and reconstruct it (Decoder). Used for denoising/dimensionality reduction." },
    { id: 77, category: "dl", question: "What is a GAN?", answer: "Generative Adversarial Network. Generator creates fake data, Discriminator detects if it's real/fake. They train against each other." },
    { id: 78, category: "dl", question: "Explain Attention Mechanism.", answer: "Allows the model to focus on specific parts of the input sequence when generating output, rather than treating all input equally." },
    { id: 79, category: "dl", question: "What is a Transformer?", answer: "Architecture based entirely on Attention (no RNNs). Parallelizable and handles long-range dependencies well (BERT, GPT)." },
    { id: 80, category: "dl", question: "What is an Optimizer?", answer: "Update rule for model weights. Examples: SGD (Stochastic Gradient Descent), Adam (Adaptive Moment Estimation)." },
    { id: 81, category: "dl", question: "Difference between parameter and hyperparameter?", answer: "Parameters (weights) are learned by the model. Hyperparameters (learning rate, layers) are set by the human before training." },
    { id: 82, category: "dl", question: "What is Data Augmentation?", answer: "Creating new training samples by modifying existing ones (rotating, flipping images) to increase dataset size." },
    { id: 83, category: "dl", question: "What is Embedding?", answer: "Mapping discrete variables (words) to continuous vectors of numbers (Word2Vec) capturing semantic meaning." },
    { id: 84, category: "dl", question: "Exploding Gradient Problem?", answer: "Gradients become too large, making weights unstable (NaN). Solved by Gradient Clipping." },
    { id: 85, category: "dl", question: "What is Fine-Tuning?", answer: "Taking a pre-trained model and unfreezing some top layers to train them on your specific dataset with a low learning rate." },

    // ---------------- STATISTICS (86-100) ----------------
    { id: 86, category: "stats", question: "What is P-Value?", answer: "Probability of observing results as extreme as the current ones, assuming the Null Hypothesis is true. < 0.05 usually means 'significant'." },
    { id: 87, category: "stats", question: "Null vs Alternative Hypothesis?", answer: "Null (H0): No effect/relationship. Alternative (H1): There is an effect/relationship." },
    { id: 88, category: "stats", question: "Central Limit Theorem (CLT)?", answer: "The distribution of sample means approaches a Normal Distribution as sample size increases, regardless of population distribution." },
    { id: 89, category: "stats", question: "Correlation vs Causation?", answer: "Correlation means two variables move together. Causation means one actually causes the other. (Ice cream sales correlate with shark attacks, but don't cause them)."},
    { id: 90, category: "stats", question: "What is A/B Testing?", answer: "Comparing two versions (A and B) against each other to determine which one performs better on a metric." },
    { id: 91, category: "stats", question: "Mean vs Median?", answer: "Mean is average (sensitive to outliers). Median is the middle value (robust to outliers)." },
    { id: 92, category: "stats", question: "What is Standard Deviation?", answer: "Measure of how spread out the numbers are. Square root of Variance." },
    { id: 93, category: "stats", question: "Bayes' Theorem?", answer: "Describes the probability of an event, based on prior knowledge of conditions related to the event. P(A|B) = P(B|A) * P(A) / P(B)." },
    { id: 94, category: "stats", question: "What is Confidence Interval?", answer: "A range of values so defined that there is a specified probability that the value of a parameter lies within it." },
    { id: 95, category: "stats", question: "Types of Distributions?", answer: "Normal (Bell curve), Uniform (Equal probability), Poisson (Count of events), Binomial (Success/Failure)." },
    { id: 96, category: "stats", question: "What is R-Squared?", answer: "Statistical measure representing the proportion of variance for a dependent variable that's explained by independent variables." },
    { id: 97, category: "stats", question: "Parametric vs Non-Parametric tests?", answer: "Parametric assume underlying distribution (e.g., Normal). Non-parametric do not assume specific distribution." },
    { id: 98, category: "stats", question: "What is Sampling Bias?", answer: "When the sample is collected in such a way that some members of the population have a lower sampling probability than others." },
    { id: 99, category: "stats", question: "Law of Large Numbers?", answer: "As a sample size grows, its mean gets closer to the average of the whole population." },
    { id: 100, category: "stats", question: "What is Z-Score?", answer: "Describes a value's relationship to the mean of a group of values. Z = (X - Mean) / StdDev." }
];

// --- RENDER LOGIC ---

const container = document.getElementById('questions-container');
const buttons = document.querySelectorAll('.filter-btn');

function renderQuestions(filter = 'all') {
    container.innerHTML = ''; // Clear current list

    const filteredData = filter === 'all' 
        ? interviewData 
        : interviewData.filter(item => item.category === filter);

    if (filteredData.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:#666;">No questions found for this category.</div>';
        return;
    }

    // Add a count indicator
    const countDiv = document.createElement('div');
    countDiv.style.color = '#a1a1aa';
    countDiv.style.marginBottom = '15px';
    countDiv.style.fontSize = '0.9rem';
    countDiv.innerText = `Showing ${filteredData.length} Questions`;
    container.appendChild(countDiv);

    filteredData.forEach(item => {
        // Create Card
        const card = document.createElement('div');
        card.className = 'q-card';

        // Add Category Badge Color Logic
        let badgeColor = '#6366f1'; // Default Indigo
        if(item.category === 'sql') badgeColor = '#10b981'; // Green
        if(item.category === 'ml') badgeColor = '#f43f5e'; // Red
        if(item.category === 'python') badgeColor = '#eab308'; // Yellow
        if(item.category === 'dl') badgeColor = '#ec4899'; // Pink
        if(item.category === 'stats') badgeColor = '#06b6d4'; // Cyan

        // HTML Structure
        card.innerHTML = `
            <div class="q-header">
                <div style="flex:1">
                    <span class="q-badge" style="color:${badgeColor}; border:1px solid ${badgeColor}">${item.category.toUpperCase()}</span>
                    <div class="q-title" style="margin-top:8px">${item.question}</div>
                </div>
                <div class="toggle-icon">▼</div>
            </div>
            <div class="q-answer">
                <div class="answer-content">
                    ${item.answer}
                    ${item.code ? `<div class="code-block">${item.code}</div>` : ''}
                </div>
            </div>
        `;

        // Click Event (Toggle)
        const header = card.querySelector('.q-header');
        const answerDiv = card.querySelector('.q-answer');

        header.addEventListener('click', () => {
            const isOpen = card.classList.contains('open');
            
            // Optional: Close others
            // document.querySelectorAll('.q-card').forEach(c => {
            //     c.classList.remove('open');
            //     c.querySelector('.q-answer').style.maxHeight = null;
            // });

            if (isOpen) {
                card.classList.remove('open');
                answerDiv.style.maxHeight = null;
            } else {
                card.classList.add('open');
                answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
            }
        });

        container.appendChild(card);
    });
}

// --- FILTER LOGIC ---
function filterQuestions(category) {
    // Visual: Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    // Find button that was clicked
    // Simple check: iterate and check onclick attribute string or add IDs to buttons
    // Since we are using inline onclick in HTML, we can just check text content or logic
    // But cleaner is to pass 'this' in HTML.
    
    // Workaround for specific button highlighting
    const mapping = {
        'all': 'All', 'python': 'Python', 'sql': 'SQL', 
        'ml': 'Machine Learning', 'stats': 'Statistics', 'dl': 'Deep Learning'
    };
    
    buttons.forEach(btn => {
        if(btn.innerText === mapping[category]) btn.classList.add('active');
    });

    renderQuestions(category);
}

// Initial Render
renderQuestions('all');