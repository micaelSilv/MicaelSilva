const projects = [
  {
    title: "BI",
    category: "Dashboards",
    description:
      "Dashboards para acompanhamento de indicadores e apoio à tomada de decisão.",
    url: "#contato",
    tech: ["Power BI", "Indicadores", "Análise de dados"],
    images: [
      "Proj/BI%20CORT/1CORT.png",
      "Proj/BI%20CORT/2CORT.png",
      "Proj/BI%20Fat/1fat.png",
      "Proj/BI%20Fat/2fat.png",
      "Proj/BI%20Fat/3fat.png",
      "Proj/BI%20LIB/1LIB.png",
      "Proj/BI%20LIB/2LIB.png",
      "Proj/BI%20LIB/3LIB.png",
      "Proj/Inv%20BI/1INV.png",
      "Proj/Inv%20BI/2INV.png"
    ]
  },
  {
    title: "Ferramentas criadas",
    category: "Automação",
    description:
      "Soluções personalizadas para simplificar processos e rotinas de trabalho.",
    url: "#contato",
    tech: ["Python", "VBA", "Power Automate"]
  },
  {
    title: "Planilhas",
    category: "Excel e VBA",
    description:
      "Planilhas inteligentes para controle, organização e produtividade.",
    url: "#contato",
    tech: ["Excel", "VBA", "Power Query"]
  }
];

const projectsGrid = document.getElementById("projects-grid");
const currentYear = document.getElementById("current-year");
const copyEmailButton = document.querySelector("[data-copy-email]");

projects.forEach((project, index) => {
  const article = document.createElement("article");
  article.setAttribute("data-reveal", "");
  article.style.transitionDelay = `${index * 120}ms`;

  article.innerHTML = `
    ${project.images ? `
      <div class="project-gallery">
        <img class="project-gallery-main" src="${project.images[0]}" alt="Tela do projeto ${project.title}" />
        <button class="project-gallery-arrow project-gallery-arrow-prev" type="button" aria-label="Imagem anterior">&lsaquo;</button>
        <button class="project-gallery-arrow project-gallery-arrow-next" type="button" aria-label="Próxima imagem">&rsaquo;</button>
      </div>
    ` : ""}
    <div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
  `;

  projectsGrid.appendChild(article);
});

document.querySelectorAll(".project-gallery").forEach((gallery) => {
  const mainImage = gallery.querySelector(".project-gallery-main");
  const projectIndex = [...document.querySelectorAll("#projects-grid article")].indexOf(gallery.closest("article"));
  const project = projects[projectIndex];
  let currentImageIndex = 0;

  const showImage = (imageIndex) => {
    currentImageIndex = (imageIndex + project.images.length) % project.images.length;
    mainImage.src = project.images[currentImageIndex];
  };

  gallery.querySelector(".project-gallery-arrow-prev")?.addEventListener("click", () => {
    showImage(currentImageIndex - 1);
  });

  gallery.querySelector(".project-gallery-arrow-next")?.addEventListener("click", () => {
    showImage(currentImageIndex + 1);
  });
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

copyEmailButton?.addEventListener("click", async () => {
  const email = copyEmailButton.dataset.copyEmail;

  try {
    await navigator.clipboard.writeText(email);
    copyEmailButton.innerHTML = 'Endereço copiado <span aria-hidden="true">-&gt;</span>';
  } catch {
    copyEmailButton.innerHTML = 'Selecione o e-mail <span aria-hidden="true">-&gt;</span>';
  }
});