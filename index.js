const mode = document.querySelector(".mode");
const savedTheme = localStorage.getItem("theme");

// Default = dark
if (savedTheme === "light") {
    document.body.classList.remove("dark");
    mode.textContent = "🌙";
} else {
    document.body.classList.add("dark");
    mode.textContent = "☀️";
}

// Toggle
mode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        mode.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        mode.textContent = "🌙";
    }
});



