/* Nanvi.ai — Shared Navigation, Globe Footer, Video Theater, Insights Reader & Contact API */

const NANVI_LOGO_HTML = `
  <img class="brand-logo-img" src="images/Nanvi%20logo.png?v=20261124c" alt="Nanvi.ai">
`;

const currentPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();
const isActive = (target) => (currentPage === target ? ' aria-current="page"' : "");

const HEADER_HTML = `
  <header class="site-header">
    <nav class="site-nav" aria-label="Main navigation">
      <a class="brand" href="index.html" aria-label="Nanvi.ai — Make Intelligence Work">
        ${NANVI_LOGO_HTML}
      </a>

      <div class="nav-links">
        <div class="nav-item">
          <a class="nav-link" href="index.html"${isActive("index.html")}>Home</a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="services.html"${isActive("services.html")}>
            Services
            <svg class="nav-chevron" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <div class="nav-dropdown" role="menu">
            <a href="services.html#custom-ai">Custom AI Solutions <span>&rsaquo;</span></a>
            <a href="services.html#robotics-automation">Robotics &amp; Automation <span>&rsaquo;</span></a>
            <a href="index.html#raas">Robotics as a Service (RaaS) <span>&rsaquo;</span></a>
            <a href="services.html#ai-integration">AI &amp; Robotics Integration <span>&rsaquo;</span></a>
            <div class="dd-divider"></div>
            <a href="services.html">Explore All Services <span>&rarr;</span></a>
          </div>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="projects.html"${isActive("projects.html")}>
            Industries
            <svg class="nav-chevron" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <div class="nav-dropdown" role="menu">
            <a href="projects.html#agri-bot">Farming &amp; Agriculture <span>&rsaquo;</span></a>
            <a href="projects.html#indus-bot">Manufacturing &amp; Microtech <span>&rsaquo;</span></a>
            <a href="projects.html#care-bot">Healthcare &amp; Care Robotics <span>&rsaquo;</span></a>
            <a href="projects.html#hospitality-bot">Restaurants &amp; Hospitality <span>&rsaquo;</span></a>
            <a href="projects.html#warehouse-bot">Warehouses &amp; Logistics <span>&rsaquo;</span></a>
            <a href="projects.html#event-bot">Events &amp; Exhibitions <span>&rsaquo;</span></a>
            <div class="dd-divider"></div>
            <a href="projects.html">All Robotics Solutions <span>&rarr;</span></a>
          </div>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="index.html#raas">Robotics as a Service</a>
        </div>
        <div class="nav-item">
          <a class="nav-link" href="about.html"${isActive("about.html")}>About Us</a>
        </div>
        <div class="nav-item">
          <a class="nav-link" href="index.html#insights">Insights</a>
        </div>
        <div class="nav-item">
          <a class="nav-link" href="contact.html"${isActive("contact.html")}>Contact Us</a>
        </div>
      </div>

      <div class="nav-cta-wrap">
        <a class="btn-cyan nav-cta" href="contact.html">Get a Free Consultation &rarr;</a>
      </div>

      <details class="mobile-nav">
        <summary aria-label="Toggle navigation menu"><span>&#9776;</span> Menu</summary>
        <div class="mobile-links">
          <a href="index.html"${isActive("index.html")}>Home</a>
          <a href="services.html"${isActive("services.html")}>Services</a>
          <a href="projects.html"${isActive("projects.html")}>Industries &amp; Robotics</a>
          <a href="index.html#raas">Robotics as a Service</a>
          <a href="about.html"${isActive("about.html")}>About Us</a>
          <a href="index.html#insights">Engineering Insights</a>
          <a href="contact.html"${isActive("contact.html")}>Contact Us</a>
          <a class="btn-cyan mobile-cta" href="contact.html">Get a Free Consultation &rarr;</a>
        </div>
      </details>
    </nav>
  </header>
`;

