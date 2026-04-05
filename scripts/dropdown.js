const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-wrapper")) {
        dropdownMenu.classList.remove("active");
    }
});
