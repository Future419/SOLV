document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});
