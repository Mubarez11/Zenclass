#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de migration de la navbar vers le style ace-header enrichi
"""

import os
import re
from pathlib import Path

BASE_DIR = Path(r"C:\Users\moham\Desktop\zenclass2")

# ──────────────────────────────────────────
# 1) Templates de navbar par contexte
# ──────────────────────────────────────────

NAVBAR_RACINE = """<!-- NAV OVERLAY -->
<nav class="nav-overlay" id="navOverlay" aria-hidden="true">
  <button class="nav-close" id="navClose" aria-label="Fermer">X</button>
  <div class="nav-links">
    <a href="plateforme-etudiante-zenclass.html" class="nav-link" data-num="01" onclick="closeNav()">Accueil</a>
    <a href="plateforme-etudiante-zenclass.html#parcours" class="nav-link" data-num="02" onclick="closeNav()">Parcours</a>
    <a href="zenclass-modele/quiz.html" class="nav-link" data-num="03" onclick="closeNav()">Interactif</a>
    <a href="plateforme-etudiante-zenclass.html#ressources-theoriques" class="nav-link" data-num="04" onclick="closeNav()">Ressources</a>
    <a href="ma-classe.html" class="nav-link" data-num="05" onclick="closeNav()">Ma classe</a>
    <a href="ma-classe.html#forum" class="nav-link" data-num="06" onclick="closeNav()">Forum</a>
    <a href="ma-classe.html#equipe" class="nav-link" data-num="07" onclick="closeNav()">Équipe</a>
  </div>
  <div class="nav-social-row">
    <a href="mailto:contact@zenclass.edu" class="social-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg></a>
    <a href="#" class="social-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42c-.27-1-.99-1.8-1.93-2.07C18.88 4 12 4 12 4s-6.88 0-8.61.35C2.45 4.62 1.73 5.42 1.46 6.42 1.11 8.18 1.11 12 1.11 12s0 3.82.35 5.58c.27 1 .99 1.8 1.93 2.07C5.12 20 12 20 12 20s6.88 0 8.61-.35c.94-.27 1.66-1.07 1.93-2.07C22.89 15.82 22.89 12 22.89 12s0-3.82-.35-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="currentColor"/></svg></a>
  </div>
</nav>

