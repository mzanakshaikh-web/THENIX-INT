
// THENIX INT. APPLICATION

// OPENING SCREEN

window.addEventListener("load", () => {

  const intro = document.getElementById("intro-screen");

  if (!intro) return;

  setTimeout(() => {
    intro.remove();
  }, 4100);

});

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

}

// NAVIGATION LINKS

document.querySelectorAll("#main-nav a").forEach(link => {

  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
  });

});

// TEMPORARY BUTTON RESPONSES

document.getElementById("get-started-btn")
  ?.addEventListener("click", () => {
    alert("THENIX INT. registration is coming soon!");
  });

document.getElementById("login-btn")
  ?.addEventListener("click", () => {
    alert("Client and trainer login is coming soon!");
  });

document.getElementById("community-btn")
  ?.addEventListener("click", () => {
    alert("Welcome to THENIX INT. Community!");
  });

// PWA SERVICE WORKER

if ("serviceWorker" in navigator) {

  window.addEventListener("load", () => {

    navigator.serviceWorker.register("./service-worker.js")
      .catch(error => {
        console.error("Service worker registration failed:", error);
      });

  });

}
