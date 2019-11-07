window.onload = function () {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.getElementById('navigation');
    const navBtn = document.querySelectorAll('.nav-button');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('is-active');
        navigation.classList.toggle('nav-active');
    });
    console.log(navBtn);

    navBtn.forEach(item => {
        item.addEventListener('click', event => {
          hamburger.classList.remove('is-active');
          navigation.classList.remove('nav-active');
        });
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