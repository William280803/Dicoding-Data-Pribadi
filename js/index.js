const changeTheme = document.getElementById('changeTheme');
let isDarkMode = false;

changeTheme.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    const body = document.body;
    body.classList.toggle('theme-dark', isDarkMode);
    body.classList.toggle('theme-light', !isDarkMode);
});