/**
 * nav-component.js  v2.1
 * ─────────────────────────────────────────────────────────────────
 * Renders the shared navbar into #site-nav on every page.
 * Fixes:
 *   • Mobile drawer uses correct id="mobile-drawer" (lang.js conflict removed)
 *   • lang.js #selected-lang override patched — nav keeps flag + chevron in sync
 *   • localStorage wrapped in try/catch (safe in sandboxed iframes)
 *   • Active-page detection works with hash-less and hash URLs
 * Load order: nav-component.js (sync) → lang.js (defer) → other scripts (defer)
 */
(function () {
  'use strict';

  // ── Safe storage (works even when localStorage is blocked) ──────────────
  const store = {
    get: function (k, fallback) {
      try { return localStorage.getItem(k) || fallback; } catch (_) { return fallback; }
    },
    set: function (k, v) {
      try { localStorage.setItem(k, v); } catch (_) {}
    }
  };

  // ── Dark mode — apply BEFORE first paint to avoid flash ────────────────
  const html = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = store.get('theme', prefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', initialTheme);

  // ── SVG icons ───────────────────────────────────────────────────────────
  const icons = {
    sun:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    moon:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    menu:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    logo:  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 2L3 7L12 12L21 7L12 2Z" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17L12 22L21 17" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12L12 17L21 12" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    chevron: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`
  };

  // ── Build navbar HTML ───────────────────────────────────────────────────
  function buildNav(theme) {
    return `
      <div class="nav-inner">

        <a href="index.html" class="nav-logo" aria-label="Bruno Gomes - Home">
          ${icons.logo}
          <span data-translate="navLogo">BrunGmes</span>
        </a>

        <!-- Desktop links -->
        <ul class="nav-links" role="list">
          <li><a href="index.html"     class="nav-link" data-translate="navHome">Início</a></li>
          <li><a href="about.html"     class="nav-link" data-translate="navAbout">Sobre</a></li>
          <li><a href="portfolio.html" class="nav-link" data-translate="navPortfolio">Portfólio</a></li>
          <li><a href="contact.html"   class="nav-link" data-translate="navContact">Contato</a></li>
        </ul>

        <!-- Right-side actions -->
        <div class="nav-actions">

          <!-- Dark mode toggle -->
          <button class="theme-toggle" id="theme-toggle-btn"
                  aria-label="${theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}">
            ${theme === 'dark' ? icons.sun : icons.moon}
          </button>

          <!-- Language selector (desktop) -->
          <div class="lang-selector" id="nav-lang-selector">
            <button class="lang-btn" id="selected-lang"
                    aria-haspopup="true" aria-expanded="false" aria-controls="lang-options">
              <span id="nav-lang-flag">&#127477;&#127481;</span>
              <span id="nav-lang-code">PT</span>
              ${icons.chevron}
            </button>
            <div class="lang-dropdown" id="lang-options" role="menu">
              <button class="lang-option" data-lang="pt" role="menuitem">&#127477;&#127481; Português</button>
              <button class="lang-option" data-lang="en" role="menuitem">&#127482;&#127480; English</button>
            </div>
          </div>

          <!-- Mobile hamburger -->
          <button class="mobile-menu-btn" id="mobile-menu-toggle"
                  aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-drawer">
            ${icons.menu}
          </button>

        </div>
      </div>

      <!-- Mobile Drawer -->
      <div class="mobile-drawer" id="mobile-drawer" role="navigation" aria-label="Menu mobile">
        <ul role="list">
          <li><a href="index.html"     class="nav-link-mobile" data-translate="navHome">Início</a></li>
          <li><a href="about.html"     class="nav-link-mobile" data-translate="navAbout">Sobre</a></li>
          <li><a href="portfolio.html" class="nav-link-mobile" data-translate="navPortfolio">Portfólio</a></li>
          <li><a href="contact.html"   class="nav-link-mobile" data-translate="navContact">Contato</a></li>
        </ul>
        <div class="mobile-drawer-footer">
          <button class="lang-option mobile-lang-opt" data-lang="pt" role="menuitem">&#127477;&#127481; PT — Português</button>
          <button class="lang-option mobile-lang-opt" data-lang="en" role="menuitem">&#127482;&#127480; EN — English</button>
        </div>
      </div>
    `;
  }

  // ── Sync lang display (flag + code + active state) ──────────────────────
  // Called after lang.js may have overwritten #selected-lang innerHTML.
  function syncLangDisplay(lang) {
    const flag = document.getElementById('nav-lang-flag');
    const code = document.getElementById('nav-lang-code');

    // If lang.js wiped #selected-lang, rebuild the inner structure
    const btn = document.getElementById('selected-lang');
    if (btn && (!flag || !code)) {
      btn.innerHTML =
        `<span id="nav-lang-flag">${lang === 'en' ? '&#127482;&#127480;' : '&#127477;&#127481;'}</span>` +
        `<span id="nav-lang-code">${lang.toUpperCase()}</span>` +
        icons.chevron;
    } else {
      if (flag) flag.innerHTML = lang === 'en' ? '&#127482;&#127480;' : '&#127477;&#127481;';
      if (code) code.textContent = lang.toUpperCase();
    }

    // Mark selected lang-option buttons
    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.classList.toggle('selected', opt.dataset.lang === lang);
    });
  }

  // ── Mark active page link ───────────────────────────────────────────────
  function markActivePage(nav) {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('.nav-link, .nav-link-mobile').forEach(function (link) {
      const href = link.getAttribute('href');
      const isActive = href === page || (page === '' && href === 'index.html');
      link.classList.toggle('active-page', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  }

  // ── Main init (runs on DOMContentLoaded) ────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('site-nav');
    if (!nav) return;

    // Inject HTML
    nav.innerHTML = buildNav(html.getAttribute('data-theme') || 'light');

    // Active page
    markActivePage(nav);

    // Scroll shadow
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
        store.set('theme', next);
        themeBtn.innerHTML = next === 'dark' ? icons.sun : icons.moon;
        themeBtn.setAttribute('aria-label', next === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
      });
    }

    // ── Desktop language dropdown ─────────────────────────────────────────
    const langBtn      = document.getElementById('selected-lang');
    const langDropdown = document.getElementById('lang-options');

    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = langDropdown.classList.toggle('open');
        langBtn.setAttribute('aria-expanded', String(isOpen));
      });
      document.addEventListener('click', function () {
        langDropdown.classList.remove('open');
        if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
      });
    }

    // ── Mobile drawer toggle ──────────────────────────────────────────────
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const drawer    = document.getElementById('mobile-drawer');

    if (mobileBtn && drawer) {
      mobileBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = drawer.classList.toggle('open');
        mobileBtn.innerHTML = isOpen ? icons.close : icons.menu;
        mobileBtn.setAttribute('aria-expanded', String(isOpen));
        mobileBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
      });
      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target)) {
          drawer.classList.remove('open');
          mobileBtn.innerHTML = icons.menu;
          mobileBtn.setAttribute('aria-expanded', 'false');
          mobileBtn.setAttribute('aria-label', 'Abrir menu');
        }
      });
    }

    // ── Language option clicks (desktop + mobile) ─────────────────────────
    // We handle the click here; lang.js changeLanguage() also fires via its own
    // delegated listener — that's fine, they don't conflict.
    document.body.addEventListener('click', function (e) {
      const opt = e.target.closest('.lang-option');
      if (!opt || !opt.dataset.lang) return;
      const lang = opt.dataset.lang;

      // Close desktop dropdown
      if (langDropdown) langDropdown.classList.remove('open');
      if (langBtn)      langBtn.setAttribute('aria-expanded', 'false');

      // Close mobile drawer
      if (drawer)    drawer.classList.remove('open');
      if (mobileBtn) {
        mobileBtn.innerHTML = icons.menu;
        mobileBtn.setAttribute('aria-expanded', 'false');
      }

      // Sync flag/code display after lang.js has run (slight delay)
      setTimeout(function () { syncLangDisplay(lang); }, 20);
    });

    // ── Initial lang display sync ─────────────────────────────────────────
    // lang.js runs after us (defer), so we also watch for its first updateTexts call
    const savedLang = store.get('lang', 'pt');
    syncLangDisplay(savedLang);

    // MutationObserver: re-sync if lang.js rewrites #selected-lang
    const langBtnTarget = document.getElementById('selected-lang');
    if (langBtnTarget && window.MutationObserver) {
      new MutationObserver(function () {
        const currentLang = store.get('lang', 'pt');
        // Only re-sync if our flag span is gone
        if (!document.getElementById('nav-lang-flag')) {
          syncLangDisplay(currentLang);
        }
      }).observe(langBtnTarget, { childList: true, subtree: true });
    }

  }); // end DOMContentLoaded

})();
