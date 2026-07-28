// ===== Real content (edit this to update the site) =====
const profile = {
  email: "rukeshpulugu20@gmail.com",
};

const skills = {
  Languages: ["SQL", "Python"],
  "Python Libraries": ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  Visualization: ["Power BI", "Tableau", "Microsoft Excel"],
  "Excel Toolkit": ["Pivot Tables", "Pivot Charts", "VLOOKUP", "Slicers", "KPI Cards"],
  Databases: ["MySQL"],
  "Tools & Workflow": ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
};

const projects = [
  {
    title: "Retail Sales Performance Dashboard",
    tool: "Microsoft Excel",
    category: "Excel",
    summary: "An interactive Excel dashboard built on Global Superstore data to surface sales trends, top products and regional performance.",
    problem: "Global Superstore's raw transactional data had no easy way for stakeholders to see which products, regions and time periods were actually driving profit.",
    approach: [
      "Cleaned and structured the raw Global Superstore dataset for analysis.",
      "Built Pivot Tables and Pivot Charts to summarize sales and profit by region, category and time.",
      "Added KPI metrics and slicers so the dashboard stays interactive for non-technical viewers.",
    ],
    insights: "Improved visibility into which products, regions and periods were driving sales and profit, making it easier to spot underperforming categories at a glance.",
    github: "https://github.com/rukeshpulugu",
  },
  {
    title: "SQL Sales Analysis Project",
    tool: "MySQL",
    category: "SQL",
    summary: "Customer and sales analysis on transactional business data using MySQL, aimed at finding top products, customers and regional trends.",
    problem: "Transactional sales data needed to be queried directly to identify which products and customers were most profitable, without a BI layer in between.",
    approach: [
      "Wrote SQL queries using GROUP BY, ORDER BY, HAVING, DISTINCT and aggregate functions.",
      "Segmented sales by product, customer and region to compare performance.",
      "Validated results against raw tables to make sure aggregates were correct.",
    ],
    insights: "Identified the top-performing products, the most profitable customers, and regional sales trends directly from the transactional data.",
    github: "https://github.com/rukeshpulugu",
  },
  {
    title: "HR Analytics Dashboard",
    tool: "Power BI",
    category: "Power BI",
    summary: "An interactive Power BI dashboard analyzing employee attrition, demographics and workforce metrics for a fictional HR dataset.",
    problem: "HR teams needed a way to see attrition and workforce composition trends without digging through raw employee records manually.",
    approach: [
      "Modeled the dataset and wrote DAX measures for attrition rate and headcount metrics.",
      "Built KPI cards, charts and slicers to visualize demographics and retention patterns.",
      "Designed the report so department heads could filter by team and time period.",
    ],
    insights: "Delivered actionable insight into attrition drivers, department-level performance and employee distribution across the organization.",
    github: "https://github.com/rukeshpulugu",
  },
];

const experience = [
  { org: "SaiKet Systems", role: "Data Visualization", period: "July 2026 – Present", location: "India",
    points: ["Working on data visualization tasks, translating raw datasets into readable charts and reports."] },
  { org: "InAmigos Foundation (IAF)", role: "AI Data Analyst", period: "July 2026 – Present", location: "Vijayawada",
    points: ["Contributing analysis work supporting the foundation's data initiatives."] },
  { org: "Cognifyz IT Solutions Pvt. Ltd.", role: "Power BI", period: "June 2026 – July 2026", location: "India",
    points: ["Built Power BI reports as part of a short-term analytics engagement."] },
  { org: "CodeAlpha", role: "Data Analytics Virtual Internship", period: "June 2026", location: "Vijayawada",
    points: [
      "Performed data cleaning, exploratory data analysis and statistical analysis using Python and Pandas.",
      "Automated sentiment classification and extracted customer opinion insights from text data.",
      "Repository: github.com/rukeshpulugu/CodeAlpha__EDA",
    ] },
];

