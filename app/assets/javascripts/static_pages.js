// nav on page will link to just above div, and not the middle
$(window).on("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});
