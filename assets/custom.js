document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.querySelector(".menu-drawer-container");

  if (!drawer) return;

  const summary = drawer.querySelector("summary");

  summary.addEventListener("click", (event) => {
    const isOpen = drawer.hasAttribute("open");

    if (isOpen) {
      // Closing
      event.preventDefault();

      drawer.classList.remove("menu-opening");
      drawer.classList.add("menu-closing");

      setTimeout(() => {
        drawer.removeAttribute("open");
        drawer.classList.remove("menu-closing");
      }, 400);

    } else {
      // Opening
      drawer.classList.remove("menu-closing");
      drawer.classList.add("menu-opening");

      requestAnimationFrame(() => {
        drawer.setAttribute("open", "");
      });
    }
  });
});