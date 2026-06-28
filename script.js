/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Interactive Features & Animations
   ============================================ */

// ==================== TYPING ANIMATION ====================
class TypingAnimation {
    constructor(element, words, speed = 100, deleteSpeed = 50) {
        this.element = element;
        // this.words = words;
        this.words = "Fresher         ,  Web Designer, UI/UX Enthusiast, Problem Solver".split(", ");
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.startTyping();
    }
    

    startTyping() {
        const word = this.words[this.wordIndex];
        
        if (this.isDeleting) {
            this.charIndex--;
        } else {
            this.charIndex++;
        }

        // Update the displayed text
        this.element.textContent = word.substring(0, this.charIndex);

        // Determine timing
        let currentSpeed = this.speed;
        if (this.isDeleting) currentSpeed = this.deleteSpeed;

        // Handle word completion
        if (!this.isDeleting && this.charIndex === word.length) {
            currentSpeed = 1000; // Pause before deleting
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            currentSpeed = 500; // Pause before typing new word
        }

        setTimeout(() => this.startTyping(), currentSpeed);
    }
}




// ==================== SCROLL ANIMATIONS ====================
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.scroll-reveal');
        this.options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.observer = new IntersectionObserver((entries) => this.reveal(entries), this.options);
        this.observeElements();
    }

    observeElements() {
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }

    reveal(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// ==================== NAVBAR FUNCTIONALITY ====================
class Navbar {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navMenu = document.getElementById('navMenu');
        this.hamburger = document.getElementById('hamburger');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }

    init() {
        // Hamburger menu toggle
        this.hamburger.addEventListener('click', () => this.toggleMenu());

        // Close menu when link is clicked
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
                this.updateActiveLink(link);
            });
        });

        // Smooth scrolling for navigation
        window.addEventListener('scroll', () => this.updateActiveLink());
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
    }

    updateActiveLink(clickedLink = null) {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';

        if (clickedLink) {
            // User clicked a link
            this.navLinks.forEach(link => link.classList.remove('active'));
            clickedLink.classList.add('active');
        } else {
            // Scroll-based active link detection
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 200;
                if (window.scrollY >= sectionTop) {
                    currentSection = section.getAttribute('id');
                }
            });

            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === currentSection) {
                    link.classList.add('active');
                }
            });
        }
    }
}

// ==================== BACK TO TOP BUTTON ====================
class BackToTopButton {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.init();
    }

    init() {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => this.toggleButton());

        // Scroll to top on click
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    toggleButton() {
        if (window.scrollY > 300) {
            this.button.classList.add('show');
        } else {
            this.button.classList.remove('show');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ==================== PROJECT FILTERING ====================
class ProjectFilter {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.filterProjects(e));
        });
    }

    filterProjects(e) {
        const filterValue = e.target.getAttribute('data-filter');

        // Update active button
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Filter projects
        this.projectCards.forEach(card => {
            card.style.display = 'none';
            card.style.animation = 'none';

            // Force reflow to restart animation
            void card.offsetWidth;

            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }
}

// ==================== SKILL PROGRESS ANIMATION ====================
class SkillProgress {
    constructor() {
        this.skillItems = document.querySelectorAll('.skill-item');
        this.animated = false;
        this.init();
    }

    init() {
        // Trigger animation when skills section is in view
        const skillsSection = document.getElementById('skills');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animateSkills();
                    this.animated = true;
                }
            });
        }, { threshold: 0.3 });

        observer.observe(skillsSection);
    }

    animateSkills() {
        this.skillItems.forEach((item, index) => {
            setTimeout(() => {
                const progressBar = item.querySelector('.skill-progress');
                if (progressBar) {
                    progressBar.style.animation = 'none';
                    // Force reflow
                    void progressBar.offsetWidth;
                    progressBar.style.animation = `fillWidth 1.5s ease forwards`;
                }
            }, index * 100);
        });
    }
}

// ==================== CONTACT FORM HANDLING ====================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.statusDiv = document.getElementById('formStatus');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Basic validation
        if (!this.validateForm(data)) {
            this.showStatus('Please fill in all fields correctly.', 'error');
            return;
        }

        // Simulate form submission
        this.submitForm(data);
    }

    validateForm(data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!data.name || !data.email || !data.subject || !data.message) {
            return false;
        }

        if (!emailRegex.test(data.email)) {
            return false;
        }

        return true;
    }

    submitForm(data) {
        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate API call (replace with actual API endpoint)
        setTimeout(() => {
            // Success response
            this.showStatus('Sent your form through WhatsApp ! I\'ll get back to you soon.', 'success');
            this.form.reset();

            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Clear status after 5 seconds
            setTimeout(() => {
                this.statusDiv.textContent = '';
                this.statusDiv.className = '';
            }, 5000);
        }, 500);
    }

    showStatus(message, type) {
        this.statusDiv.textContent = message;
        this.statusDiv.className = `form-status ${type}`;
    }
}

