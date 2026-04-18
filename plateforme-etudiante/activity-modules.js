(function () {
  const SORT_ITEMS = [
    { id: 1, text: "« Je n’y arriverai jamais. »", category: "verbal", explanation: "L’indice repose ici sur les paroles prononcées par l’élève." },
    { id: 2, text: "L’élève évite le regard et garde les épaules très crispées.", category: "nonverbal", explanation: "Il s’agit de manifestations corporelles directement observables." },
    { id: 3, text: "Une évaluation surprise vient d’être annoncée au début de la leçon.", category: "contextuel", explanation: "Cet élément décrit surtout le contexte immédiat de la situation." },
    { id: 4, text: "L’élève est silencieux pendant quelques secondes.", category: "insuffisant", explanation: "Pris seul, cet élément reste trop vague pour conclure prudemment." },
    { id: 5, text: "« Madame, je vais me tromper. »", category: "verbal", explanation: "L’indice relève des paroles formulées par l’élève." },
    { id: 6, text: "L’élève froisse sa feuille, respire vite et bouge sans cesse sur sa chaise.", category: "nonverbal", explanation: "Ces manifestations observables relèvent du non verbal." },
    { id: 7, text: "Le travail demandé est chronométré et doit être réalisé seul.", category: "contextuel", explanation: "On décrit ici les conditions de la tâche." },
    { id: 8, text: "L’élève porte un pull rouge.", category: "insuffisant", explanation: "Cet élément descriptif n’apporte pas d’indice pertinent de stress." },
    { id: 9, text: "« Je ne comprends plus rien. » dit l’élève d’une voix tremblante.", category: "verbal", explanation: "La parole de l’élève est ici l’indice principal." },
    { id: 10, text: "Ses mains tremblent lorsqu’il prend son cahier.", category: "nonverbal", explanation: "Le tremblement observé relève du non verbal." },
    { id: 11, text: "L’élève doit lire son texte devant toute la classe dans moins d’une minute.", category: "contextuel", explanation: "La situation de passage à l’oral décrit un contexte potentiellement stressant." },
    { id: 12, text: "L’élève regarde par la fenêtre.", category: "insuffisant", explanation: "Ce comportement reste trop ambigu s’il est isolé." },
    { id: 13, text: "« Je veux sortir, s’il vous plaît. »", category: "verbal", explanation: "Il s’agit d’une demande formulée oralement par l’élève." },
    { id: 14, text: "L’élève serre fortement son crayon et garde la mâchoire contractée.", category: "nonverbal", explanation: "Ce sont des signes corporels observables." },
    { id: 15, text: "La consigne a changé au dernier moment et l’élève n’avait pas terminé la précédente.", category: "contextuel", explanation: "L’indice décrit ici une modification de la situation de travail." },
    { id: 16, text: "L’élève est fatigué.", category: "insuffisant", explanation: "L’énoncé est déjà interprétatif et reste insuffisant tel quel." }
  ];

  const SORT_ZONES = [
    { key: "verbal", label: "Verbal", description: "Paroles ou formulation de l’élève." },
    { key: "nonverbal", label: "Non verbal", description: "Posture, gestes, ton, rythme." },
    { key: "contextuel", label: "Contextuel", description: "Situation, tâche, cadre, événement." },
    { key: "insuffisant", label: "Insuffisant", description: "Indice trop vague ou trop isolé." }
  ];

  const VERBATIM_EXERCISES = [
    {
      id: "ex1",
      title: "Exercice 1",
      type: "Dialogue",
      description: "Identifier les signes verbaux de tension chez l’élève et les formulations qui augmentent la pression lors d’un passage oral.",
      transcript: [
        { speaker: "Enseignante", segments: [{ id: "ex1_s1", text: "Bon, on se dépêche," }, { id: "ex1_s2", text: "dans une minute tu lis ton texte devant toute la classe." }] },
        { speaker: "Élève", segments: [{ id: "ex1_s3", text: "Je... je ne suis pas prêt." }, { id: "ex1_s4", text: "J’ai peur de me tromper." }] },
        { speaker: "Enseignante", segments: [{ id: "ex1_s5", text: "Tu as déjà eu assez de temps." }, { id: "ex1_s6", text: "Les autres y arrivent bien, toi aussi." }] },
        { speaker: "Élève", segments: [{ id: "ex1_s7", text: "Je ne comprends plus trop." }, { id: "ex1_s8", text: "Est-ce que je peux passer après ?" }] },
        { speaker: "Enseignante", segments: [{ id: "ex1_s9", text: "Non, maintenant." }, { id: "ex1_s10", text: "Sinon tu vas encore retarder tout le groupe." }] },
        { speaker: "Élève", segments: [{ id: "ex1_s11", text: "D’accord..." }, { id: "ex1_s12", text: "mais j’ai mal au ventre." }] }
      ],
      correction: {
        stress: ["ex1_s3", "ex1_s4", "ex1_s7", "ex1_s8", "ex1_s12"],
        pressure: ["ex1_s1", "ex1_s2", "ex1_s5", "ex1_s6", "ex1_s9", "ex1_s10"]
      },
      comments: {
        ex1_s1: "La formulation crée un climat d’urgence.",
        ex1_s2: "L’exposition immédiate devant la classe augmente la pression.",
        ex1_s3: "Dire ne pas être prêt est un indice défendable de tension.",
        ex1_s4: "L’élève verbalise explicitement une crainte de l’échec.",
        ex1_s5: "Cette réponse peut être vécue comme peu contenante.",
        ex1_s6: "La comparaison avec les autres renforce la pression de performance.",
        ex1_s7: "Cette formulation peut signaler une désorganisation sous pression.",
        ex1_s8: "La demande de passer plus tard peut indiquer un évitement lié au stress.",
        ex1_s9: "Le refus abrupt laisse peu d’espace de régulation.",
        ex1_s10: "La référence au groupe ajoute une pression sociale.",
        ex1_s12: "Le mal au ventre peut être un signe somatique associé au stress."
      }
    },
    {
      id: "ex2",
      title: "Exercice 2",
      type: "Narration",
      description: "Repérer, dans une narration de classe, les éléments signalant le stress d’un élève et ceux qui intensifient la pression liée à la tâche.",
      transcript: [
        { speaker: "Narration", narration: true, segments: [{ id: "ex2_s1", text: "En début d’évaluation, l’enseignant annonce qu’il ne restera pas une minute de plus à la fin." }, { id: "ex2_s2", text: "Il précise aussi que les copies incomplètes seront notées comme telles." }] },
        { speaker: "Narration", narration: true, segments: [{ id: "ex2_s3", text: "Au troisième exercice, Léo relit plusieurs fois la consigne sans écrire." }, { id: "ex2_s4", text: "Il souffle, serre très fort son stylo et demande s’il peut recommencer depuis le début." }] },
        { speaker: "Narration", narration: true, segments: [{ id: "ex2_s5", text: "L’enseignant répond à voix haute que ce n’est pourtant pas difficile." }, { id: "ex2_s6", text: "Il ajoute que les élèves qui ont bien révisé ont déjà presque terminé." }] },
        { speaker: "Narration", narration: true, segments: [{ id: "ex2_s7", text: "Léo baisse la tête, efface plusieurs fois la même ligne et dit qu’il ne sait plus comment commencer." }, { id: "ex2_s8", text: "Quelques minutes plus tard, il demande s’il peut aller boire un verre d’eau." }] }
      ],
      correction: {
        stress: ["ex2_s3", "ex2_s4", "ex2_s7", "ex2_s8"],
        pressure: ["ex2_s1", "ex2_s2", "ex2_s5", "ex2_s6"]
      },
      comments: {
        ex2_s1: "La limite de temps annoncée de façon ferme peut accroître la pression.",
        ex2_s2: "La menace de sanction sur les copies incomplètes renforce la tension.",
        ex2_s3: "La relecture répétée sans passage à l’écriture peut signaler un blocage.",
        ex2_s4: "Les manifestations corporelles et la demande de recommencer vont dans le sens d’une forte tension.",
        ex2_s5: "Cette réponse minimise la difficulté ressentie.",
        ex2_s6: "La comparaison implicite avec les autres ajoute une pression sociale.",
        ex2_s7: "L’effacement répété et la verbalisation d’un désarroi constituent des indices pertinents.",
        ex2_s8: "La demande de s’éloigner brièvement peut être un indice de besoin de régulation."
      }
    },
    {
      id: "ex3",
      title: "Exercice 3",
      type: "Dialogue",
      description: "Distinguer ce qui relève du stress de l’élève et ce qui, dans le discours de l’adulte, accentue la pression dans un contexte collectif.",
      transcript: [
        { speaker: "Enseignant", segments: [{ id: "ex3_s1", text: "Votre groupe passe en premier," }, { id: "ex3_s2", text: "j’attends quelque chose de clair et sans hésitation." }] },
        { speaker: "Élève", segments: [{ id: "ex3_s3", text: "Je préfère peut-être laisser Emma parler au début." }, { id: "ex3_s4", text: "Je sens que je vais tout mélanger." }] },
        { speaker: "Enseignant", segments: [{ id: "ex3_s5", text: "Non, tu dois prendre ta part comme les autres." }, { id: "ex3_s6", text: "Ce n’est pas le moment d’avoir peur." }] },
        { speaker: "Élève", segments: [{ id: "ex3_s7", text: "Mon cœur bat très vite." }, { id: "ex3_s8", text: "Est-ce qu’on peut répéter encore une fois ?" }] },
        { speaker: "Enseignant", segments: [{ id: "ex3_s9", text: "On n’a plus le temps." }, { id: "ex3_s10", text: "Tout le monde vous regarde déjà." }] }
      ],
      correction: {
        stress: ["ex3_s3", "ex3_s4", "ex3_s7", "ex3_s8"],
        pressure: ["ex3_s1", "ex3_s2", "ex3_s5", "ex3_s6", "ex3_s9", "ex3_s10"]
      },
      comments: {
        ex3_s1: "Le passage en premier peut créer une pression supplémentaire.",
        ex3_s2: "L’exigence formulée sur un mode normatif augmente l’enjeu perçu.",
        ex3_s3: "Le souhait de laisser un autre élève commencer peut signaler une tension.",
        ex3_s4: "L’élève anticipe un échec ou une désorganisation.",
        ex3_s5: "La formulation injonctive laisse peu d’espace d’ajustement.",
        ex3_s6: "Minimiser la peur exprimée peut accroître la pression ressentie.",
        ex3_s7: "La verbalisation d’un signe physiologique constitue un indice solide.",
        ex3_s8: "La demande de répétition peut signaler un besoin de sécurisation.",
        ex3_s9: "L’urgence temporelle peut faire monter la pression.",
        ex3_s10: "La mise en avant du regard du groupe accentue l’exposition sociale."
      }
    },
    {
      id: "ex4",
      title: "Exercice 4",
      type: "Narration",
      description: "Analyser une scène racontée pour repérer des indices de surcharge et des éléments qui intensifient la pression.",
      transcript: [
        { speaker: "Narration", narration: true, segments: [{ id: "ex4_s1", text: "Alors que les élèves pensent avoir terminé leur affiche, l’enseignante annonce qu’il faut tout reprendre sous une autre forme." }, { id: "ex4_s2", text: "Elle précise que le travail sera présenté devant la direction en fin de matinée." }] },
        { speaker: "Narration", narration: true, segments: [{ id: "ex4_s3", text: "Nina reste immobile quelques secondes, regarde son brouillon puis murmure qu’elle ne va pas y arriver." }, { id: "ex4_s4", text: "Elle relit plusieurs fois les nouvelles consignes sans parler à son groupe." }] },
        { speaker: "Narration", narration: true, segments: [{ id: "ex4_s5", text: "L’enseignante répète qu’il faut faire vite et que ce n’est pas compliqué." }, { id: "ex4_s6", text: "Elle rappelle aussi que les groupes les plus efficaces passeront en premier." }] },
        { speaker: "Narration", narration: true, segments: [{ id: "ex4_s7", text: "Nina finit par demander si quelqu’un peut lui redire calmement ce qu’il faut faire." }, { id: "ex4_s8", text: "Quand vient le moment de s’organiser, elle dit qu’elle a la tête vide." }] }
      ],
      correction: {
        stress: ["ex4_s3", "ex4_s4", "ex4_s7", "ex4_s8"],
        pressure: ["ex4_s1", "ex4_s2", "ex4_s5", "ex4_s6"]
      },
      comments: {
        ex4_s1: "Le changement tardif de consigne constitue une source de pression contextuelle.",
        ex4_s2: "La perspective d’une présentation devant la direction augmente l’enjeu.",
        ex4_s3: "La verbalisation d’un sentiment d’incapacité est un indice pertinent.",
        ex4_s4: "La relecture répétée et le retrait relationnel peuvent signaler une surcharge.",
        ex4_s5: "Le rappel de la vitesse attendu, associé à une minimisation de la difficulté, peut majorer la tension.",
        ex4_s6: "La mise en concurrence implicite des groupes accentue la pression.",
        ex4_s7: "La demande d’une reformulation calme peut traduire un besoin de régulation.",
        ex4_s8: "Dire avoir la tête vide peut indiquer un blocage sous pression."
      }
    }
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function readStorage(key, fallback) {
    try {
      const parsed = JSON.parse(window.localStorage.getItem(key));
      return parsed && typeof parsed === "object" ? parsed : clone(fallback);
    } catch (error) {
      return clone(fallback);
    }
  }

  function writeStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  function makeKey(context) {
    return "adid-activity-module::" + context.moduleKey;
  }

  function pluralize(count, singular, plural) {
    return count > 1 ? plural : singular;
  }

  function setFlashMessage(node, text) {
    if (!node) {
      return;
    }
    node.textContent = text;
    node.classList.add("is-visible");
    window.clearTimeout(setFlashMessage._timer);
    setFlashMessage._timer = window.setTimeout(function () {
      node.textContent = "";
      node.classList.remove("is-visible");
    }, 1600);
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeText(value) {
    return String(value == null ? "" : value)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s']/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function textContainsAny(text, terms) {
    return (terms || []).some(function (term) {
      return text.indexOf(normalizeText(term)) !== -1;
    });
  }

  function formatClock(totalSeconds) {
    const seconds = Math.max(0, Math.ceil(totalSeconds || 0));
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return minutes + ":" + String(secs).padStart(2, "0");
  }

  function normalizeTimerState(timer, defaultDuration) {
    const duration = Number(timer && timer.duration) > 0 ? Number(timer.duration) : defaultDuration;
    const remaining = Number(timer && timer.remaining) >= 0 ? Number(timer.remaining) : duration;
    return {
      duration: duration,
      remaining: Math.min(duration, remaining),
      running: Boolean(timer && timer.running),
      endAt: Number(timer && timer.endAt) > 0 ? Number(timer.endAt) : null
    };
  }

  function bindCountdownTimer(options) {
    const timerState = options.timerState;
    const ringNode = options.ringNode;
    const clockNode = options.clockNode;
    const statusNode = options.statusNode;
    let intervalId = null;

    function stopTick() {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    }

    function sync() {
      if (!timerState.running || !timerState.endAt) {
        return;
      }

      timerState.remaining = Math.max(0, Math.ceil((timerState.endAt - Date.now()) / 1000));
      if (timerState.remaining > 0) {
        return;
      }

      timerState.remaining = 0;
      timerState.running = false;
      timerState.endAt = null;
      stopTick();
      if (typeof options.onComplete === "function") {
        options.onComplete(timerState);
      }
    }

    function render() {
      sync();
      const progress = timerState.duration > 0
        ? Math.max(0, Math.min(100, ((timerState.duration - timerState.remaining) / timerState.duration) * 100))
        : 0;

      if (ringNode) {
        ringNode.style.setProperty("--timer-angle", (progress * 3.6) + "deg");
        ringNode.classList.toggle("is-running", timerState.running);
        ringNode.classList.toggle("is-complete", !timerState.running && timerState.remaining === 0);
      }

      if (clockNode) {
        clockNode.textContent = formatClock(timerState.remaining);
      }

      if (statusNode) {
        statusNode.textContent = timerState.running
          ? "En cours"
          : (timerState.remaining === 0 ? "Temps ecoule" : "Pret");
      }

      if (typeof options.onRender === "function") {
        options.onRender(timerState);
      }
    }

    function start() {
      if (timerState.running) {
        return;
      }

      if (timerState.remaining <= 0) {
        timerState.remaining = timerState.duration;
      }

      timerState.running = true;
      timerState.endAt = Date.now() + (timerState.remaining * 1000);
      stopTick();
      intervalId = window.setInterval(function () {
        render();
        if (typeof options.onChange === "function") {
          options.onChange(timerState);
        }
      }, 1000);
      render();
      if (typeof options.onChange === "function") {
        options.onChange(timerState);
      }
    }

    function pause() {
      sync();
      timerState.running = false;
      timerState.endAt = null;
      stopTick();
      render();
      if (typeof options.onChange === "function") {
        options.onChange(timerState);
      }
    }

    function reset(nextDuration) {
      if (Number(nextDuration) > 0) {
        timerState.duration = Number(nextDuration);
      }
      timerState.remaining = timerState.duration;
      timerState.running = false;
      timerState.endAt = null;
      stopTick();
      render();
      if (typeof options.onChange === "function") {
        options.onChange(timerState);
      }
    }

    render();

    if (timerState.running) {
      stopTick();
      intervalId = window.setInterval(function () {
        render();
        if (typeof options.onChange === "function") {
          options.onChange(timerState);
        }
      }, 1000);
      render();
    }

    return {
      start: start,
      pause: pause,
      reset: reset,
      render: render,
      stop: stopTick
    };
  }

  function renderSortModule() {
    const zonesMarkup = SORT_ZONES.map(function (zone) {
      return (
        '<section class="sort-zone" data-sort-zone="' + zone.key + '">' +
          '<div class="sort-zone-title">' + zone.label + "</div>" +
          '<div class="sort-drop-list" id="sortZone-' + zone.key + '"></div>' +
        "</section>"
      );
    }).join("");

    return (
      '<div class="activity-module">' +
        '<section class="module-note-grid">' +
          '<article class="module-note">' +
            "<h2>Consigne</h2>" +
            "<p>Classez chaque carte dans la bonne catégorie : verbal, non verbal, contextuel ou insuffisant pour conclure.</p>" +
          "</article>" +
          '<article class="module-note">' +
            "<h2>Conseils</h2>" +
            '<ul class="module-note-list">' +
              "<li>Restez sur l’observable.</li>" +
              "<li>Ne concluez pas trop vite à partir d’un seul indice.</li>" +
              "<li>Validez ensuite pour obtenir le feedback.</li>" +
            "</ul>" +
          "</article>" +
        "</section>" +
        '<section class="module-panel">' +
          '<div class="module-panel-head">' +
            "<div>" +
              "<h2>Carte à classer</h2>" +
              "<p>Une carte à la fois pour garder l’attention sur l’item en cours.</p>" +
            "</div>" +
            '<strong class="module-kpi" id="sortRemainingPill">16 cartes restantes</strong>' +
          "</div>" +
          '<div class="sort-current-wrap" id="sortCurrentCardWrap"></div>' +
          '<div class="module-inline-actions">' +
            '<button class="btn btn-secondary" type="button" id="sortSkipBtn">Passer cette carte</button>' +
            '<button class="btn btn-ghost" type="button" id="sortShuffleBtn">Mélanger les cartes restantes</button>' +
          "</div>" +
        "</section>" +
        '<section class="module-panel">' +
          '<div class="module-panel-head">' +
            "<div>" +
              "<h2>Tableau de classement</h2>" +
              "<p>Les quatre catégories restent visibles en même temps.</p>" +
            "</div>" +
            '<div class="module-progress-inline">' +
              '<strong id="sortProgressText">0 / 16 placés</strong>' +
              '<div class="progress-track" aria-hidden="true"><div class="progress-fill" id="sortProgressBar"></div></div>' +
            "</div>" +
          "</div>" +
          '<div class="sort-zone-grid">' + zonesMarkup + "</div>" +
          '<div class="module-actions">' +
            '<button class="btn btn-primary" type="button" id="sortValidateBtn">Valider mes réponses</button>' +
            '<button class="btn btn-secondary" type="button" id="sortCorrectionBtn">Afficher la correction</button>' +
            '<button class="btn btn-ghost" type="button" id="sortResetBtn">Réinitialiser</button>' +
          "</div>" +
        "</section>" +
        '<section class="module-panel module-result-panel">' +
          '<div class="module-panel-head">' +
            "<div>" +
              "<h2>Résultat</h2>" +
            "</div>" +
            '<span class="module-status-badge" id="sortResultBadge">En attente</span>' +
          "</div>" +
          '<p class="module-result-text" id="sortResultText">Classez les 16 cartes, puis validez pour afficher le résultat.</p>' +
          '<p class="module-result-note" id="sortResultNote"></p>' +
        "</section>" +
      "</div>"
    );
  }

  function initSortModule(root, context) {
    const storageKey = makeKey(context);
    const defaultState = { deck: [], placements: {}, validated: false, correctionShown: false };
    const state = readStorage(storageKey, defaultState);

    const currentCardWrap = root.querySelector("#sortCurrentCardWrap");
    const remainingPill = root.querySelector("#sortRemainingPill");
    const progressText = root.querySelector("#sortProgressText");
    const progressBar = root.querySelector("#sortProgressBar");
    const resultBadge = root.querySelector("#sortResultBadge");
    const resultText = root.querySelector("#sortResultText");
    const resultNote = root.querySelector("#sortResultNote");

    function persist() {
      writeStorage(storageKey, state);
    }

    function shuffleArray(array) {
      const copy = array.slice();
      for (let index = copy.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        const value = copy[index];
        copy[index] = copy[swapIndex];
        copy[swapIndex] = value;
      }
      return copy;
    }

    function resetState() {
      state.deck = shuffleArray(SORT_ITEMS.map(function (item) { return item.id; }));
      state.placements = {};
      state.validated = false;
      state.correctionShown = false;
      persist();
    }

    function getItemById(id) {
      return SORT_ITEMS.find(function (item) {
        return item.id === id;
      });
    }

    function getCurrentItem() {
      return getItemById(state.deck[0]);
    }

    function countPlaced(zoneKey) {
      return SORT_ITEMS.filter(function (item) {
        return state.placements[item.id] === zoneKey;
      }).length;
    }

    function placeCurrentCard(zoneKey) {
      const currentId = state.deck.shift();
      if (!currentId) {
        return;
      }
      state.placements[currentId] = zoneKey;
      state.validated = false;
      state.correctionShown = false;
      persist();
      renderAll();
    }

    function removePlacement(id) {
      delete state.placements[id];
      state.deck.unshift(id);
      state.validated = false;
      state.correctionShown = false;
      persist();
      renderAll();
    }

    function renderCurrentCard() {
      const currentItem = getCurrentItem();
      const remaining = state.deck.length;
      remainingPill.textContent = remaining > 0
        ? remaining + " " + pluralize(remaining, "carte restante", "cartes restantes")
        : "Toutes les cartes sont placées";

      currentCardWrap.innerHTML = "";

      if (!currentItem) {
        const empty = document.createElement("div");
        empty.className = "sort-empty-card";
        empty.textContent = "La pioche est terminée. Vous pouvez maintenant valider ou revoir vos colonnes.";
        currentCardWrap.appendChild(empty);
        return;
      }

      const card = document.createElement("article");
      card.className = "sort-current-card";
      card.draggable = true;
      card.dataset.id = String(currentItem.id);

      const text = document.createElement("p");
      text.textContent = currentItem.text;
      card.appendChild(text);

      card.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", String(currentItem.id));
        card.classList.add("is-dragging");
      });

      card.addEventListener("dragend", function () {
        card.classList.remove("is-dragging");
      });

      currentCardWrap.appendChild(card);
    }

    function renderDropZones() {
      SORT_ZONES.forEach(function (zone) {
        const container = root.querySelector("#sortZone-" + zone.key);
        const items = SORT_ITEMS.filter(function (item) {
          return state.placements[item.id] === zone.key;
        });

        container.innerHTML = "";

        if (!items.length) {
          const empty = document.createElement("div");
          empty.className = "sort-drop-placeholder";
          empty.textContent = "Déposez ici les cartes correspondantes.";
          container.appendChild(empty);
          return;
        }

        items.forEach(function (item) {
          const card = document.createElement("article");
          card.className = "sort-placed-card";

          const top = document.createElement("div");
          top.className = "sort-placed-top";

          const reset = document.createElement("button");
          reset.type = "button";
          reset.className = "sort-remove-btn";
          reset.textContent = "↺";
          reset.title = "Retirer cette carte";
          reset.addEventListener("click", function () {
            removePlacement(item.id);
          });

          top.appendChild(reset);
          card.appendChild(top);

          const label = document.createElement("p");
          label.textContent = item.text;
          card.appendChild(label);

          if (state.validated) {
            const feedback = document.createElement("div");
            const isCorrect = state.placements[item.id] === item.category;
            feedback.className = "sort-feedback" + (isCorrect ? " is-correct" : " is-warning");
            feedback.textContent = isCorrect
              ? "Correct. " + item.explanation
              : "À revoir. La bonne catégorie est « " + SORT_ZONES.find(function (zoneItem) { return zoneItem.key === item.category; }).label + " ». " + item.explanation;
            card.appendChild(feedback);
            card.classList.add(isCorrect ? "is-correct" : "is-warning");
          }

          container.appendChild(card);
        });
      });
    }

    function renderProgress() {
      const placed = Object.keys(state.placements).length;
      const correct = SORT_ITEMS.filter(function (item) {
        return state.placements[item.id] === item.category;
      }).length;
      const percent = Math.round((placed / SORT_ITEMS.length) * 100);

      progressText.textContent = placed + " / " + SORT_ITEMS.length + " placés";
      progressBar.style.width = percent + "%";

      if (state.correctionShown) {
        resultBadge.textContent = "Correction affichée";
        resultBadge.className = "module-status-badge is-success";
        resultText.textContent = "Toutes les cartes ont été replacées dans la bonne catégorie.";
        resultNote.textContent = "Observez maintenant la logique de classement et le feedback associé à chaque carte.";
        return;
      }

      if (state.validated) {
        if (placed < SORT_ITEMS.length) {
          resultBadge.textContent = "Validation partielle";
          resultBadge.className = "module-status-badge is-warning";
          resultText.textContent = "Vous avez " + correct + " bonne" + (correct > 1 ? "s" : "") + " réponse" + (correct > 1 ? "s" : "") + " pour l’instant. Certaines cartes ne sont pas encore classées.";
          resultNote.textContent = "Terminez le classement pour obtenir le résultat complet.";
          return;
        }

        const success = correct >= 13;
        resultBadge.textContent = success ? "Critère atteint" : "À renforcer";
        resultBadge.className = "module-status-badge " + (success ? "is-success" : "is-warning");
        resultText.textContent = "Score : " + correct + " / 16.";
        resultNote.textContent = success
          ? "Le critère attendu est atteint."
          : "Le critère attendu est de 13 bonnes réponses sur 16.";
        return;
      }

      if (placed > 0) {
        resultBadge.textContent = "Tri en cours";
        resultBadge.className = "module-status-badge";
        resultText.textContent = "Votre classement a été modifié. Validez pour afficher le feedback.";
        resultNote.textContent = "";
        return;
      }

      resultBadge.textContent = "En attente";
      resultBadge.className = "module-status-badge";
      resultText.textContent = "Classez les 16 cartes, puis validez pour afficher le résultat.";
      resultNote.textContent = "";
    }

    function renderAll() {
      renderCurrentCard();
      renderDropZones();
      renderProgress();
    }

    function validate() {
      state.validated = true;
      state.correctionShown = false;
      persist();
      renderAll();
    }

    function showCorrection() {
      state.deck = [];
      SORT_ITEMS.forEach(function (item) {
        state.placements[item.id] = item.category;
      });
      state.validated = true;
      state.correctionShown = true;
      persist();
      renderAll();
    }

    function skipCurrentCard() {
      if (state.deck.length <= 1) {
        return;
      }
      const first = state.deck.shift();
      state.deck.push(first);
      persist();
      renderAll();
    }

    function shuffleDeck() {
      state.deck = shuffleArray(state.deck);
      persist();
      renderAll();
    }

    if (!Array.isArray(state.deck) || (!state.deck.length && !Object.keys(state.placements || {}).length && !state.validated)) {
      resetState();
    }

    root.querySelectorAll("[data-sort-zone]").forEach(function (zoneNode) {
      zoneNode.addEventListener("click", function (event) {
        if (event.target.closest(".sort-remove-btn") || event.target.closest(".sort-placed-card")) {
          return;
        }
        if (!getCurrentItem()) {
          return;
        }
        placeCurrentCard(zoneNode.dataset.sortZone);
      });

      zoneNode.addEventListener("dragover", function (event) {
        event.preventDefault();
        zoneNode.classList.add("is-over");
      });

      zoneNode.addEventListener("dragleave", function () {
        zoneNode.classList.remove("is-over");
      });

      zoneNode.addEventListener("drop", function (event) {
        event.preventDefault();
        zoneNode.classList.remove("is-over");
        const draggedId = Number(event.dataTransfer.getData("text/plain"));
        const currentItem = getCurrentItem();
        if (!currentItem || currentItem.id !== draggedId) {
          return;
        }
        placeCurrentCard(zoneNode.dataset.sortZone);
      });
    });

    root.querySelector("#sortSkipBtn").addEventListener("click", skipCurrentCard);
    root.querySelector("#sortShuffleBtn").addEventListener("click", shuffleDeck);
    root.querySelector("#sortValidateBtn").addEventListener("click", validate);
    root.querySelector("#sortCorrectionBtn").addEventListener("click", showCorrection);
    root.querySelector("#sortResetBtn").addEventListener("click", function () {
      if (!window.confirm("Réinitialiser cette activité ?")) {
        return;
      }
      resetState();
      renderAll();
    });

    renderAll();
  }

  function renderPrepModule() {
    return (
      '<div class="activity-module">' +
        '<section class="module-note-grid">' +
          '<article class="module-note">' +
            "<h2>Consigne</h2>" +
            "<p>Décrivez une situation réelle, relevez des indices observables, formulez une hypothèse prudente puis revenez sur votre propre posture.</p>" +
          "</article>" +
          '<article class="module-note">' +
            "<h2>Repère</h2>" +
            "<p>Les réponses sont sauvegardées localement au fil de l’écriture.</p>" +
          "</article>" +
        "</section>" +
        '<section class="module-form-grid">' +
          '<article class="module-panel">' +
            '<div class="module-panel-head"><div><h2>1. Observation situation de classe</h2><p>Décrivez les faits observables avant d’interpréter.</p></div></div>' +
            '<div class="module-fields">' +
              '<div class="field-row-two">' +
                '<div class="module-field"><label for="prepClasse">Classe / niveau</label><input id="prepClasse" data-prep-field="classe" type="text" placeholder="Ex. 7H, français" /></div>' +
                '<div class="module-field"><label for="prepMoment">Moment ou activité</label><input id="prepMoment" data-prep-field="moment" type="text" placeholder="Ex. travail individuel" /></div>' +
              "</div>" +
              '<div class="module-field"><label for="prepContexte">Contexte</label><textarea id="prepContexte" data-prep-field="contexte" placeholder="Décrivez le contexte de manière factuelle."></textarea></div>' +
              '<div class="module-field"><label for="prepSituation">Situation vécue</label><textarea id="prepSituation" data-prep-field="situation" placeholder="Racontez la scène en quelques lignes."></textarea></div>' +
              '<div class="field-row-two">' +
                '<div class="module-field"><label for="prepVerbal1">Indice verbal 1</label><input id="prepVerbal1" data-prep-field="verbal1" type="text" placeholder="Ex. « Je n’y arriverai pas. »" /></div>' +
                '<div class="module-field"><label for="prepVerbal2">Indice verbal 2</label><input id="prepVerbal2" data-prep-field="verbal2" type="text" placeholder="Ajoutez un second indice verbal." /></div>' +
              "</div>" +
              '<div class="field-row-two">' +
                '<div class="module-field"><label for="prepNonverbal1">Indice non verbal ou contextuel 1</label><input id="prepNonverbal1" data-prep-field="nonverbal1" type="text" placeholder="Ex. évite le regard" /></div>' +
                '<div class="module-field"><label for="prepNonverbal2">Indice non verbal ou contextuel 2</label><input id="prepNonverbal2" data-prep-field="nonverbal2" type="text" placeholder="Ajoutez un second indice observable." /></div>' +
              "</div>" +
              '<div class="module-field"><label for="prepHypothese">Hypothèse prudente</label><textarea id="prepHypothese" data-prep-field="hypothese" placeholder="Ex. Je fais l’hypothèse que..."></textarea></div>' +
            "</div>" +
          "</article>" +
          '<article class="module-panel module-panel-soft">' +
            '<div class="module-panel-head"><div><h2>2. Analyse de posture</h2><p>Reliez l’analyse de la situation à votre réaction professionnelle.</p></div></div>' +
            '<div class="module-fields">' +
              '<div class="module-field"><label for="prepFeltMoment">Qu’as-tu ressenti à ce moment-là ?</label><textarea id="prepFeltMoment" data-prep-field="feltMoment" placeholder="Ex. tension, incertitude, sentiment d’urgence..."></textarea></div>' +
              '<div class="module-field"><label for="prepTeacherReaction">Comment as-tu réagi ?</label><textarea id="prepTeacherReaction" data-prep-field="teacherReaction" placeholder="Ex. j’ai reformulé, rassuré, maintenu la consigne..."></textarea></div>' +
              '<div class="module-field"><label for="prepTeacherReview">Que penses-tu de ton retour ?</label><textarea id="prepTeacherReview" data-prep-field="teacherReview" placeholder="Ex. avec du recul, mon retour..."></textarea></div>' +
            "</div>" +
            '<div class="module-actions">' +
              '<button class="btn btn-ghost" type="button" id="prepResetBtn">Réinitialiser la fiche</button>' +
              '<span class="module-inline-note" id="prepFlashNote"></span>' +
            "</div>" +
          "</article>" +
        "</section>" +
      "</div>"
    );
  }

  function initPrepModule(root, context) {
    const storageKey = makeKey(context);
    const flashNote = root.querySelector("#prepFlashNote");
    const fields = Array.from(root.querySelectorAll("[data-prep-field]"));
    let debounceId = null;

    function getData() {
      const result = {};
      fields.forEach(function (field) {
        result[field.dataset.prepField] = field.value;
      });
      return result;
    }

    function save() {
      writeStorage(storageKey, getData());
    }

    function load() {
      const saved = readStorage(storageKey, {});
      fields.forEach(function (field) {
        field.value = saved[field.dataset.prepField] || "";
      });
    }

    fields.forEach(function (field) {
      field.addEventListener("input", function () {
        window.clearTimeout(debounceId);
        debounceId = window.setTimeout(save, 180);
      });
      field.addEventListener("change", save);
    });

    window.addEventListener("beforeunload", save);

    root.querySelector("#prepResetBtn").addEventListener("click", function () {
      if (!window.confirm("Réinitialiser cette fiche ?")) {
        return;
      }
      fields.forEach(function (field) {
        field.value = "";
      });
      save();
      setFlashMessage(flashNote, "Fiche réinitialisée.");
    });

    load();
  }

  function renderVerbatimModule() {
    return (
      '<div class="activity-module">' +
        '<section class="module-note-grid module-note-grid-single">' +
          '<article class="module-note">' +
            "<h2>Consigne</h2>" +
            "<p>selectionne le bon mode et surligne les passages dans le texte.</p>" +
          "</article>" +
        "</section>" +
        '<section class="module-panel">' +
          '<div class="module-panel-head">' +
            "<div>" +
              '<h2 id="verbatimExerciseTitle">Exercice 1</h2>' +
              '<p id="verbatimExerciseMeta">Dialogue</p>' +
              '<p id="verbatimExerciseDescription"></p>' +
            "</div>" +
            '<div class="module-inline-actions">' +
              '<span class="module-kpi" id="verbatimExerciseCounter">Exercice 1 / 4</span>' +
              '<button class="btn btn-ghost" type="button" id="verbatimPrevBtn">Précédent</button>' +
              '<button class="btn btn-ghost" type="button" id="verbatimNextBtn">Suivant</button>' +
            "</div>" +
          "</div>" +
        "</section>" +
        '<section class="module-panel">' +
          '<div class="module-toolbar">' +
            '<div class="module-mode-row">' +
              '<button class="btn btn-ghost module-mode-btn" type="button" data-verbatim-mode="stress">Stress probable</button>' +
              '<button class="btn btn-ghost module-mode-btn" type="button" data-verbatim-mode="pressure">Formulation stressante</button>' +
            "</div>" +
          "</div>" +
        "</section>" +
        '<section class="module-panel">' +
          '<div class="verbatim-transcript" id="verbatimTranscript"></div>' +
        "</section>" +
        '<section class="module-panel module-result-panel">' +
          '<div class="module-panel-head">' +
            "<div><h2>Résultat</h2></div>" +
            '<span class="module-status-badge" id="verbatimResultBadge">En attente</span>' +
          "</div>" +
          '<p class="module-result-text" id="verbatimResultText">Annotez le texte, puis validez.</p>' +
          '<div class="module-feedback-list" id="verbatimFeedbackList"></div>' +
          '<p class="module-result-note" id="verbatimResultNote"></p>' +
          '<div class="module-actions">' +
            '<button class="btn btn-primary" type="button" id="verbatimValidateBtn">Valider mes réponses</button>' +
            '<button class="btn btn-secondary" type="button" id="verbatimCorrectionBtn">Afficher la correction</button>' +
            '<button class="btn btn-ghost" type="button" id="verbatimResetBtn">Réinitialiser cet exercice</button>' +
          "</div>" +
        "</section>" +
      "</div>"
    );
  }

  function initVerbatimModule(root, context) {
    const storageKey = makeKey(context);
    const defaultState = {
      exerciseIndex: 0,
      currentMode: null,
      selectionsByExercise: {},
      validatedByExercise: {},
      correctionShownByExercise: {}
    };
    const state = readStorage(storageKey, defaultState);
    if (state.currentMode !== "stress" && state.currentMode !== "pressure") {
      state.currentMode = null;
    }

    const exerciseTitle = root.querySelector("#verbatimExerciseTitle");
    const exerciseMeta = root.querySelector("#verbatimExerciseMeta");
    const exerciseDescription = root.querySelector("#verbatimExerciseDescription");
    const exerciseCounter = root.querySelector("#verbatimExerciseCounter");
    const transcript = root.querySelector("#verbatimTranscript");
    const resultBadge = root.querySelector("#verbatimResultBadge");
    const resultText = root.querySelector("#verbatimResultText");
    const feedbackList = root.querySelector("#verbatimFeedbackList");
    const resultNote = root.querySelector("#verbatimResultNote");
    const prevBtn = root.querySelector("#verbatimPrevBtn");
    const nextBtn = root.querySelector("#verbatimNextBtn");

    function persist() {
      writeStorage(storageKey, state);
    }

    function currentExercise() {
      return VERBATIM_EXERCISES[state.exerciseIndex];
    }

    function currentSelections() {
      const exercise = currentExercise();
      if (!state.selectionsByExercise[exercise.id]) {
        state.selectionsByExercise[exercise.id] = {};
      }
      return state.selectionsByExercise[exercise.id];
    }

    function isValidated() {
      return Boolean(state.validatedByExercise[currentExercise().id]);
    }

    function isCorrectionShown() {
      return Boolean(state.correctionShownByExercise[currentExercise().id]);
    }

    function setMode(mode) {
      state.currentMode = mode;
      root.querySelectorAll("[data-verbatim-mode]").forEach(function (button) {
        button.classList.toggle("is-active", button.dataset.verbatimMode === mode);
      });
      persist();
    }

    function renderHeader() {
      const exercise = currentExercise();
      exerciseTitle.textContent = exercise.title;
      exerciseMeta.textContent = exercise.type;
      exerciseDescription.textContent = exercise.description;
      exerciseCounter.textContent = "Exercice " + (state.exerciseIndex + 1) + " / " + VERBATIM_EXERCISES.length;
      prevBtn.disabled = state.exerciseIndex === 0;
      nextBtn.disabled = state.exerciseIndex === VERBATIM_EXERCISES.length - 1;
    }

    function renderTranscript() {
      const exercise = currentExercise();
      const selections = currentSelections();
      const stressSet = new Set(exercise.correction.stress);
      const pressureSet = new Set(exercise.correction.pressure);
      const validated = isValidated();
      const correctionShown = isCorrectionShown();

      transcript.innerHTML = "";

      exercise.transcript.forEach(function (turn) {
        const line = document.createElement("p");
        line.className = "verbatim-line";

        const speakerNode = document.createElement("strong");
        speakerNode.className = "verbatim-inline-speaker" + (turn.narration ? " is-narration" : "");
        speakerNode.textContent = turn.speaker + " :";
        line.appendChild(speakerNode);
        line.appendChild(document.createTextNode(" "));

        turn.segments.forEach(function (segment) {
          const segmentNode = document.createElement("span");
          const selection = selections[segment.id];
          segmentNode.className = "verbatim-segment";
          segmentNode.textContent = segment.text;

          if (selection === "stress") {
            segmentNode.classList.add("is-selected-stress");
          }
          if (selection === "pressure") {
            segmentNode.classList.add("is-selected-pressure");
          }

          if (validated) {
            const correctChoice = stressSet.has(segment.id) ? "stress" : pressureSet.has(segment.id) ? "pressure" : null;

            if (selection && correctChoice && selection === correctChoice) {
              segmentNode.classList.add(correctChoice === "stress" ? "is-correct-stress" : "is-correct-pressure");
            } else if (selection && selection !== correctChoice) {
              segmentNode.classList.add("is-wrong");
            } else if (!selection && correctChoice) {
              segmentNode.classList.add(correctionShown ? "is-correction" : "is-missed");
            }
          }

          segmentNode.addEventListener("click", function () {
            if (isValidated() || !state.currentMode) {
              return;
            }
            if (selection === state.currentMode) {
              delete selections[segment.id];
            } else {
              selections[segment.id] = state.currentMode;
            }
            state.validatedByExercise[exercise.id] = false;
            state.correctionShownByExercise[exercise.id] = false;
            persist();
            renderAll();
          });

          line.appendChild(segmentNode);
          line.appendChild(document.createTextNode(" "));
        });

        transcript.appendChild(line);
      });
    }

    function clearResult() {
      resultBadge.textContent = "En attente";
      resultBadge.className = "module-status-badge";
      resultText.textContent = "Annotez le texte, puis validez.";
      feedbackList.innerHTML = "";
      resultNote.textContent = "";
    }

    function renderValidatedResult(showCorrection) {
      const exercise = currentExercise();
      const selections = currentSelections();
      const stressSet = new Set(exercise.correction.stress);
      const pressureSet = new Set(exercise.correction.pressure);
      const allCorrectIds = new Set(exercise.correction.stress.concat(exercise.correction.pressure));
      let correctCount = 0;
      let studentCorrect = 0;

      Object.keys(selections).forEach(function (id) {
        const choice = selections[id];
        const isCorrect = (choice === "stress" && stressSet.has(id)) || (choice === "pressure" && pressureSet.has(id));
        if (isCorrect) {
          correctCount += 1;
          if (choice === "stress") {
            studentCorrect += 1;
          }
        }
      });

      if (showCorrection) {
        resultBadge.textContent = "Correction affichée";
        resultBadge.className = "module-status-badge is-success";
        resultText.textContent = "Les passages importants sont maintenant visibles dans le texte.";
        resultNote.textContent = "Le même principe de correction est utilisé dans les quatre exercices.";
      } else {
        const criterionReached = correctCount >= 4 && studentCorrect >= 2;
        resultBadge.textContent = criterionReached ? "Critère atteint" : "À renforcer";
        resultBadge.className = "module-status-badge " + (criterionReached ? "is-success" : "is-warning");
        resultText.textContent = "Vous avez identifié " + correctCount + " passage" + (correctCount > 1 ? "s" : "") + " pertinent" + (correctCount > 1 ? "s" : "") + ", dont " + studentCorrect + " venant de l’élève.";
        resultNote.textContent = criterionReached
          ? "Le critère attendu est atteint pour cet exercice."
          : "Le critère attendu est de 4 passages pertinents, dont au moins 2 venant de l’élève.";
      }

      feedbackList.innerHTML = "";

      const idsToComment = showCorrection
        ? Array.from(allCorrectIds)
        : Object.keys(selections).concat(Array.from(allCorrectIds).filter(function (id) { return !selections[id]; }));

      idsToComment.forEach(function (id) {
        const comment = exercise.comments[id];
        if (!comment) {
          return;
        }
        const item = document.createElement("div");
        item.className = "module-feedback-item";

        const isStress = stressSet.has(id);
        const title = document.createElement("strong");
        title.textContent = isStress ? "Stress probable." : "Pression émotionnelle.";
        item.appendChild(title);

        const copy = document.createElement("span");
        copy.textContent = " " + comment;
        item.appendChild(copy);

        feedbackList.appendChild(item);
      });
    }

    function renderResult() {
      if (isCorrectionShown()) {
        renderValidatedResult(true);
        return;
      }
      if (isValidated()) {
        renderValidatedResult(false);
        return;
      }
      if (Object.keys(currentSelections()).length) {
        resultBadge.textContent = "Annotation en cours";
        resultBadge.className = "module-status-badge";
        resultText.textContent = "Vos sélections ont été modifiées. Validez pour afficher le corrigé.";
        feedbackList.innerHTML = "";
        resultNote.textContent = "";
        return;
      }
      clearResult();
    }

    function renderAll() {
      renderHeader();
      renderTranscript();
      renderResult();
      root.querySelectorAll("[data-verbatim-mode]").forEach(function (button) {
        button.classList.toggle("is-active", button.dataset.verbatimMode === state.currentMode);
      });
    }

    function validate() {
      state.validatedByExercise[currentExercise().id] = true;
      state.correctionShownByExercise[currentExercise().id] = false;
      persist();
      renderAll();
    }

    function showCorrection() {
      state.validatedByExercise[currentExercise().id] = true;
      state.correctionShownByExercise[currentExercise().id] = true;
      persist();
      renderAll();
    }

    function resetCurrentExercise() {
      const exercise = currentExercise();
      state.selectionsByExercise[exercise.id] = {};
      state.validatedByExercise[exercise.id] = false;
      state.correctionShownByExercise[exercise.id] = false;
      persist();
      renderAll();
    }

    function goToExercise(index) {
      state.exerciseIndex = Math.max(0, Math.min(VERBATIM_EXERCISES.length - 1, index));
      persist();
      renderAll();
    }

    root.querySelectorAll("[data-verbatim-mode]").forEach(function (button) {
      button.addEventListener("click", function () {
        setMode(button.dataset.verbatimMode);
      });
    });

    root.querySelector("#verbatimValidateBtn").addEventListener("click", validate);
    root.querySelector("#verbatimCorrectionBtn").addEventListener("click", showCorrection);
    root.querySelector("#verbatimResetBtn").addEventListener("click", function () {
      if (!window.confirm("Réinitialiser cet exercice ?")) {
        return;
      }
      resetCurrentExercise();
    });
    prevBtn.addEventListener("click", function () {
      goToExercise(state.exerciseIndex - 1);
    });
    nextBtn.addEventListener("click", function () {
      goToExercise(state.exerciseIndex + 1);
    });

    renderAll();
  }

  function renderReflectModule(activity) {
    const task = activity.reflectionTask || {};
    const prompts = task.prompts || [];
    const quickSituationsMarkup = (task.quickSituations || []).map(function (label) {
      return '<button class="reflect-chip" type="button" data-reflect-chip="' + escapeHtml(label) + '">' + escapeHtml(label) + "</button>";
    }).join("");
    const checkpointsMarkup = (task.checkpoints || []).map(function (label, index) {
      return (
        '<div class="reflect-checkpoint" data-reflect-checkpoint="' + index + '">' +
          '<span class="reflect-checkpoint-dot" aria-hidden="true"></span>' +
          '<span>' + escapeHtml(label) + "</span>" +
        "</div>"
      );
    }).join("");

    function renderPromptField(prompt, index) {
      return (
        '<div class="module-field">' +
          '<label for="reflectAnswer-' + index + '">' + escapeHtml(prompt.label || ("Question " + (index + 1))) + "</label>" +
          '<textarea id="reflectAnswer-' + index + '" data-reflect-answer="' + escapeHtml(prompt.id || String(index)) + '" placeholder="' + escapeHtml(prompt.placeholder || "") + '"></textarea>' +
        "</div>"
      );
    }

    return (
      '<div class="activity-module">' +
        '<section class="reflect-stage-board">' +
          '<article class="module-note reflect-hero-card">' +
            "<h2>Session de recul guidee</h2>" +
            '<p class="rewrite-meta">Temps de reflexion avant la tache finale</p>' +
            '<p><strong>Objectif :</strong> ' + escapeHtml(task.objective || activity.instruction || "") + "</p>" +
            '<div class="activity-copy-box reflect-hero-copy">' + escapeHtml(activity.instruction || "") + "</div>" +
            '<ul class="module-note-list">' +
              (activity.feedbacks || []).map(function (item) {
                return "<li>" + escapeHtml(item) + "</li>";
              }).join("") +
            "</ul>" +
          "</article>" +
          '<article class="module-panel activity-timer-card">' +
            '<div class="module-panel-head">' +
              "<div>" +
                "<h2>Timer de reflexion</h2>" +
                "<p>Un tempo de 10 minutes pour faire emerger vos habitudes sans vous presser.</p>" +
              "</div>" +
              '<span class="rewrite-chip" id="reflectCompletionPill">0 / 4 reperes</span>' +
            "</div>" +
            '<div class="activity-timer-shell">' +
              '<div class="activity-timer-ring" id="reflectTimerRing">' +
                '<div class="activity-timer-inner">' +
                  '<strong id="reflectTimerClock">' + formatClock((task.timerMinutes || 10) * 60) + "</strong>" +
                  '<span id="reflectTimerState">Pret</span>' +
                "</div>" +
              "</div>" +
              '<div class="activity-timer-meta">' +
                '<span class="activity-timer-tag">Session de ' + escapeHtml(String(task.timerMinutes || 10)) + ' min</span>' +
                '<div class="reflect-checkpoint-list">' + checkpointsMarkup + "</div>" +
              "</div>" +
            "</div>" +
            '<div class="activity-timer-actions">' +
              '<button class="btn btn-primary" type="button" id="reflectTimerStartBtn">Demarrer</button>' +
              '<button class="btn btn-secondary" type="button" id="reflectTimerPauseBtn">Pause</button>' +
              '<button class="btn btn-ghost" type="button" id="reflectTimerResetBtn">Relancer 10 min</button>' +
            "</div>" +
          "</article>" +
        "</section>" +
        '<section class="module-panel">' +
          '<div class="module-panel-head">' +
            "<div>" +
              "<h2>Carnet de recul</h2>" +
              "<p>Nommez vos automatismes, puis reformulez votre intention pedagogique de facon plus soutenante.</p>" +
            "</div>" +
            '<span class="module-kpi">2 questions de bilan + prolongements</span>' +
          "</div>" +
          '<div class="reflect-grid">' +
            '<article class="rewrite-card reflect-card">' +
              renderPromptField(prompts[0] || {}, 0) +
              renderPromptField(prompts[1] || {}, 1) +
            "</article>" +
            '<article class="rewrite-card reflect-card">' +
              '<div class="reflect-chip-group">' +
                '<span class="rewrite-card-label">Situations frequentes</span>' +
                '<div class="reflect-chip-row">' + quickSituationsMarkup + "</div>" +
              "</div>" +
              renderPromptField(prompts[2] || {}, 2) +
              renderPromptField(prompts[3] || {}, 3) +
              renderPromptField(prompts[4] || {}, 4) +
            "</article>" +
          "</div>" +
        "</section>" +
        '<section class="module-panel module-result-panel">' +
          '<div class="module-panel-head">' +
            "<div>" +
              "<h2>Synthese personnelle</h2>" +
              "<p>Transformez votre recul en ligne directrice pour l'activite 4.</p>" +
            "</div>" +
            '<span class="module-status-badge" id="reflectResultBadge">En attente</span>' +
          "</div>" +
          '<p class="module-result-text" id="reflectResultText">Renseignez vos reperes, puis generez votre synthese de passage.</p>' +
          '<div class="reflect-summary-box" id="reflectSummaryBox">Votre synthese apparaitra ici pour preparer la tache de performance.</div>' +
          '<div class="module-actions">' +
            '<button class="btn btn-primary" type="button" id="reflectGenerateBtn">Generer ma synthese</button>' +
            '<button class="btn btn-ghost" type="button" id="reflectResetBtn">Reinitialiser</button>' +
            '<span class="module-inline-note" id="reflectFlashNote"></span>' +
          "</div>" +
        "</section>" +
      "</div>"
    );
  }

  function initReflectModule(root, context) {
    const activity = context.activity || {};
    const task = activity.reflectionTask || {};
    const storageKey = makeKey(context);
    const defaultDuration = Math.max(60, Number(task.timerMinutes || 10) * 60);
    const defaultState = {
      answers: {},
      situations: [],
      generated: false,
      timer: { duration: defaultDuration, remaining: defaultDuration, running: false, endAt: null }
    };
    const state = readStorage(storageKey, defaultState);
    const textareas = Array.from(root.querySelectorAll("[data-reflect-answer]"));
    const completionPill = root.querySelector("#reflectCompletionPill");
    const resultBadge = root.querySelector("#reflectResultBadge");
    const resultText = root.querySelector("#reflectResultText");
    const summaryBox = root.querySelector("#reflectSummaryBox");
    const flashNote = root.querySelector("#reflectFlashNote");

    if (!state.answers || typeof state.answers !== "object") {
      state.answers = {};
    }

    if (!Array.isArray(state.situations)) {
      state.situations = [];
    }

    state.generated = Boolean(state.generated);
    state.timer = normalizeTimerState(state.timer, defaultDuration);

    function persist() {
      writeStorage(storageKey, state);
    }

    function getAnswer(id) {
      return String(state.answers[id] || "").trim();
    }

    function syncInputs() {
      textareas.forEach(function (field) {
        field.value = state.answers[field.dataset.reflectAnswer] || "";
      });
    }

    function renderChips() {
      root.querySelectorAll("[data-reflect-chip]").forEach(function (button) {
        button.classList.toggle("is-active", state.situations.indexOf(button.dataset.reflectChip) !== -1);
      });
    }

    function checkpointState() {
      return [
        Boolean(getAnswer("hardestInstruction")),
        Boolean(getAnswer("hardestReason")),
        Boolean(getAnswer("realSituations") || state.situations.length),
        Boolean(getAnswer("keepIntent") && getAnswer("changeLanguage"))
      ];
    }

    function buildSummaryMarkup() {
      const situations = state.situations.slice();
      const extraSituations = getAnswer("realSituations");
      const situationsText = situations.length ? situations.join(", ") : "--";
      const mergedSituations = extraSituations ? (situationsText === "--" ? extraSituations : situationsText + " ; " + extraSituations) : situationsText;

      return (
        '<div class="reflect-summary-stack">' +
          '<p><strong>Consigne la plus sensible :</strong> ' + escapeHtml(getAnswer("hardestInstruction") || "--") + "</p>" +
          '<p><strong>Pourquoi :</strong> ' + escapeHtml(getAnswer("hardestReason") || "--") + "</p>" +
          '<p><strong>Situations ou cela apparait :</strong> ' + escapeHtml(mergedSituations || "--") + "</p>" +
          '<p><strong>Intention pedagogique a conserver :</strong> ' + escapeHtml(getAnswer("keepIntent") || "--") + "</p>" +
          '<p><strong>Langage a faire evoluer :</strong> ' + escapeHtml(getAnswer("changeLanguage") || "--") + "</p>" +
        "</div>"
      );
    }

    function renderResult() {
      const checkpoints = checkpointState();
      const completed = checkpoints.filter(Boolean).length;

      if (completionPill) {
        completionPill.textContent = completed + " / 4 reperes";
      }

      root.querySelectorAll("[data-reflect-checkpoint]").forEach(function (node, index) {
        node.classList.toggle("is-done", Boolean(checkpoints[index]));
      });

      if (!resultBadge || !resultText || !summaryBox) {
        return;
      }

      if (!completed) {
        resultBadge.textContent = "En attente";
        resultBadge.className = "module-status-badge";
        resultText.textContent = "Commencez a renseigner votre carnet pour faire apparaitre vos reperes de langage.";
      } else if (completed < 4) {
        resultBadge.textContent = "En cours";
        resultBadge.className = "module-status-badge is-warning";
        resultText.textContent = completed + " reperes sur 4 sont deja explicites. Poursuivez pour construire une synthese complete.";
      } else {
        resultBadge.textContent = "Pret";
        resultBadge.className = "module-status-badge is-success";
        resultText.textContent = "Vos 4 reperes sont nommes. Vous pouvez passer a la tache de performance avec une ligne directrice claire.";
      }

      summaryBox.innerHTML = state.generated
        ? buildSummaryMarkup()
        : "Votre synthese apparaitra ici pour preparer la tache de performance.";
    }

    const timerController = bindCountdownTimer({
      timerState: state.timer,
      ringNode: root.querySelector("#reflectTimerRing"),
      clockNode: root.querySelector("#reflectTimerClock"),
      statusNode: root.querySelector("#reflectTimerState"),
      onChange: persist,
      onComplete: function () {
        persist();
        renderResult();
        setFlashMessage(flashNote, "Temps ecoule. Generez votre synthese quand vous etes pret.");
      }
    });

    function renderAll() {
      renderChips();
      renderResult();
      timerController.render();
    }

    textareas.forEach(function (field) {
      field.addEventListener("input", function () {
        state.answers[field.dataset.reflectAnswer] = field.value;
        state.generated = false;
        persist();
        renderAll();
      });
    });

    root.querySelectorAll("[data-reflect-chip]").forEach(function (button) {
      button.addEventListener("click", function () {
        const label = button.dataset.reflectChip;
        const index = state.situations.indexOf(label);
        if (index === -1) {
          state.situations.push(label);
        } else {
          state.situations.splice(index, 1);
        }
        state.generated = false;
        persist();
        renderAll();
      });
    });

    root.querySelector("#reflectTimerStartBtn").addEventListener("click", function () {
      timerController.start();
    });
    root.querySelector("#reflectTimerPauseBtn").addEventListener("click", function () {
      timerController.pause();
    });
    root.querySelector("#reflectTimerResetBtn").addEventListener("click", function () {
      timerController.reset(defaultDuration);
      setFlashMessage(flashNote, "Timer relance pour 10 minutes.");
    });

    root.querySelector("#reflectGenerateBtn").addEventListener("click", function () {
      state.generated = true;
      persist();
      renderAll();
    });

    root.querySelector("#reflectResetBtn").addEventListener("click", function () {
      if (!window.confirm("Reinitialiser cette fiche ?")) {
        return;
      }

      state.generated = false;
      state.situations = [];
      state.answers = {};
      textareas.forEach(function (field) {
        field.value = "";
      });
      timerController.reset(defaultDuration);
      persist();
      renderAll();
      setFlashMessage(flashNote, "Carnet reinitialise.");
    });

    syncInputs();
    renderAll();
  }

  function renderRephraseModule(activity) {
    const task = activity.performanceTask || {};
    const prompts = activity.prompts || [];
    const guide = activity.facilitatorGuide || {};
    const fullMinutes = (activity.sessionFlow || []).reduce(function (sum, stage) {
      return sum + Number(stage.minutes || 0);
    }, 0);
    const stageOptions = [{
      id: "full-session",
      label: "Session complete",
      minutes: fullMinutes || 20,
      description: "Cycle complet de la tache de performance, du cadrage initial a la relecture finale."
    }].concat(activity.sessionFlow || []);
    const successCriteria = (task.successCriteria || []).map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    }).join("");
    const theoryList = (task.theory || []).map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    }).join("");
    const stressSignals = (activity.stressSignals || []).map(function (item) {
      return '<span class="rewrite-signal-chip">' + escapeHtml(item) + "</span>";
    }).join("");
    const stageButtons = stageOptions.map(function (stage) {
      return (
        '<button class="activity-stage-chip" type="button" data-rephrase-stage="' + escapeHtml(stage.id) + '">' +
          '<span>' + escapeHtml(stage.label) + "</span>" +
          '<small>' + escapeHtml(String(stage.minutes)) + " min</small>" +
        "</button>"
      );
    }).join("");
    const learningActivities = (activity.learningActivities || []).map(function (item) {
      const points = (item.points || []).map(function (point) {
        return "<li>" + escapeHtml(point) + "</li>";
      }).join("");

      return (
        '<article class="rewrite-sequence-card">' +
          '<div class="rewrite-sequence-head">' +
            "<h3>" + escapeHtml(item.title) + "</h3>" +
            '<span class="rewrite-chip">' + escapeHtml(item.duration || "--") + "</span>" +
          "</div>" +
          '<ul class="rewrite-list">' + points + "</ul>" +
        "</article>"
      );
    }).join("");
    const promptCards = prompts.map(function (prompt, index) {
      return (
        '<article class="rewrite-card" data-rephrase-card="' + index + '">' +
          '<div class="rewrite-card-head">' +
            '<span class="module-kpi">' + escapeHtml(prompt.label || ("Consigne " + (index + 1))) + "</span>" +
            '<span class="rewrite-status" id="rewriteStatus-' + index + '">A traiter</span>' +
          "</div>" +
          '<div class="rewrite-original-block">' +
            '<span class="rewrite-card-label">Consigne originale</span>' +
            '<div class="activity-copy-box rewrite-original">' + escapeHtml(prompt.original || "") + "</div>" +
          "</div>" +
          '<div class="module-field">' +
            '<label for="rewriteAnswer-' + index + '">Votre reformulation</label>' +
            '<textarea id="rewriteAnswer-' + index + '" data-rephrase-answer="' + escapeHtml(prompt.id || String(index)) + '" placeholder="Reformulez ici avec un ton neutre et informatif."></textarea>' +
            '<small>' + escapeHtml(prompt.hint || "") + "</small>" +
          "</div>" +
          '<div class="rewrite-feedback" id="rewriteFeedback-' + index + '">La validation verifiera la conservation de l\'information utile et l\'absence de formulations stressantes.</div>' +
          '<details class="rewrite-example" id="rewriteExample-' + index + '" hidden>' +
            '<summary>Voir une reformulation possible</summary>' +
            '<p>' + escapeHtml(prompt.neutralExample || "") + "</p>" +
          "</details>" +
        "</article>"
      );
    }).join("");
    const resourcesRows = (activity.resources || []).map(function (resource) {
      return (
        "<tr>" +
          "<td>" + escapeHtml(resource.label || "") + "</td>" +
          "<td>" + escapeHtml(resource.usage || "") + "</td>" +
        "</tr>"
      );
    }).join("");

    function renderGuideBlock(title, items) {
      if (!items || !items.length) {
        return "";
      }

      return (
        '<section class="rewrite-guide-block">' +
          "<h3>" + escapeHtml(title) + "</h3>" +
          '<ul class="rewrite-list">' +
            items.map(function (item) {
              return "<li>" + escapeHtml(item) + "</li>";
            }).join("") +
          "</ul>" +
        "</section>"
      );
    }

    const reflectionQuestions = (activity.reflectionQuestions || []).map(function (question) {
      return "<li>" + escapeHtml(question) + "</li>";
    }).join("");
    const referenceMarkup = activity.reference
      ? '<a class="rewrite-reference-link" href="' + escapeHtml(activity.reference.href || "#") + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(activity.reference.label || "Reference") + "</a>"
      : "";

    return (
      '<div class="activity-module">' +
        '<section class="rewrite-stage-board">' +
          '<article class="module-note rewrite-hero-card">' +
            "<h2>Studio de reformulation</h2>" +
            '<p class="rewrite-meta">' + escapeHtml(task.axis || "") + "</p>" +
            '<p><strong>Public cible :</strong> ' + escapeHtml(task.audience || "") + "</p>" +
            '<p><strong>Objectif de performance :</strong> ' + escapeHtml(task.objective || activity.instruction || "") + "</p>" +
            '<p><strong>Objectif pedagogique de reference :</strong> ' + escapeHtml(task.pedagogicalReference || "") + "</p>" +
            '<div class="rewrite-signal-row">' + stressSignals + "</div>" +
            "<h3>Criteres de reussite</h3>" +
            '<ul class="module-note-list">' + successCriteria + "</ul>" +
            "<h3>Ancrage theorique</h3>" +
            '<ul class="module-note-list">' + theoryList + "</ul>" +
          "</article>" +
          '<article class="module-panel activity-timer-card">' +
            '<div class="module-panel-head">' +
              "<div>" +
                "<h2>Timer de studio</h2>" +
                '<p id="rewriteStageDescription">' + escapeHtml(stageOptions[0].description || "") + "</p>" +
              "</div>" +
              '<span class="rewrite-chip" id="rewriteActiveStageLabel">' + escapeHtml(stageOptions[0].label) + "</span>" +
            "</div>" +
            '<div class="activity-timer-shell">' +
              '<div class="activity-timer-ring" id="rewriteTimerRing">' +
                '<div class="activity-timer-inner">' +
                  '<strong id="rewriteTimerClock">' + formatClock((stageOptions[0].minutes || 20) * 60) + "</strong>" +
                  '<span id="rewriteTimerState">Pret</span>' +
                "</div>" +
              "</div>" +
              '<div class="activity-timer-meta">' +
                '<span class="activity-timer-tag">Cadence de travail</span>' +
                '<div class="activity-stage-list">' + stageButtons + "</div>" +
              "</div>" +
            "</div>" +
            '<div class="activity-timer-actions">' +
              '<button class="btn btn-primary" type="button" id="rewriteTimerStartBtn">Demarrer</button>' +
              '<button class="btn btn-secondary" type="button" id="rewriteTimerPauseBtn">Pause</button>' +
              '<button class="btn btn-ghost" type="button" id="rewriteTimerResetBtn">Reinitialiser le temps</button>' +
            "</div>" +
          "</article>" +
        "</section>" +
        '<section class="rewrite-metrics-grid">' +
          '<article class="rewrite-metric-card"><span>Consignes redigees</span><strong id="rewriteAnsweredCount">0 / ' + prompts.length + '</strong></article>' +
          '<article class="rewrite-metric-card"><span>Reformulations validees</span><strong id="rewriteValidatedCount">0 / ' + prompts.length + '</strong></article>' +
          '<article class="rewrite-metric-card"><span>Seuil de reussite</span><strong>3 / ' + prompts.length + '</strong></article>' +
        "</section>" +
        '<section class="module-panel">' +
          '<div class="module-panel-head">' +
            "<div>" +
              "<h2>Activites d'apprentissage</h2>" +
              "<p>Sequence preparatoire avant la validation finale.</p>" +
            "</div>" +
            '<span class="module-kpi">3 etapes</span>' +
          "</div>" +
          '<div class="rewrite-sequence-grid">' + learningActivities + "</div>" +
        "</section>" +
        '<section class="module-panel">' +
          '<div class="module-panel-head">' +
            "<div>" +
              "<h2>Fiche d'activite - reecriture</h2>" +
              "<p>Reformulez chaque consigne sans generer de stress, en gardant l'information pedagogique utile.</p>" +
            "</div>" +
            '<strong class="module-kpi" id="rewriteScorePill">0 / ' + prompts.length + ' validees</strong>' +
          "</div>" +
          '<div class="rewrite-grid">' + promptCards + "</div>" +
        "</section>" +
        '<section class="module-panel module-result-panel">' +
          '<div class="module-panel-head">' +
            "<div>" +
              "<h2>Resultat</h2>" +
              "<p>Validation minimale : 3 reformulations sur 4.</p>" +
            "</div>" +
            '<span class="module-status-badge" id="rewriteResultBadge">En attente</span>' +
          "</div>" +
          '<p class="module-result-text" id="rewriteResultText">Reformulez les 4 consignes, puis validez votre production.</p>' +
          '<p class="module-result-note" id="rewriteResultNote"></p>' +
          '<div class="module-actions">' +
            '<button class="btn btn-primary" type="button" id="rewriteValidateBtn">Valider mes reformulations</button>' +
            '<button class="btn btn-secondary" type="button" id="rewriteCorrectionBtn">Afficher des reformulations possibles</button>' +
            '<button class="btn btn-ghost" type="button" id="rewriteResetBtn">Reinitialiser</button>' +
            '<span class="module-inline-note" id="rewriteFlashNote"></span>' +
          "</div>" +
        "</section>" +
        '<section class="module-note-grid">' +
          '<article class="module-note">' +
            "<h2>Guidage du formateur</h2>" +
            '<div class="rewrite-guide-stack">' +
              renderGuideBlock("Lancement", guide.launch) +
              renderGuideBlock("Points de vigilance", guide.vigilance) +
              renderGuideBlock("Aides", guide.helps) +
              renderGuideBlock("Regulation", guide.regulation) +
              renderGuideBlock("Cloture", guide.closureSignals) +
            "</div>" +
          "</article>" +
          '<article class="module-note">' +
            "<h2>Ressources</h2>" +
            '<div class="rewrite-table-wrap">' +
              '<table class="rewrite-resource-table">' +
                "<thead><tr><th>Ressource</th><th>Usage</th></tr></thead>" +
                '<tbody>' + resourcesRows + "</tbody>" +
              "</table>" +
            "</div>" +
            "<h2>Questions de reflexion</h2>" +
            '<ul class="rewrite-list">' + reflectionQuestions + "</ul>" +
            "<h2>Reference</h2>" +
            '<div class="rewrite-reference">' + referenceMarkup + "</div>" +
          "</article>" +
        "</section>" +
      "</div>"
    );
  }

  function initRephraseModule(root, context) {
    const activity = context.activity || {};
    const prompts = activity.prompts || [];
    const fullMinutes = (activity.sessionFlow || []).reduce(function (sum, stage) {
      return sum + Number(stage.minutes || 0);
    }, 0);
    const stageOptions = [{
      id: "full-session",
      label: "Session complete",
      minutes: fullMinutes || 20,
      description: "Cycle complet de la tache de performance, du cadrage initial a la relecture finale."
    }].concat(activity.sessionFlow || []);
    const storageKey = makeKey(context);
    const defaultDuration = (stageOptions[0].minutes || 20) * 60;
    const defaultState = {
      answers: {},
      validated: false,
      correctionShown: false,
      results: {},
      activeStageId: stageOptions[0].id,
      timer: { duration: defaultDuration, remaining: defaultDuration, running: false, endAt: null }
    };
    const state = readStorage(storageKey, defaultState);
    const textareas = Array.from(root.querySelectorAll("[data-rephrase-answer]"));
    const scorePill = root.querySelector("#rewriteScorePill");
    const answeredCount = root.querySelector("#rewriteAnsweredCount");
    const validatedCount = root.querySelector("#rewriteValidatedCount");
    const resultBadge = root.querySelector("#rewriteResultBadge");
    const resultText = root.querySelector("#rewriteResultText");
    const resultNote = root.querySelector("#rewriteResultNote");
    const flashNote = root.querySelector("#rewriteFlashNote");
    const activeStageLabel = root.querySelector("#rewriteActiveStageLabel");
    const stageDescription = root.querySelector("#rewriteStageDescription");

    if (!state.answers || typeof state.answers !== "object") {
      state.answers = {};
    }

    if (!state.results || typeof state.results !== "object") {
      state.results = {};
    }

    state.validated = Boolean(state.validated);
    state.correctionShown = Boolean(state.correctionShown);
    state.activeStageId = stageOptions.some(function (stage) {
      return stage.id === state.activeStageId;
    }) ? state.activeStageId : stageOptions[0].id;
    state.timer = normalizeTimerState(state.timer, defaultDuration);

    function persist() {
      writeStorage(storageKey, state);
    }

    function currentStage() {
      return stageOptions.find(function (stage) {
        return stage.id === state.activeStageId;
      }) || stageOptions[0];
    }

    function syncInputs() {
      textareas.forEach(function (field) {
        field.value = state.answers[field.dataset.rephraseAnswer] || "";
      });
    }

    function evaluatePrompt(prompt, answer) {
      const normalized = normalizeText(answer);
      const missingGroups = (prompt.requiredGroups || []).filter(function (group) {
        return !textContainsAny(normalized, group);
      });
      const blockedPhrases = (prompt.blockedPhrases || []).filter(function (phrase) {
        return normalized.indexOf(normalizeText(phrase)) !== -1;
      });
      const issues = [];

      if (!normalized) {
        issues.push("Ajoutez une reformulation avant de valider.");
      }

      if (normalized && normalized.length < 16) {
        issues.push("La reformulation reste trop courte pour conserver clairement l'information utile.");
      }

      if (missingGroups.length) {
        issues.push("Certaines informations pedagogiques de depart ne sont plus explicites.");
      }

      if (blockedPhrases.length) {
        issues.push("Une ou plusieurs tournures restent trop stressantes.");
      }

      if (!issues.length) {
        issues.push("La reformulation conserve l'information utile avec un ton plus neutre.");
      }

      return {
        valid: Boolean(normalized) && normalized.length >= 16 && !missingGroups.length && !blockedPhrases.length,
        issues: issues
      };
    }

    function evaluateAll() {
      const results = {};

      prompts.forEach(function (prompt) {
        results[prompt.id] = evaluatePrompt(prompt, state.answers[prompt.id] || "");
      });

      state.results = results;
      state.validated = true;
    }

    function answeredTotal() {
      return prompts.reduce(function (count, prompt) {
        return count + (String(state.answers[prompt.id] || "").trim() ? 1 : 0);
      }, 0);
    }

    function validTotal() {
      return prompts.reduce(function (count, prompt) {
        return count + (state.results[prompt.id] && state.results[prompt.id].valid ? 1 : 0);
      }, 0);
    }

    function renderStagePanel() {
      const stage = currentStage();

      root.querySelectorAll("[data-rephrase-stage]").forEach(function (button) {
        button.classList.toggle("is-active", button.dataset.rephraseStage === stage.id);
      });

      if (activeStageLabel) {
        activeStageLabel.textContent = stage.label;
      }

      if (stageDescription) {
        stageDescription.textContent = stage.description || "";
      }
    }

    function renderMetrics() {
      const answered = answeredTotal();
      const valid = validTotal();

      if (answeredCount) {
        answeredCount.textContent = answered + " / " + prompts.length;
      }

      if (validatedCount) {
        validatedCount.textContent = valid + " / " + prompts.length;
      }

      if (scorePill) {
        scorePill.textContent = valid + " / " + prompts.length + " validees";
      }
    }

    function renderPromptState(prompt, index) {
      const answer = state.answers[prompt.id] || "";
      const result = state.results[prompt.id] || null;
      const statusNode = root.querySelector("#rewriteStatus-" + index);
      const feedbackNode = root.querySelector("#rewriteFeedback-" + index);
      const exampleNode = root.querySelector("#rewriteExample-" + index);
      const cardNode = root.querySelector('[data-rephrase-card="' + index + '"]');

      if (!statusNode || !feedbackNode || !cardNode || !exampleNode) {
        return;
      }

      cardNode.classList.remove("is-success", "is-warning");
      statusNode.className = "rewrite-status";
      feedbackNode.className = "rewrite-feedback";

      if (!state.validated) {
        statusNode.textContent = answer ? "En cours" : "A traiter";
        if (answer) {
          statusNode.classList.add("is-progress");
        }
        feedbackNode.textContent = prompt.hint || "Completez la reformulation avant validation.";
      } else if (result && result.valid) {
        statusNode.textContent = "Validee";
        statusNode.classList.add("is-success");
        feedbackNode.classList.add("is-success");
        feedbackNode.textContent = result.issues.join(" ");
        cardNode.classList.add("is-success");
      } else {
        statusNode.textContent = "A retravailler";
        statusNode.classList.add("is-warning");
        feedbackNode.classList.add("is-warning");
        feedbackNode.textContent = result ? result.issues.join(" ") : (prompt.hint || "");
        cardNode.classList.add("is-warning");
      }

      exampleNode.hidden = !state.correctionShown;
      exampleNode.open = state.correctionShown;
    }

    function renderResult() {
      const score = validTotal();

      if (!resultBadge || !resultText || !resultNote) {
        return;
      }

      if (!state.validated) {
        resultBadge.textContent = "En attente";
        resultBadge.className = "module-status-badge";
        resultText.textContent = "Reformulez les 4 consignes, puis validez votre production.";
        resultNote.textContent = state.correctionShown
          ? "Les reformulations possibles sont visibles pour guider votre reprise."
          : "";
        return;
      }

      if (score >= 3) {
        resultBadge.textContent = "Reussi";
        resultBadge.className = "module-status-badge is-success";
        resultText.textContent = score + " reformulations sur " + prompts.length + " repondent aux criteres de base.";
        resultNote.textContent = "La tache de performance est atteinte. Comparez si besoin vos formulations aux propositions affichees.";
        return;
      }

      resultBadge.textContent = "A retravailler";
      resultBadge.className = "module-status-badge is-warning";
      resultText.textContent = score + " reformulations sur " + prompts.length + " repondent aux criteres de base.";
      resultNote.textContent = "Visez au moins 3 reformulations valides sur 4, en conservant l'information pedagogique sans pression implicite.";
    }

    const timerController = bindCountdownTimer({
      timerState: state.timer,
      ringNode: root.querySelector("#rewriteTimerRing"),
      clockNode: root.querySelector("#rewriteTimerClock"),
      statusNode: root.querySelector("#rewriteTimerState"),
      onChange: persist,
      onComplete: function () {
        persist();
        renderResult();
        setFlashMessage(flashNote, "Temps ecoule. Passez en relecture ou validez vos reformulations.");
      }
    });

    function renderAll() {
      renderStagePanel();
      renderMetrics();
      prompts.forEach(function (prompt, index) {
        renderPromptState(prompt, index);
      });
      renderResult();
      timerController.render();
    }

    textareas.forEach(function (field) {
      field.addEventListener("input", function () {
        state.answers[field.dataset.rephraseAnswer] = field.value;
        if (state.validated) {
          state.validated = false;
          state.results = {};
        }
        persist();
        renderAll();
      });
    });

    root.querySelectorAll("[data-rephrase-stage]").forEach(function (button) {
      button.addEventListener("click", function () {
        const nextStage = stageOptions.find(function (stage) {
          return stage.id === button.dataset.rephraseStage;
        });

        if (!nextStage) {
          return;
        }

        state.activeStageId = nextStage.id;
        timerController.reset((nextStage.minutes || 20) * 60);
        persist();
        renderAll();
      });
    });

    root.querySelector("#rewriteTimerStartBtn").addEventListener("click", function () {
      timerController.start();
    });
    root.querySelector("#rewriteTimerPauseBtn").addEventListener("click", function () {
      timerController.pause();
    });
    root.querySelector("#rewriteTimerResetBtn").addEventListener("click", function () {
      const stage = currentStage();
      timerController.reset((stage.minutes || 20) * 60);
      setFlashMessage(flashNote, "Timer reinitialise pour cette phase.");
    });

    root.querySelector("#rewriteValidateBtn").addEventListener("click", function () {
      evaluateAll();
      persist();
      renderAll();
    });

    root.querySelector("#rewriteCorrectionBtn").addEventListener("click", function () {
      if (!state.validated) {
        evaluateAll();
      }
      state.correctionShown = true;
      persist();
      renderAll();
    });

    root.querySelector("#rewriteResetBtn").addEventListener("click", function () {
      if (!window.confirm("Reinitialiser cette fiche ?")) {
        return;
      }

      state.answers = {};
      state.results = {};
      state.validated = false;
      state.correctionShown = false;
      textareas.forEach(function (field) {
        field.value = "";
      });
      timerController.reset((currentStage().minutes || 20) * 60);
      persist();
      renderAll();
      setFlashMessage(flashNote, "Fiche reinitialisee.");
    });

    syncInputs();
    renderAll();
  }

  function renderEvaluationModule() {
    return (
      '<div class="activity-module">' +
        '<section class="module-note-grid module-note-grid-single">' +
          '<article class="module-note">' +
            "<h2>Consigne</h2>" +
            "<p>Visionnez la scène, identifiez un élève en état probable de stress, puis justifiez votre lecture à l’aide de quatre indices observables.</p>" +
          "</article>" +
        "</section>" +
        '<section class="module-panel">' +
          '<div class="module-panel-head">' +
            "<div><h2>Scène de classe</h2></div>" +
            '<div class="module-status-row">' +
              '<span class="module-kpi" id="evalVideoStatus">Vidéo ADID</span>' +
              '<span class="module-kpi" id="evalCurrentTime">0:00</span>' +
              '<span class="module-kpi" id="evalDuration">0:00</span>' +
            "</div>" +
          "</div>" +
          '<div class="evaluation-video-shell">' +
            '<div class="evaluation-video-wrap">' +
              '<video id="evalSceneVideo" controls preload="metadata"></video>' +
              '<div class="evaluation-video-placeholder" id="evalVideoPlaceholder">Ajouter une vidéo de classe pour lancer l’analyse.</div>' +
            "</div>" +
            '<div class="module-inline-actions">' +
              '<button class="btn btn-ghost" type="button" id="evalRewindBtn">Revenir de 10 s</button>' +
              '<button class="btn btn-ghost" type="button" id="evalForwardBtn">Avancer de 10 s</button>' +
            "</div>" +
          "</div>" +
        "</section>" +
        '<section class="module-panel">' +
          '<div class="module-panel-head"><div><h2>Réponse de l’enseignant</h2><p>Construisez une réponse argumentée à partir d’indices observables.</p></div></div>' +
          '<div class="module-fields">' +
            '<div class="module-field"><label for="evalStudentName">Élève identifié</label><input id="evalStudentName" data-eval-field="studentName" type="text" placeholder="Ex. élève au premier rang à gauche" /></div>' +
            '<div class="module-field"><label for="evalStudentJustification">Justification brève</label><textarea id="evalStudentJustification" data-eval-field="studentJustification" placeholder="Expliquez pourquoi ce choix vous semble plausible."></textarea></div>' +
            '<div class="evaluation-evidence-grid">' +
              '<article class="evaluation-evidence-card">' +
                '<div class="module-field"><label for="evalCat1">Catégorie 1</label><select id="evalCat1" data-eval-field="cat1"><option value="">Choisir</option><option value="verbal">Verbal</option><option value="nonverbal">Non verbal</option><option value="contextuel">Contextuel</option></select></div>' +
                '<div class="module-field"><label for="evalObs1">Indice 1</label><textarea id="evalObs1" data-eval-field="obs1" placeholder="Décrivez ce qui est vu ou entendu."></textarea></div>' +
              "</article>" +
              '<article class="evaluation-evidence-card">' +
                '<div class="module-field"><label for="evalCat2">Catégorie 2</label><select id="evalCat2" data-eval-field="cat2"><option value="">Choisir</option><option value="verbal">Verbal</option><option value="nonverbal">Non verbal</option><option value="contextuel">Contextuel</option></select></div>' +
                '<div class="module-field"><label for="evalObs2">Indice 2</label><textarea id="evalObs2" data-eval-field="obs2" placeholder="Décrivez ce qui est vu ou entendu."></textarea></div>' +
              "</article>" +
              '<article class="evaluation-evidence-card">' +
                '<div class="module-field"><label for="evalCat3">Catégorie 3</label><select id="evalCat3" data-eval-field="cat3"><option value="">Choisir</option><option value="verbal">Verbal</option><option value="nonverbal">Non verbal</option><option value="contextuel">Contextuel</option></select></div>' +
                '<div class="module-field"><label for="evalObs3">Indice 3</label><textarea id="evalObs3" data-eval-field="obs3" placeholder="Décrivez ce qui est vu ou entendu."></textarea></div>' +
              "</article>" +
              '<article class="evaluation-evidence-card">' +
                '<div class="module-field"><label for="evalCat4">Catégorie 4</label><select id="evalCat4" data-eval-field="cat4"><option value="">Choisir</option><option value="verbal">Verbal</option><option value="nonverbal">Non verbal</option><option value="contextuel">Contextuel</option></select></div>' +
                '<div class="module-field"><label for="evalObs4">Indice 4</label><textarea id="evalObs4" data-eval-field="obs4" placeholder="Décrivez ce qui est vu ou entendu."></textarea></div>' +
              "</article>" +
            "</div>" +
          "</div>" +
        "</section>" +
        '<section class="module-panel module-panel-soft">' +
          '<div class="module-panel-head"><div><h2>Retour réflexif</h2><p>Reliez votre analyse de la scène à votre posture professionnelle.</p></div></div>' +
          '<div class="module-fields">' +
            '<div class="module-field"><label for="evalFeltMoment">Qu’as-tu ressenti à ce moment-là ?</label><textarea id="evalFeltMoment" data-eval-field="feltMoment" placeholder="Décrivez votre ressenti."></textarea></div>' +
            '<div class="module-field"><label for="evalTeacherReaction">Comment as-tu réagi ?</label><textarea id="evalTeacherReaction" data-eval-field="teacherReaction" placeholder="Décrivez votre réaction professionnelle."></textarea></div>' +
            '<div class="module-field"><label for="evalTeacherReview">Que penses-tu de ton retour ?</label><textarea id="evalTeacherReview" data-eval-field="teacherReview" placeholder="Analysez votre retour avec recul."></textarea></div>' +
          "</div>" +
          '<div class="module-actions">' +
            '<button class="btn btn-ghost" type="button" id="evalResetBtn">Réinitialiser la fiche</button>' +
            '<span class="module-inline-note" id="evalFlashNote"></span>' +
          "</div>" +
        "</section>" +
      "</div>"
    );
  }

  function initEvaluationModule(root, context) {
    const storageKey = makeKey(context);
    const defaultVideoSrc = window.location.pathname.indexOf("/plateforme-etudiante/") !== -1
      ? "../videoADID.mp4"
      : "videoADID.mp4";
    const fields = Array.from(root.querySelectorAll("[data-eval-field]"));
    const video = root.querySelector("#evalSceneVideo");
    const videoStatus = root.querySelector("#evalVideoStatus");
    const videoPlaceholder = root.querySelector("#evalVideoPlaceholder");
    const currentTime = root.querySelector("#evalCurrentTime");
    const duration = root.querySelector("#evalDuration");
    const flashNote = root.querySelector("#evalFlashNote");
    let debounceId = null;

    function getData() {
      const result = {};
      fields.forEach(function (field) {
        result[field.dataset.evalField] = field.value;
      });
      return result;
    }

    function save() {
      writeStorage(storageKey, getData());
    }

    function load() {
      const saved = readStorage(storageKey, {});
      fields.forEach(function (field) {
        field.value = saved[field.dataset.evalField] || "";
      });
    }

    function formatTime(seconds) {
      if (!Number.isFinite(seconds)) {
        return "0:00";
      }
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return minutes + ":" + String(secs).padStart(2, "0");
    }

    fields.forEach(function (field) {
      field.addEventListener("input", function () {
        window.clearTimeout(debounceId);
        debounceId = window.setTimeout(function () {
          save();
        }, 180);
      });
      field.addEventListener("change", function () {
        save();
      });
    });

    window.addEventListener("beforeunload", save);

    video.addEventListener("loadedmetadata", function () {
      duration.textContent = formatTime(video.duration);
      videoPlaceholder.classList.add("is-hidden");
    });

    video.addEventListener("timeupdate", function () {
      currentTime.textContent = formatTime(video.currentTime);
    });

    root.querySelector("#evalRewindBtn").addEventListener("click", function () {
      video.currentTime = Math.max(0, video.currentTime - 10);
    });

    root.querySelector("#evalForwardBtn").addEventListener("click", function () {
      if (!Number.isFinite(video.duration)) {
        return;
      }
      video.currentTime = Math.min(video.duration, video.currentTime + 10);
    });

    root.querySelector("#evalResetBtn").addEventListener("click", function () {
      if (!window.confirm("Réinitialiser cette fiche ?")) {
        return;
      }
      fields.forEach(function (field) {
        field.value = "";
      });
      save();
      video.pause();
      video.src = defaultVideoSrc;
      video.load();
      currentTime.textContent = "0:00";
      videoStatus.textContent = "Vidéo ADID";
      setFlashMessage(flashNote, "Fiche réinitialisée.");
    });

    load();
    video.src = defaultVideoSrc;
    video.load();
  }

  const modules = {
    sort: {
      render: renderSortModule,
      init: initSortModule
    },
    prep: {
      render: renderPrepModule,
      init: initPrepModule
    },
    reflect: {
      render: renderReflectModule,
      init: initReflectModule
    },
    rephrase: {
      render: renderRephraseModule,
      init: initRephraseModule
    },
    verbatim: {
      render: renderVerbatimModule,
      init: initVerbatimModule
    },
    evaluation: {
      render: renderEvaluationModule,
      init: initEvaluationModule
    }
  };

  window.activityModules = {
    get: function (type) {
      return modules[type] || null;
    }
  };
})();
