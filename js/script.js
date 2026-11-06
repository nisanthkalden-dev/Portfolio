/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Modern Interactive Features & Performance Motion
   ============================================ */

// ==================== 1. TYPING ANIMATION ====================
class TypingAnimation {
    constructor(element, words, speed = 90, deleteSpeed = 45, holdTime = 1600) {
        this.element = element;
        this.words = words || [
            "Full Stack Developer",
            "Frontend Engineer",
            "UI/UX Enthusiast",
            "Problem Solver"
        ];
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.holdTime = holdTime;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.timeoutId = null;

        if (this.element) {
            this.startTyping();
        }
    }

    startTyping() {
        const currentWord = this.words[this.wordIndex];

        if (this.isDeleting) {
            this.charIndex--;
        } else {
            this.charIndex++;
        }

        this.element.textContent = currentWord.substring(0, this.charIndex);

        let delay = this.isDeleting ? this.deleteSpeed : this.speed;

        if (!this.isDeleting && this.charIndex === currentWord.length) {
            delay = this.holdTime; // Pause when complete word typed
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            delay = 400; // Pause before typing next word
        }

        this.timeoutId = setTimeout(() => this.startTyping(), delay);
    }
}

// ==================== 2. SCROLL PROGRESS INDICATOR ====================
class ScrollProgress {
    constructor() {
        this.progressBar = document.getElementById('scrollProgressBar');
        if (this.progressBar) {
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        this.updateProgress();
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });
            this.updateProgress();
        }
    }

    updateProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        this.progressBar.style.width = `${scrollPercent}%`;
    }
}

// ==================== 3. NAVBAR CONTROLLER ====================
class Navbar {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navMenu = document.getElementById('navMenu');
        this.hamburger = document.getElementById('hamburger');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.cachedSectionOffsets = [];
        this.cacheOffsets();
        this.init();
    }

    cacheOffsets() {
        this.cachedSectionOffsets = Array.from(this.sections).map(section => ({
            id: section.getAttribute('id'),
            top: section.offsetTop,
            height: section.offsetHeight
        }));
    }

    init() {
        // Toggle mobile drawer
        if (this.hamburger) {
            this.hamburger.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMenu();
            });
        }

        // Close on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close on document click outside
        document.addEventListener('click', (e) => {
            if (this.navMenu && this.navMenu.classList.contains('active') && !this.navbar.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navMenu && this.navMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });

        // Re-cache section offsets on resize
        window.addEventListener('resize', () => {
            this.cacheOffsets();
        }, { passive: true });

        // Scroll listener with requestAnimationFrame throttle
        let isScrolling = false;
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    this.spyActiveSection();
                    isScrolling = false;
                });
                isScrolling = true;
            }
        }, { passive: true });

        this.handleScroll();
        this.spyActiveSection();
    }

    toggleMenu() {
        const isActive = this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
        this.hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    }

    closeMenu() {
        if (this.navMenu) this.navMenu.classList.remove('active');
        if (this.hamburger) {
            this.hamburger.classList.remove('active');
            this.hamburger.setAttribute('aria-expanded', 'false');
        }
    }

    handleScroll() {
        if (!this.navbar) return;
        if (window.scrollY > 30) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    spyActiveSection() {
        const scrollPosition = window.scrollY + 140;

        for (let i = this.cachedSectionOffsets.length - 1; i >= 0; i--) {
            const { id, top, height } = this.cachedSectionOffsets[i];
            if (scrollPosition >= top && scrollPosition < top + height) {
                this.navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        if (!link.classList.contains('active')) link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
                break;
            }
        }
    }
}

// ==================== 4. PROFESSIONAL SCROLL REVEAL (INTERSECTION OBSERVER) ====================
class ScrollRevealManager {
    constructor() {
        // Tag target elements
        this.initTargets();
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('revealed'));
            return;
        }

        this.observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            this.observer.observe(el);
        });
    }

    initTargets() {
        // Staggered reveal for skills, projects, timeline
        const addClass = (selector, animClass = '') => {
            document.querySelectorAll(selector).forEach((el, index) => {
                el.classList.add('scroll-reveal');
                if (animClass) el.classList.add(animClass);
                // Stagger delay within parent containers
                const delay = (index % 4) * 0.1;
                el.style.transitionDelay = `${delay}s`;
            });
        };

        addClass('.about-image', 'reveal-left');
        addClass('.about-text', 'reveal-right');
        addClass('.skills-category');
        addClass('.skill-item');
        addClass('.timeline-item');
        addClass('.project-card', 'reveal-scale');
        addClass('.experience-item');
        addClass('.contact-info', 'reveal-left');
        addClass('.contact-form-card', 'reveal-right');
    }
}

// ==================== 5. ANIMATED STAT COUNTERS ====================
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.counter, .counter1');
        this.animated = false;
        this.init();
    }

    init() {
        if (!this.counters.length) return;

        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.startCounting();
                    this.animated = true;
                }
            });
        }, { threshold: 0.3 });

        observer.observe(aboutSection);
    }

    startCounting() {
        this.counters.forEach(counter => {
            const target = +counter.getAttribute('data-target') || 0;
            const suffix = counter.getAttribute('data-suffix') || counter.getAttribute('data-symbol') || '';
            const duration = 1400; // ms
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentVal = Math.floor(easeOut * target);

                counter.textContent = currentVal + (progress === 1 ? suffix : '');

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target + suffix;
                }
            };

            requestAnimationFrame(updateCount);
        });
    }
}

// ==================== 6. SKILL BARS ANIMATION ====================
class SkillProgressManager {
    constructor() {
        this.skillsSection = document.getElementById('skills');
        this.progressBars = document.querySelectorAll('.skill-progress');
        this.animated = false;
        this.init();
    }

