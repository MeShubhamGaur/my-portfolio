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

    // Home button click -> refresh or navigate
    const homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener("click", () => {
      if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
        window.location.reload();
      } else {
        window.location.href = "/";
      }
    });

    const aboutBtn = document.getElementById("about-btn");
    aboutBtn.addEventListener("click", () => {
      if (window.location.pathname.endsWith("about.html")) {
        window.location.reload();
      } else {
        window.location.href = "about.html";
      }
    });

    const skillsBtn = document.getElementById("skills-btn");
    skillsBtn.addEventListener("click", () => {
      if (window.location.pathname.endsWith("skills.html")) {
        window.location.reload();
      } else {
        window.location.href = "skills.html";
      }
    });

    const contactBtn = document.getElementById("contact-btn");
    contactBtn.addEventListener("click", () => {
      if (window.location.pathname.endsWith("contact.html")) {
        window.location.reload();
      } else {
        window.location.href = "contact.html";
      }
    });