const FOOTER_HTML = `
  <footer class="site-footer">
    <svg class="footer-globe-backdrop" viewBox="0 0 900 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="globeGlow" cx="50%" cy="100%" r="75%">
          <stop offset="0%" stop-color="#21ebf5" stop-opacity="0.55"/>
          <stop offset="55%" stop-color="#0ea5e9" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="#011230" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="450" cy="430" r="395" fill="url(#globeGlow)" stroke="#21ebf5" stroke-opacity="0.45" stroke-width="1.4"/>
      <ellipse cx="450" cy="430" rx="340" ry="395" stroke="#38bdf8" stroke-opacity="0.26" stroke-width="1"/>
      <ellipse cx="450" cy="430" rx="220" ry="395" stroke="#38bdf8" stroke-opacity="0.24" stroke-width="1"/>
      <ellipse cx="450" cy="430" rx="95" ry="395" stroke="#38bdf8" stroke-opacity="0.24" stroke-width="1"/>
      <path d="M120 185 Q450 95 780 185" stroke="#21ebf5" stroke-opacity="0.32" stroke-width="1" stroke-dasharray="4 6"/>
      <path d="M180 140 Q450 65 720 140" stroke="#38bdf8" stroke-opacity="0.28" stroke-width="1" stroke-dasharray="3 5"/>
      <path d="M260 105 Q450 48 640 105" stroke="#21ebf5" stroke-opacity="0.35" stroke-width="1"/>
      <circle cx="315" cy="112" r="3" fill="#21ebf5"/>
      <circle cx="450" cy="78" r="3.5" fill="#21ebf5"/>
      <circle cx="595" cy="118" r="3" fill="#21ebf5"/>
    </svg>

    <div class="footer-inner">
      <div class="footer-top-bar">
        <a class="brand" href="index.html" aria-label="Nanvi.ai Home">
          ${NANVI_LOGO_HTML}
        </a>

        <nav class="footer-nav-pipes" aria-label="Footer navigation">
          <a href="index.html">Home</a><span class="pipe">|</span>
          <a href="services.html">Services</a><span class="pipe">|</span>
          <a href="projects.html">Industries</a><span class="pipe">|</span>
          <a href="index.html#raas">Robotics as a Service</a><span class="pipe">|</span>
          <a href="about.html">About Us</a><span class="pipe">|</span>
          <a href="index.html#insights">Insights</a><span class="pipe">|</span>
          <a href="contact.html">Contact Us</a>
        </nav>

        <div class="footer-social-cta">
          <div class="footer-socials" aria-label="Quick channels">
            <a class="social-btn" href="index.html#video-showcase" title="Video Demos" aria-label="Video Demos">
              <svg viewBox="0 0 24 24"><path d="M21.58 7.19C21.35 6.33 20.67 5.65 19.81 5.42C18.25 5 12 5 12 5C12 5 5.75 5 4.19 5.42C3.33 5.65 2.65 6.33 2.42 7.19C2 8.75 2 12 2 12C2 12 2 15.25 2.42 16.81C2.65 17.67 3.33 18.35 4.19 18.58C5.75 19 12 19 12 19C12 19 18.25 19 19.81 18.58C20.67 18.35 21.35 17.67 21.58 16.81C22 15.25 22 12 22 12C22 12 22 8.75 21.58 7.19ZM10 15V9L15.2 12L10 15Z"/></svg>
            </a>
            <a class="social-btn" href="about.html#nrip" title="NRIP Architecture" aria-label="NRIP Architecture">
              <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.93 9h-3.17a15.65 15.65 0 0 0-1.38-5A8.03 8.03 0 0 1 18.93 11ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26Zm.81 2h3.17a15.65 15.65 0 0 0 1.38 5A8.03 8.03 0 0 1 5.07 16Zm3.17-8H5.07a8.03 8.03 0 0 1 4.55-5A15.65 15.65 0 0 0 8.24 8ZM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2Zm.04 7a15.65 15.65 0 0 0 1.38-5h3.17a8.03 8.03 0 0 1-4.55 5Zm1.98-7c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38Z"/></svg>
            </a>
            <a class="social-btn" href="mailto:support@nanvitech.com" title="Email Support" aria-label="Email Support">
              <svg viewBox="0 0 24 24"><path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.51l8 5 8-5V8H4Zm0 8h16V10.87l-7.47 4.67a1 1 0 0 1-1.06 0L4 10.87V16Z"/></svg>
            </a>
          </div>
          <a class="btn-cyan" href="contact.html" style="padding: 10px 20px; font-size: 0.86rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            Book a Consultation &rarr;
          </a>
        </div>
      </div>

      <div class="footer-offices-strip">
        <div><strong>USA Headquarters:</strong> NANVI Technology Solutions LLC · 520 Central Parkway East, Suite 105, Plano, Texas 75074</div>
        <div><strong>India Engineering Center:</strong> Chennai, Tamil Nadu, India</div>
        <div><a href="mailto:hradmin@nanvitech.com">hradmin@nanvitech.com</a> · <a href="mailto:support@nanvitech.com">support@nanvitech.com</a></div>
      </div>

      <div class="footer-bottom-bar">
        <span>&copy; 2026 Nanvi.ai — NANVI Technology Solutions LLC. All rights reserved.</span>
        <span class="footer-motto">INNOVATE &bull; AUTOMATE &bull; GROW</span>
      </div>
    </div>
  </footer>
`;

