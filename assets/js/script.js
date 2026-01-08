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
// Initial boost window to make rising particles faster on first open
const PAGE_START = performance.now();
const BOOST_MS = 8000; // 8s boost phase
const isBoostPhase = () => (performance.now() - PAGE_START) < BOOST_MS;

const heroParticlesContainer = document.getElementById('hero-particles');

function createHeroParticle() {
    const particle = document.createElement('div');
    particle.className = 'hero-particle';
    particle.style.left = Math.random() * 100 + '%';
    const durHero = isBoostPhase() ? (6 + Math.random() * 6) : (15 + Math.random() * 10);
    particle.style.animationDuration = durHero + 's';
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
for (let i = 0; i < 35; i++) {
    setTimeout(createHeroParticle, i * 200);
}

// Continue creating particles
setInterval(createHeroParticle, 400); // faster

// Projects Particles
const projectsParticlesContainer = document.getElementById('projects-particles');

function createProjectsParticle() {
    const particle = document.createElement('div');
    particle.className = 'projects-particle';
    particle.style.left = Math.random() * 100 + '%';
    const durProjects = isBoostPhase() ? (5 + Math.random() * 5) : (10 + Math.random() * 8);
    particle.style.animationDuration = durProjects + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    projectsParticlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Create initial projects particles
for (let i = 0; i < 30; i++) { // more initial
    setTimeout(createProjectsParticle, i * 250);
}

// Continue creating projects particles
setInterval(createProjectsParticle, 700); // faster

// About Particles
const aboutParticlesContainer = document.getElementById('about-particles');

function createAboutParticle() {
    const particle = document.createElement('div');
    particle.className = 'about-particle';
    particle.style.left = Math.random() * 100 + '%';
    const durAbout = isBoostPhase() ? (6 + Math.random() * 6) : (15 + Math.random() * 10);
    particle.style.animationDuration = durAbout + 's';
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
for (let i = 0; i < 28; i++) { // more initial
    setTimeout(createAboutParticle, i * 200);
}

// Continue creating about particles
setInterval(createAboutParticle, 600); // faster

// Contact Particles
const contactParticlesContainer = document.getElementById('contact-particles');

function createContactParticle() {
    const particle = document.createElement('div');
    particle.className = 'contact-particle';
    particle.style.left = Math.random() * 100 + '%';
    const durContact = isBoostPhase() ? (6 + Math.random() * 6) : (15 + Math.random() * 10);
    particle.style.animationDuration = durContact + 's';
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
for (let i = 0; i < 25; i++) { // more initial
    setTimeout(createContactParticle, i * 180);
}

// Continue creating contact particles
setInterval(createContactParticle, 550); // faster

// Footer Particles
const footerParticlesContainer = document.getElementById('footer-particles');

function createFooterParticle() {
    const particle = document.createElement('div');
    particle.className = 'footer-particle';
    particle.style.left = Math.random() * 100 + '%';
    const durFooter = isBoostPhase() ? (6 + Math.random() * 6) : (12 + Math.random() * 8);
    particle.style.animationDuration = durFooter + 's';
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
for (let i = 0; i < 20; i++) { // more initial
    setTimeout(createFooterParticle, i * 120);
}

// Continue creating footer particles
setInterval(createFooterParticle, 400); // faster

// Animated Background
const animatedBg = document.getElementById('animated-bg');

// Build galaxy overlay layers in each section: multi-depth stars, drifting nebula, vignette
(function buildGalaxyLayers() {
    const ids = ['home', 'about', 'projects', 'contact'];
    ids.forEach(id => {
        const section = document.getElementById(id);
        if (!section) return;
        // Find existing background holder or create one
        let holder = section.querySelector('.hero-bg, .about-bg, .projects-bg, .contact-bg');
        if (!holder) {
            holder = document.createElement('div');
            holder.className = `${id}-bg`;
            holder.style.position = 'absolute';
            holder.style.inset = '0';
            holder.style.zIndex = '1';
            holder.style.overflow = 'hidden';
            section.prepend(holder);
        }
        // Ensure an animated-bg container exists
        let abg = holder.querySelector('#animated-bg');
        if (!abg) {
            abg = document.createElement('div');
            abg.id = 'animated-bg';
            holder.appendChild(abg);
        }
        // Create galaxy-layer stack if missing
        let galaxy = abg.querySelector('.galaxy-layer');
        if (!galaxy) {
            galaxy = document.createElement('div');
            galaxy.className = 'galaxy-layer';
            abg.appendChild(galaxy);

            // Depth star layers
            const d1 = document.createElement('div');
            d1.className = 'stars-layer depth-1';
            const d2 = document.createElement('div');
            d2.className = 'stars-layer depth-2';
            const d3 = document.createElement('div');
            d3.className = 'stars-layer depth-3';
            const d4 = document.createElement('div');
            d4.className = 'stars-layer depth-4';
            galaxy.appendChild(d1);
            galaxy.appendChild(d2);
            galaxy.appendChild(d3);
            galaxy.appendChild(d4);

            // Nebula drift
            const neb = document.createElement('div');
            neb.className = 'nebula-drift';
            galaxy.appendChild(neb);

            // Vignette layer
            const vig = document.createElement('div');
            vig.className = 'vignette-overlay';
            galaxy.appendChild(vig);
        }
    });

    // Parallax animation of star layers on scroll for depth illusion
    function parallax() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        document.querySelectorAll('.stars-layer.depth-1').forEach(el => {
            el.style.transform = `translate3d(0, ${-scrollY * 0.02}px, 0)`;
        });
        document.querySelectorAll('.stars-layer.depth-2').forEach(el => {
            el.style.transform = `translate3d(0, ${-scrollY * 0.035}px, 0)`;
        });
        document.querySelectorAll('.stars-layer.depth-3').forEach(el => {
            el.style.transform = `translate3d(0, ${-scrollY * 0.05}px, 0)`;
        });
        document.querySelectorAll('.stars-layer.depth-4').forEach(el => {
            el.style.transform = `translate3d(0, ${-scrollY * 0.07}px, 0)`;
        });
        requestAnimationFrame(parallax);
    }
    requestAnimationFrame(parallax);
})();

// Helper to ensure background layers exist in a given section container
function ensureBackgroundLayers(container) {
    if (!container) return;
    // create distant stars layer
    if (!container.querySelector('.distant-stars')) {
        const stars = document.createElement('div');
        stars.className = 'distant-stars';
        container.appendChild(stars);
    }
    // create nebula haze layer
    if (!container.querySelector('.nebula-haze')) {
        const nebula = document.createElement('div');
        nebula.className = 'nebula-haze';
        container.appendChild(nebula);
    }
    // create vignette overlay
    if (!container.querySelector('.vignette-overlay')) {
        const vignette = document.createElement('div');
        vignette.className = 'vignette-overlay';
        container.appendChild(vignette);
    }
}

// Apply layers to the main hero animated background
ensureBackgroundLayers(animatedBg);

// Apply layers to other sections by creating a background holder if needed
['about', 'projects', 'contact'].forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    // try to find existing background container, else create one
    let holder = section.querySelector('.about-bg, .projects-bg, .contact-bg');
    if (!holder) {
        holder = document.createElement('div');
        holder.className = `${id}-bg`;
        // keep it behind content similar to existing backgrounds
        holder.style.position = 'absolute';
        holder.style.inset = '0';
        holder.style.zIndex = '1';
        holder.style.overflow = 'visible';
        section.prepend(holder);
    }
    // create a dedicated animated-bg container inside holder if not present
    let abg = holder.querySelector('#animated-bg');
    if (!abg) {
        abg = document.createElement('div');
        abg.id = 'animated-bg';
        holder.appendChild(abg);
    }
    ensureBackgroundLayers(abg);
});

// Distant planets and subtle sun per section (background depth only)
(function addPlanetsAndSun() {
    const sections = [
        { id: 'home', selector: document.getElementById('home') },
        { id: 'about', selector: document.getElementById('about') },
        { id: 'projects', selector: document.getElementById('projects') },
        { id: 'contact', selector: document.getElementById('contact') },
    ].filter(s => s.selector);

    const edgePositions = [
        { x: 0.08, y: 0.15 }, // top-left
        { x: 0.92, y: 0.18 }, // top-right
        { x: 0.1, y: 0.85 },  // bottom-left
        { x: 0.9, y: 0.82 },  // bottom-right
        { x: 0.5, y: 0.08 },  // top-center (avoid text with y small)
    ];

    let lastIndices = [];

    function pickUniqueIndices(count) {
        const picks = [];
        const used = new Set(lastIndices.map(i => i.key));
        let attempts = 0;
        while (picks.length < count && attempts < 50) {
            const idx = Math.floor(Math.random() * edgePositions.length);
            const key = idx.toString();
            if (!used.has(key) && !picks.includes(idx)) {
                picks.push(idx);
            }
            attempts++;
        }
        if (picks.length < count) {
            for (let i = 0; i < edgePositions.length && picks.length < count; i++) {
                if (!picks.includes(i)) picks.push(i);
            }
        }
        lastIndices = picks.map(i => ({ key: i.toString() }));
        return picks;
    }

    function createPlanet(container, normX, normY, sizePx) {
        const p = document.createElement('div');
        p.className = 'bg-planet';
        p.style.position = 'absolute';
        p.style.width = `${sizePx}px`;
        p.style.height = `${sizePx}px`;
        p.style.left = `calc(${normX * 100}% - ${sizePx/2}px)`;
        p.style.top = `calc(${normY * 100}% - ${sizePx/2}px)`;
        p.style.borderRadius = '50%';
        p.style.background = 'radial-gradient(circle at 35% 35%, rgba(180,190,210,0.18) 0%, rgba(120,130,160,0.15) 40%, rgba(90,100,130,0.12) 60%, rgba(50,60,90,0.08) 100%)';
        p.style.filter = 'blur(1.2px)';
        p.style.opacity = '0.4';
        p.style.pointerEvents = 'none';
        p.style.zIndex = '1';
        container.appendChild(p);

        // extremely slow drift
        const dx = (Math.random() - 0.5) * 0.05; // px per frame equivalent
        const dy = (Math.random() - 0.5) * 0.05;
        let x = normX * container.clientWidth;
        let y = normY * container.clientHeight;
        function drift() {
            x += dx;
            y += dy;
            p.style.transform = `translate(${dx}px, ${dy}px)`; // subtle movement perception
            requestAnimationFrame(drift);
        }
        requestAnimationFrame(drift);
        return p;
    }

    function createSun(container, normX, normY, sizePx) {
        const s = document.createElement('div');
        s.className = 'bg-sun';
        s.style.position = 'absolute';
        s.style.width = `${sizePx}px`;
        s.style.height = `${sizePx}px`;
        s.style.left = `calc(${normX * 100}% - ${sizePx/2}px)`;
        s.style.top = `calc(${normY * 100}% - ${sizePx/2}px)`;
        s.style.borderRadius = '50%';
        s.style.background = 'radial-gradient(circle, rgba(255,230,160,0.2) 0%, rgba(255,190,120,0.12) 50%, rgba(255,180,90,0.08) 100%)';
        s.style.filter = 'blur(1.5px)';
        s.style.opacity = '0.35';
        s.style.pointerEvents = 'none';
        s.style.zIndex = '1';
        container.appendChild(s);
        return s;
    }

    sections.forEach((s, idx) => {
        // find or create the animated-bg holder inside this section
        let holder = s.selector.querySelector('.about-bg, .projects-bg, .contact-bg, .hero-bg');
        if (!holder) {
            holder = document.createElement('div');
            holder.className = `${s.id}-bg`;
            holder.style.position = 'absolute';
            holder.style.inset = '0';
            holder.style.zIndex = '1';
            holder.style.overflow = 'visible';
            s.selector.prepend(holder);
        }
        let abg = holder.querySelector('#animated-bg');
        if (!abg) {
            abg = document.createElement('div');
            abg.id = 'animated-bg';
            holder.appendChild(abg);
        }
        // choose up to 2 planet positions different from previous section
        const picks = pickUniqueIndices(Math.random() > 0.5 ? 2 : 1);
        picks.forEach((pi, order) => {
            const pos = edgePositions[pi];
            const size = (order === 0 ? 60 : 40) + Math.random() * 20; // small to medium
            // ensure not overlapping central text by biasing toward edges already
            createPlanet(abg, pos.x, pos.y, size);
        });
        // add a subtle sun only for home (or randomly one section)
        if (s.id === 'home') {
            // place sun off-corner for depth
            createSun(abg, 0.88, 0.12, 140);
        }
    });
})();

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    const durGlobal = isBoostPhase() ? (5 + Math.random() * 5) : (10 + Math.random() * 10);
    particle.style.animationDuration = durGlobal + 's';
    particle.style.animationDelay = Math.random() * 6 + 's';
    animatedBg.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 20000);
}

