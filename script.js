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
    