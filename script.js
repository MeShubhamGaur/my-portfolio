const textArray = ["Test Automation Engineer", "Tech Enthusiast"];
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    const typingSpan = document.getElementById("typing");

    function type() {
      if(!typingSpan) return;
      if (index >= textArray.length) index = 0;
      currentText = textArray[index];

      if (!isDeleting) {
        typingSpan.textContent = currentText.slice(0, ++charIndex);
        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(type, 1000);
          return;
        }
      } else {
        typingSpan.textContent = currentText.slice(0, --charIndex);
        if (charIndex === 0) {
          isDeleting = false;
          index++;
        }
      }

      setTimeout(type, isDeleting ? 80 : 120);
    }

    type();
    

const nav = document.querySelector('nav');
const toggle = document.querySelector('.menu-toggle');

// Toggle menu on hamburger click
toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Close menu when scrolling
window.addEventListener('scroll', () => {
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
  }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (nav.classList.contains('active') && !nav.contains(e.target) && e.target !== toggle) {
    nav.classList.remove('active');
  }
});
