// Scroll to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

  // Trigger fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('appear');
    }
  });
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
}

// Load saved theme on page load
window.onload = function () {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }

  // Fade-in trigger
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('appear');
    }
  });
};

// Toggle navigation menu (mobile)
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}