<!-- ACE HEADER -->
<header class="ace-header" id="siteHeader">
  <div class="ace-inner">
    <a href="plateforme-etudiante-zenclass.html" class="ace-logo">
      <img src="logo zenclasse reworked.png" alt="ZenClass" />
    </a>
    <nav class="ace-menu">
      <!-- Parcours -->
      <div class="ace-item" id="ai-parcours">
        <div class="ace-ibg"></div>
        <button class="ace-ibtn">Parcours</button>
        <div class="ace-drop">
          <div class="ace-drop-grid">
            <a href="plateforme-etudiante-zenclass-axe.html?axe=axe-1" class="ace-dcard">
              <div class="ace-dicon" style="background:#667eea33;color:#667eea">A1</div>
              <div class="ace-dname">Axe 1</div>
              <div class="ace-dsub">Émotions & Bien-être</div>
            </a>
            <a href="plateforme-etudiante-zenclass-axe.html?axe=axe-2" class="ace-dcard">
              <div class="ace-dicon" style="background:#63b3ed33;color:#63b3ed">A2</div>
              <div class="ace-dname">Axe 2</div>
              <div class="ace-dsub">Détecter pour prévenir</div>
            </a>
            <a href="plateforme-etudiante-zenclass-axe.html?axe=axe-3" class="ace-dcard">
              <div class="ace-dicon" style="background:#4facfe33;color:#4facfe">A3</div>
              <div class="ace-dname">Axe 3</div>
              <div class="ace-dsub">Communication soutenante</div>
            </a>
            <a href="plateforme-etudiante-zenclass-axe.html?axe=axe-4" class="ace-dcard">
              <div class="ace-dicon" style="background:#9f7aea33;color:#9f7aea">A4</div>
              <div class="ace-dname">Axe 4</div>
              <div class="ace-dsub">Climat & Bien-être global</div>
            </a>
          </div>
        </div>
      </div>
      <!-- Interactif -->
      <div class="ace-item" id="ai-interactif">
        <div class="ace-ibg"></div>
        <button class="ace-ibtn">Interactif</button>
        <div class="ace-drop" style="min-width:280px">
          <div class="ace-drop-list">
            <a href="zenclass-modele/quiz.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#f093fb33;color:#f093fb">Qz</div>
              <div>
                <div class="ace-dname">Quiz</div>
                <div class="ace-dsub">Testez vos connaissances</div>
              </div>
            </a>
            <a href="zenclass-modele/auto-evaluation.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#4facfe33;color:#4facfe">Ae</div>
              <div>
                <div class="ace-dname">Auto-évaluation</div>
                <div class="ace-dsub">Évaluez votre progression</div>
              </div>
            </a>
            <a href="zenclass-modele/respiration.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#667eea33;color:#667eea">R4</div>
              <div>
                <div class="ace-dname">Respiration 4-7-8</div>
                <div class="ace-dsub">Exercice de respiration guidée</div>
              </div>
            </a>
            <a href="zenclass-modele/classification.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#48bb7833;color:#48bb78">Cl</div>
              <div>
                <div class="ace-dname">Classification</div>
                <div class="ace-dsub">Classez les situations</div>
              </div>
            </a>
            <a href="zenclass-modele/jeu-roles.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#ed893633;color:#ed8936">Jr</div>
              <div>
                <div class="ace-dname">Jeu de rôles</div>
                <div class="ace-dsub">Pratiquez en situation</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- Ressources théoriques -->
      <div class="ace-item" id="ai-ressources">
        <div class="ace-ibg"></div>
        <button class="ace-ibtn">Ressources</button>
        <div class="ace-drop" style="min-width:320px">
          <div class="ace-drop-list">
            <a href="plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-1" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#667eea33;color:#667eea">A1</div>
              <div>
                <div class="ace-dname">Axe 1 — Ressources théoriques</div>
                <div class="ace-dsub">Émotions, bien-être et apprentissages</div>
              </div>
            </a>
            <a href="plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-2" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#63b3ed33;color:#63b3ed">A2</div>
              <div>
                <div class="ace-dname">Axe 2 — Ressources théoriques</div>
                <div class="ace-dsub">Prévention du stress</div>
              </div>
            </a>
            <a href="plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-3" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#4facfe33;color:#4facfe">A3</div>
              <div>
                <div class="ace-dname">Axe 3 — Ressources théoriques</div>
                <div class="ace-dsub">Communication soutenante</div>
              </div>
            </a>
            <a href="plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-4" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#9f7aea33;color:#9f7aea">A4</div>
              <div>
                <div class="ace-dname">Axe 4 — Ressources théoriques</div>
                <div class="ace-dsub">Climat et bien-être global</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- Ressources pour ma classe -->
      <div class="ace-item" id="ai-classe-ressources">
        <div class="ace-ibg"></div>
        <a href="ma-classe.html" class="ace-ibtn" style="text-decoration:none">Ressources classe</a>
      </div>
      <!-- Mon suivi -->
      <div class="ace-item" id="ai-suivi">
        <div class="ace-ibg"></div>
        <a href="plateforme-etudiante-zenclass-progression.html" class="ace-ibtn" style="text-decoration:none">Mon suivi</a>
      </div>
      <!-- Ma classe -->
      <div class="ace-item" id="ai-classe">
        <div class="ace-ibg"></div>
        <a href="ma-classe.html" class="ace-ibtn" style="text-decoration:none">Ma classe</a>
      </div>
    </nav>
    <div class="ace-right">
      <a href="plateforme-etudiante-zenclass.html" class="ace-cta">Commencer -&gt;</a>
      <button class="ace-hbg" id="menuToggle" aria-label="Menu" onclick="toggleNav()">
        <span class="hbg-line"></span>
        <span class="hbg-line"></span>
        <span class="hbg-line"></span>
      </button>
    </div>
  </div>
