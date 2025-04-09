const projectsData = {
  pt: [
    {
      title: "Website Corporativo Exemplo",
      description: "Um design moderno e responsivo usando React e Tailwind CSS para uma empresa fictícia.",
      image: "https://via.placeholder.com/600x400/a0aec0/ffffff?text=Projeto+1", // Placeholder maior
      tags: ["React", "Tailwind", "UI/UX", "Web Design"],
      link: "#"
    },
    {
      title: "Aplicativo Mobile de Delivery",
      description: "Interface de usuário para um aplicativo de entrega de comida, focada na experiência do usuário.",
      image: "https://via.placeholder.com/600x400/9f7aea/ffffff?text=Projeto+2",
      tags: ["Flutter", "Firebase", "Mobile UI"],
      link: "#"
    },
    {
      title: "Plataforma E-commerce",
      description: "Loja virtual completa com carrinho de compras e simulação de checkout, construída com Next.js.",
      image: "https://via.placeholder.com/600x400/4a5568/ffffff?text=Projeto+3",
      tags: ["Next.js", "E-commerce", "Web App"],
       link: "#"
    },
     {
      title: "Sistema de Blog Pessoal",
      description: "Um blog simples criado com HTML, CSS e JavaScript básico para posts, focado em performance.",
      image: "https://via.placeholder.com/600x400/f6ad55/ffffff?text=Projeto+4",
      tags: ["HTML", "CSS", "JavaScript", "Blog"],
       link: "#"
    },
    {
      title: "Dashboard Analítico",
      description: "Painel de controle interativo para visualização de dados utilizando Chart.js.",
      image: "https://via.placeholder.com/600x400/48bb78/ffffff?text=Projeto+5",
      tags: ["JavaScript", "Chart.js", "Dashboard"],
       link: "#"
    },
    {
      title: "Landing Page Otimizada",
      description: "Página de destino focada em conversão com design limpo e carregamento rápido.",
      image: "https://via.placeholder.com/600x400/ed64a6/ffffff?text=Projeto+6",
      tags: ["HTML", "Tailwind CSS", "Performance"],
       link: "#"
    }
  ],
  en: [
     {
      title: "Example Corporate Website",
      description: "A modern and responsive design using React and Tailwind CSS for a fictional company.",
      image: "https://via.placeholder.com/600x400/a0aec0/ffffff?text=Project+1",
      tags: ["React", "Tailwind", "UI/UX", "Web Design"],
       link: "#"
    },
    {
      title: "Delivery Mobile App UI",
      description: "User interface for a food delivery app, focused on user experience and smooth animations.",
      image: "https://via.placeholder.com/600x400/9f7aea/ffffff?text=Project+2",
      tags: ["Flutter", "Firebase", "Mobile UI"],
       link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Complete online store with shopping cart and checkout simulation, built with Next.js.",
      image: "https://via.placeholder.com/600x400/4a5568/ffffff?text=Project+3",
      tags: ["Next.js", "E-commerce", "Web App"],
       link: "#"
    },
      {
      title: "Personal Blog System",
      description: "A simple blog built with HTML, CSS, and basic JavaScript for posts, focused on performance.",
      image: "https://via.placeholder.com/600x400/f6ad55/ffffff?text=Project+4",
      tags: ["HTML", "CSS", "JavaScript", "Blog"],
       link: "#"
    },
     {
      title: "Analytics Dashboard",
      description: "Interactive control panel for data visualization using Chart.js.",
      image: "https://via.placeholder.com/600x400/48bb78/ffffff?text=Project+5",
      tags: ["JavaScript", "Chart.js", "Dashboard"],
       link: "#"
    },
    {
      title: "Optimized Landing Page",
      description: "Conversion-focused landing page with clean design and fast loading times.",
      image: "https://via.placeholder.com/600x400/ed64a6/ffffff?text=Project+6",
      tags: ["HTML", "Tailwind CSS", "Performance"],
       link: "#"
    }
  ]
};

// Função getTranslation (importante ter acesso ao `texts` de lang.js)
// Idealmente, `texts` seria exportado de lang.js e importado aqui se usando módulos.
// Por simplicidade, assumimos que `texts` está no escopo global ou é redefinido aqui.
// Se `lang.js` carrega antes, `texts` estará globalmente disponível.
const getTranslationPortfolio = (key, lang) => {
    const currentLang = lang || localStorage.getItem('lang') || 'pt';
    // Verifica se texts existe globalmente, senão usa um fallback
    const globalTexts = typeof texts !== 'undefined' ? texts : {};
    return globalTexts[currentLang]?.[key] || key;
};


function loadProjects(lang = 'pt') {
  const container = document.getElementById('projects-container');
  const loadingMessage = document.getElementById('loading-message');

  if (!container) return;

  // Mostrar mensagem de loading (agora com ícone)
  if (loadingMessage) {
      loadingMessage.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> ${getTranslationPortfolio('loadingProjects', lang)}`;
      loadingMessage.style.display = 'block';
  }
  container.innerHTML = ''; // Limpa projetos antigos

  // Simular delay
  setTimeout(() => {
    if (loadingMessage) loadingMessage.style.display = 'none';

    const projectsToLoad = projectsData[lang];

    if (!projectsToLoad || projectsToLoad.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-gray-500">${getTranslationPortfolio('noProjects', lang)}</p>`;
        return;
    }

    container.innerHTML = projectsToLoad.map(project => `
      <div class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl transform hover:-translate-y-1 flex flex-col group">
        <div class="relative overflow-hidden">
           <a href="${project.link || '#'}" target="_blank" rel="noopener noreferrer" aria-label="View project ${project.title}">
             <img src="${project.image}" alt="Screenshot of ${project.title}" class="w-full h-52 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105">
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div> <!-- Overlay sutil -->
           </a>
        </div>
        <div class="p-5 flex flex-col flex-grow">
          <h3 class="text-lg font-semibold mb-2 text-gray-800 group-hover:text-blue-700 transition-colors duration-300">${project.title}</h3>
          <p class="text-gray-600 text-sm mb-4 flex-grow">${project.description}</p>
          <div class="flex flex-wrap gap-2 mt-auto mb-3">
            ${project.tags.map(tag => `
              <span class="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">${tag}</span>
            `).join('')}
          </div>
           ${project.link && project.link !== '#' ? `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 group-hover:underline">
                ${getTranslationPortfolio('viewProjectLink', lang)} <i class="fas fa-arrow-right text-xs ml-1 opacity-70 group-hover:opacity-100 transition-opacity"></i>
            </a>` : ''}
        </div>
      </div>
    `).join('');
  }, 300); // Delay aumentado um pouco
}

// Carregar projetos na inicialização
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'pt';
  // Espera um pouco para garantir que lang.js carregou `texts`
  setTimeout(() => {
    loadProjects(savedLang);
  }, 50);
});