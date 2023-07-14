// Smooth scroll to the target section
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth"
    });
  }
  
  // Add click event listeners to the navbar links
  document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll("#navbar a");
    navbarLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const target = event.target.getAttribute("href");
        smoothScroll(target);
      });
    });
  });

  