</header>"""

NAVBAR_MODELE = """<!-- NAV OVERLAY -->
<nav class="nav-overlay" id="navOverlay" aria-hidden="true">
  <button class="nav-close" id="navClose" aria-label="Fermer">X</button>
  <div class="nav-links">
    <a href="../plateforme-etudiante-zenclass.html" class="nav-link" data-num="01" onclick="closeNav()">Accueil</a>
    <a href="../plateforme-etudiante-zenclass.html#parcours" class="nav-link" data-num="02" onclick="closeNav()">Parcours</a>
    <a href="quiz.html" class="nav-link" data-num="03" onclick="closeNav()">Interactif</a>
    <a href="../plateforme-etudiante-zenclass.html#ressources-theoriques" class="nav-link" data-num="04" onclick="closeNav()">Ressources</a>
    <a href="../ma-classe.html" class="nav-link" data-num="05" onclick="closeNav()">Ma classe</a>
    <a href="../ma-classe.html#forum" class="nav-link" data-num="06" onclick="closeNav()">Forum</a>
    <a href="../ma-classe.html#equipe" class="nav-link" data-num="07" onclick="closeNav()">Équipe</a>
  </div>
  <div class="nav-social-row">
    <a href="mailto:contact@zenclass.edu" class="social-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg></a>
    <a href="#" class="social-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42c-.27-1-.99-1.8-1.93-2.07C18.88 4 12 4 12 4s-6.88 0-8.61.35C2.45 4.62 1.73 5.42 1.46 6.42 1.11 8.18 1.11 12 1.11 12s0 3.82.35 5.58c.27 1 .99 1.8 1.93 2.07C5.12 20 12 20 12 20s6.88 0 8.61-.35c.94-.27 1.66-1.07 1.93-2.07C22.89 15.82 22.89 12 22.89 12s0-3.82-.35-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="currentColor"/></svg></a>
  </div>
</nav>

<!-- ACE HEADER -->
<header class="ace-header" id="siteHeader">
  <div class="ace-inner">
    <a href="../plateforme-etudiante-zenclass.html" class="ace-logo">
      <img src="../logo zenclasse reworked.png" alt="ZenClass" />
    </a>
    <nav class="ace-menu">
      <!-- Parcours -->
      <div class="ace-item" id="ai-parcours">
        <div class="ace-ibg"></div>
        <button class="ace-ibtn">Parcours</button>
        <div class="ace-drop">
          <div class="ace-drop-grid">
            <a href="../plateforme-etudiante-zenclass-axe.html?axe=axe-1" class="ace-dcard">
              <div class="ace-dicon" style="background:#667eea33;color:#667eea">A1</div>
              <div class="ace-dname">Axe 1</div>
              <div class="ace-dsub">Émotions & Bien-être</div>
            </a>
            <a href="../plateforme-etudiante-zenclass-axe.html?axe=axe-2" class="ace-dcard">
              <div class="ace-dicon" style="background:#63b3ed33;color:#63b3ed">A2</div>
              <div class="ace-dname">Axe 2</div>
              <div class="ace-dsub">Détecter pour prévenir</div>
            </a>
            <a href="../plateforme-etudiante-zenclass-axe.html?axe=axe-3" class="ace-dcard">
              <div class="ace-dicon" style="background:#4facfe33;color:#4facfe">A3</div>
              <div class="ace-dname">Axe 3</div>
              <div class="ace-dsub">Communication soutenante</div>
            </a>
            <a href="../plateforme-etudiante-zenclass-axe.html?axe=axe-4" class="ace-dcard">
              <div class="ace-dicon" style="background:#9f7aea33;color:#9f7aea">A4</div>
              <div class="ace-dname">Axe 4</div>
              <div class="ace-dsub">Climat & Bien-être global</div>
            </a>
          </div>
        </div>
      </div>
      <!-- Interactif -->
      <div class="ace-item" id="ai-interactif">
        <div class="ace-ibg"></div>
        <button class="ace-ibtn">Interactif</button>
        <div class="ace-drop" style="min-width:280px">
          <div class="ace-drop-list">
            <a href="quiz.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#f093fb33;color:#f093fb">Qz</div>
              <div>
                <div class="ace-dname">Quiz</div>
                <div class="ace-dsub">Testez vos connaissances</div>
              </div>
            </a>
            <a href="auto-evaluation.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#4facfe33;color:#4facfe">Ae</div>
              <div>
                <div class="ace-dname">Auto-évaluation</div>
                <div class="ace-dsub">Évaluez votre progression</div>
              </div>
            </a>
            <a href="respiration.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#667eea33;color:#667eea">R4</div>
              <div>
                <div class="ace-dname">Respiration 4-7-8</div>
                <div class="ace-dsub">Exercice de respiration guidée</div>
              </div>
            </a>
            <a href="classification.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#48bb7833;color:#48bb78">Cl</div>
              <div>
                <div class="ace-dname">Classification</div>
                <div class="ace-dsub">Classez les situations</div>
              </div>
            </a>
            <a href="jeu-roles.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#ed893633;color:#ed8936">Jr</div>
              <div>
                <div class="ace-dname">Jeu de rôles</div>
                <div class="ace-dsub">Pratiquez en situation</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- Ressources théoriques -->
      <div class="ace-item" id="ai-ressources">
        <div class="ace-ibg"></div>
        <button class="ace-ibtn">Ressources</button>
        <div class="ace-drop" style="min-width:320px">
          <div class="ace-drop-list">
            <a href="../plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-1" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#667eea33;color:#667eea">A1</div>
              <div>
                <div class="ace-dname">Axe 1 — Ressources théoriques</div>
                <div class="ace-dsub">Émotions, bien-être et apprentissages</div>
              </div>
            </a>
            <a href="../plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-2" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#63b3ed33;color:#63b3ed">A2</div>
              <div>
                <div class="ace-dname">Axe 2 — Ressources théoriques</div>
                <div class="ace-dsub">Prévention du stress</div>
              </div>
            </a>
            <a href="../plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-3" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#4facfe33;color:#4facfe">A3</div>
              <div>
                <div class="ace-dname">Axe 3 — Ressources théoriques</div>
                <div class="ace-dsub">Communication soutenante</div>
              </div>
            </a>
            <a href="../plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-4" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#9f7aea33;color:#9f7aea">A4</div>
              <div>
                <div class="ace-dname">Axe 4 — Ressources théoriques</div>
                <div class="ace-dsub">Climat et bien-être global</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- Ressources pour ma classe -->
      <div class="ace-item" id="ai-classe-ressources">
        <div class="ace-ibg"></div>
        <a href="../ma-classe.html" class="ace-ibtn" style="text-decoration:none">Ressources classe</a>
      </div>
      <!-- Mon suivi -->
      <div class="ace-item" id="ai-suivi">
        <div class="ace-ibg"></div>
        <a href="../plateforme-etudiante-zenclass-progression.html" class="ace-ibtn" style="text-decoration:none">Mon suivi</a>
      </div>
      <!-- Ma classe -->
      <div class="ace-item" id="ai-classe">
        <div class="ace-ibg"></div>
        <a href="../ma-classe.html" class="ace-ibtn" style="text-decoration:none">Ma classe</a>
      </div>
    </nav>
    <div class="ace-right">
      <a href="../plateforme-etudiante-zenclass.html" class="ace-cta">Commencer -&gt;</a>
      <button class="ace-hbg" id="menuToggle" aria-label="Menu" onclick="toggleNav()">
        <span class="hbg-line"></span>
        <span class="hbg-line"></span>
        <span class="hbg-line"></span>
      </button>
    </div>
  </div>
