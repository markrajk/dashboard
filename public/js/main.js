const sidenavMenu = document.querySelector('.sidebar-menu');
const sidenavMenuToggle = document.querySelector('.sidebar-menu-toggle');
const sidenavMenuToggleIcon = document.querySelector('.sidebar-menu-toggle i');

console.log(sidenavMenuToggle)
console.log(sidenavMenuToggleIcon)


sidenavMenuToggle.addEventListener('click', function() {
    sidenavMenu.classList.toggle('sidebar-menu-close-anim');
    sidenavMenuToggleIcon.classList.toggle('sidebar-menu-close-icon-rotate');
})