// Project data
const projects = [
    {
        title: "Sahayak",
        desc: "A service-on-demand web platform.",
        image: "assets/images/project1.jpg",
        link: "https://github.com/KingPrerak/Sahayak"
    },
    {
        title: "Blood Bank",
        desc: "A Blood Bank Management System.",
        image: "assets/images/project5.jpg",
        link: "https://github.com/KingPrerak/blood-bank"
    },
    {
        title: "Resume-Builder",
        desc: "An AI-Powered Resume Builder.",
        image: "assets/images/project6.jpg",
        link: "https://github.com/KingPrerak/RESUME-BUILDER"
    },
    {
        title: "Invest-In",
        desc: "Pitch your idea, get investments, or invest in startups.",
        image: "assets/images/project2.jpg",
        link: "https://github.com/KingPrerak/Invest-In-website"
    },
    {
        title: "My Hearing Date",
        desc: "Check your next court hearing date online.",
        image: "assets/images/project3.jpg",
        link: "https://pindwaracourt.my-style.in/"
    },
    {
        title: "My Hotel",
        desc: "A hotel food delivery web app.",
        image: "assets/images/project4.jpg",
        link: "https://github.com/KingPrerak/hotel_food_delivery"
    }
];

class ProjectSlider {
    constructor() {
        this.currentIndex = 0;
        this.isAnimating = false;
        this.autoSlideInterval = null;
        this.elements = {
            bg: document.getElementById('projects-bg'),
            title: document.getElementById('project-title'),
            desc: document.getElementById('project-desc'),
            link: document.getElementById('project-link'),
            container: document.querySelector('.projects-cards'),
            cards: Array.from(document.querySelectorAll('.project-card'))
        };
        this.init();
    }

    init() {
        // Set initial state
        this.updateContent(0);
        
        // Add click listeners to cards
        this.elements.cards.forEach((card, index) => {
            card.addEventListener('click', () => this.goToSlide(index));
        });

        // Start auto-slide
        this.startAutoSlide();
    }

    async updateContent(index) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const project = projects[index];
        const clickedCard = this.elements.cards[index];

        // Start background and card transitions together
        this.elements.bg.classList.add('changing');
        clickedCard.classList.add('active');

        // Update content immediately
        this.elements.title.textContent = project.title;
        this.elements.desc.textContent = project.desc;
        this.elements.link.href = project.link;

        // Wait a short moment before starting background image change
        await this.sleep(100);
        this.elements.bg.style.backgroundImage = `url(${project.image})`;

        // Wait for background transition to be mostly complete
        await this.sleep(600);

        // Reset card states with no transition
        this.elements.cards.forEach(card => {
            card.style.transition = 'none';
            card.classList.remove('active');
        });

        // Reorder cards
        this.elements.container.appendChild(clickedCard);

        // Force reflow and re-enable transitions
        this.elements.container.offsetHeight;
        this.elements.cards.forEach(card => {
            card.style.transition = '';
        });

        // Wait a short moment before cleanup
        await this.sleep(50);

        // Cleanup
        this.elements.bg.classList.remove('changing');
        this.currentIndex = index;
        this.isAnimating = false;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    goToSlide(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        this.updateContent(index);
        this.resetAutoSlide();
    }

    nextSlide() {
        if (this.isAnimating) return;
        const nextIndex = (this.currentIndex + 1) % projects.length;
        this.updateContent(nextIndex);
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => this.nextSlide(), 6000);
    }

    resetAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.startAutoSlide();
        }
    }
}

// Initialize slider when DOM is ready
function initializeProjectSlider() {
    if (document.getElementById('projects-bg')) {
        window.projectSlider = new ProjectSlider();
    }
}

// Handle initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProjectSlider);
} else {
    initializeProjectSlider();
}