</header>"""

NAVBAR_PLATEFORME = """<!-- NAV OVERLAY -->
<nav class="nav-overlay" id="navOverlay" aria-hidden="true">
  <button class="nav-close" id="navClose" aria-label="Fermer">X</button>
  <div class="nav-links">
    <a href="index.html" class="nav-link" data-num="01" onclick="closeNav()">Accueil</a>
    <a href="index.html#parcours" class="nav-link" data-num="02" onclick="closeNav()">Parcours</a>
    <a href="../zenclass-modele/quiz.html" class="nav-link" data-num="03" onclick="closeNav()">Interactif</a>
    <a href="ressources-theoriques.html" class="nav-link" data-num="04" onclick="closeNav()">Ressources</a>
    <a href="../ma-classe.html" class="nav-link" data-num="05" onclick="closeNav()">Ma classe</a>
    <a href="forum.html" class="nav-link" data-num="06" onclick="closeNav()">Forum</a>
    <a href="equipe.html" class="nav-link" data-num="07" onclick="closeNav()">Équipe</a>
  </div>
  <div class="nav-social-row">
    <a href="mailto:contact@zenclass.edu" class="social-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg></a>
    <a href="#" class="social-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42c-.27-1-.99-1.8-1.93-2.07C18.88 4 12 4 12 4s-6.88 0-8.61.35C2.45 4.62 1.73 5.42 1.46 6.42 1.11 8.18 1.11 12 1.11 12s0 3.82.35 5.58c.27 1 .99 1.8 1.93 2.07C5.12 20 12 20 12 20s6.88 0 8.61-.35c.94-.27 1.66-1.07 1.93-2.07C22.89 15.82 22.89 12 22.89 12s0-3.82-.35-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="currentColor"/></svg></a>
  </div>
