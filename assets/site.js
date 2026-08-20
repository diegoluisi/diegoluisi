(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const savedTheme = localStorage.getItem("resume-theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

  root.dataset.theme = savedTheme || preferredTheme;

  themeButton?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("resume-theme", nextTheme);
    themeButton.setAttribute("aria-label", `Switch to ${nextTheme === "dark" ? "light" : "dark"} theme`);
  });

  document.querySelector("[data-print]")?.addEventListener("click", () => window.print());

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();

