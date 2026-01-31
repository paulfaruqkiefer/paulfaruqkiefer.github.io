document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".samples-toggle");
  const panel = document.querySelector(".samples-panel");
  const layout = document.querySelector(".resume-layout");
  const resumeColumn = document.querySelector(".resume-column");

  let currentJob = null;

  const sampleContent = {
    "wisconsin-watch": [
      `<a href="https://wisconsinwatch.org/2026/01/skilled-but-uncertain-immigrant-workers-and-employers-navigate-hiring-hurdles-under-trump/" target="_blank" rel="noopener">
      Skilled but uncertain: Immigrant workers and employers navigate hiring hurdles under Trump
      </a>`,
      `<a href="https://wisconsinwatch.org/2026/01/wisconsin-refugee-resettlement-admission-agencies-trump-new-arrivals/" target="_blank" rel="noopener">
      Refugee resettlement agencies try to keep doors open as White House shuts out new arrivals
      </a>`,
      `<a href="https://wisconsinwatch.org/2025/11/wisconsin-courts-ice-immigration-custody-bail-arrest-criminal-defendant-detention-jail/" target="_blank" rel="noopener">
      Courts left with loose ends when ICE detains criminal defendants
      </a>`,
      `<a href="https://wisconsinwatch.org/2025/09/a-decade-of-immigration-in-wisconsin-in-9-charts/" target="_blank" rel="noopener">
      A decade of immigration to Wisconsin in 9 charts
      </a>`
    ],
    "washington-post": [
       `<a href="https://www.washingtonpost.com/dc-md-va/2025/07/26/washington-gas-surcharge-northern-virginia/" target="_blank" rel="noopener">
      Washington Gas customers in Virginia to see a surcharge this summer
      </a>`
    ],
    "investigatewest": [
       `<a href="https://www.investigatewest.org/a-different-standard-native-americans-still-searched-at-far-higher-rates-by-washington-state-patrol-new-data-shows/" target="_blank" rel="noopener">
      ‘A different standard’: Native Americans still searched at far higher rates by Washington State Patrol, new data shows
      </a>`
    ],
    "howard-center": [
      `<a href="https://cnsmaryland.org/2025/08/06/many-towns-unprepared-for-derailments-hazmat-spills-that-can-trigger-fires-evacuations/" target="_blank" rel="noopener">
      Many towns unprepared for derailments, hazmat spills that can trigger fires, evacuations
      </a>`,
       `<a href="https://cnsmaryland.org/2025/05/16/marylands-largest-underground-coal-mine-changes-hands/" target="_blank" rel="noopener">
      Maryland's largest underground mine changes hands
      </a>`,
      `<a href="https://cnsmaryland.org/2025/04/21/its-hard-to-become-a-city-but-these-residents-keep-trying/" target="_blank" rel="noopener">
      It’s hard to become a city, but these residents keep trying
      </a>`,
      `<a href="https://cnsmaryland.org/2025/03/13/maryland-lawmakers-target-the-tranquilizers-behind-recent-overdose-deaths/" target="_blank" rel="noopener">
      Maryland lawmakers target the tranquilizers behind recent overdose deaths
      </a>`,
      `<a href="https://cnsmaryland.org/2025/03/04/gov-moores-proposed-tax-breaks-could-mean-service-cuts-in-lower-income-counties/" target="_blank" rel="noopener">
      Gov. Moore’s proposed tax breaks could mean service cuts in lower-income counties
      </a>`,
      `<a href="https://cnsmaryland.org/2025/02/21/dc-metro-faces-another-budget-cliff-but-maryland-lawmakers-may-kick-the-can/" target="_blank" rel="noopener">
      DC Metro transit needs money, but Maryland’s not in a great position to help
      </a>`,
      `<a href="https://cnsmaryland.org/2025/02/13/fearing-ice-raids-delmarva-immigrants-mostly-stay-home/" target="_blank" rel="noopener">
      Fearing ICE raids, Delmarva immigrants mostly stay home
      </a>`,
      `<a href="https://cnsmaryland.org/2025/01/21/police-drones-are-flying-over-maryland-will-state-lawmakers-regulate-them/" target="_blank" rel="noopener">
      Police drones are flying over Maryland. Will state lawmakers regulate them?
      </a>`,
      `<a href="https://cnsmaryland.org/2024/04/30/legal-gray-areas-hinder-police-watchdogs/" target="_blank" rel="noopener">
      Legal gray areas hinder police watchdogs
      </a>`
    ],
    "delaware-public-media": [
        `<a href="https://www.delawarepublic.org/show/the-green/2023-01-20/lenape-indian-tribe-of-delaware-grapples-over-leadership" target="_blank" rel="noopener">
      Lenape Indian Tribe of Delaware grapples over leadership
      </a>`,
      `<a href="https://www.delawarepublic.org/politics-government/2022-12-21/kent-county-levy-court-places-moratorium-on-utilities-scale-wind-farms" target="_blank" rel="noopener">
      Kent County Levy Court places moratorium on utilities-scale wind farms
      </a>`,
      `<a href="https://www.delawarepublic.org/politics-government/2022-09-07/dover-kent-county-metropolitan-planning-organization-urges-better-uses-of-rail-adjacent-land/" target="_blank" rel="noopener">
      Dover-Kent County Metropolitan Planning Organization urges better uses of rail-adjacent land
      </a>`,
      `<a href="https://www.delawarepublic.org/science-health-tech/2023-04-17/drug-users-and-healthcare-providers-grapple-with-how-to-identify-treat-xylazine-withdrawal" target="_blank" rel="noopener">
      Drug users and healthcare providers grapple with how to identify, treat Xylazine withdrawal
      </a>`
    ],
    "publicola": [
           `<a href="https://publicola.com/2022/04/07/rising-pressure-on-jail-based-treatment-despite-hurdles/" target="_blank" rel="noopener">
      Barriers to Access, Changing Drug Trends Hinder Jail-Based Treatment Program
      </a>`,
      `<a href="https://publicola.com/2022/03/31/closure-of-king-countys-only-work-release-for-women-raises-gender-equity-questions/" target="_blank" rel="noopener">
      Closure of King County’s Only Work Release for Women Raises Gender Equity Questions
      </a>`,
      `<a href="https://publicola.com/2022/02/18/advocates-question-hot-spot-approach-to-crime-at-12th-and-jackson/" target="_blank" rel="noopener">
      Advocates Question “Hot Spot” Approach to Crime at Little Saigon’s Most Troubled Intersection
      </a>`,
      `<a href="https://publicola.com/2022/01/17/public-defenders-union-joins-jail-guards-call-to-address-covid-crisis/" target="_blank" rel="noopener">
      Public Defenders Union Joins Jail Guards’ Call to Address COVID Crisis
      </a>`,
      `<a href="https://publicola.com/2022/01/14/critics-say-bombastic-podcast-that-replaced-police-union-newspaper-represents-a-strategic-shift-at-spog/" target="_blank" rel="noopener">
      Critics Say Bombastic Podcast that Replaced Police Union Newspaper Represents Strategic Shift at SPOG
      </a>`,
      `<a href="https://publicola.com/2021/05/07/year-old-resentencing-effort-languishes-due-to-covid-delays-inconsistent-standards/" target="_blank" rel="noopener">
      Year-Old Resentencing Effort Languishes Due to COVID Delays, Inconsistent Standards
      </a>`
    ]
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const job = button.dataset.job;

      // Close if clicking the same job again
      if (currentJob === job) {
        layout.classList.remove("panel-open");
        panel.innerHTML = "";
        panel.style.marginTop = "";
        currentJob = null;
        return;
      }

      // Populate panel
      const items = sampleContent[job] || ["No samples yet."];
      panel.innerHTML = `
        <div class="samples-panel-header" style="display:flex; justify-content:space-between; align-items:center;">
          <h2>Sample Work</h2>
          <button class="samples-close" aria-label="Close sample work">×</button>
        </div>
        <ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>
      `;

      // Attach close button handler
      const closeBtn = panel.querySelector(".samples-close");
      closeBtn.addEventListener("click", () => {
        layout.classList.remove("panel-open");
        panel.innerHTML = "";
        panel.style.marginTop = "";
        currentJob = null;
      });

      // Desktop-only vertical alignment
      if (window.innerWidth > 900) {
        const buttonRect = button.getBoundingClientRect();
        const columnRect = resumeColumn.getBoundingClientRect();
        const offset = buttonRect.top - columnRect.top;
        panel.style.marginTop = `${offset}px`;
      } else {
        panel.style.marginTop = "0";
      }

            // Open panel
      layout.classList.add("panel-open");
      currentJob = job;
      
      // Mobile: scroll panel into view
      if (window.innerWidth <= 900) {
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Optional: close panel with Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && currentJob) {
      layout.classList.remove("panel-open");
      panel.innerHTML = "";
      panel.style.marginTop = "";
      currentJob = null;
    }
  });
});
