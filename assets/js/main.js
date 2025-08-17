 // main.js - Main JavaScript for the portfolio
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio main.js loaded');

    // Skills cards functionality
    const cards = document.querySelectorAll('.skill-card-modern');
    let activeIndex = 0;

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            cards[activeIndex].classList.remove('active');
            activeIndex = index;
            cards[activeIndex].classList.add('active');
        });
    });

    // Mobile navigation functionality
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    
    // Only add hamburger if it's not already present
    if (!document.querySelector('.hamburger')) {
        document.querySelector('.navbar .container').insertBefore(
            hamburger, 
            document.querySelector('.nav-links')
        );
    }

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});
