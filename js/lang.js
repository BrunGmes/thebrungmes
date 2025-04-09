// texts object (como fornecido na resposta anterior, garantir que todas as chaves data-translate do HTML estejam aqui)
const texts = {
  pt: {
    // Titles
    title: "Bruno Gomes - Portfólio",
    contactTitleDoc: "Contato - Bruno Gomes",
    portfolioTitleDoc: "Portfólio - Bruno Gomes",
    aboutTitleDoc: "Sobre Mim | Bruno Gomes - Designer & Desenvolvedor",
    // Navbar
    navLogo: "BrunGmes", // Se precisar traduzir
    navHome: "Início",
    navAbout: "Sobre",
    navPortfolio: "Portfólio",
    navContact: "Contato",
    navHomeMobile: "Início",
    navAboutMobile: "Sobre",
    navPortfolioMobile: "Portfólio",
    navContactMobile: "Contato",
    // Hero (Index)
    heroTitle: "Bruno Gomes",
    heroSubtitle: "Designer Gráfico & Desenvolvedor Web",
    btnPortfolio: "Ver Meu Trabalho",
    // About Page - Hero
    aboutHeroName: "Bruno Gomes",
    aboutHeroRole: "Designer & Desenvolvedor Web",
    // About Page - Tabs
    tabAbout: "Sobre Mim",
    tabSkills: "Habilidades",
    tabExperience: "Experiência",
    tabEducation: "Educação",
    // About Page - About Me Content
    aboutMeTitle: "Sobre Mim",
    aboutText1: "Olá! Sou Bruno Gomes, designer gráfico e desenvolvedor web apaixonado por criar experiências visuais impactantes. Com mais de 3 anos de experiência profissional, dedico-me a construir soluções digitais que combinam estética e funcionalidade.",
    aboutText2: "Minha abordagem une criatividade ao pensamento técnico, permitindo que eu crie desde identidades visuais até aplicações web completas. Acredito que um bom design é aquele que resolve problemas reais e proporciona uma experiência intuitiva e agradável ao usuário.",
    aboutText3: "Estou constantemente aprimorando minhas habilidades e acompanhando as últimas tendências em design e desenvolvimento web para oferecer sempre as melhores soluções aos meus clientes.",
    // About Page - Contact Info
    contactInfoTitle: "Informações de Contato",
    contactLocationTitle: "Localização",
    contactLocationValue: "Torres Vedras, Portugal",
    contactEmailTitle: "Email",
    contactSpecialtyTitle: "Especialidade",
    contactSpecialtyValue: "Design Gráfico & Desenvolvimento Web",
    contactAvailabilityTitle: "Disponibilidade",
    contactAvailabilityValue: "Disponível para novos projetos",
    // About Page - Skills
    skillsTitle: "Competências",
    programmingTitle: "Programação",
    designTitle: "Design",
    skillAdvanced: "Avançado",
    skillIntermediate: "Intermediário",
    skillBasic: "Básico",
    // About Page - Experience
    experienceTitle: "Experiência Profissional",
    exp1Title: "Designer Gráfico @ 360imprimir",
    exp1Date: "2019 - 2022",
    exp1Desc: "Responsável pela preparação de arte final para produção, análise e correção de arquivos enviados pelos clientes, desenvolvimento de layouts personalizados e garantia de qualidade nas entregas, trabalhando em equipe para resolver problemas técnicos e criativos.",
    exp1Tag1: "Design Gráfico", exp1Tag2: "Arte Final", exp1Tag3: "Controle de Qualidade",
    expAchieveTitle: "Conquistas principais:", // Ou "Projetos destacados:"
    exp1Achieve1: "Otimização do fluxo de trabalho de arte final, reduzindo o tempo de produção em 25%",
    exp1Achieve2: "Implementação de padrões de qualidade que reduziram erros de impressão em 30%",
    exp2Title: "Desenvolvedor Web Freelancer",
    exp2Date: "2018 - Presente",
    exp2Desc: "Desenvolvimento de websites responsivos para pequenos negócios e profissionais independentes, com foco em design moderno, usabilidade e otimização para mecanismos de busca.",
    exp2Tag1: "HTML/CSS", exp2Tag2: "JavaScript", exp2Tag3: "Responsive Design", exp2Tag4: "SEO",
    exp2Achieve1: "Redesign completo do site para estúdio de fotografia local, resultando em aumento de 40% nas consultas",
    exp2Achieve2: "Desenvolvimento de loja online para artesanato, incluindo sistema de pagamento e gestão de inventário",
    // About Page - Education
    educationTitle: "Formação Acadêmica",
    edu1Title: "Gestão de Equipamentos Informáticos",
    edu1Level: "Curso Técnico Superior Profissional",
    edu1Date: "2017-2019",
    edu1School: "Escola Secundária de Torres Vedras",
    edu1Desc: "Programação em C#, C++ e desenvolvimento de projeto com Raspberry Pi. Foco em administração de redes e sistemas, manutenção de hardware e segurança informática.",
    eduSkillsTitle: "Competências adquiridas:",
    edu1Skill1: "C#", edu1Skill2: "C++", edu1Skill3: "Raspberry Pi", edu1Skill4: "Redes", edu1Skill5: "Hardware",
    edu2Title: "Design Gráfico e Comunicação Visual",
    edu2Level: "Curso Intensivo Profissional",
    edu2Date: "2016-2017",
    edu2School: "Centro de Formação Digital",
    edu2Desc: "Formação intensiva em design gráfico, incluindo princípios de design, tipografia, teoria das cores, identidade visual e ferramentas Adobe.",
    edu2Skill1: "Adobe Photoshop", edu2Skill2: "Adobe Illustrator", edu2Skill3: "InDesign", edu2Skill4: "Identidade Visual", edu2Skill5: "Tipografia",
    certsTitle: "Certificações & Cursos Online",
    cert1Title: "Desenvolvimento Front-end Moderno",
    cert1Desc: "Udemy (2022) • HTML5, CSS3, JavaScript ES6+, React Basics",
    cert2Title: "UI/UX Design Fundamentals",
    cert2Desc: "Coursera (2021) • Design de interfaces, prototipagem, testes de usabilidade",
    // Portfolio Page
    portfolioTitle: "Meus Projetos",
    loadingProjects: "Carregando projetos...",
    noProjects: "Nenhum projeto encontrado.",
    viewProjectLink: "Ver Projeto",
    // Contact Page
    contactTitle: "Entre em Contato",
    contactText: "Fale comigo através do formulário abaixo ou pelas redes sociais.",
    btnSend: "Enviar Mensagem", // Mudado para corresponder ao botão
    labelName: "Nome",
    labelEmail: "E-mail",
    labelMessage: "Mensagem",
    placeholderName: "Seu nome completo", // Melhorado
    placeholderEmail: "seu.email@exemplo.com", // Melhorado
    placeholderMessage: "Escreva sua mensagem aqui...",
    sending: "Enviando...", // Para feedback do botão
    formSuccess: "Mensagem enviada com sucesso!",
    formError: "Ocorreu um erro. Tente novamente.",
    // Footer
    footer: `© ${new Date().getFullYear()} Bruno Gomes - Todos os direitos reservados.`, // Ano dinâmico
  },
  en: {
    // Titles
    title: "Bruno Gomes - Portfolio",
    contactTitleDoc: "Contact - Bruno Gomes",
    portfolioTitleDoc: "Portfolio - Bruno Gomes",
    aboutTitleDoc: "About Me | Bruno Gomes - Designer & Developer",
    // Navbar
    navLogo: "BrunGmes", // If translation needed
    navHome: "Home",
    navAbout: "About",
    navPortfolio: "Portfolio",
    navContact: "Contact",
    navHomeMobile: "Home",
    navAboutMobile: "About",
    navPortfolioMobile: "Portfolio",
    navContactMobile: "Contact",
    // Hero (Index)
    heroTitle: "Bruno Gomes",
    heroSubtitle: "Graphic Designer & Web Developer",
    btnPortfolio: "View My Work",
     // About Page - Hero
    aboutHeroName: "Bruno Gomes",
    aboutHeroRole: "Designer & Web Developer",
    // About Page - Tabs
    tabAbout: "About Me",
    tabSkills: "Skills",
    tabExperience: "Experience",
    tabEducation: "Education",
    // About Page - About Me Content
    aboutMeTitle: "About Me",
    aboutText1: "Hello! I'm Bruno Gomes, a graphic designer and web developer passionate about creating impactful visual experiences. With over 3 years of professional experience, I am dedicated to building digital solutions that combine aesthetics and functionality.",
    aboutText2: "My approach blends creativity with technical thinking, allowing me to create everything from visual identities to complete web applications. I believe that good design solves real problems and provides an intuitive and enjoyable user experience.",
    aboutText3: "I am constantly improving my skills and keeping up with the latest trends in design and web development to always offer the best solutions to my clients.",
     // About Page - Contact Info
    contactInfoTitle: "Contact Information",
    contactLocationTitle: "Location",
    contactLocationValue: "Torres Vedras, Portugal",
    contactEmailTitle: "Email",
    contactSpecialtyTitle: "Specialty",
    contactSpecialtyValue: "Graphic Design & Web Development",
    contactAvailabilityTitle: "Availability",
    contactAvailabilityValue: "Available for new projects",
    // About Page - Skills
    skillsTitle: "Skills",
    programmingTitle: "Programming",
    designTitle: "Design",
    skillAdvanced: "Advanced",
    skillIntermediate: "Intermediate",
    skillBasic: "Basic",
    // About Page - Experience
    experienceTitle: "Work Experience",
    exp1Title: "Graphic Designer @ 360imprimir",
    exp1Date: "2019 - 2022",
    exp1Desc: "Responsible for preparing final artwork for production, analyzing and correcting client-submitted files, developing custom layouts, and ensuring quality deliverables, working collaboratively to solve technical and creative problems.",
    exp1Tag1: "Graphic Design", exp1Tag2: "Final Art", exp1Tag3: "Quality Control",
    expAchieveTitle: "Key achievements:", // Or "Featured projects:"
    exp1Achieve1: "Optimized the final artwork workflow, reducing production time by 25%",
    exp1Achieve2: "Implemented quality standards that reduced printing errors by 30%",
    exp2Title: "Freelance Web Developer",
    exp2Date: "2018 - Present",
    exp2Desc: "Development of responsive websites for small businesses and independent professionals, focusing on modern design, usability, and search engine optimization.",
    exp2Tag1: "HTML/CSS", exp2Tag2: "JavaScript", exp2Tag3: "Responsive Design", exp2Tag4: "SEO",
    exp2Achieve1: "Complete website redesign for a local photography studio, resulting in a 40% increase in inquiries",
    exp2Achieve2: "Development of an online store for crafts, including payment system and inventory management",
    // About Page - Education
    educationTitle: "Education",
    edu1Title: "Computer Equipment Management",
    edu1Level: "Higher Technical Professional Course",
    edu1Date: "2017-2019",
    edu1School: "Torres Vedras Secondary School", // Provide English name if known
    edu1Desc: "Programming in C#, C++, and project development with Raspberry Pi. Focus on network and systems administration, hardware maintenance, and computer security.",
    eduSkillsTitle: "Skills acquired:",
    edu1Skill1: "C#", edu1Skill2: "C++", edu1Skill3: "Raspberry Pi", edu1Skill4: "Networking", edu1Skill5: "Hardware",
    edu2Title: "Graphic Design and Visual Communication",
    edu2Level: "Intensive Professional Course",
    edu2Date: "2016-2017",
    edu2School: "Digital Training Center", // Provide English name if known
    edu2Desc: "Intensive training in graphic design, including design principles, typography, color theory, visual identity, and Adobe tools.",
    edu2Skill1: "Adobe Photoshop", edu2Skill2: "Adobe Illustrator", edu2Skill3: "InDesign", edu2Skill4: "Visual Identity", edu2Skill5: "Typography",
    certsTitle: "Certifications & Online Courses",
    cert1Title: "Modern Front-end Development",
    cert1Desc: "Udemy (2022) • HTML5, CSS3, JavaScript ES6+, React Basics",
    cert2Title: "UI/UX Design Fundamentals",
    cert2Desc: "Coursera (2021) • Interface design, prototyping, usability testing",
    // Portfolio Page
    portfolioTitle: "My Projects",
    loadingProjects: "Loading projects...",
    noProjects: "No projects found.",
    viewProjectLink: "View Project",
    // Contact Page
    contactTitle: "Get in Touch",
    contactText: "Reach out to me via the form below or on social media.",
    btnSend: "Send Message", // Changed to match button
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    placeholderName: "Your full name", // Improved
    placeholderEmail: "your.email@example.com", // Improved
    placeholderMessage: "Write your message here...",
    sending: "Sending...", // For button feedback
    formSuccess: "Message sent successfully!",
    formError: "An error occurred. Please try again.",
    // Footer
    footer: `© ${new Date().getFullYear()} Bruno Gomes - All rights reserved.`, // Dynamic year
  }
};


