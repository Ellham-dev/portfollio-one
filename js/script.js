// scroll secton
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.onscroll = () => {
        header.classList.toggle('sticky', window.scrollY > 100);
    };
});
