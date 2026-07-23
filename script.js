const projects = [
  {
    title: "Portfolio pessoal",
    category: "Site institucional",
    description:
      "Pagina focada em apresentar servicos, identidade visual e caminhos de contato com clareza.",
    url: "https://github.com/seuusuario",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Landing page de produto",
    category: "Conversao",
    description:
      "Estrutura pensada para destacar beneficios, prova social e chamada para acao principal.",
    url: "https://github.com/seuusuario",
    tech: ["Responsivo", "SEO", "Performance"]
  },
  {
    title: "Dashboard visual",
    category: "Interface",
    description:
      "Exemplo de interface limpa para visualizacao de dados e componentes reutilizaveis.",
    url: "https://github.com/seuusuario",
    tech: ["UI", "UX", "Front-end"]
  }
];

const projectsGrid = document.getElementById("projects-grid");
const currentYear = document.getElementById("current-year");

projects.forEach((project, index) => {
  const article = document.createElement("article");
  article.setAttribute("data-reveal", "");
  article.style.transitionDelay = `${index * 120}ms`;

  article.innerHTML = `
    <div class="project-top">
      <span class="project-tag">${project.category}</span>
      <a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">Abrir</a>
    </div>
    <div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
    <div class="project-tech">
      ${project.tech.map((item) => `<span>${item}</span>`).join("")}
    </div>
  `;

  projectsGrid.appendChild(article);
});

document.querySelectorAll(".hero-copy, .hero-visual, .about-panel, .process-grid article, .contact-card")
  .forEach((element, index) => {
    element.setAttribute("data-reveal", "");
    element.style.transitionDelay = `${index * 80}ms`;
  });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));

currentYear.textContent = new Date().getFullYear();