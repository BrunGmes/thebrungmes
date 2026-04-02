/**
 * nav-component.js
 * Renders the shared navbar into #site-nav on every page.
 * Handles: active page highlight, dark mode toggle, language selector, mobile drawer.
 * Must load BEFORE lang.js so lang.js can find .nav-link / .nav-link-mobile elements.
 */
(function () {
  // ── Dark mode (earliest possible, avoids flash) ──────────────────────────
  const html = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = stored || (prefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', initialTheme);

  // ── SVG helpers ───────────────────────────────────────────────────────────
  const sunIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const moonIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const menuIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  const closeIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  const logoSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 2L3 7L12 12L21 7L12 2Z" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17L12 22L21 17" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12L12 17L21 12" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const chevronDown = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`;

  // ── Nav HTML ──────────────────────────────────────────────────────────────
  const navHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" data-translate="navLogo" aria-label="Bruno Gomes - Home">
        ${logoSVG}
        BrunGmes
      </a>

      <!-- Desktop links -->
      <ul class="nav-links" role="list">
        <li><a href="index.html"   class="nav-link" data-translate="navHome">In&#237;cio</a></li>
        <li><a href="about.html"   class="nav-link" data-translate="navAbout">Sobre</a></li>
        <li><a href="portfolio.html" class="nav-link" data-translate="navPortfolio">Portf&#243;lio</a></li>
        <li><a href="contact.html" class="nav-link" data-translate="navContact">Contato</a></li>
      </ul>

      <!-- Actions -->
      <div class="nav-actions">
        <!-- Dark mode toggle -->
        <button class="theme-toggle" id="theme-toggle-btn" aria-label="Alternar tema">
          ${initialTheme === 'dark' ? sunIcon : moonIcon}
        </button>

        <!-- Language selector (desktop) -->
        <div class="lang-selector" id="nav-lang-selector">
          <button class="lang-btn" id="selected-lang" aria-haspopup="true" aria-expanded="false" aria-controls="lang-options">
            <span id="nav-lang-flag">&#127477;&#127481;</span>
            <span id="nav-lang-code">PT</span>
            ${chevronDown}
          </button>
          <div class="lang-dropdown" id="lang-options" role="menu">
            <button class="lang-option" data-lang="pt" role="menuitem">&#127477;&#127481; Portugu&#234;s</button>
            <button class="lang-option" data-lang="en" role="menuitem">&#127482;&#127480; English</button>
          </div>
        </div>

        <!-- Mobile menu toggle -->
        <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-drawer">
          ${menuIcon}
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer" role="navigation" aria-label="Menu mobile">
      <ul role="list">
        <li><a href="index.html"     class="nav-link-mobile" data-translate="navHomeMobile">In&#237;cio</a></li>
        <li><a href="about.html"     class="nav-link-mobile" data-translate="navAboutMobile">Sobre</a></li>
        <li><a href="portfolio.html" class="nav-link-mobile" data-translate="navPortfolioMobile">Portf&#243;lio</a></li>
        <li><a href="contact.html"   class="nav-link-mobile" data-translate="navContactMobile">Contato</a></li>
      </ul>
      <div class="mobile-drawer-footer">
        <!-- Language options inline in mobile -->
        <div id="mobile-lang-options" style="display:flex;gap:8px;">
          <button class="lang-option" data-lang="pt" role="menuitem" style="padding:6px 12px;border-radius:8px;border:1px solid var(--color-border);">&#127477;&#127481; PT</button>
          <button class="lang-option" data-lang="en" role="menuitem" style="padding:6px 12px;border-radius:8px;border:1px solid var(--color-border);">&#127482;&#127480; EN</button>
        </div>
      </div>
    </div>
  `;

  // ── Inject into #site-nav ─────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('site-nav');
    if (!nav) return;
    nav.innerHTML = navHTML;

    // Active page highlight
    const page = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('.nav-link, .nav-link-mobile').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('active-page');
      }
    });

    // ── Scroll shadow ──────────────────────────────────────────────────────
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });

    // ── Dark mode toggle ──────────────────────────────────────────────────
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const current = html.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        themeBtn.innerHTML = next === 'dark' ? sunIcon : moonIcon;
        themeBtn.setAttribute('aria-label', next === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
      });
    }

    // ── Desktop language dropdown ─────────────────────────────────────────
    const langBtn = document.getElementById('selected-lang');
    const langDropdown = document.getElementById('lang-options');

    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = langDropdown.classList.toggle('open');
        langBtn.setAttribute('aria-expanded', String(isOpen));
      });

      document.addEventListener('click', function () {
        langDropdown.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      });
    }

    // ── Mobile menu toggle ────────────────────────────────────────────────
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');

    if (mobileBtn && drawer) {
      mobileBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = drawer.classList.toggle('open');
        mobileBtn.innerHTML = isOpen ? closeIcon : menuIcon;
        mobileBtn.setAttribute('aria-expanded', String(isOpen));
        mobileBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
      });

      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target)) {
          drawer.classList.remove('open');
          mobileBtn.innerHTML = menuIcon;
          mobileBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // ── Sync lang button display after lang.js updates it ────────────────
    // lang.js calls updateTexts() which sets #selected-lang innerHTML.
    // We keep nav-lang-flag / nav-lang-code in sync via MutationObserver.
    function syncLangDisplay(lang) {
      const flag = document.getElementById('nav-lang-flag');
      const code = document.getElementById('nav-lang-code');
      if (flag) flag.innerHTML = lang === 'en' ? '&#127482;&#127480;' : '&#127477;&#127481;';
      if (code) code.textContent = lang.toUpperCase();
      // Mark selected option
      document.querySelectorAll('.lang-option').forEach(function (opt) {
        opt.classList.toggle('selected', opt.dataset.lang === lang);
      });
    }

    // Sync on load
    const savedLang = localStorage.getItem('lang') || 'pt';
    syncLangDisplay(savedLang);

    // Sync when changeLanguage is called (lang.js dispatches storage event or we patch it)
    // Simple: observe changes triggered by lang-option clicks
    document.body.addEventListener('click', function (e) {
      const opt = e.target.closest('.lang-option');
      if (opt && opt.dataset.lang) {
        // Close desktop dropdown
        langDropdown && langDropdown.classList.remove('open');
        langBtn && langBtn.setAttribute('aria-expanded', 'false');
        // Sync display (lang.js also calls updateTexts, this just updates flag/code)
        setTimeout(function () { syncLangDisplay(opt.dataset.lang); }, 10);
      }
    });
  });
})();
