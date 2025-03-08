// Textos do site em diferentes idiomas
const texts = {
  pt: {
    title: "Bruno Gomes - Portfólio",
    home: "Início",
    about: "Sobre",
    portfolio: "Portfólio",
    contact: "Contato",
    heroTitle: "Bruno Gomes",
    heroSubtitle: "Designer Gráfico & Desenvolvedor Web",
    btnPortfolio: "Ver Meu Trabalho",
    aboutTitle: "Sobre Mim",
    aboutText: "Olá! Sou Bruno Gomes, designer gráfico e desenvolvedor web apaixonado por criar experiências visuais incríveis.",
    contactTitle: "Entre em Contato",
    contactText: "Fale comigo através do formulário abaixo ou pelas redes sociais.",
    btnSend: "Enviar",
    footer: "© 2024 Bruno Gomes - Todos os direitos reservados."
  },
  en: {
    title: "Bruno Gomes - Portfolio",
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    contact: "Contact",
    heroTitle: "Bruno Gomes",
    heroSubtitle: "Graphic Designer & Web Developer",
    btnPortfolio: "View My Work",
    aboutTitle: "About Me",
    aboutText: "Hello! I'm Bruno Gomes, a graphic designer and web developer passionate about creating amazing visual experiences.",
    contactTitle: "Get in Touch",
    contactText: "Reach out to me via the form below or on social media.",
    btnSend: "Send",
    footer: "© 2024 Bruno Gomes - All rights reserved."
  }
};

// Função para trocar o idioma
function changeLanguage(lang) {
  localStorage.setItem("lang", lang); // Salva a escolha do usuário

  // Atualiza os textos do site
  document.title = texts[lang].title;
  document.getElementById("nav-home").innerText = texts[lang].home;
  document.getElementById("nav-about").innerText = texts[lang].about;
  document.getElementById("nav-portfolio").innerText = texts[lang].portfolio;
  document.getElementById("nav-contact").innerText = texts[lang].contact;
  document.getElementById("hero-title").innerText = texts[lang].heroTitle;
  document.getElementById("hero-subtitle").innerText = texts[lang].heroSubtitle;
  document.getElementById("btn-portfolio").innerText = texts[lang].btnPortfolio;
  document.getElementById("footer").innerText = texts[lang].footer;

  if (document.getElementById("about-title")) {
    document.getElementById("about-title").innerText = texts[lang].aboutTitle;
    document.getElementById("about-text").innerText = texts[lang].aboutText;
  }

  if (document.getElementById("contact-title")) {
    document.getElementById("contact-title").innerText = texts[lang].contactTitle;
    document.getElementById("contact-text").innerText = texts[lang].contactText;
    document.getElementById("btn-send").innerText = texts[lang].btnSend;
  }

  // Atualiza o botão com o idioma selecionado
  document.getElementById("selected-lang").innerHTML = lang === "pt" 
    ? '🇵🇹 PT <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>' 
    : '🇺🇸 EN <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
  
  // Esconde o dropdown após a seleção
  document.getElementById("lang-options").classList.add("hidden");
}

// Alterna a exibição do dropdown ao clicar no botão principal
document.getElementById("selected-lang").addEventListener("click", () => {
  document.getElementById("lang-options").classList.toggle("hidden");
});

// Fecha o dropdown se o usuário clicar fora dele
document.addEventListener("click", (event) => {
  if (!document.getElementById("selected-lang").contains(event.target)) {
    document.getElementById("lang-options").classList.add("hidden");
  }
});

// Aplica o idioma salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "pt";
  changeLanguage(savedLang);
});