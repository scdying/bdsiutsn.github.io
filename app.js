const reponsiveMenuButton = document.getElementById('responsiveMenuToggleButton');

const navBarLinks = document.querySelector('.nav-links');

reponsiveMenuButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('open');
    reponsiveMenuButton.classList.toggle('open')
})

const allNavLinks = document.querySelectorAll('.nav-links li');

allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBarLinks.classList.remove('open');
        reponsiveMenuButton.classList.remove('open');
    })
})