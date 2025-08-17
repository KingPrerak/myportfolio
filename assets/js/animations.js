// animations.js - JavaScript animations for the portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll with sections effect
    const sections = document.querySelectorAll('section');
    let isScrolling = false;
    let currentSection = 0;
    
    // Add class to sections for animation
    sections.forEach(section => {
        section.classList.add('animate-section');
    });

    // Detect scroll direction
    let lastScroll = window.pageYOffset;
    
    function smoothScroll(target, duration) {
        const targetPosition = target.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Custom easing function for smooth deceleration
            const ease = t => t < 0.5 
                ? 4 * t * t * t 
                : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            
            window.scrollTo(0, startPosition + distance * ease(progress));
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                isScrolling = false;
            }
        }
        
        requestAnimationFrame(animation);
    }

    // Handle scroll events
    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        
        if (isScrolling) return;
        
        const direction = e.deltaY > 0 ? 1 : -1;
        const currentScroll = window.pageYOffset;
        
        if (Math.abs(currentScroll - lastScroll) < 50) return;
        
        currentSection = Math.max(0, Math.min(currentSection + direction, sections.length - 1));
        isScrolling = true;
        
        smoothScroll(sections[currentSection], 1000); // 1000ms duration
        lastScroll = currentScroll;
    }, { passive: false });

    // Handle navigation click events
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                currentSection = Array.from(sections).indexOf(targetSection);
                isScrolling = true;
                smoothScroll(targetSection, 1000);
            }
        });
    });

    // Intersection Observer for section animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