// --- Funções (sem alterações da resposta anterior) ---
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav .nav-link');
  const mobileNavLinks = document.querySelectorAll('nav .nav-link-mobile');

  const updateLinkStyle = (link) => {
    link.classList.remove('active-menu', 'text-blue-600', 'font-semibold', 'border-blue-500', 'bg-blue-50');
    link.classList.add('text-gray-600', 'hover:text-blue-600', 'font-medium', 'border-transparent');

    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active-menu', 'text-blue-600', 'font-semibold');
      link.classList.remove('text-gray-600', 'hover:text-blue-600', 'font-medium');

      if (link.classList.contains('nav-link-mobile')) {
        link.classList.add('bg-blue-50');
         link.classList.remove('border-transparent'); // Remove border from mobile
      } else {
        link.classList.add('border-blue-500'); // Add border only for desktop
         link.classList.remove('border-transparent');
      }
    } else {
      link.classList.remove('border-blue-500'); // Ensure non-active links don't have border
      link.classList.add('border-transparent');
    }
  };

  navLinks.forEach(updateLinkStyle);
  mobileNavLinks.forEach(updateLinkStyle);
}

function updateTexts(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.dataset.translate;
    if (texts[lang]?.[key]) {
      if (el.tagName === 'TITLE') {
        document.title = texts[lang][key];
      } else {
        el.innerHTML = texts[lang][key]; // Use innerHTML to allow basic tags if needed in future
      }
    } else {
      console.warn(`Translation key "${key}" not found for language "${lang}"`);
    }
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.dataset.translatePlaceholder;
    if (texts[lang]?.[key]) {
      el.placeholder = texts[lang][key];
    } else {
       console.warn(`Placeholder translation key "${key}" not found for language "${lang}"`);
    }
  });

   const langButton = document.getElementById('selected-lang');
   if (langButton) {
     langButton.innerHTML = `
       <span class="text-base">${lang === 'pt' ? '🇵🇹' : '🇺🇸'}</span> ${lang.toUpperCase()}
       <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
     `;
     document.querySelectorAll('#lang-options .lang-option, #mobile-lang-options .lang-option').forEach(opt => {
        opt.classList.toggle('bg-blue-100', opt.dataset.lang === lang);
        opt.classList.toggle('font-semibold', opt.dataset.lang === lang);
     });
   }

   // Update dynamic year in footer if span exists
   const yearSpan = document.getElementById('currentYear');
   if (yearSpan) {
        // The footer text itself is handled by data-translate now,
        // but we still need to ensure the span has the year content if needed separately.
        // For simplicity, the year is now part of the 'footer' translation key.
        // If you need the year separate:
        // yearSpan.textContent = new Date().getFullYear();
   }
}


