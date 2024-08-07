// JavaScript to handle the "Go to Top" button
document.addEventListener('DOMContentLoaded', () => {
    const goToTopButton = document.getElementById('go-to-top');

    // Show the button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            goToTopButton.classList.add('show');
        } else {
            goToTopButton.classList.remove('show');
        }
    });

    // Scroll back to the top when button is clicked
    goToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