</nav>

<!-- ACE HEADER -->
<header class="ace-header" id="siteHeader">
  <div class="ace-inner">
    <a href="index.html" class="ace-logo">
      <img src="../logo zenclasse reworked.png" alt="ZenClass" />
    </a>
    <nav class="ace-menu">
      <!-- Parcours -->
      <div class="ace-item" id="ai-parcours">
        <div class="ace-ibg"></div>
        <button class="ace-ibtn">Parcours</button>
        <div class="ace-drop">
          <div class="ace-drop-grid">
            <a href="../plateforme-etudiante-zenclass-axe.html?axe=axe-1" class="ace-dcard">
              <div class="ace-dicon" style="background:#667eea33;color:#667eea">A1</div>
              <div class="ace-dname">Axe 1</div>
              <div class="ace-dsub">Émotions & Bien-être</div>
            </a>
            <a href="../plateforme-etudiante-zenclass-axe.html?axe=axe-2" class="ace-dcard">
              <div class="ace-dicon" style="background:#63b3ed33;color:#63b3ed">A2</div>
              <div class="ace-dname">Axe 2</div>
              <div class="ace-dsub">Détecter pour prévenir</div>
            </a>
            <a href="../plateforme-etudiante-zenclass-axe.html?axe=axe-3" class="ace-dcard">
              <div class="ace-dicon" style="background:#4facfe33;color:#4facfe">A3</div>
              <div class="ace-dname">Axe 3</div>
              <div class="ace-dsub">Communication soutenante</div>
            </a>
            <a href="../plateforme-etudiante-zenclass-axe.html?axe=axe-4" class="ace-dcard">
              <div class="ace-dicon" style="background:#9f7aea33;color:#9f7aea">A4</div>
              <div class="ace-dname">Axe 4</div>
              <div class="ace-dsub">Climat & Bien-être global</div>
            </a>
          </div>
        </div>
      </div>
      <!-- Interactif -->
      <div class="ace-item" id="ai-interactif">
        <div class="ace-ibg"></div>
        <button class="ace-ibtn">Interactif</button>
        <div class="ace-drop" style="min-width:280px">
          <div class="ace-drop-list">
            <a href="../zenclass-modele/quiz.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#f093fb33;color:#f093fb">Qz</div>
              <div>
                <div class="ace-dname">Quiz</div>
                <div class="ace-dsub">Testez vos connaissances</div>
              </div>
            </a>
            <a href="../zenclass-modele/auto-evaluation.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#4facfe33;color:#4facfe">Ae</div>
              <div>
                <div class="ace-dname">Auto-évaluation</div>
                <div class="ace-dsub">Évaluez votre progression</div>
              </div>
            </a>
            <a href="../zenclass-modele/respiration.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#667eea33;color:#667eea">R4</div>
              <div>
                <div class="ace-dname">Respiration 4-7-8</div>
                <div class="ace-dsub">Exercice de respiration guidée</div>
              </div>
            </a>
            <a href="../zenclass-modele/classification.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#48bb7833;color:#48bb78">Cl</div>
              <div>
                <div class="ace-dname">Classification</div>
                <div class="ace-dsub">Classez les situations</div>
              </div>
            </a>
            <a href="../zenclass-modele/jeu-roles.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#ed893633;color:#ed8936">Jr</div>
              <div>
                <div class="ace-dname">Jeu de rôles</div>
                <div class="ace-dsub">Pratiquez en situation</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- Ressources théoriques -->
      <div class="ace-item" id="ai-ressources">
        <div class="ace-ibg"></div>
        <button class="ace-ibtn">Ressources</button>
        <div class="ace-drop" style="min-width:320px">
          <div class="ace-drop-list">
            <a href="../plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-1" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#667eea33;color:#667eea">A1</div>
              <div>
                <div class="ace-dname">Axe 1 — Ressources théoriques</div>
                <div class="ace-dsub">Émotions, bien-être et apprentissages</div>
              </div>
            </a>
            <a href="../plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-2" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#63b3ed33;color:#63b3ed">A2</div>
              <div>
                <div class="ace-dname">Axe 2 — Ressources théoriques</div>
                <div class="ace-dsub">Prévention du stress</div>
              </div>
            </a>
            <a href="../plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-3" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#4facfe33;color:#4facfe">A3</div>
              <div>
                <div class="ace-dname">Axe 3 — Ressources théoriques</div>
                <div class="ace-dsub">Communication soutenante</div>
              </div>
            </a>
            <a href="../plateforme-etudiante-zenclass-ressources-theoriques.html?axe=axe-4" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#9f7aea33;color:#9f7aea">A4</div>
              <div>
                <div class="ace-dname">Axe 4 — Ressources théoriques</div>
                <div class="ace-dsub">Climat et bien-être global</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- Ressources pour ma classe -->
      <div class="ace-item" id="ai-classe-ressources">
        <div class="ace-ibg"></div>
        <a href="../ma-classe.html" class="ace-ibtn" style="text-decoration:none">Ressources classe</a>
      </div>
      <!-- Mon suivi -->
      <div class="ace-item" id="ai-suivi">
        <div class="ace-ibg"></div>
        <a href="../plateforme-etudiante-zenclass-progression.html" class="ace-ibtn" style="text-decoration:none">Mon suivi</a>
      </div>
      <!-- Ma classe -->
      <div class="ace-item" id="ai-classe">
        <div class="ace-ibg"></div>
        <a href="../ma-classe.html" class="ace-ibtn" style="text-decoration:none">Ma classe</a>
      </div>
    </nav>
    <div class="ace-right">
      <a href="index.html" class="ace-cta">Commencer -&gt;</a>
      <button class="ace-hbg" id="menuToggle" aria-label="Menu" onclick="toggleNav()">
        <span class="hbg-line"></span>
        <span class="hbg-line"></span>
        <span class="hbg-line"></span>
      </button>
    </div>
  </div>
