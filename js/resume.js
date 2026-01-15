const layout = document.querySelector(".resume-layout");
const panel = document.querySelector(".samples-panel");
const buttons = document.querySelectorAll(".samples-toggle");

const samples = {
  "wisconsin-watch": [
    "How Wisconsin’s H-2A system reshaped farm labor",
    "Inside the push to decertify CDL training programs",
    "The hidden cost of stranded utility assets"
  ],
  "washington-post": [
    "Haitian migration reshapes Maryland’s Eastern Shore",
    "Mass overdose exposes gaps in harm reduction",
    "Federal convoy signals shift in D.C. policing"
  ]
};

let activeJob = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const job = button.dataset.job;

    if (layout.classList.contains("panel-open") && activeJob === job) {
      layout.classList.remove("panel-open");
      panel.innerHTML = "";
      activeJob = null;
      return;
    }

    activeJob = job;
    layout.classList.add("panel-open");

    panel.innerHTML = `
      <h4>Sample work</h4>
      <ul>
        ${samples[job].map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  });
});
