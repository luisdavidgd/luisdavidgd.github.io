document.addEventListener("DOMContentLoaded", function () {
  const theme = (() => {
    const localStorageTheme = localStorage?.getItem("theme") ?? "";
    if (["dark", "light"].includes(localStorageTheme)) {
      return localStorageTheme;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })();

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }

  window.localStorage.setItem("theme", theme);

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", handleToggleClick);
  }
});