</header>"""

# ──────────────────────────────────────────
# 2) Fonctions utilitaires
# ──────────────────────────────────────────


def find_nav_overlay(content: str) -> tuple:
    """Trouve la position de <nav class="nav-overlay" ... </nav>"""
    start = content.find('<nav class="nav-overlay"')
    if start == -1:
        return None, None
    end = content.find("</nav>", start)
    if end == -1:
        return None, None
    end += len("</nav>")
    return start, end


def find_ace_header(content: str) -> tuple:
    """Trouve la position de <header class="ace-header" ... </header>"""
    start = content.find('<header class="ace-header"')
    if start == -1:
        return None, None
    # On cherche le </header> correspondant (simplifié)
    end = content.find("</header>", start)
    if end == -1:
        return None, None
    end += len("</header>")
    return start, end


def find_navbar(content: str) -> tuple:
    """Trouve la position de <nav class="navbar" ... </nav>"""
    start = content.find('<nav class="navbar"')
    if start == -1:
        return None, None
    end = content.find("</nav>", start)
    if end == -1:
        return None, None
    end += len("</nav>")
    return start, end


def add_nav_css(content: str, css_path: str) -> str:
    """Ajoute le lien CSS zenclass-nav.css si absent"""
    if "zenclass-nav.css" in content:
        return content
    # Insérer avant </head>
    head_end = content.find("</head>")
    if head_end == -1:
        return content
    link = f'  <link rel="stylesheet" href="{css_path}" />\n'
    return content[:head_end] + link + content[head_end:]


def add_nav_js(content: str) -> str:
    """Ajoute les fonctions JS toggleNav/closeNav si absentes"""
    if "function toggleNav()" in content:
        return content
    js = """
  <script>
  function toggleNav() {
    const navOv = document.getElementById('navOverlay');
    const menuTgl = document.getElementById('menuToggle');
    if (!navOv || !menuTgl) return;
    const isOpen = navOv.classList.toggle('open');
    navOv.setAttribute('aria-hidden', !isOpen);
    menuTgl.classList.toggle('open', isOpen);
  }
  function closeNav() {
    const navOv = document.getElementById('navOverlay');
    const menuTgl = document.getElementById('menuToggle');
    if (!navOv) return;
    navOv.classList.remove('open');
    navOv.setAttribute('aria-hidden', 'true');
    if (menuTgl) menuTgl.classList.remove('open');
  }
  document.addEventListener('DOMContentLoaded', function() {
    var closeBtn = document.getElementById('navClose');
    if (closeBtn) closeBtn.addEventListener('click', closeNav);
    var navOv = document.getElementById('navOverlay');
    if (navOv) {
      navOv.addEventListener('click', function(e) { if (e.target === navOv) closeNav(); });
    }
    document.querySelectorAll('.ace-item').forEach(function(item) {
      item.addEventListener('mouseenter', function() { this.classList.add('hov'); });
      item.addEventListener('mouseleave', function() { this.classList.remove('hov'); });
    });
  });
  </script>
