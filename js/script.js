const button = document.getElementById('toggle_dark_theme_button');
const body = document.body;

button.addEventListener('click', () => {
    body.classList.toggle('dark_mode');
})