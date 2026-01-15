document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".sample-button");
  let openPanel = null;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const job = btn.dataset.job; // identify the job

      // Close panel if it's already open
      if (openPanel && openPanel.dataset.job === job) {
        openPanel.remove();
        openPanel = null;
        document.querySelector("main").style.marginRight = "0";
        return;
      }

      // Remove old panel if another job's button clicked
      if (openPanel) openPanel.remove();

      // Create new panel
      const panel = document.createElement("aside");
      panel.classList.add("samples-panel");
      panel.dataset.job = job;

      // Add placeholder content (replace with real links later)
      panel.innerHTML = `
        <h2>Sample Work for ${job}</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Praesent vitae eros eget tellus tristique bibendum.</li>
          <li>Donec rutrum sed sem quis venenatis.</li>
          <li>Proin viverra risus a eros volutpat tempor.</li>
        </ul>
      `;

      // Insert panel after main
      document.querySelector("main").after(panel);

      // Shift main to the left
      document.querySelector("main").style.marginRight = "360px"; // width of panel
      openPanel = panel;
    });
  });
});