document.querySelector("body > header")?.remove();
document.querySelector("body > nav")?.remove();
document.querySelector("body > footer")?.remove();
document.body.insertAdjacentHTML("afterbegin", HEADER_HTML);
document.body.insertAdjacentHTML("beforeend", FOOTER_HTML);

// ===========================================================================
// Global Video Theater Modal & Insights Article Modal
// ===========================================================================
const MODAL_HTML = `
  <div id="nanvi-theater-modal" class="nanvi-modal" role="dialog" aria-modal="true" aria-labelledby="theater-title" hidden>
    <div class="nanvi-modal-dialog">
      <div class="modal-header">
        <div>
          <span class="eyebrow" id="theater-badge" style="margin-bottom: 4px;">NANVI.AI VIDEO DEMO</span>
          <h3 id="theater-title">Nanvi Robotics Showcase</h3>
        </div>
        <button type="button" class="modal-close" id="theater-close" aria-label="Close video player">&times;</button>
      </div>
      <video id="theater-video" class="modal-video-player" controls autoplay playsinline></video>
      <p id="theater-desc" style="margin: 12px 0 0; color: var(--text-soft); font-size: 0.92rem;"></p>
      <div id="theater-playlist" class="modal-playlist" aria-label="Related robotics videos"></div>
    </div>
  </div>

  <div id="nanvi-article-modal" class="nanvi-modal" role="dialog" aria-modal="true" aria-labelledby="article-title" hidden>
    <div class="nanvi-modal-dialog" style="max-width: 760px;">
      <div class="modal-header">
        <div>
          <span class="eyebrow" id="article-date" style="margin-bottom: 4px;">INSIGHTS</span>
          <h3 id="article-title">Article Title</h3>
        </div>
        <button type="button" class="modal-close" id="article-close" aria-label="Close article">&times;</button>
      </div>
      <div id="article-media-slot"></div>
      <div id="article-body" style="color:var(--text-soft);font-size:0.96rem;line-height:1.7;"></div>
      <div id="article-switcher" class="modal-playlist" aria-label="All engineering insights"></div>
      <div style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap;">
        <a class="btn-cyan" id="article-cta-link" href="contact.html">Discuss This Solution &rarr;</a>
        <button type="button" class="btn-glass" id="article-watch-btn">Watch Related Demo</button>
      </div>
    </div>
  </div>
`;
document.body.insertAdjacentHTML("beforeend", MODAL_HTML);

const theaterModal = document.getElementById("nanvi-theater-modal");
const theaterVideo = document.getElementById("theater-video");
const theaterTitle = document.getElementById("theater-title");
const theaterBadge = document.getElementById("theater-badge");
const theaterDesc = document.getElementById("theater-desc");
const theaterPlaylist = document.getElementById("theater-playlist");