    init() {
        if (!this.skillsSection || !this.progressBars.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animateBars();
                    this.animated = true;
                }
            });
        }, { threshold: 0.2 });

        observer.observe(this.skillsSection);
    }

    animateBars() {
        this.progressBars.forEach((bar, index) => {
            const targetWidth = bar.getAttribute('data-progress') || bar.style.width || '80%';
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, index * 40);
        });
    }
}

// ==================== 7. PROJECT FILTERING ====================
class ProjectFilter {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.currentTarget.getAttribute('data-filter');

                // Active pill styling
                this.filterBtns.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');

                // Filter cards with smooth fade
                this.projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    const shouldShow = filter === 'all' || category === filter;

                    if (shouldShow) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        }, 20);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(15px) scale(0.95)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 250);
                    }
                });
            });
        });
    }
}

// ==================== 8. BACK TO TOP BUTTON ====================
class BackToTopButton {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.init();
    }

    init() {
        if (!this.button) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                this.button.classList.add('show');
            } else {
                this.button.classList.remove('show');
            }
        }, { passive: true });

        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ==================== 9. PAGE LOADER ====================
class PageLoader {
    constructor() {
        this.loader = document.getElementById('loader');
        this.init();
    }

    init() {
        if (!this.loader) return;

        const dismiss = () => {
            this.loader.classList.add('loaded');
            setTimeout(() => {
                this.loader.style.display = 'none';
            }, 550);
        };

        if (document.readyState === 'complete') {
            setTimeout(dismiss, 250);
        } else {
            window.addEventListener('load', () => setTimeout(dismiss, 300));
            // Safety timeout in case of slow resources
            setTimeout(dismiss, 1800);
        }
    }
}

// ==================== 10. SMOOTH ANCHOR SCROLLING ====================
class SmoothScrollHandler {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (!targetId || targetId === '#' || targetId === '#!') return;

                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    const navHeight = 75;
                    const elementPosition = targetEl.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Update URL hash without jump
                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    }
                }
            });
        });
    }
}

// ==================== 11. SUBTLE PARALLAX ON HERO ELEMENTS ====================
class AmbientParallax {
    constructor() {
        this.shapes = document.querySelectorAll('.hero-shape');
        this.devCard = document.getElementById('heroDevCard');
        if (this.shapes.length === 0 && !this.devCard) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        let ticking = false;
        window.addEventListener('mousemove', (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const x = (e.clientX / window.innerWidth - 0.5) * 16;
                    const y = (e.clientY / window.innerHeight - 0.5) * 16;

                    this.shapes.forEach((shape, i) => {
                        const factor = (i + 1) * 0.7;
                        shape.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
                    });

                    // Subtle 3D tilt on code editor card (Desktop only)
                    if (this.devCard && window.innerWidth > 1024) {
                        const tiltX = (e.clientY / window.innerHeight - 0.5) * -5;
                        const tiltY = (e.clientX / window.innerWidth - 0.5) * 5;
                        this.devCard.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
                    }

                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }
}

// ==================== 11. SOCIAL LINK DISPATCHERS ====================
function openLinkedIn() {
    window.open("https://www.linkedin.com/in/nisanth-kalden-m", "_blank", "noopener,noreferrer");
}

function openGitHub() {
    window.open("https://github.com/nisanthkalden-dev", "_blank", "noopener,noreferrer");
}

function openWhatsApp() {
    window.open("https://wa.me/917598695001", "_blank", "noopener,noreferrer");
}

function openinstagram() {
    window.open("https://www.instagram.com/nisanth.inn/", "_blank", "noopener,noreferrer");
}

function openEmail() {
    window.open("mailto:nisanthkalden2003@gmail.com", "_blank");
}

// ==================== 12. WHATSAPP & CONTACT FORM ====================
function sendToWhatsApp(e) {
    if (e && e.preventDefault) e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const subject = document.getElementById("subject")?.value.trim();
    const message = document.getElementById("message")?.value.trim();
    const statusDiv = document.getElementById("formStatus");

    if (!name || !email || !subject || !message) {
        if (statusDiv) {
            statusDiv.textContent = "Please fill in all fields before sending.";
            statusDiv.className = "form-status error";
        } else {
            alert("Please fill in all fields before sending.");
        }
        return false;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        if (statusDiv) {
            statusDiv.textContent = "Please provide a valid email address.";
            statusDiv.className = "form-status error";
        }
        return false;
    }

    const phoneNumber = "917598695001";
    const text = `New Portfolio Inquiry:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    if (statusDiv) {
        statusDiv.textContent = "Redirecting to WhatsApp with your formatted message...";
        statusDiv.className = "form-status success";
    }

    setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
    }, 400);

    return false;
}

// Bind contact form submit event cleanly
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            sendToWhatsApp(e);
        });
    }

    // Save initial progress data from inline styles for SkillProgressManager
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const currentStyle = bar.style.width;
        if (currentStyle && currentStyle !== '0%') {
            bar.setAttribute('data-progress', currentStyle);
            bar.style.width = '0%';
        }
    });

    // Initialize all components cleanly
    new PageLoader();
    new ScrollProgress();
    new SmoothScrollHandler();
    new Navbar();
    new CounterAnimation();
    new SkillProgressManager();
    new ProjectFilter();
    new ScrollRevealManager();
    new BackToTopButton();
    new AmbientParallax();

    // Typing animation
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        new TypingAnimation(typingElement, [
            "Frontend Developer",
            "React Developer",
            "Java Full Stack Developer",
            "Web Developer"
        ]);
    }

    console.log('Portfolio initialized successfully with premium developer configuration. 🚀');
});
