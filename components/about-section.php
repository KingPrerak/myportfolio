<!-- components/about-section.php -->
<section class="about about-section-hidden" id="about-section">
  <div class="container">
    <div class="about-image">
      <img src="assets/images/p.jpg" alt="Prerak Patel">
    </div>
    <div class="about-text">
      <h1>About</h1>
      <p class="email">patelprerak435@gmail.com</p>
      <p>
       I’m a dedicated Full-Stack Developer specializing in React.js, Node.js, PHP, and MySQL. As a freelance developer, I thrive on turning unique ideas into secure, scalable, and user-friendly solutions. With a strong work ethic and a continuous learning mindset, I deliver purposeful technology that helps businesses and individuals achieve real impact.
      </p>
      <p class="location">📍 Pindwara, Rajasthan</p>
    </div>
  </div>
</section>

<script>
// Intersection Observer for About Section Animation
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about-section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('about-section-hidden');
                entry.target.classList.add('about-section-visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    if (aboutSection) {
        sectionObserver.observe(aboutSection);
    }
});
</script>
