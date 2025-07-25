// main.js - Main JavaScript for the portfolio
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio main.js loaded');
});
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    cards[activeIndex].classList.remove('active');
    activeIndex = index;
    cards[activeIndex].classList.add('active');
  });
});