window.NanviTheater = {
  open(items, startIndex = 0) {
    const list = Array.isArray(items) ? items : [items];
    const renderItem = (idx) => {
      const item = list[idx] || list[0];
      theaterBadge.textContent = item.badge || "NANVI.AI ROBOTICS";
      theaterTitle.textContent = item.title || "Robotics Demonstration";
      theaterDesc.textContent = item.desc || "";
      if (item.poster) theaterVideo.poster = item.poster;
      theaterVideo.src = item.src;
      theaterVideo.play().catch(() => { });
      theaterPlaylist.querySelectorAll(".modal-playlist-item").forEach((btn, i) => {
        btn.classList.toggle("is-active", i === idx);
      });
    };

    theaterPlaylist.innerHTML = list.length > 1 ? list.map((item, idx) => `
      <button type="button" class="modal-playlist-item${idx === startIndex ? " is-active" : ""}" data-idx="${idx}">
        <img src="${item.poster || ""}" alt="${item.title || "Video thumbnail"}" loading="lazy">
        <span>${item.title}</span>
      </button>
    `).join("") : "";

    theaterPlaylist.querySelectorAll(".modal-playlist-item").forEach((btn) => {
      btn.addEventListener("click", () => renderItem(Number(btn.dataset.idx)));
    });

    theaterModal.hidden = false;
    document.body.style.overflow = "hidden";
    renderItem(startIndex);
  },
  close() {
    theaterVideo.pause();
    theaterVideo.removeAttribute("src");
    theaterVideo.load();
    theaterModal.hidden = true;
    document.body.style.overflow = "";
  }
};

document.getElementById("theater-close").addEventListener("click", () => window.NanviTheater.close());
theaterModal.addEventListener("click", (e) => { if (e.target === theaterModal) window.NanviTheater.close(); });

const articleModal = document.getElementById("nanvi-article-modal");
const articleDate = document.getElementById("article-date");
const articleTitle = document.getElementById("article-title");
const articleMediaSlot = document.getElementById("article-media-slot");
const articleBody = document.getElementById("article-body");
const articleWatchBtn = document.getElementById("article-watch-btn");
const articleSwitcher = document.getElementById("article-switcher");
const articleCtaLink = document.getElementById("article-cta-link");
let activeArticleVideo = null;

window.NanviInsights = {
  open(post, allPosts = null, startIndex = 0) {
    const list = Array.isArray(allPosts) && allPosts.length ? allPosts : [post];
    const renderPost = (idx) => {
      const current = list[idx] || list[0];
      articleDate.textContent = current.date || "NANVI.AI INSIGHTS";
      articleTitle.textContent = current.title;
      articleMediaSlot.innerHTML = current.img
        ? `<img src="${current.img}" alt="${current.title}" style="width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:14px;border:1px solid rgba(56,189,248,0.3);margin-bottom:16px;">`
        : "";
      articleBody.innerHTML = current.body;
      activeArticleVideo = current.video || null;
      articleWatchBtn.hidden = !activeArticleVideo;
      if (articleCtaLink) {
        articleCtaLink.href = "contact.html?subject=" + encodeURIComponent(current.title);
      }
      articleSwitcher.querySelectorAll(".modal-playlist-item").forEach((btn, i) => {
        btn.classList.toggle("is-active", i === idx);
      });
    };

    articleSwitcher.innerHTML = list.length > 1 ? list.map((p, idx) => `
      <button type="button" class="modal-playlist-item${idx === startIndex ? " is-active" : ""}" data-idx="${idx}">
        <img src="${p.img || ""}" alt="${p.title}" loading="lazy">
        <span>${p.title}</span>
      </button>
    `).join("") : "";
    articleSwitcher.hidden = list.length <= 1;

    articleSwitcher.querySelectorAll(".modal-playlist-item").forEach((btn) => {
      btn.addEventListener("click", () => renderPost(Number(btn.dataset.idx)));
    });

    renderPost(startIndex);
    articleModal.hidden = false;
    document.body.style.overflow = "hidden";
  },
  close() {
    articleModal.hidden = true;
    document.body.style.overflow = "";
  }
};

articleWatchBtn.addEventListener("click", () => {
  const vid = activeArticleVideo;
  window.NanviInsights.close();
  if (vid) window.NanviTheater.open(vid, 0);
});
document.getElementById("article-close").addEventListener("click", () => window.NanviInsights.close());
articleModal.addEventListener("click", (e) => { if (e.target === articleModal) window.NanviInsights.close(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!theaterModal.hidden) window.NanviTheater.close();
    if (!articleModal.hidden) window.NanviInsights.close();
  }
});

