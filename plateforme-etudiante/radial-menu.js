(function() {
  'use strict';

  const SVG_ICONS = {
    user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>`,
    video: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="10 8 16 12 10 16 10 8"/>
    </svg>`,
    article: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>`,
    podcast: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </svg>`
  };

  const DEFAULT_CONFIG = {
    size: 300,
    centerSize: 80,
    iconSize: 48,
    rotationDuration: 20,
    pulseDuration: 2,
    items: [
      { id: 'video', label: 'Video', icon: 'video' },
      { id: 'article', label: 'Article', icon: 'article' },
      { id: 'podcast', label: 'Podcast', icon: 'podcast' }
    ],
    onItemClick: null,
    centerIcon: 'user'
  };

  function createRadialMenu(container, config = {}) {
    const settings = { ...DEFAULT_CONFIG, ...config };

    const menuEl = document.createElement('div');
    menuEl.className = 'radial-menu';
    menuEl.style.setProperty('--rm-size', `${settings.size}px`);
    menuEl.style.setProperty('--rm-center-size', `${settings.centerSize}px`);
    menuEl.style.setProperty('--rm-icon-size', `${settings.iconSize}px`);
    menuEl.style.setProperty('--rm-rotation-duration', `${settings.rotationDuration}s`);
    menuEl.style.setProperty('--rm-pulse-duration', `${settings.pulseDuration}s`);

    const orbit = document.createElement('div');
    orbit.className = 'radial-menu__orbit';

    const ring1 = document.createElement('div');
    ring1.className = 'radial-menu__ring';

    const ring2 = document.createElement('div');
    ring2.className = 'radial-menu__ring';

    const center = document.createElement('div');
    center.className = 'radial-menu__center';
    center.innerHTML = `<div class="radial-menu__center-icon">${SVG_ICONS[settings.centerIcon]}</div>`;

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'radial-menu__container';

    const angleStep = 360 / settings.items.length;

    settings.items.forEach((item, index) => {
      const itemEl = document.createElement('div');
      itemEl.className = `radial-menu__item radial-menu__item--${item.id}`;
      itemEl.dataset.id = item.id;

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'radial-menu__icon-wrapper';
      iconWrapper.innerHTML = SVG_ICONS[item.icon] || '';

      const label = document.createElement('span');
      label.className = 'radial-menu__label';
      label.textContent = item.label;

      itemEl.appendChild(iconWrapper);
      itemEl.appendChild(label);

      if (settings.onItemClick && typeof settings.onItemClick === 'function') {
        itemEl.addEventListener('click', () => {
          settings.onItemClick(item.id, item);
        });
      }

      itemsContainer.appendChild(itemEl);
    });

    menuEl.appendChild(orbit);
    menuEl.appendChild(ring1);
    menuEl.appendChild(ring2);
    menuEl.appendChild(center);
    menuEl.appendChild(itemsContainer);

    if (container) {
      if (typeof container === 'string') {
        const target = document.querySelector(container);
        if (target) {
          target.appendChild(menuEl);
        } else {
          console.error(`RadialMenu: Container "${container}" not found`);
        }
      } else if (container.appendChild) {
        container.appendChild(menuEl);
      }
    }

    return {
      element: menuEl,
      update: function(newConfig) {
        Object.assign(settings, newConfig);
        menuEl.style.setProperty('--rm-size', `${settings.size}px`);
        menuEl.style.setProperty('--rm-center-size', `${settings.centerSize}px`);
        menuEl.style.setProperty('--rm-icon-size', `${settings.iconSize}px`);
        menuEl.style.setProperty('--rm-rotation-duration', `${settings.rotationDuration}s`);
        menuEl.style.setProperty('--rm-pulse-duration', `${settings.pulseDuration}s`);
      },
      destroy: function() {
        if (menuEl.parentNode) {
          menuEl.parentNode.removeChild(menuEl);
        }
      }
    };
  }

  window.RadialMenu = {
    create: createRadialMenu,
    icons: SVG_ICONS
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RadialMenu, SVG_ICONS };
  }
})();
