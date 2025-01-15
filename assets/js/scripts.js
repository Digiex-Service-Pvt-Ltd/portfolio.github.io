$(document).ready(function () {
    // Smooth Scrolling
    $('a.nav-link').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 70, // Adjust for fixed navbar
                },
                800
            );
        }
    });

    // Contact Form Submission
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const name = $('#contactForm input[type="text"]').val();
        const email = $('#contactForm input[type="email"]').val();
        const message = $('#contactForm textarea').val();

        if (name && email && message) {
            alert('Thank you, ' + name + '! Your message has been sent.');
            $(this).trigger('reset'); // Clear form
        } else {
            alert('Please fill in all fields.');
        }
    });
});
