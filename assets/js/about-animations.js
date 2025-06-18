// Animation Handlers
document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const valueCards = document.querySelectorAll('.value-card');
    const techItems = document.querySelectorAll('.tech-item');
    const achievementCards = document.querySelectorAll('.achievement-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    // Create observers for different elements
    const createScrollObserver = (elements, classToAdd, staggerDelay = 100) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add(classToAdd);
                    }, index * staggerDelay);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elements.forEach(el => observer.observe(el));
    };

    // Initialize observers
    createScrollObserver(revealElements, 'is-visible');
    createScrollObserver(valueCards, 'animate', 200);
    createScrollObserver(techItems, 'animate', 150);
    createScrollObserver(achievementCards, 'animate', 200);

    // Parallax effect for background elements
    const techGrid = document.querySelector('.tech-grid');
    const glowSphere = document.querySelector('.glow-sphere');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (techGrid) {
            techGrid.style.transform = `perspective(1000px) rotateX(60deg) translateY(${scrolled * 0.1}px)`;
        }
        if (glowSphere) {
            glowSphere.style.transform = `translate(${scrolled * -0.1}px, ${scrolled * 0.1}px)`;
        }
    });

    // Value cards hover effect
    valueCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Experience badge animation
    const badge = document.querySelector('.experience-badge');
    if (badge) {
        badge.addEventListener('mousemove', (e) => {
            const rect = badge.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const angle = Math.atan2(y, x);

            badge.style.setProperty('--rotation', `${angle}rad`);
        });
    }
});
