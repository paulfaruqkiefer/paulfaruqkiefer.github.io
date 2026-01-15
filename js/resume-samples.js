// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".samples-toggle");
  const panel = document.querySelector(".samples-panel");
  const resumeColumn = document.querySelector(".resume-column");

  // Track which job's panel is currently open
  let currentJob = null;

  // Placeholder sample content
  const sampleContent = {
    "wisconsin-watch": [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Phasellus imperdiet, nulla et dictum interdum.",
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
    ],
    "washington-post": [
      "Suspendisse potenti. Nam feugiat, velit at suscipit.",
      "Integer nec odio. Praesent libero. Sed cursus ante dapibus.",
      "Mauris massa. Vestibulum lacinia arcu eget nulla."
    ],
    "investigatewest": [
      "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      "Curabitur tortor. Pellentesque nibh. Aenean quam.",
      "In scelerisque sem at dolor. Maecenas mattis."
    ],
    "howard-center": [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation."
    ],
    "delaware-public-media": [
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      "Vestibulum ac diam sit amet quam vehicula elementum.",
      "Donec sollicitudin molestie malesuada."
    ],
    "publicola": [
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
      "Proin eget tortor risus. Donec rutrum congue leo eget malesuada.",
      "Vivamus suscipit tortor eget felis porttitor volutpat."
    ]
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const job = button.dataset.job;

      // Close panel if same button clicked
      if (currentJob === job) {
        panel.innerHTML = "";
        panel.style.display = "none";
        resumeColumn.style.width = "";
        currentJob = null;
        return;
      }

      // Fill panel with sample content
      const items = sampleContent[job] || ["No samples available yet."];
      panel.innerHTML = `<h3>Sample Work</h3><ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>`;

      // Show panel and adjust layout
      panel.style.display = "block";
      resumeColumn.style.width = "50%";
      currentJob = job;
    });
  });
});
