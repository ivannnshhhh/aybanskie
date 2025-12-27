// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Animated Counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 1);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'home') {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe home section
const homeSection = document.getElementById('home');
if (homeSection) {
    observer.observe(homeSection);
}

// Typing Animation
const typingTexts = ["Full Stack Web Developer", "UI/UX Designer", "Photographer", "Video Editor", "Photo Editor", "Graphic Designer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTexts = 2000;

const typingElement = document.getElementById('typing-text');

function typeWriter() {
    const currentText = typingTexts[textIndex];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, delayBetweenTexts);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
        }
    }

    setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
}

// Start typing animation
typeWriter();

// Enhanced Particle System
const heroParticlesContainer = document.getElementById('hero-particles');

function createHeroParticle() {
    const particle = document.createElement('div');
    particle.className = 'hero-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 10 + 15 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';

    // Random size
    const size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Random color
    const colors = ['#00d4ff', '#0099cc', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    heroParticlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Create initial particles
for (let i = 0; i < 20; i++) {
    setTimeout(createHeroParticle, i * 200);
}

// Continue creating particles
setInterval(createHeroParticle, 1000);

// Projects Particles
const projectsParticlesContainer = document.getElementById('projects-particles');

function createProjectsParticle() {
    const particle = document.createElement('div');
    particle.className = 'projects-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 8 + 10 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    projectsParticlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Create initial projects particles
for (let i = 0; i < 15; i++) {
    setTimeout(createProjectsParticle, i * 300);
}

// Continue creating projects particles
setInterval(createProjectsParticle, 1500);

// About Particles
const aboutParticlesContainer = document.getElementById('about-particles');

function createAboutParticle() {
    const particle = document.createElement('div');
    particle.className = 'about-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 10 + 15 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';

    // Random size
    const size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Random color
    const colors = ['#00d4ff', '#0099cc', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    aboutParticlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Create initial about particles
for (let i = 0; i < 12; i++) {
    setTimeout(createAboutParticle, i * 250);
}

// Continue creating about particles
setInterval(createAboutParticle, 1200);

// Contact Particles
const contactParticlesContainer = document.getElementById('contact-particles');

function createContactParticle() {
    const particle = document.createElement('div');
    particle.className = 'contact-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 10 + 15 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';

    // Random size
    const size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Random color
    const colors = ['#00d4ff', '#0099cc', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    contactParticlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Create initial contact particles
for (let i = 0; i < 10; i++) {
    setTimeout(createContactParticle, i * 200);
}

// Continue creating contact particles
setInterval(createContactParticle, 1000);

// Footer Particles
const footerParticlesContainer = document.getElementById('footer-particles');

function createFooterParticle() {
    const particle = document.createElement('div');
    particle.className = 'footer-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 8 + 12 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';

    // Random size
    const size = Math.random() * 4 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Random color
    const colors = ['#00d4ff', '#0099cc', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    footerParticlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Create initial footer particles
for (let i = 0; i < 8; i++) {
    setTimeout(createFooterParticle, i * 150);
}

// Continue creating footer particles
setInterval(createFooterParticle, 800);

// Animated Background
const animatedBg = document.getElementById('animated-bg');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 10 + 10 + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    animatedBg.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 20000);
}

setInterval(createParticle, 500);

// Animate Progress Bars
const progressBars = document.querySelectorAll('.progress');

progressBars.forEach((bar, index) => {
    const width = bar.style.width;
    bar.style.setProperty('--progress-width', width);
});

// Mouse follower effect
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(updateCursor);
}

updateCursor();

// Scroll-triggered animations
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

    // Update toggle icon
    const toggleIcon = themeToggle.querySelector('.toggle-icon');
    toggleIcon.textContent = isLightMode ? '☀️' : '🌙';
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.querySelector('.toggle-icon').textContent = '☀️';
}

themeToggle.addEventListener('click', toggleTheme);

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${rate}px)`;
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Resume Modal Handling
const downloadCvBtn = document.getElementById('download-cv');
const resumeModal = document.getElementById('resume-modal');
const closeBtn = document.querySelector('.close');
const backBtn = document.querySelector('.back-btn');

downloadCvBtn.addEventListener('click', function(e) {
    e.preventDefault();
    resumeModal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    resumeModal.style.display = 'none';
});

backBtn.addEventListener('click', function() {
    resumeModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === resumeModal) {
        resumeModal.style.display = 'none';
    }
    if (e.target === demoModal) {
        demoModal.style.display = 'none';
    }
    if (e.target === mapModal) {
        mapModal.style.display = 'none';
    }
});

// Demo Modal Handling
const demoModal = document.getElementById('demo-modal');
const demoContent = document.getElementById('demo-content');
const demoCloseBtn = demoModal.querySelector('.close');
const demoBackBtn = demoModal.querySelector('.back-btn');

document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && this.textContent.includes('Live Demo')) {
            e.preventDefault();
            const demoSrc = href;
            // Assuming demo is video for now
            demoContent.innerHTML = `<video controls autoplay><source src="${demoSrc}" type="video/mp4">Your browser does not support the video tag.</video>`;
            demoModal.style.display = 'block';
        }
    });
});

demoCloseBtn.addEventListener('click', function() {
    demoModal.style.display = 'none';
    demoContent.innerHTML = '';
});
demoBackBtn.addEventListener('click', function() {
    demoModal.style.display = 'none';
    demoContent.innerHTML = '';
});

// Map Modal Handling
const viewMapBtn = document.getElementById('view-map-btn');
const mapModal = document.getElementById('map-modal');
const mapCloseBtn = mapModal.querySelector('.close');
const mapBackBtn = mapModal.querySelector('.back-btn');

viewMapBtn.addEventListener('click', function(e) {
    e.preventDefault();
    mapModal.style.display = 'block';
});

mapCloseBtn.addEventListener('click', function() {
    mapModal.style.display = 'none';
});

mapBackBtn.addEventListener('click', function() {
    mapModal.style.display = 'none';
});
