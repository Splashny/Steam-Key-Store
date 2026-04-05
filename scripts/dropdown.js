const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
});

// Закрытие при клике вне меню
document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-wrapper")) {
        dropdownMenu.classList.remove("active");
    }
});
