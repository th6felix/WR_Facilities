onScroll()
window.addEventListener('scroll', onScroll)

//Gerenciamento de Scroll
function showNavOnScroll(){
    if (scrollY > 0){
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showToBackTopButtonOnScroll(){
    if (scrollY > 400){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function onScroll(){
    showNavOnScroll()
    showToBackTopButtonOnScroll()
}


//Aparição dos elementos conforme scroll
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,          //ms: milésimo de segundo
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services, 
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #contact,
    #contact header,
    #contact content
`);


//Funcionamento do menu
function openMenu(){
    document.body.classList.add('menuExpanded')
}

function closeMenu(){
    document.body.classList.remove('menuExpanded')
}