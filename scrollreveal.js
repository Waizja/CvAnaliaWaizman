window.sr = ScrollReveal();



    sr.reveal('.menu', {

        duration: 2000,

        origin: 'bottom',

        distance: '-100px'

    });

    sr.reveal('.sobre-mi', {

        duration: 3000,

        origin: 'left',

        distance: '-100px'

    });

    sr.reveal('.formación académica', {

        duration: 3000,

        origin: 'right',

        distance: '-100px'

    });

    sr.reveal('.contactos', {

        duration: 3000,

        origin: 'left',

        distance: '-100px'

    });



addEventListener('DOMContentLoaded', () => {

    const btn_menu = document.querySelector('.btn_menu')

    if (btn_menu){

        btn_menu.addEventListener('click', () => {

            const menu__items = document.querySelector('.menu__items')

            menu__items.classList.toggle('show')

        })

    }

})