const formulas = [
  '=SUMIFS(Sales, Region, "South")',
  'SELECT product, SUM(profit) FROM sales GROUP BY product ORDER BY 2 DESC',
  'Attrition Rate = DIVIDE([Exits], [Headcount])',
  '=VLOOKUP(A2, PriceList, 3, FALSE)',
];

// ===== Theme toggle =====
const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

function syncThemeIcons() {
  const isDark = document.documentElement.classList.contains("dark");
  sunIcon.style.display = isDark ? "block" : "none";
  moonIcon.style.display = isDark ? "none" : "block";
}
syncThemeIcons();

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  syncThemeIcons();
});

// ===== Mobile menu =====
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => mobileMenu.classList.remove("open"))
);

// ===== Navbar scroll state =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 8);
});

// ===== Hero formula-bar typing animation =====
(function typeFormulas() {
  const el = document.getElementById("formulaText");
  let fIndex = 0;
  let char = 0;

  function tick() {
    const current = formulas[fIndex];
    char++;
    el.textContent = current.slice(0, char);
    if (char >= current.length) {
      setTimeout(() => {
        fIndex = (fIndex + 1) % formulas.length;
        char = 0;
        el.textContent = "";
        setTimeout(tick, 300);
      }, 1600);
    } else {
      setTimeout(tick, 28);
    }
  }
  tick();
})();

// ===== Render skills =====
const skillsGrid = document.getElementById("skillsGrid");
Object.entries(skills).forEach(([group, items]) => {
  const card = document.createElement("div");
  card.className = "card skill-card reveal";
  card.innerHTML = `
    <h3 class="skill-group-title">${group}</h3>
    <div class="skill-tags">${items.map((i) => `<span class="skill-tag">${i}</span>`).join("")}</div>
  `;
  skillsGrid.appendChild(card);
});

// ===== Render projects =====
const projectsGrid = document.getElementById("projectsGrid");

function renderProjects(filter) {
  projectsGrid.innerHTML = "";
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  list.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card project-card reveal visible";
    card.innerHTML = `
      <div class="project-top">
        <span class="tool-badge mono">${project.tool}</span>
        <a href="${project.github}" target="_blank" rel="noreferrer" aria-label="${project.title} on GitHub" class="icon-accent">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.417-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/></svg>
        </a>
      </div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <button class="case-toggle">
        <span class="toggle-label">Read case study</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="case-study">
        <div class="case-inner">
          <div>
            <p class="case-label">Business problem</p>
            <p>${project.problem}</p>
          </div>
          <div>
            <p class="case-label">Approach</p>
            <ul>${project.approach.map((a) => `<li>${a}</li>`).join("")}</ul>
          </div>
          <div>
            <p class="case-label">Insights delivered</p>
            <p>${project.insights}</p>
          </div>
        </div>
      </div>
    `;

    const toggleBtn = card.querySelector(".case-toggle");
    const caseStudy = card.querySelector(".case-study");
    const label = card.querySelector(".toggle-label");
    toggleBtn.addEventListener("click", () => {
      const open = caseStudy.classList.toggle("open");
      toggleBtn.classList.toggle("open", open);
      label.textContent = open ? "Hide case study" : "Read case study";
    });

    projectsGrid.appendChild(card);
  });
}
renderProjects("All");

document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderProjects(btn.dataset.filter);
});

// ===== Render experience timeline =====
const timelineEl = document.getElementById("timeline");
experience.forEach((exp) => {
  const item = document.createElement("div");
  item.className = "timeline-item reveal";
  item.innerHTML = `
    <span class="timeline-dot"></span>
    <p class="mono soft small">${exp.period} · ${exp.location}</p>
    <h3>${exp.role}</h3>
    <p class="accent-text">${exp.org}</p>
    <ul>${exp.points.map((p) => `<li>· ${p}</li>`).join("")}</ul>
  `;
  timelineEl.appendChild(item);
});

// ===== Contact form (mailto) =====
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  document.getElementById("sentNote").style.display = "block";
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Scroll reveal =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
