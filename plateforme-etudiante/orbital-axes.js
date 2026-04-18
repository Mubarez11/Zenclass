/* ============================================
   ZenClass Orbital Axes Selector
   Canvas-based orbital animation - identical to 21st.dev reference
   ============================================ */

(function() {
  'use strict';

  const AXES = [
    {
      id: "axe-1",
      name: "Comprendre",
      shortName: " Axe 1",
      cat: "Émotions & Bien-être",
      desc: "Explorer les relations entre émotions, bien-être et apprentissages pour mieux accompagner les élèves.",
      color: "#667eea",
      icon: "brain",
      href: "plateforme-etudiante-zenclass-axe.html?axe=axe-1",
      angle: 270
    },
    {
      id: "axe-2",
      name: "Détecter",
      shortName: " Axe 2",
      cat: "Prévention du stress",
      desc: "Repérer les signes précurseurs de stress chez les élèves pour intervenir précocement.",
      color: "#63b3ed",
      icon: "eye",
      href: "plateforme-etudiante-zenclass-axe.html?axe=axe-2",
      angle: 0
    },
    {
      id: "axe-3",
      name: "Communiquer",
      shortName: " Axe 3",
      cat: "Communication soutenante",
      desc: "Adopter une communication apaisante et empathique pour créer un climat de confiance.",
      color: "#4facfe",
      icon: "message",
      href: "plateforme-etudiante-zenclass-axe.html?axe=axe-3",
      angle: 90
    },
    {
      id: "axe-4",
      name: "Agir",
      shortName: " Axe 4",
      cat: "Climat & Bien-être global",
      desc: "Améliorer l'ambiance collective et le bien-être de tous dans la classe.",
      color: "#9f7aea",
      icon: "users",
      href: "plateforme-etudiante-zenclass-axe.html?axe=axe-4",
      angle: 180
    }
  ];

  const ICONS = {
    brain: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>`,
    eye: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>`,
    message: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
  };

  const ORB_R = 160;
  let rotation = 0;
  let hovIdx = -1;
  let paused = false;
  const nodePos = [];
  let canvas, ctx, W, H, cx, cy;

  function toRgb(hex) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!m) return null;
    return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
  }

  function withAlpha(hex, a) {
    const rgb = toRgb(hex);
    return rgb ? `rgba(${rgb.r},${rgb.g},${rgb.b},${a})` : hex;
  }

  function contrastText(hex) {
    const rgb = toRgb(hex);
    if (!rgb) return '#fff';
    const yiq = ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;
    return yiq >= 150 ? '#121212' : '#FFFFFF';
  }

  function initOrbital() {
    canvas = document.getElementById('orbitalAxesCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    W = canvas.width;
    H = canvas.height;
    cx = W / 2;
    cy = H / 2;

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    updatePanel(-1);
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const active = hovIdx >= 0 ? AXES[hovIdx] : null;
    const orbColor = active ? withAlpha(active.color, 0.35) : 'rgba(102, 126, 234, 0.15)';

    // Orbit ring
    ctx.beginPath();
    ctx.arc(cx, cy, ORB_R, 0, Math.PI * 2);
    ctx.strokeStyle = orbColor;
    ctx.lineWidth = active ? 2.5 : 1.5;
    ctx.setLineDash([5, 10]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Center circle background
    ctx.beginPath();
    ctx.arc(cx, cy, 52, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(26, 26, 46, 0.95)';
    ctx.fill();
    ctx.strokeStyle = active ? withAlpha(active.color, 0.6) : 'rgba(102, 126, 234, 0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Center logo image
    const logoImg = new Image();
    logoImg.src = 'logo zenclasse reworked.png';
    if (logoImg.complete && logoImg.naturalWidth > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, 44, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(logoImg, cx - 44, cy - 44, 88, 88);
      ctx.restore();
    } else {
      // Fallback text if image not loaded
      ctx.font = 'italic 400 32px "DM Serif Display", serif';
      ctx.fillStyle = active ? withAlpha(active.color, 0.95) : 'rgba(163, 154, 249, 0.85)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Zen', cx, cy - 6);
      ctx.font = '700 8px "Space Grotesk", sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fillText('CLASS', cx, cy + 18);
    }

    // Draw axes
    AXES.forEach((axe, i) => {
      const a = (axe.angle * Math.PI / 180) + rotation;
      const x = cx + Math.cos(a) * ORB_R;
      const y = cy + Math.sin(a) * ORB_R;
      const hov = hovIdx === i;
      const nodeR = hov ? 36 : 28;
      nodePos[i] = { x, y, r: nodeR };

      // Spoke line from center to node
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.strokeStyle = hov ? withAlpha(axe.color, 0.6) : withAlpha(axe.color, 0.2);
      ctx.lineWidth = hov ? 2 : 1.5;
      ctx.stroke();

      // Glow on hover
      if (hov) {
        const grd = ctx.createRadialGradient(x, y, 0, x, y, nodeR * 2.5);
        grd.addColorStop(0, withAlpha(axe.color, 0.45));
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(x, y, nodeR * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      // Node circle background
      ctx.beginPath();
      ctx.arc(x, y, nodeR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(12, 12, 36, 0.95)';
      ctx.fill();

      // Icon in node
      const iconSvg = ICONS[axe.icon];
      if (iconSvg) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, nodeR - 2, 0, Math.PI * 2);
        ctx.clip();
        
        // Draw icon as image
        const img = new Image();
        const iconXml = iconSvg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
        const blob = new Blob([iconXml], { type: 'image/svg+xml' });
        img.src = URL.createObjectURL(blob);
        
        if (img.complete) {
          ctx.drawImage(img, x - nodeR + 4, y - nodeR + 4, (nodeR - 4) * 2, (nodeR - 4) * 2);
        } else {
          // Fallback: draw colored circle
          ctx.beginPath();
          ctx.arc(x, y, nodeR - 4, 0, Math.PI * 2);
          ctx.fillStyle = hov ? axe.color : withAlpha(axe.color, 0.8);
          ctx.fill();
          ctx.font = `700 ${hov ? 12 : 10}px "Space Grotesk", sans-serif`;
          ctx.fillStyle = '#fff';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(axe.shortName, x, y);
        }
        URL.revokeObjectURL(img.src);
        ctx.restore();
      }

      // Node border
      ctx.beginPath();
      ctx.arc(x, y, nodeR, 0, Math.PI * 2);
      ctx.strokeStyle = hov ? axe.color : withAlpha(axe.color, 0.6);
      ctx.lineWidth = hov ? 3 : 2;
      ctx.stroke();

      // Label below node
      ctx.font = `${hov ? '700' : '600'} ${hov ? 12 : 10}px "Space Grotesk", sans-serif`;
      ctx.fillStyle = hov ? axe.color : 'rgba(255, 255, 255, 0.5)';
      ctx.textBaseline = 'top';
      ctx.textAlign = 'center';
      ctx.fillText(axe.name, x, y + nodeR + 6);
    });

    if (!paused) rotation += 0.004;
    requestAnimationFrame(draw);
  }

  function updatePanel(idx) {
    const axe = idx >= 0 ? AXES[idx] : null;
    const eyebrow = document.getElementById('oipEyebrow');
    const nameEl = document.getElementById('oipName');
    const rotatorWord = document.getElementById('oipRotatingWord');
    const descEl = document.getElementById('oipDesc');
    const logoEl = document.getElementById('oipLogo');
    const ctaEl = document.getElementById('oipCta');
    const objListEl = document.getElementById('oipObjectives');

    if (eyebrow) {
      eyebrow.textContent = axe ? axe.cat : 'Sélectionnez un axe';
      eyebrow.style.color = axe ? axe.color : '';
    }

    if (nameEl) {
      nameEl.textContent = axe ? axe.shortName : 'Parcours';
      nameEl.style.color = axe ? axe.color : '';
    }

    if (rotatorWord && axe) {
      rotatorWord.style.setProperty('--rot-color', axe.color);
      rotatorWord.textContent = axe.name;
    }

    if (descEl) {
      descEl.textContent = axe ? axe.desc : "Survolez l'un des 4 axes pour découvrir son contenu.";
    }

    if (logoEl) {
      logoEl.innerHTML = axe ? ICONS[axe.icon] : ICONS.brain;
      logoEl.style.borderColor = axe ? withAlpha(axe.color, 0.55) : '';
      logoEl.style.boxShadow = axe ? `0 8px 28px ${withAlpha(axe.color, 0.26)}` : '';
      logoEl.style.background = axe ? withAlpha(axe.color, 0.15) : 'rgba(8, 8, 24, 0.7)';
    }

    if (ctaEl) {
      ctaEl.href = axe ? axe.href : '#';
      ctaEl.style.background = axe ? `linear-gradient(135deg, ${withAlpha(axe.color, 0.92)}, ${axe.color})` : 'var(--primary)';
      ctaEl.style.color = axe ? contrastText(axe.color) : '#fff';
      ctaEl.style.boxShadow = axe ? `0 12px 30px ${withAlpha(axe.color, 0.34)}` : '';
      ctaEl.style.borderColor = axe ? withAlpha(axe.color, 0.45) : '';
      ctaEl.classList.toggle('show', idx >= 0);
    }

    // Update objectives list
    if (objListEl) {
      if (axe) {
        const objectives = getObjectivesForAxe(axe.id);
        objListEl.innerHTML = objectives.map((obj, i) => `
          <a class="oip-objective" href="objectif.html?axe=${axe.id}&objectif=${obj.id}">
            <div class="oip-objective-num" style="background: ${withAlpha(axe.color, 0.2)}; color: ${axe.color}">${i + 1}</div>
            <div class="oip-objective-text">${obj.title}</div>
          </a>
        `).join('');
      } else {
        objListEl.innerHTML = '';
      }
    }
  }

  function getObjectivesForAxe(axeId) {
    const objectivesMap = {
      'axe-1': [
        { id: 'obj-1', title: 'Indiquer les postures qui ont un impact sur le stress' },
        { id: 'obj-2', title: 'Expliquer le rôle des émotions dans les apprentissages' },
        { id: 'obj-3', title: 'Reconnaître les signaux précurseurs de stress' }
      ],
      'axe-2': [
        { id: 'obj-1', title: 'Repérer les signaux verbaux et non verbaux' },
        { id: 'obj-2', title: 'Repérer les signes de stress chez un élève' },
        { id: 'obj-3', title: 'Reformuler les consignes stressantes' }
      ],
      'axe-3': [
        { id: 'obj-1', title: 'Moduler sa voix pour apaiser un échange' },
        { id: 'obj-2', title: 'Intervenir rapidement et de manière adaptée' },
        { id: 'obj-3', title: 'Adopter une posture d\'écoute active' }
      ],
      'axe-4': [
        { id: 'obj-1', title: 'Détecter les comportements à risque' },
        { id: 'obj-2', title: 'Encourager les élèves à agir soutenante' },
        { id: 'obj-3', title: 'Organiser des moments sécurisants' }
      ]
    };
    return objectivesMap[axeId] || [];
  }

  function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    const scX = canvas.width / rect.width;
    const scY = canvas.height / rect.height;
    const mx = (e.clientX - rect.left) * scX;
    const my = (e.clientY - rect.top) * scY;

    let found = -1;
    nodePos.forEach((np, i) => {
      if (!np) return;
      const ddx = mx - np.x;
      const ddy = my - np.y;
      if (Math.sqrt(ddx * ddx + ddy * ddy) < np.r + 15) found = i;
    });

    if (found !== hovIdx) {
      hovIdx = found;
      canvas.style.cursor = found >= 0 ? 'pointer' : 'default';
      updatePanel(found);
    }
  }

  function handleMouseLeave() {
    hovIdx = -1;
    paused = false;
    canvas.style.cursor = 'default';
    updatePanel(-1);
  }

  function handleClick() {
    if (hovIdx >= 0) {
      window.location.href = AXES[hovIdx].href;
    }
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', initOrbital);

  // Also try to init if script is loaded after DOM
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initOrbital, 100);
  }
})();
