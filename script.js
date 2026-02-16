/* =========================================================
   Abir Hasan Fuad — Portfolio JS
   - Mobile nav toggle
   - Reveal on scroll (IntersectionObserver)
   - Scroll-to-top button
   - Current year
   ========================================================= */

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Current year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const navToggle = $(".nav__toggle");
  const navList = $("#navList");

  const setNavOpen = (open) => {
    if (!navToggle || !navList) return;
    navList.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const open = !navList.classList.contains("is-open");
      setNavOpen(open);
    });

    // Close menu when clicking a link
    $$(".nav__link", navList).forEach((link) => {
      link.addEventListener("click", () => setNavOpen(false));
    });

    // Close menu on outside click
    document.addEventListener("click", (e) => {
      const isClickInside = navList.contains(e.target) || navToggle.contains(e.target);
      if (!isClickInside) setNavOpen(false);
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setNavOpen(false);
    });
  }

  // Reveal on scroll
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => io.observe(el));
  } else {
    // Fallback: show all
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Scroll-to-top button
  const toTopBtn = $(".toTop");
  const onScroll = () => {
    if (!toTopBtn) return;
    const show = window.scrollY > 520;
    toTopBtn.classList.toggle("is-visible", show);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