setInterval(createParticle, 200); // faster global particles

// Orbital dust rings: faint circular paths, random positions, very subtle and cosmic
(function() {
    if (!animatedBg) return;

    const RING_COUNT = 5; // small number to keep subtle
    const rings = [];

    function createRing() {
        const ring = document.createElement('div');
        ring.className = 'orbital-ring';
        // random size and position
        const maxR = Math.min(animatedBg.clientWidth, animatedBg.clientHeight) * (0.15 + Math.random() * 0.25);
        const thickness = 1 + Math.random() * 1; // 1-2px border width
        const duration = 30 + Math.random() * 50; // slow rotate
        const delay = Math.random() * 10;

        // random center inside container
        const cx = Math.random() * 100; // percent
        const cy = Math.random() * 100; // percent
        const size = maxR * 2;

        ring.style.position = 'absolute';
        ring.style.width = `${size}px`;
        ring.style.height = `${size}px`;
        ring.style.left = `calc(${cx}% - ${size/2}px)`;
        ring.style.top = `calc(${cy}% - ${size/2}px)`;
        ring.style.border = `${thickness}px solid rgba(200,200,200,0.06)`; // very subtle
        ring.style.borderRadius = '50%';
        ring.style.pointerEvents = 'none';
        ring.style.mixBlendMode = 'normal';
        ring.style.opacity = '0.6'; // will be tempered by low alpha stroke
        ring.style.animation = `orbitalSpin ${duration}s linear infinite`;
        ring.style.animationDelay = `${delay}s`;
        ring.style.transformOrigin = '50% 50%';
        ring.style.zIndex = '1'; // stays under content with animatedBg

        // slight tilt using 3D rotation for cosmic feel
        const tiltX = (Math.random() - 0.5) * 20; // -10..10 deg
        const tiltY = (Math.random() - 0.5) * 20;
        ring.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

        animatedBg.appendChild(ring);
        rings.push(ring);
    }

    // seed a few rings
    for (let i = 0; i < RING_COUNT; i++) createRing();

    // occasionally respawn a ring to vary layout over time
    setInterval(() => {
        if (!rings.length) return;
        const idx = Math.floor(Math.random() * rings.length);
        const old = rings[idx];
        if (old && old.parentNode) old.parentNode.removeChild(old);
        rings.splice(idx, 1);
        createRing();
    }, 25000);
})();