// ===========================================================================
// Scroll Reveal + Tabs + Smart Hover/Intersection Video Controller
// ===========================================================================
const revealItems = document.querySelectorAll(
  ".stats-strip .stat-glass, .service-glass-card, .industry-card, .bento-card, .project-card, .service-card, .value-card, .demo"
);

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: "0px 0px 100px 0px" });

  revealItems.forEach((el, index) => {
    el.classList.add("scroll-reveal");
    el.style.setProperty("--reveal-delay", `${(index % 4) * 45}ms`);
    revealObserver.observe(el);
  });

  // Safety fallback so anchor jumps never leave any card invisible
  setTimeout(() => {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }, 1100);
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}

// Tabs (used on About page)
document.querySelectorAll("[data-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("[data-tab]").forEach((btn) => {
      btn.setAttribute("aria-selected", String(btn === tab));
      btn.tabIndex = btn === tab ? 0 : -1;
    });
    document.querySelectorAll("[data-tab-panel]").forEach((panel) => {
      panel.hidden = panel.id !== tab.getAttribute("aria-controls");
    });
  });
});

// Smart video loader for .project-image video elements (autoplay when visible)
const projectVideos = document.querySelectorAll(".project-image video");
if ("IntersectionObserver" in window && projectVideos.length > 0) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const vid = entry.target;
      if (entry.isIntersecting) {
        vid.play().catch(() => { });
      } else {
        vid.pause();
      }
    });
  }, { threshold: 0.2 });
  projectVideos.forEach((v) => videoObserver.observe(v));
}

// Hover-to-play preview helper for industry & video showcase cards
window.bindHoverVideoCards = function (selector) {
  document.querySelectorAll(selector).forEach((card) => {
    const vid = card.querySelector("video");
    if (!vid) return;
    card.addEventListener("mouseenter", () => {
      if (!vid.src && vid.dataset.src) {
        vid.src = vid.dataset.src;
      }
      card.classList.add("is-playing");
      vid.play().catch(() => { });
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("is-playing");
      vid.pause();
    });
  });
};

// ---------------------------------------------------------------------------
// Contact form -> Google Apps Script Web App (email delivery via MailApp)
// ---------------------------------------------------------------------------
const NANVI_CONTACT_ENDPOINT = "https://script.google.com/macros/s/AKfycbzdcSTz3Wi37k3nA6ug8Rz6Y_0qHbdxcI8_m-KqzSisnry5UtILKgY-Mf_AIoKG0GwV9A/exec";
const NANVI_PAGE_LOADED_AT = Date.now();
const NANVI_COOLDOWN_MS = 60000;

