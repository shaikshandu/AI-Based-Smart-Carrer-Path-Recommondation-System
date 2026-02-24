// --- STATE MANAGEMENT ---
let selectedType = 'course'; // Default selection

// --- DOM ELEMENTS ---
const inputField = document.getElementById('topicInput');
const optionButtons = document.querySelectorAll('.option-card');

// --- EVENT LISTENERS ---

// 1. Handle Option Selection (Grid Buttons)
optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Visual: Remove active class from all, add to clicked
        optionButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Logic: Update state
        selectedType = button.getAttribute('data-type');
        console.log("Selected Type:", selectedType);
    });
});

// 2. Handle Quick Tags (Pills)
function setTopic(topicName) {
    inputField.value = topicName;
    // Optional: Auto-focus the input or add a visual flash
    inputField.focus();
}

// 3. Handle Generate Button Click
function handleGenerate() {
    const topic = inputField.value.trim().toLowerCase();

    // Validation
    if (!topic) {
        alert("Please enter a topic first!");
        inputField.focus();
        return;
    }

    // --- MAPPING LOGIC ---
    // This connects the user input "AI" to the file "ai-roadmap.html"
    
    let topicSlug = "";

    if (topic === "data science" || topic.includes("data")) {
        topicSlug = "datascience";
    } 
    else if (topic === "Full Stack" || topic === "full stack developer") {
        topicSlug = "Full stack";
    } 
    else if (topic === "web development" || topic === "web dev" || topic === "web") {
        topicSlug = "web";
    } 
    else {
        alert("Topic not found. Try 'Data Science', 'Full Stack', or 'Web Development'.");
        return;
    }

    // --- REDIRECTION ---
    // Example format: "datascience-interview.html"
    const finalUrl = `${topicSlug}-${selectedType}.html`;
    

    console.log("Redirecting to:", finalUrl);
    window.location.href = finalUrl;
}

// 4. Allow "Enter" key to submit
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleGenerate();
    }
});