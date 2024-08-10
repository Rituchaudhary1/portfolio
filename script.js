const slideMenu = document.querySelector('#slideMenu');

function openMenu(){
    slideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    slideMenu.style.transform = 'translateX(16rem)';
}