function changeLanguage(lang) {
  if (!texts[lang]) {
    console.error(`Language "${lang}" not supported.`);
    return;
  }
  localStorage.setItem("lang", lang);
  updateTexts(lang);
  setActiveNav();

  if (typeof loadProjects === 'function' && document.getElementById('projects-container')) {
    loadProjects(lang);
  }

  document.getElementById('lang-options')?.classList.add('hidden');
  document.getElementById('mobile-lang-options')?.classList.add('hidden');
  const mobileNavContent = document.getElementById('mobile-nav-content');
  if (mobileNavContent) mobileNavContent.classList.add('hidden');

  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      mobileMenuToggle.querySelector('.icon-open')?.classList.remove('hidden');
      mobileMenuToggle.querySelector('.icon-close')?.classList.add('hidden');
  }
   const mobileLangToggle = document.getElementById('mobile-lang-toggle');
    if(mobileLangToggle) {
        mobileLangToggle.setAttribute('aria-expanded', 'false');
    }
     const desktopLangToggle = document.getElementById('selected-lang');
    if (desktopLangToggle) {
        desktopLangToggle.setAttribute('aria-expanded', 'false');
    }
}

// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "pt";
  updateTexts(savedLang);
  setActiveNav();

  // --- Menu Toggles ---
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNavContent = document.getElementById('mobile-nav-content');
  const mobileLangToggle = document.getElementById('mobile-lang-toggle');
  const mobileLangOptions = document.getElementById('mobile-lang-options');
  const desktopLangToggle = document.getElementById('selected-lang');
  const desktopLangOptions = document.getElementById('lang-options');

  if (mobileMenuToggle && mobileNavContent) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileNavContent.classList.toggle('hidden');
      mobileMenuToggle.setAttribute('aria-expanded', String(!isHidden));
      mobileMenuToggle.querySelector('.icon-open')?.classList.toggle('hidden', !isHidden);
      mobileMenuToggle.querySelector('.icon-close')?.classList.toggle('hidden', isHidden);
      if (isHidden) {
           mobileLangOptions?.classList.add('hidden');
           mobileLangToggle?.setAttribute('aria-expanded', 'false');
       }
    });
  }

  if (mobileLangToggle && mobileLangOptions) {
    mobileLangToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileNavContent && !mobileNavContent.classList.contains('hidden')) {
          const isLangHidden = mobileLangOptions.classList.toggle('hidden');
          mobileLangToggle.setAttribute('aria-expanded', String(!isLangHidden));
      }
    });
  }

  if (desktopLangToggle && desktopLangOptions) {
    desktopLangToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = desktopLangOptions.classList.toggle('hidden');
      desktopLangToggle.setAttribute('aria-expanded', String(!isHidden));
    });
  }

  // Language Option Buttons (Delegated)
  document.body.addEventListener('click', (e) => {
     if (e.target.closest('.lang-option')) {
         const lang = e.target.closest('.lang-option').dataset.lang;
         if (lang) {
             changeLanguage(lang);
         }
     }
  });


  // Close menus on click outside
  document.addEventListener('click', (e) => {
    const target = e.target;
    // Close mobile nav if click is outside nav area
    if (mobileNavContent && !mobileNavContent.classList.contains('hidden') && !target.closest('nav')) {
      mobileNavContent.classList.add('hidden');
      if (mobileMenuToggle) {
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
          mobileMenuToggle.querySelector('.icon-open')?.classList.remove('hidden');
          mobileMenuToggle.querySelector('.icon-close')?.classList.add('hidden');
      }
      mobileLangOptions?.classList.add('hidden');
      mobileLangToggle?.setAttribute('aria-expanded', 'false');
    }
    // Close desktop lang dropdown if click is outside its toggle or options
    if (desktopLangOptions && !desktopLangOptions.classList.contains('hidden') && !target.closest('#selected-lang') && !target.closest('#lang-options')) {
        desktopLangOptions.classList.add('hidden');
        desktopLangToggle?.setAttribute('aria-expanded', 'false');
    }
    // Close mobile lang dropdown if click is outside its toggle or options (and menu is open)
     if (mobileLangOptions && !mobileLangOptions.classList.contains('hidden') && !target.closest('#mobile-lang-toggle') && !target.closest('#mobile-lang-options')) {
         mobileLangOptions.classList.add('hidden');
         mobileLangToggle?.setAttribute('aria-expanded', 'false');
     }
  });
});