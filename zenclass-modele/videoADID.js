/* ============================================
   ZENCLASS - JavaScript Functionality
   Premium Educational Platform
   ============================================ */

// ========== YouTube Player API ==========
let player;
let playerReady = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        events: {
            onReady: () => { 
                playerReady = true;
                console.log('YouTube Player Ready');
            }
        }
    });
}

function pointTo(seconds) {
    if (!playerReady) {
        console.log('Player not ready yet');
        return false;
    }
    player.seekTo(seconds, true);
    player.playVideo();
    
    // Scroll to video section smoothly
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
        videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    return false;
}

// ========== Initialize AOS (Animate on Scroll) ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 0
        });
    }

    // ========== Mobile Navigation ==========
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ========== Navbar Scroll Effect ==========
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ========== Back to Top Button ==========
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========== Smooth Scroll for Anchor Links ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========== Active Navigation Link ==========
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);

    // ========== Chapter Button Active State ==========
    const chapterBtns = document.querySelectorAll('.chapter-btn');
    
    chapterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            chapterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ========== Parallax Effect for Hero ==========
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
            }
        });
    }

    // ========== Animated Counter for Stats ==========
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Intersection Observer for Stats Animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const value = stat.textContent;
                    if (!isNaN(parseInt(value))) {
                        animateCounter(stat, parseInt(value));
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    // ========== Activity Card Hover Effects ==========
    const activityCards = document.querySelectorAll('.activity-card');
    
    activityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ========== Typing Effect for Hero Title (Optional) ==========
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // ========== Loading Animation ==========
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // ========== Lazy Load Images ==========
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ========== Resource Card Click Analytics (Optional) ==========
    const resourceBtns = document.querySelectorAll('.resource-btn');
    
    resourceBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const resourceName = this.closest('.resource-card').querySelector('h3').textContent;
            console.log(`Resource downloaded: ${resourceName}`);
        });
    });

    // ========== Console Welcome Message ==========
    console.log('%c🧘 ZenClass - Plateforme Pédagogique', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%cApprendre à gérer son stress', 'font-size: 14px; color: #764ba2;');
    console.log('%cMALTT - ADID - Université de Genève', 'font-size: 12px; color: #718096;');
});

// ========== Particles Animation (Optional Enhancement) ==========
function createParticle() {
    const particles = document.getElementById('particles');
    if (!particles) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: rgba(102, 126, 234, ${Math.random() * 0.3});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: 100%;
        pointer-events: none;
        animation: floatUp ${Math.random() * 10 + 10}s linear infinite;
    `;
    
    particles.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Create particles periodically
setInterval(createParticle, 3000);

// Add floating animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);