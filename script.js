const animateOnScroll = () => {
  const elements = document.querySelectorAll('[data-animate]');
  const callbacks = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, callbacks);

  elements.forEach((element) => observer.observe(element));
};

const markTextForAnimation = () => {
  const sections = document.querySelectorAll('section, .project-card, .info-card, .skill-card');
  sections.forEach((section) => section.setAttribute('data-animate', ''));
};

const setCurrentYear = () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  markTextForAnimation();
  animateOnScroll();
  setCurrentYear();
});

