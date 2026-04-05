$(window).on("load", function () {

    const track = $(".slider-track");
    const container = $(".slider-container");

    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    console.log("Track width:", track.outerWidth());
    console.log("Container width:", container.width());

    track.on("mousedown", function (e) {
        isDragging = true;
        startX = e.pageX;
        prevTranslate = currentTranslate;
        track.css("cursor", "grabbing");
    });

    $(document).on("mousemove", function (e) {
        if (!isDragging) return;

        const delta = e.pageX - startX;
        currentTranslate = prevTranslate + delta;

        const maxTranslate = 0;
        const minTranslate = container.width() - track.outerWidth();

        if (currentTranslate > maxTranslate) {
            currentTranslate = maxTranslate;
        }

        if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
        }

        track.css("transform", `translateX(${currentTranslate}px)`);
    });

    $(document).on("mouseup", function () {
        isDragging = false;
        track.css("cursor", "grab");
    });

});
