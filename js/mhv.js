(function () {
    "use strict";
    function changeToggleActive(element) {
        element.classList.toggle('active');
    }

    function changeToggleActiveMobileMenu() {
        document.querySelector('.mobile_menu').classList.toggle('active_mm');
    }

    document.querySelectorAll('.parentli').forEach(function (element) {
        element.addEventListener('click', function () {
            changeToggleActive(element);
        })
    })

    document.querySelector('.mobile_menu_point').addEventListener('click', function (){
        changeToggleActiveMobileMenu();
        document.querySelector('.mobile_menu_close').style.display = 'block';
        document.querySelector('.mobile_menu_point').style.display = 'none';
        document.querySelector("html").style.overflow = 'hidden';

    })

    document.querySelector('.mobile_menu_close').addEventListener('click', function (){
        changeToggleActiveMobileMenu();
        document.querySelector('.mobile_menu_point').style.display = 'block';
        document.querySelector('.mobile_menu_close').style.display = 'none';
        document.querySelector("html").style.overflow = 'auto';
    })


})();