// ==================== PAGE LOADER ====================
class PageLoader {
    constructor() {
        this.loader = document.getElementById('loader');
        this.init();
    }

    init() {
        // Fade out loader after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.loader.style.display = 'none';
            }, 1000);
        });
    }
}

// ==================== SMOOTH SCROLLING ====================
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.smoothScroll(e));
        });
    }

    smoothScroll(e) {
        const href = e.currentTarget.getAttribute('href');
        
        if (href === '#' || href === '#!') return;

        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            const offsetTop = target.offsetTop - 80; // Account for navbar height
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// ==================== PARALLAX EFFECT ====================
class ParallaxEffect {
    constructor() {
        this.shapes = document.querySelectorAll('.shape');
        this.init();
    }

    init() {
        if (this.shapes.length === 0) return;

        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    handleMouseMove(e) {
        const x = (e.clientX / window.innerWidth) * 20;
        const y = (e.clientY / window.innerHeight) * 20;

        this.shapes.forEach((shape, index) => {
            const offset = (index + 1) * 5;
            shape.style.transform = `translate(${x * offset}px, ${y * offset}px)`;
        });
    }
}

// ==================== INITIALIZE ALL COMPONENTS ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing animation
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        new TypingAnimation(typingElement, [
            'Full Stack Developer',
            'MERN Developer',
            'Web Designer',
            'UI/UX Enthusiast',
            'Problem Solver'
        ]);
    }

    // Add scroll-reveal class to elements
    addScrollRevealClass();

    // Initialize all components
    new PageLoader();
    new Navbar();
    new BackToTopButton();
    new ProjectFilter();
    new SkillProgress();
    new ContactForm();
    new ScrollReveal();
    new SmoothScroll();
    new ParallaxEffect();

    // Optional: Add animations on page load
    animatePageElements();
});

// ==================== HELPER FUNCTIONS ====================

/**
 * Add scroll-reveal class to elements for animation
 */
function addScrollRevealClass() {
    const elements = [
        '.about-image',
        '.about-text',
        '.skills-category',
        '.timeline-item',
        '.project-card',
        '.experience-item',
        '.contact-info',
        '.contact-form'
    ];

    elements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('scroll-reveal');
        });
    });
}

/**
 * Animate page elements on load
 */
function animatePageElements() {
    // Add animation delay to staggered elements
    const cards = document.querySelectorAll('.project-card, .skill-item, .timeline-item');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

/**
 * Utility: Check if element is in viewport
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

/**
 * Utility: Get element scroll position
 */
function getElementScrollPosition(element) {
    return element.offsetTop;
}

/**
 * Utility: Debounce function for performance
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Add click ripple effect to buttons
 */
document.querySelectorAll('.btn, .filter-btn, .social-link, .social-icon').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
    });
});

/**
 * Responsive behavior for mobile menu
 */
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) {
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
}, 250));

/**
 * Keyboard navigation support
 */
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
});

/**
 * Performance optimization: Use requestAnimationFrame for scroll events
 */
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Perform scroll-based operations here
            ticking = false;
        });
        ticking = true;
    }
});

/**
 * Add loading state to images
 */
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    img.addEventListener('error', function() {
        this.style.opacity = '0.5';
    });
});

console.log('Portfolio Website Initialized Successfully! 🚀');

function openLinkedIn() {
  window.open("https://www.linkedin.com/in/nisanth-kalden-m-65346b2a1", "_blank");
}

function openGitHub() {
  window.open("https://github.com/nisanthkalden-dev", "_blank");
}

function openWhatsApp() {
  window.open("https://wa.me/917598695001", "_blank");
}

function openinstagram() {
  window.open("https://www.instagram.com/nisanth.inn/", "_blank");
}

function openEmail() {
    window.open("mailto:nisanthkalden2003@gmail.com", "_blank");
}

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const symbol = counter.getAttribute('data-symbol') || "";
    let count = 0;

    const update = () => {
        const increment = target / 100;
        count += increment;

        if (count < target) {
            counter.innerText = Math.ceil(count);
            setTimeout(update, 50);
        } else {
            counter.innerText = target + symbol;
        }
    };

    update();
});

function sendToWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Fill all fields properly");
        return;
    }

    const phoneNumber = "917598695001"; // 🔥 PUT YOUR NUMBER (with country code, no +)

    const text = 
`
            New Portfolio Message:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(url, "_self");
}
