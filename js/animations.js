document.addEventListener('DOMContentLoaded', () => {
  // Simple fade-in animation for elements with class 'animate-fade-in'
  const fadeElements = document.querySelectorAll('.animate-fade-in');
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    requestAnimationFrame(() => {
        el.style.transition = 'opacity 1s ease-in-out 0.2s'; // Pequeno delay
        el.style.opacity = '1';
    });
  });
});