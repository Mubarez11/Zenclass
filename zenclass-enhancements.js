(function () {
  const body = document.body;

  if (!body) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const surfaceSelectors = [
    ".hero-card",
    ".hero-panel",
    ".section-card",
    ".library-panel",
    ".axis-panel",
    ".panel",
    ".deck-card",
    ".board-card",
    ".result-card",
    ".resource-column",
    ".footer-brand",
    ".axis-card",
    ".module-card",
    ".portal-card",
    ".resource-card",
    ".forum-card",
    ".team-card",
    ".objective-card",
    ".interactive-stage-card",
    ".zen-interactive-card",
    ".zen-doc-card",
    ".zen-activity-card",
    ".metric-card",
    ".activity-card",
    ".current-card",
    ".placed-item",
    ".zone",
    ".quiz-card",
    ".results-card",
    ".evaluation-form",
    ".breathing-exercise",
    ".breathing-benefits",
    ".category",
    ".roleplay-intro",
    ".roleplay-tips",
    ".card-deck"
  ].join(",");
  const revealSelectors = [
    ".hero-card",
    ".hero-panel",
    ".section-card",
    ".library-panel",
    ".axis-panel",
    ".deck-card",
    ".board-card",
    ".result-card",
    ".resource-column",
    ".footer-brand",
    ".axis-card",
    ".module-card",
    ".portal-card",
    ".resource-card",
    ".forum-card",
    ".team-card",
    ".objective-card",
    ".interactive-stage-card",
    ".zen-interactive-card",
    ".zen-doc-card",
    ".zen-activity-card",
    ".metric-card",
    ".activity-card",
    ".current-card",
    ".placed-item",
    ".zone",
    ".quiz-card",
    ".results-card",
    ".evaluation-form",
    ".breathing-exercise",
    ".breathing-benefits",
    ".category",
    ".roleplay-intro",
    ".roleplay-tips",
    ".card-deck"
  ].join(",");
  const lateralRevealSelector = [
    ".axis-card",
    ".module-card",
    ".portal-card",
    ".resource-card",
    ".forum-card",
    ".team-card",
    ".objective-card",
    ".zen-interactive-card",
    ".zen-doc-card",
    ".zen-activity-card",
    ".activity-card",
    ".current-card",
    ".placed-item",
    ".category",
    ".zone"
  ].join(",");
  const flipSelectors = [
    ".team-card",
    ".forum-card",
    ".zen-interactive-card",
    ".resource-card",
    ".objective-card",
    ".activity-card",
    ".current-card",
    ".card-deck"
  ].join(",");
  const revealObserver = !prefersReducedMotion && "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      }, {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14
      })
    : null;

  function unique(elements) {
    return Array.from(new Set(elements));
  }

  function isNearViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.92;
  }

  function decorateSurfaces(root) {
    unique(Array.from(root.querySelectorAll(surfaceSelectors))).forEach(function (element) {
      if (element.dataset.zcSurfaceBound === "true") {
        return;
      }

      element.dataset.zcSurfaceBound = "true";
      element.classList.add("zc-surface");
      element.style.setProperty("--zc-pointer-x", "50%");
      element.style.setProperty("--zc-pointer-y", "50%");

      if (element.matches(flipSelectors)) {
        const siblingIndex = element.parentElement ? Array.from(element.parentElement.children).indexOf(element) : 0;
        element.classList.add("zc-flip-card");
        element.style.setProperty("--zc-flip-tilt", (siblingIndex % 2 === 0 ? 4.5 : -4.5) + "deg");
      }

      if (!supportsFinePointer || prefersReducedMotion) {
        return;
      }

      element.addEventListener("pointermove", function (event) {
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        element.style.setProperty("--zc-pointer-x", x.toFixed(2) + "%");
        element.style.setProperty("--zc-pointer-y", y.toFixed(2) + "%");
      });

      element.addEventListener("pointerleave", function () {
        element.style.setProperty("--zc-pointer-x", "50%");
        element.style.setProperty("--zc-pointer-y", "50%");
      });
    });
  }

  function decorateReveal(root) {
    unique(Array.from(root.querySelectorAll(revealSelectors))).forEach(function (element, index) {
      if (element.dataset.zcRevealBound === "true") {
        return;
      }

      element.dataset.zcRevealBound = "true";
      element.classList.add("zc-reveal");
      element.style.setProperty("--zc-delay", (index % 6) * 55 + "ms");

      if (element.matches(lateralRevealSelector)) {
        element.classList.add(index % 2 === 0 ? "zc-reveal-left" : "zc-reveal-right");
      }

      if (prefersReducedMotion || isNearViewport(element) || !revealObserver) {
        element.classList.add("is-visible");
        return;
      }

      revealObserver.observe(element);
    });
  }

  function updateScrollProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    body.style.setProperty("--zc-scroll-progress", percent.toFixed(2) + "%");
  }

  function clearAutoActive() {
    document.querySelectorAll("[data-zc-auto-active='true']").forEach(function (link) {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
      delete link.dataset.zcAutoActive;
    });
  }

  function autoActivate(selector) {
    const link = document.querySelector(selector);

    if (!link) {
      return;
    }

    link.classList.add("active");
    link.setAttribute("aria-current", "page");
    link.dataset.zcAutoActive = "true";
  }

  function autoActivateInDropdown(parentSelector, matcher) {
    const parent = document.querySelector(parentSelector);

    if (!parent) {
      return;
    }

    const dropdown = parent.closest(".nav-dropdown");

    if (!dropdown) {
      return;
    }

    const link = Array.from(dropdown.querySelectorAll(".dropdown-menu a")).find(function (item) {
      return matcher(item);
    });

    if (!link) {
      return;
    }

    link.classList.add("active");
    link.setAttribute("aria-current", "page");
    link.dataset.zcAutoActive = "true";
  }

  function syncNavigationState() {
    clearAutoActive();

    const fileName = window.location.pathname.split("/").pop() || "plateforme-etudiante-zenclass.html";
    const axisId = new URLSearchParams(window.location.search).get("axe");

    if (fileName === "plateforme-etudiante-zenclass-progression.html") {
      autoActivate(".nav-link-progress");
      return;
    }

    if (fileName === "plateforme-etudiante-zenclass-ressources-theoriques.html") {
      autoActivate(".nav-link-theory");

      if (axisId) {
        autoActivateInDropdown(".nav-link-theory", function (link) {
          return link.getAttribute("href") === "plateforme-etudiante-zenclass-ressources-theoriques.html?axe=" + axisId;
        });
      }
      return;
    }

    if (/^(plateforme-etudiante-zenclass-axe|objectif|activite)\.html$/.test(fileName)) {
      autoActivate(".nav-link-parcours");

      if (axisId) {
        autoActivateInDropdown(".nav-link-parcours", function (link) {
          return link.getAttribute("href") === "plateforme-etudiante-zenclass-axe.html?axe=" + axisId;
        });
      }
      return;
    }

    if (/^(quiz|auto-evaluation|respiration|classification|jeu-roles)\.html$/.test(fileName)) {
      autoActivate(".nav-link-interactif");
      autoActivateInDropdown(".nav-link-interactif", function (link) {
        return link.getAttribute("href") === fileName;
      });
      return;
    }

    if (fileName === "ma-classe.html") {
      autoActivate(".nav-link-class");
      return;
    }

    if (fileName === "plateforme-etudiante-zenclass.html") {
      const sections = [
        { id: "parcours", selector: ".nav-link-parcours" },
        { id: "ressources-theoriques", selector: ".nav-link-theory" },
        { id: "forum", selector: ".nav-link-forum" },
        { id: "equipe", selector: ".nav-link-team" }
      ];
      let activeSection = sections[0];
      let bestOffset = Number.POSITIVE_INFINITY;

      sections.forEach(function (entry) {
        const section = document.getElementById(entry.id);

        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();
        const offset = Math.abs(rect.top - 150);

        if (rect.top <= window.innerHeight * 0.55 && offset < bestOffset) {
          bestOffset = offset;
          activeSection = entry;
        }
      });

      autoActivate(activeSection.selector);
    }
  }

  function decorate(root) {
    decorateSurfaces(root);
    decorateReveal(root);
    syncNavigationState();
  }

  decorate(document);
  updateScrollProgress();

  let ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(function () {
      updateScrollProgress();
      syncNavigationState();
      ticking = false;
    });
  }, { passive: true });

  window.addEventListener("resize", function () {
    updateScrollProgress();
    syncNavigationState();
  });

  const mutationObserver = new MutationObserver(function () {
    decorate(document);
  });

  mutationObserver.observe(body, {
    childList: true,
    subtree: true
  });
}());
