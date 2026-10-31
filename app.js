const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

siteNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Package buttons preselect the relevant service in the enquiry form.
document.querySelectorAll(".package-choose").forEach(button => {
  button.addEventListener("click", () => {
    const select = document.getElementById("clientPackage");
    if (select) select.value = button.dataset.package;
  });
});

// The form opens WhatsApp with a prepared message; it does not store personal data.
document.getElementById("enquiryForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const country = (data.get("country") || "").toString().trim();
  const selectedPackage = (data.get("package") || "").toString().trim();
  const goal = (data.get("goal") || "").toString().trim();

  const message = [
    "Hello THENIX INT.! I'd like to make a coaching enquiry.",
    "",
    `Name: ${name}`,
    `Country: ${country}`,
    `Interested in: ${selectedPackage}`,
    `My goal: ${goal || "I'd like to discuss my goals."}`
  ].join("\n");

  window.open(`https://wa.me/26072214463?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

document.getElementById("year").textContent = new Date().getFullYear();

// Subtle entrance animation, with a safe fallback for reduced-motion preferences.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}


if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // The website still works normally if offline support is unavailable.
    });
  });
}