"""
    body_end = content.rfind("</body>")
    if body_end == -1:
        return content
    return content[:body_end] + js + content[body_end:]


def process_file_v2(filepath: Path, navbar_html: str, css_path: str) -> bool:
    """Remplace la navbar V2 par V1 dans un fichier"""
    content = filepath.read_text(encoding="utf-8")

    # Trouver et remplacer la navbar V2
    start, end = find_navbar(content)
    if start is None:
        print(f"  [WARN] Navbar V2 non trouvee dans {filepath.name}")
        return False

    new_content = content[:start] + navbar_html + content[end:]

    # Ajouter le CSS
    new_content = add_nav_css(new_content, css_path)

    # Ajouter le JS
    new_content = add_nav_js(new_content)

    filepath.write_text(new_content, encoding="utf-8")
    print(f"  [OK] {filepath.name} modifié")
    return True


def enrich_v1(filepath: Path) -> bool:
    """Enrichit une navbar V1 existante avec les rubriques manquantes"""
    content = filepath.read_text(encoding="utf-8")

    # Vérifier si déjà enrichi
    if (
        "ai-interactif" in content
        or "ai-classe-ressources" in content
        or "ai-suivi" in content
    ):
        print(f"  [INFO]  {filepath.name} déjà enrichi ou partiellement")
        return False

    # Trouver l'élément Ma classe
    classe_marker = "<!-- Ma classe -->"
    classe_pos = content.find(classe_marker)
    if classe_pos == -1:
        classe_marker = '<div class="ace-item" id="ai-classe">'
        classe_pos = content.find(classe_marker)

    if classe_pos == -1:
        print(f"  [WARN]  Marqueur 'Ma classe' non trouvé dans {filepath.name}")
        return False

    # Déterminer le préfixe de chemin selon le dossier
    rel_prefix = ""
    if "plateforme-etudiante" in str(filepath.parent):
        rel_prefix = "../"

    # Créer les nouveaux éléments à insérer avant Ma classe
    new_items = f"""      <!-- Ressources pour ma classe -->
      <div class="ace-item" id="ai-classe-ressources">
        <div class="ace-ibg"></div>
        <a href="{rel_prefix}ma-classe.html" class="ace-ibtn" style="text-decoration:none">Ressources classe</a>
      </div>
      <!-- Mon suivi -->
      <div class="ace-item" id="ai-suivi">
        <div class="ace-ibg"></div>
        <a href="{rel_prefix}plateforme-etudiante-zenclass-progression.html" class="ace-ibtn" style="text-decoration:none">Mon suivi</a>
      </div>
"""

    # Insérer avant le marqueur
    new_content = content[:classe_pos] + new_items + content[classe_pos:]

    # Maintenant ajouter Interactif avant Ressources
    ressources_marker = "<!-- Ressources théoriques -->"
    ressources_pos = new_content.find(ressources_marker)

    if ressources_pos != -1:
        # Déterminer les chemins pour Interactif
        if "plateforme-etudiante" in str(filepath.parent):
            interactif_prefix = "../zenclass-modele/"
        else:
            interactif_prefix = "zenclass-modele/"

        interactif_item = f"""      <!-- Interactif -->
      <div class="ace-item" id="ai-interactif">
        <div class="ace-ibg"></div>
        <button class="ace-ibtn">Interactif</button>
        <div class="ace-drop" style="min-width:280px">
          <div class="ace-drop-list">
            <a href="{interactif_prefix}quiz.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#f093fb33;color:#f093fb">Qz</div>
              <div>
                <div class="ace-dname">Quiz</div>
                <div class="ace-dsub">Testez vos connaissances</div>
              </div>
            </a>
            <a href="{interactif_prefix}auto-evaluation.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#4facfe33;color:#4facfe">Ae</div>
              <div>
                <div class="ace-dname">Auto-évaluation</div>
                <div class="ace-dsub">Évaluez votre progression</div>
              </div>
            </a>
            <a href="{interactif_prefix}respiration.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#667eea33;color:#667eea">R4</div>
              <div>
                <div class="ace-dname">Respiration 4-7-8</div>
                <div class="ace-dsub">Exercice de respiration guidée</div>
              </div>
            </a>
            <a href="{interactif_prefix}classification.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#48bb7833;color:#48bb78">Cl</div>
              <div>
                <div class="ace-dname">Classification</div>
                <div class="ace-dsub">Classez les situations</div>
              </div>
            </a>
            <a href="{interactif_prefix}jeu-roles.html" class="ace-dlist-item">
              <div class="ace-dicon" style="background:#ed893633;color:#ed8936">Jr</div>
              <div>
                <div class="ace-dname">Jeu de rôles</div>
                <div class="ace-dsub">Pratiquez en situation</div>
              </div>
            </a>
          </div>
        </div>
      </div>
