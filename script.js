document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");
  const year = document.querySelector("#year");

  // Update copyright year
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Stop if the mobile menu elements are missing
  if (!menuButton || !navigation) return;

  function closeMenu() {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }

  function toggleMenu() {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  }

  menuButton.addEventListener("click", toggleMenu);

  // Close menu after selecting a navigation link
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when clicking outside it
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Node)) return;

    const clickedInsideMenu =
      navigation.contains(event.target) || menuButton.contains(event.target);

    if (!clickedInsideMenu) {
      closeMenu();
    }
  });

  // Close menu with the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
});
