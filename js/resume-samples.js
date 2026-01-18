document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".samples-toggle");
  const panel = document.querySelector(".samples-panel");
  const layout = document.querySelector(".resume-layout");
  const resumeColumn = document.querySelector(".resume-column");

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

      /* Close if clicking same job */
      if (currentJob === job) {
        layout.classList.remove("panel-open");
        panel.innerHTML = "";
        panel.style.marginTop = "";
        currentJob = null;
        return;
      }

      /* Populate panel */
      const items = sampleContent[job] || ["No samples yet."];
     panel.innerHTML = `
        <div class="samples-panel-header">
          <h2>Sample Work</h2>
          <button class="samples-close" aria-label="Close sample work">[x]</button>
        </div>
        <ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>
      `;


      /* Vertical alignment */
      const buttonRect = button.getBoundingClientRect();
      const columnRect = resumeColumn.getBoundingClientRect();
      const offset = buttonRect.top - columnRect.top;

      panel.style.marginTop = `${offset}px`;

      /* Open panel */
      layout.classList.add("panel-open");
      currentJob = job;
    });
  });
});
