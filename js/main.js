(function () {
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

  const embedUrl = (work) => {
    if (work.type === "vimeo") {
      return `https://player.vimeo.com/video/${work.id}`;
    }
    return `https://www.youtube.com/embed/${work.id}?autoplay=1&rel=0`;
  };

  const thumbUrl = (work) => {
    if (work.thumbnail) return work.thumbnail;
    if (work.type === "youtube" && work.id) {
      return `https://i.ytimg.com/vi/${work.id}/hqdefault.jpg`;
    }
    return "assets/placeholder-video.svg";
  };

  // ---- Nav ----
  const navToggle = $("#nav-toggle");
  const navLinks = $("#nav-links");
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  $$("#nav-links a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  // ---- Header scroll ----
  const header = $(".nav");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Basic info ----
  $("#logo-text").textContent = SITE.name;
  $("#footer-name").textContent = SITE.name;
  $("#year").textContent = SITE.year;
  document.title = `${SITE.name} — Video Editor Portfolio`;
  $("#hero-lead").textContent = SITE.hero.lead;
  $("#about-body").textContent = SITE.about.body;
  if (SITE.hero.avatar) $("#hero-avatar").src = SITE.hero.avatar;
  if (SITE.about.image) $("#about-img").src = SITE.about.image;

  // ---- Hero stats ----
  $("#hero-stats").innerHTML = SITE.hero.stats
    .map(
      (s) => `
      <div class="stat">
        <span class="stat-num">${s.number}</span>
        <span class="stat-label">${s.label}</span>
      </div>`
    )
    .join("");

  // ---- Skills ----
  $("#skills").innerHTML = SITE.about.skills
    .map(
      (s) => `
      <div class="skill">
        <div class="skill-head"><span>${s.name}</span><span>${s.level}%</span></div>
        <div class="skill-bar"><span style="width:${s.level}%"></span></div>
      </div>`
    )
    .join("");

  // ---- Services ----
  $("#services-grid").innerHTML = SITE.services
    .map(
      (s) => `
      <article class="card service-card">
        <div class="service-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </article>`
    )
    .join("");

  // ---- Contact ----
  const cta = [];
  if (SITE.contact.whatsapp) {
    cta.push(
      `<a class="btn" target="_blank" rel="noopener" href="https://wa.me/${SITE.contact.whatsapp}">${SITE.contact.whatsappText || "WhatsApp"}</a>`
    );
  }
  if (SITE.contact.email) {
    cta.push(
      `<a class="btn btn-ghost" href="mailto:${SITE.contact.email}">Email</a>`
    );
  }
  if (SITE.contact.instagram) {
    cta.push(
      `<a class="btn btn-ghost" target="_blank" rel="noopener" href="https://instagram.com/${SITE.contact.instagram}">Instagram</a>`
    );
  }
  if (SITE.contact.youtube) {
    cta.push(
      `<a class="btn btn-ghost" target="_blank" rel="noopener" href="https://youtube.com/${SITE.contact.youtube}">YouTube</a>`
    );
  }
  $("#cta-actions").innerHTML = cta.join("");

  // ---- Footer links ----
  const fl = [];
  if (SITE.contact.instagram)
    fl.push(`<a target="_blank" rel="noopener" href="https://instagram.com/${SITE.contact.instagram}">Instagram</a>`);
  if (SITE.contact.youtube)
    fl.push(`<a target="_blank" rel="noopener" href="https://youtube.com/${SITE.contact.youtube}">YouTube</a>`);
  if (SITE.contact.email)
    fl.push(`<a href="mailto:${SITE.contact.email}">Email</a>`);
  $("#footer-links").innerHTML = fl.join("");

  // ---- Works + filter ----
  const grid = $("#works-grid");
  const filtersEl = $("#filters");
  let activeFilter = "Semua";

  const categories = SITE.filterCategories.length
    ? SITE.filterCategories
    : ["Semua", ...Array.from(new Set(SITE.works.map((w) => w.category).filter(Boolean)))];

  function renderFilters() {
    filtersEl.innerHTML = categories
      .map(
        (c) =>
          `<button class="filter-btn ${c === activeFilter ? "active" : ""}" data-cat="${c}">${c}</button>`
      )
      .join("");
    $$(".filter-btn", filtersEl).forEach((btn) =>
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.cat;
        renderFilters();
        renderWorks();
      })
    );
  }

  function renderWorks() {
    const list = SITE.works.filter(
      (w) => activeFilter === "Semua" || w.category === activeFilter
    );
    grid.innerHTML = list
      .map(
        (w, i) => `
      <article class="work-card" data-index="${SITE.works.indexOf(w)}">
        <div class="work-thumb">
          <img src="${thumbUrl(w)}" alt="${w.title}" loading="lazy">
          <span class="play-btn" aria-hidden="true">▶</span>
          <span class="work-cat">${w.category || ""}</span>
        </div>
        <div class="work-info">
          <h3>${w.title}</h3>
          <p>${w.description || ""}</p>
        </div>
      </article>`
      )
      .join("");
    $$(".work-card", grid).forEach((card) =>
      card.addEventListener("click", () => openModal(SITE.works[card.dataset.index]))
    );
  }

  // ---- Modal ----
  const modal = $("#video-modal");
  const modalBody = $("#modal-body");

  function openModal(work) {
    modalBody.innerHTML = `<iframe src="${embedUrl(work)}" title="${work.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    modalBody.innerHTML = "";
    document.body.style.overflow = "";
  }

  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  renderFilters();
  renderWorks();
})();
