document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const sections = document.querySelectorAll("section");

    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");
        footer.classList.toggle("dark-mode");
        sections.forEach(section => {
            section.classList.toggle("dark-mode");
        });
    });
});