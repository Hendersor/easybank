const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu')
const closeMenuIcon = document.getElementById('closeIcon');


const displayMenu = () =>{
    menuIcon.classList.remove('visible');
    menuIcon.classList.add('hidden');

    closeMenuIcon.classList.remove('hidden');
    closeMenuIcon.classList.add('visible');

    menu.classList.remove('hidden');
    menu.classList.add('visible');
}

const closeMenu = () => {
    closeMenuIcon.classList.remove('visible');
    closeMenuIcon.classList.add('hidden');

    menuIcon.classList.remove('hidden');
    menuIcon.classList.add('visible');

    menu.classList.remove('visible');
    menu.classList.add('hidden');
}

menuIcon.addEventListener('click', displayMenu);

closeMenuIcon.addEventListener('click', closeMenu);

