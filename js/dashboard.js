let selectedFormat = "course";

function selectFormat(format, element) {
  selectedFormat = format;

  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("selected");
  });

  element.classList.add("selected");
}

function generate() {
  const topic = document.getElementById("topic").value;

  if (topic.trim() === "") {
    alert("Please enter a topic");
    return;
  }

  localStorage.setItem("topic", topic);
  localStorage.setItem("format", selectedFormat);

  alert(
    "Topic: " + topic +
    "\nFormat: " + selectedFormat +
    "\n\nNext step: roadmap generation page"
  );
}
