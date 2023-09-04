const bar = document.getElementById('menu-bar');
const nav = document.getElementById('navbar');
//const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}