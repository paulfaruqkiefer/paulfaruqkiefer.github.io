// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".samples-toggle");
  const panel = document.querySelector(".samples-panel");
  const layout = document.querySelector(".resume-layout");

  let currentJob = null;

  const sampleContent = {
    "wisconsin-watch": [
      "Lorem ipsum dolor sit amet.",
      "Phasellus imperdiet nulla et dictum.",
      "Vestibulum ante ipsum primis."
    ],
    "washington-post": [
      "Suspendisse potenti.",
      "Integer nec odio.",
      "Mauris massa."
    ],
    "investigatewest": [
      "Curabitur sodales ligula.",
      "Pellentesque nibh.",
      "In scelerisque sem."
    ],
    "howard-center": [
      "Mapped hazmat rail routes.",
      "Analyzed lobbying tactics.",
      "Investigated disclosure flaws."
    ],
    "delaware-public-media": [
      "Covered housing policy.",
      "Reported on overdose response.",
      "Tracked corporate enfranchisement."
    ],
    "publicola": [
      "Investigated police misconduct.",
      "Developed data reporting skills."
    ]
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const job = button.dataset.job;

      if (currentJob === job) {
        layout.classList.remove("panel-open");
        panel.innerHTML = "";
        currentJob = null;
        return;
      }

      const items = sampleContent[job] || ["No samples yet."];
      panel.innerHTML = `
        <h3>Sample Work</h3>
        <ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>
      `;

      layout.classList.add("panel-open");
      currentJob = job;
    });
  });
});
