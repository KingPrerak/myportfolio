<?php
// projects.php - Projects page
include 'components/header.php';
include 'components/navbar.php';
include 'components/projects-section.php';
include 'components/footer.php';
?>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const slides = [
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

  let current = 0;

  function updateSlide(index) {
    const bgElement = document.getElementById('projects-bg');
    if (bgElement) {
      bgElement.style.backgroundImage = `url(${slides[index].image})`;
      document.getElementById('project-title').innerText = slides[index].title;
      document.getElementById('project-desc').innerText = slides[index].desc;
      document.getElementById('project-link').href = slides[index].link;

      document.querySelectorAll('.project-card').forEach((card, idx) => {
        card.classList.toggle('active', idx === index);
      });
    }
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlide(current);
  }

  function goToSlide(index) {
    current = index;
    updateSlide(index);
  }

  // Initialize the slideshow
  updateSlide(0);
  setInterval(nextSlide, 4500);
});
</script>

