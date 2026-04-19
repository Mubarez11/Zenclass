/* ============================================
   ZenClass Interactive Selector
   Vanilla JS - No Dependencies
   ============================================ */

(function() {
  'use strict';

  const AXES = [
    {
      id: "axe-1",
      title: "Comprendre le lien émotions / bien-être / apprentissages",
      description: "Explorer les relations entre émotions, bien-être et apprentissages",
      color: "#667eea",
      image: "axe 1 se.png"
    },
    {
      id: "axe-2",
      title: "Détecter pour prévenir",
      description: "Repérer les signes précurseurs de stress",
      color: "#63b3ed",
      image: "axe 2 se.png"
    },
    {
      id: "axe-3",
      title: "Communiquer de manière émotionnellement soutenante",
      description: "Adopter une communication apaisante",
      color: "#4facfe",
      image: "axe3 séléctor.png"
    },
    {
      id: "axe-4",
      title: "Agir sur le climat et le bien-être global",
      description: "Améliorer l'ambiance collective",
      color: "#9f7aea",
      image: "image axe 4.png"
    }
  ];

  const ICONS = {
    brain: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>',
    message: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>'
  };

  const AXES_ICONS = ['brain', 'eye', 'message', 'users'];

  class InteractiveSelector {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.activeIndex = 0;
      this.init();
    }

    init() {
      if (!this.container) {
        console.error('Container not found');
        return;
      }
      this.render();
      this.attachEvents();
    }

    render() {
      this.container.innerHTML = `
        <div class="is-wrapper">
          <div class="is-header">
            <h1>Parcours ZenClass</h1>
            <p>Sélectionnez un axe pour découvrir ses objectifs</p>
          </div>
          <div class="is-cards">
            ${AXES.map((axe, index) => this.renderCard(axe, index)).join('')}
          </div>
        </div>
      `;
    }

    renderCard(axe, index) {
      const isActive = index === this.activeIndex;
      const icon = ICONS[AXES_ICONS[index]] || ICONS.brain;
      
      return `
        <div 
          class="is-card ${isActive ? 'active' : ''}" 
          data-index="${index}"
          style="background-image: url('${axe.image}')"
        >
          <div class="is-card-shadow"></div>
          <div class="is-card-label">
            <div class="is-card-icon" style="background: ${axe.color}22; border-color: ${axe.color}44">
              ${icon}
            </div>
            <div class="is-card-info">
              <div class="is-card-title">${axe.title}</div>
              <div class="is-card-desc">${axe.description}</div>
            </div>
          </div>
          <a href="plateforme-etudiante-zenclass-axe.html?axe=${axe.id}" class="is-card-btn">
            Accéder à l'axe
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      `;
    }

    attachEvents() {
      const cards = this.container.querySelectorAll('.is-card');
      
      cards.forEach((card, index) => {
        card.addEventListener('click', () => {
          if (this.activeIndex !== index) {
            this.activeIndex = index;
            this.updateCards();
          }
        });
      });
    }

    updateCards() {
      const cards = this.container.querySelectorAll('.is-card');
      cards.forEach((card, index) => {
        if (index === this.activeIndex) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }
  }

  window.InteractiveSelector = InteractiveSelector;

  document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('interactiveSelector');
    if (container && !window.interactiveSelectorInstance) {
      window.interactiveSelectorInstance = new InteractiveSelector('interactiveSelector');
    }
  });
})();