window.NanviContact = {
  async send(fields) {
    if (!/^https:\/\/script\.google\.com\/(?:a\/macros\/[^/]+|macros)\/s\/[^/]+\/exec$/.test(NANVI_CONTACT_ENDPOINT.trim())) {
      return { success: false, message: "The contact form is not connected yet. Please email us directly." };
    }
    try {
      if (Date.now() - Number(localStorage.getItem("nanvi_contact_last") || 0) < NANVI_COOLDOWN_MS) {
        return { success: false, message: "Please wait a minute before sending another message." };
      }
    } catch (_) { /* storage unavailable: skip cooldown */ }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch(NANVI_CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...fields, elapsedMs: Date.now() - NANVI_PAGE_LOADED_AT }),
        redirect: "follow",
        signal: controller.signal
      });
      const result = await response.json();
      if (result && result.success) {
        try { localStorage.setItem("nanvi_contact_last", String(Date.now())); } catch (_) { }
        return { success: true, message: result.message };
      }
      return { success: false, message: (result && result.message) || "Unable to send your message. Please try again.", field: result && result.field };
    } catch (error) {
      console.error("Contact form request failed:", error);
      return {
        success: false,
        message: error.name === "AbortError"
          ? "The request timed out. Please check your connection and try again."
          : "Could not reach the server. Please check your connection and try again."
      };
    } finally {
      clearTimeout(timer);
    }
  }
};

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  const urlSubject = new URLSearchParams(location.search).get("subject");
  if (urlSubject && contactForm.elements["subject"] && !contactForm.elements["subject"].value) {
    contactForm.elements["subject"].value = urlSubject.slice(0, 150);
  }
  const initialSubject = (contactForm.elements["subject"]?.value || "").toLowerCase();
  if (initialSubject) {
    document.querySelectorAll("[data-subject-fill]").forEach((chip) => {
      const fill = (chip.dataset.subjectFill || "").toLowerCase();
      if (fill === initialSubject || (initialSubject.includes("robotics as a service") && fill.includes("robotics as a service"))) {
        chip.classList.add("is-selected");
      }
    });
  }
  document.querySelectorAll("[data-subject-fill]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const target = contactForm.elements["subject"];
      if (!target) return;
      target.value = chip.dataset.subjectFill;
      document.querySelectorAll("[data-subject-fill]").forEach((c) => c.classList.toggle("is-selected", c === chip));
      if (target.classList.contains("is-invalid")) {
        target.dispatchEvent(new Event("input"));
      }
      contactForm.elements["message"]?.focus();
    });
  });
  const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  const rules = {
    name: (v) => v.length < 2 ? "Please enter your full name." : v.length > 100 ? "Name must be 100 characters or fewer." : "",
    email: (v) => !v ? "Email address is required." : (v.length > 254 || !EMAIL_RE.test(v)) ? "Please enter a valid email address." : "",
    subject: (v) => v.length < 3 ? "Please enter a subject." : v.length > 150 ? "Subject must be 150 characters or fewer." : "",
    message: (v) => v.length < 10 ? "Please enter a message (at least 10 characters)." : v.length > 5000 ? "Message must be 5,000 characters or fewer." : ""
  };
  const submitBtn = contactForm.querySelector("#contact-submit");
  const btnText = submitBtn.querySelector(".btn-text");
  const idleBtnText = btnText ? btnText.textContent : "Send Message";
  const alertBox = contactForm.querySelector("#contact-alert");

  const fieldEl = (name) => contactForm.elements[name];
  const valueOf = (name) => fieldEl(name).value.trim();

  function showError(name, message) {
    const input = fieldEl(name);
    const out = contactForm.querySelector("#err-" + name);
    out.textContent = message;
    input.classList.toggle("is-invalid", Boolean(message));
    if (message) input.setAttribute("aria-invalid", "true"); else input.removeAttribute("aria-invalid");
    return !message;
  }
  const checkField = (name) => showError(name, rules[name](valueOf(name)));

  function showAlert(type, message) {
    alertBox.hidden = false;
    alertBox.className = "form-alert " + type;
    alertBox.textContent = message;
  }

  function setSending(isSending) {
    submitBtn.disabled = isSending;
    submitBtn.classList.toggle("is-loading", isSending);
    submitBtn.setAttribute("aria-busy", String(isSending));
    if (btnText) btnText.textContent = isSending ? "Sending..." : idleBtnText;
  }

  Object.keys(rules).forEach((name) => {
    fieldEl(name).addEventListener("blur", () => checkField(name));
    fieldEl(name).addEventListener("input", () => {
      if (fieldEl(name).classList.contains("is-invalid")) checkField(name);
    });
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submitBtn.disabled) return;
    alertBox.hidden = true;

    const invalid = Object.keys(rules).filter((name) => !checkField(name));
    if (invalid.length) {
      fieldEl(invalid[0]).focus();
      showAlert("error", "Please correct the highlighted fields and try again.");
      return;
    }

    setSending(true);
    const result = await window.NanviContact.send({
      name: valueOf("name"),
      email: valueOf("email"),
      subject: valueOf("subject"),
      message: valueOf("message"),
      website: fieldEl("website").value
    });
    setSending(false);

    if (result.success) {
      contactForm.reset();
      Object.keys(rules).forEach((name) => showError(name, ""));
      showAlert("success", "Thank you! Your message has been sent. The Nanvi team will contact you soon.");
    } else {
      if (result.field && rules[result.field]) showError(result.field, result.message);
      showAlert("error", result.message);
    }
  });
}
