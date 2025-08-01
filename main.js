onScroll()
window.addEventListener('scroll', onScroll)


function onScroll(){
    showNavOnScroll()
    showBackTopButtonOnScroll()

    // activateMenuAtCurrentSection(home)
    // activateMenuAtCurrentSection(services)
    // activateMenuAtCurrentSection(about)
    // activateMenuAtCurrentSection(contact)
}

// function activateMenuAtCurrentSection(section){
//       const targetLine = scrollY + innerHeight / 2

//   // verificar se a seção passou da linha
//   // quais dados vou precisar?
//   const sectionTop = section.offsetTop
//   const sectionHeight = section.offsetHeight
//   const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

//   // verificar se a base está abaixo da linha alvo

//   const sectionEndsAt = sectionTop + sectionHeight
//   const sectionEndPassedTargetline = sectionEndsAt <= targetLine

//   // limites da seção
//   const sectionBoundaries =
//     sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

//   const sectionId = section.getAttribute('id')
//   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

//   menuElement.classList.remove('active')
//   if (sectionBoundaries) {
//     menuElement.classList.add('active')
//   }
// }

//Gerenciamento de Scroll
function showNavOnScroll(){
    if (scrollY > 0){
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackTopButtonOnScroll(){
    if (scrollY > 400){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
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