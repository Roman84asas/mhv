(function () {
    "use strict";

    function changeToggleActive(element) {
        element.classList.toggle('active');
    }

    function addClassActive(element, active) {
        element.classList.add(active);
    }

    function removeActiveAllElements(elementsClass, active) {
        document.querySelectorAll(elementsClass).forEach(function (element) {
            element.classList.remove(active);
        })
    }

    if( document.querySelectorAll( '.control_item' ) ) {
        document.querySelectorAll( '.control_item' ).forEach(function ( element ) {
            element.addEventListener('click', function () {
                removeActiveAllElements( '.control_item', 'active' );
                removeActiveAllElements( '.plan_items', 'plan_items_active' );

                addClassActive( element, 'active' )
                addClassActive(document.querySelector( element.getAttribute('data-id') ), 'plan_items_active')
            })
        })
    }

})()