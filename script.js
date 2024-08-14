const themeIcon = document.getElementById('theme-icon');
const themeLink = document.getElementById('theme-link');

themeIcon.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === 'styles.css') {
        themeLink.setAttribute('href', 'dark-theme.css');
    } else {
        themeLink.setAttribute('href', 'styles.css');
    }
});