// Shooting Stars and Comets
(function() {
    if (!animatedBg) return;

    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 50 + '%'; // start from top half
        star.style.animationDuration = (2 + Math.random() * 3) + 's';
        star.style.animationDelay = Math.random() * 10 + 's';
        animatedBg.appendChild(star);

        setTimeout(() => {
            if (star.parentNode) star.parentNode.removeChild(star);
        }, 5000);
    }

    function createComet() {
        const comet = document.createElement('div');
        comet.className = 'comet';
        comet.style.left = Math.random() * 100 + '%';
        comet.style.top = Math.random() * 30 + '%'; // start from top third
        comet.style.animationDuration = (3 + Math.random() * 4) + 's';
        comet.style.animationDelay = Math.random() * 15 + 's';
        animatedBg.appendChild(comet);

        setTimeout(() => {
            if (comet.parentNode) comet.parentNode.removeChild(comet);
        }, 8000);
    }

    // Create shooting stars occasionally
    setInterval(createShootingStar, 5000 + Math.random() * 3000); // every 5-8 seconds

    // Create comets less frequently
    setInterval(createComet, 12000 + Math.random() * 8000); // every 12-20 seconds
})();

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

// Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active from all tabs
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        btn.classList.add('active');
        // Hide all contents
        tabContents.forEach(content => content.classList.remove('active'));
        // Show the corresponding content
        const tab = btn.getAttribute('data-tab');
        document.getElementById(tab + '-content').classList.add('active');
    });
});