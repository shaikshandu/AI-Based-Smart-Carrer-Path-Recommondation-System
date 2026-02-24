// --- STATE MANAGEMENT ---
let selectedType = 'course';

// --- DOM ELEMENTS ---
const inputField = document.getElementById('topicInput');
const optionButtons = document.querySelectorAll('.option-card');

// --- EVENT LISTENERS ---

// Option selection
optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        optionButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedType = button.getAttribute('data-type');
    });
});

// Quick tags
function setTopic(topicName) {
    inputField.value = topicName;
    inputField.focus();
}

// Generate button
function handleGenerate() {
    const topic = inputField.value.trim().toLowerCase();

    if (!topic) {
        alert("Please enter a topic first!");
        inputField.focus();
        return;
    }

    let topicSlug = "";

    if (topic === "data science" || topic.includes("data")) {
        topicSlug = "datascience";
    } 
    else if (topic === "ai" || topic === "artificial intelligence") {
        topicSlug = "ai";
    } 
    else if (topic === "web development" || topic === "web dev" || topic === "web") {
        topicSlug = "web";
    } 
    else {
        alert("Topic not found. Try 'Data Science', 'AI', or 'Web Development'.");
        return;
    }

    // SAME LOGIC (just works for youtube also)
    const finalUrl = `${topicSlug}-${selectedType}.html`;

    window.location.href = finalUrl;
}

// Enter key support
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleGenerate();
    }
});