"""
        new_content = (
            new_content[:ressources_pos]
            + interactif_item
            + new_content[ressources_pos:]
        )

    # Mettre à jour le logo si nécessaire
    if "logo zenclasse reworked.png" not in new_content:
        if "plateforme-etudiante" in str(filepath.parent):
            new_content = new_content.replace(
                "zenclass-logo.svg", "../logo zenclasse reworked.png"
            )
        else:
            new_content = new_content.replace(
                "zenclass-logo.svg", "logo zenclasse reworked.png"
            )

    filepath.write_text(new_content, encoding="utf-8")
    print(f"  [OK] {filepath.name} enrichi")
    return True


# ──────────────────────────────────────────
# 3) Exécution
# ──────────────────────────────────────────


def main():
    print("=" * 60)
    print("Migration des navbars vers ace-header enrichi")
    print("=" * 60)

    # --- Lot 1 : Fichiers V2 dans la racine ---
    print("\n[Lot 1] Fichiers V2 dans la racine")
    racine_v2 = [
        "plateforme-etudiante-zenclass-axe.html",
        "plateforme-etudiante-zenclass-progression.html",
        "plateforme-etudiante-zenclass-ressources-theoriques.html",
        "objectif.html",
        "activite.html",
    ]
    for fname in racine_v2:
        fpath = BASE_DIR / fname
        if fpath.exists():
            process_file_v2(
                fpath, NAVBAR_RACINE, "plateforme-etudiante/zenclass-nav.css"
            )
        else:
            print(f"  [ERR] {fname} non trouvé")

    # --- Lot 2 : Fichiers dans zenclass-modele/ ---
    print("\n[DIR] Lot 2 : Fichiers dans zenclass-modele/")
    modele_files = [
        "quiz.html",
        "respiration.html",
        "jeu-roles.html",
        "auto-evaluation.html",
        "classification.html",
        "videoADID.html",
    ]
    for fname in modele_files:
        fpath = BASE_DIR / "zenclass-modele" / fname
        if fpath.exists():
            process_file_v2(
                fpath, NAVBAR_MODELE, "../plateforme-etudiante/zenclass-nav.css"
            )
        else:
            print(f"  [ERR] {fname} non trouvé")

    # --- Lot 3 : Fichiers V1 dans plateforme-etudiante/ ---
    print("\n[DIR] Lot 3 : Enrichissement des V1 dans plateforme-etudiante/")
    pe_files = [
        "equipe.html",
        "forum.html",
        "interactif.html",
        "activite.html",
        "objectif.html",
        "index.html",
        "accueil.html",
        "ressources-classe.html",
        "ressources-theoriques.html",
        "zenclass-nav-demo.html",
    ]
    for fname in pe_files:
        fpath = BASE_DIR / "plateforme-etudiante" / fname
        if fpath.exists():
            enrich_v1(fpath)
        else:
            print(f"  [ERR] {fname} non trouvé")

    # --- Lot 4 : Fichiers V1 à la racine ---
    print("\n[DIR] Lot 4 : Enrichissement des V1 à la racine")
    racine_v1 = [
        "plateforme-etudiante-zenclass.html",
        "ma-classe.html",
    ]
    for fname in racine_v1:
        fpath = BASE_DIR / fname
        if fpath.exists():
            enrich_v1(fpath)
        else:
            print(f"  [ERR] {fname} non trouvé")

    print("\n" + "=" * 60)
    print("Migration terminée !")
    print("=" * 60)


if __name__ == "__main__":
    main()
