window.addEventListener("load", function () {

    const track = document.querySelector(".slider-track");
    const container = document.querySelector(".slider-container");
    const thumbs = document.querySelectorAll(".thumb");
    const mainImage = document.getElementById("mainImage");

    let isDragging = false;
    let hasMoved = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    track.addEventListener("mousedown", function (e) {
        isDragging = true;
        hasMoved = false;
        startX = e.pageX;
        prevTranslate = currentTranslate;
        track.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", function (e) {

        if (!isDragging) return;

        const delta = e.pageX - startX;

        if (Math.abs(delta) > 5) {
            hasMoved = true;
        }

        currentTranslate = prevTranslate + delta;

        const maxTranslate = 0;
        const minTranslate = container.offsetWidth - track.scrollWidth;

        if (currentTranslate > maxTranslate) {
            currentTranslate = maxTranslate;
        }

        if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
        }

        track.style.transform = `translateX(${currentTranslate}px)`;
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
        track.style.cursor = "grab";
    });

    thumbs.forEach(thumb => {
        thumb.addEventListener("click", function (e) {
            if (hasMoved) return;

            mainImage.src = this.src;

            thumbs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        });
    });



    addBtn.addEventListener("click", function () {
        this.classList.toggle("added");

        if (this.classList.contains("added")) {
            this.textContent = "Добавлено";
        } else {
            this.textContent = "Добавить";
        }
    });

});
