window.onload = function () {
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('is-active');
    });

    function scroll(e) {

        const href = $(this).attr('href');

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 800);

        location.hash = href;

    };

    $('a[href^="#"]').click(scroll);

}