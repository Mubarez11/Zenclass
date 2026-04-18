/* ============================================
   ZenClass Radial Axes Menu
   Vanilla JS - No Dependencies
   ============================================ */

(function() {
  'use strict';

  const AXES_DATA = [
    {
      id: "axe-1",
      shortLabel: "Axe 1",
      title: "Comprendre le lien émotions / bien-être / apprentissages",
      description: "Explorer les relations entre émotions, bien-être et apprentissages",
      color: "#667eea",
      icon: "brain",
      objectives: [
        { id: "obj-1", label: "Objectif 1", title: "Indiquer les postures qui ont un impact sur l'émergence du stress." },
        { id: "obj-2", label: "Objectif 2", title: "Expliquer le rôle des émotions dans les apprentissages et le bien-être des élèves." },
        { id: "obj-3", label: "Objectif 3", title: "Reconnaître en soi et chez les autres les signaux verbaux et non verbaux précurseurs de stress." }
      ]
    },
    {
      id: "axe-2",
      shortLabel: "Axe 2",
      title: "Détecter pour prévenir",
      description: "Repérer les signes précurseurs de stress",
      color: "#63b3ed",
      icon: "eye",
      objectives: [
        { id: "obj-1", label: "Objectif 1", title: "Reconnaître chez les autres les signaux verbaux et non verbaux précurseurs de stress." },
        { id: "obj-2", label: "Objectif 2", title: "Repérer les signes de stress chez un élève." },
        { id: "obj-3", label: "Objectif 3", title: "Reformuler les consignes stressantes en consignes neutres." }
      ]
    },
    {
      id: "axe-3",
      shortLabel: "Axe 3",
      title: "Communiquer de manière émotionnellement soutenante",
      description: "Adopter une communication apaisante",
      color: "#4facfe",
      icon: "message",
      objectives: [
        { id: "obj-1", label: "Objectif 1", title: "Moduler sa voix pour apaiser un échange." },
        { id: "obj-2", label: "Objectif 2", title: "Intervenir rapidement et de manière adaptée lorsque le contexte de classe le demande afin d'apaiser les élèves." },
        { id: "obj-3", label: "Objectif 3", title: "Adopter une posture d'écoute active lors d'un échange avec un élève." }
      ]
    },
    {
      id: "axe-4",
      shortLabel: "Axe 4",
      title: "Agir sur le climat et le bien-être global",
      description: "Améliorer l'ambiance collective",
      color: "#9f7aea",
      icon: "users",
      objectives: [
        { id: "obj-1", label: "Objectif 1", title: "Détecter les comportements des élèves qui risquent de stresser ses camarades." },
        { id: "obj-2", label: "Objectif 2", title: "Encourager les élèves à agir entre eux de manière plus soutenante." },
        { id: "obj-3", label: "Objectif 3", title: "Organiser une entrée matinale, les moments autour des pauses et des récréations, ainsi que la fin de journée pour instaurer une ambiance sécurisante." }
      ]
    }
  ];

  const ICONS = {
    brain: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>',
    message: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
    compass: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',
    arrow: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>'
  };

  function createRadialAxes(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error('RadialAxes: Container not found');
      return;
    }

    let activeAxe = null;

    // Create main element
    const el = document.createElement('div');
    el.className = 'radial-axes';

    // Center button
    const center = document.createElement('div');
    center.className = 'radial-axes__center';
    center.innerHTML = `<div class="radial-axes__center-icon">${ICONS.compass}</div>`;
    el.appendChild(center);

    // Orbit
    const orbit = document.createElement('div');
    orbit.className = 'radial-axes__orbit';
    el.appendChild(orbit);

    // Ring
    const ring = document.createElement('div');
    ring.className = 'radial-axes__ring';
    el.appendChild(ring);

    // Items container
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'radial-axes__container';

    // Create axe items
    const angleStep = 360 / AXES_DATA.length;
    AXES_DATA.forEach((axe, index) => {
      const angle = (index * angleStep - 90) * (Math.PI / 180);
      const radius = 110; // half of --ra-orbit-size
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      const item = document.createElement('div');
      item.className = `radial-axes__item radial-axes__item--${axe.id}`;
      item.innerHTML = ICONS[axe.icon] || ICONS.brain;
      item.style.left = `calc(50% + ${x}px - var(--ra-icon-size) / 2)`;
      item.style.top = `calc(50% + ${y}px - var(--ra-icon-size) / 2)`;
      item.dataset.axeId = axe.id;

      item.addEventListener('click', () => openAxeModal(axe));
      itemsContainer.appendChild(item);
    });

    el.appendChild(itemsContainer);
    container.appendChild(el);

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'radial-axes-modal';
    modal.id = 'radialAxeModal';
    modal.innerHTML = `
      <div class="radial-axes-modal__backdrop"></div>
      <div class="radial-axes-modal__content">
        <div class="radial-axes-modal__header">
          <div class="radial-axes-modal__title">
            <div class="radial-axes-modal__title-icon"></div>
            <h2></h2>
          </div>
          <button class="radial-axes-modal__close">${ICONS.close}</button>
        </div>
        <div class="radial-axes-modal__body">
          <div class="radial-axes-modal__objectives"></div>
        </div>
        <div class="radial-axes-modal__footer">
          <a class="radial-axes-modal__link" href="#">
            Accéder à l'axe complet
            ${ICONS.arrow}
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Event listeners
    const backdrop = modal.querySelector('.radial-axes-modal__backdrop');
    const closeBtn = modal.querySelector('.radial-axes-modal__close');

    backdrop.addEventListener('click', closeAxeModal);
    closeBtn.addEventListener('click', closeAxeModal);

    function openAxeModal(axe) {
      activeAxe = axe;
      const titleIcon = modal.querySelector('.radial-axes-modal__title-icon');
      const title = modal.querySelector('.radial-axes-modal__title h2');
      const objectivesEl = modal.querySelector('.radial-axes-modal__objectives');
      const link = modal.querySelector('.radial-axes-modal__link');

      titleIcon.style.background = axe.color;
      titleIcon.innerHTML = ICONS[axe.icon] || ICONS.brain;
      title.textContent = axe.title;

      objectivesEl.innerHTML = axe.objectives.map((obj, i) => `
        <a class="radial-axes-modal__objective" href="objectif.html?axe=${axe.id}&objectif=${obj.id}">
          <div class="radial-axes-modal__objective-num" style="background: ${axe.color}33; color: ${axe.color}">
            ${i + 1}
          </div>
          <div class="radial-axes-modal__objective-text">
            <h3>${obj.label}: ${obj.title.split('.')[0]}</h3>
            <p>${obj.title}</p>
          </div>
        </a>
      `).join('');

      link.href = `plateforme-etudiante-zenclass-axe.html?axe=${axe.id}`;

      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeAxeModal() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      activeAxe = null;
    }

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeAxeModal();
      }
    });

    return {
      element: el,
      open: openAxeModal,
      close: closeAxeModal
    };
  }

  window.RadialAxes = { create: createRadialAxes };
})();
