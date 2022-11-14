(function () {
    "use strict";
    function changeToggleActive(element) {
        element.classList.toggle('active');
    }

    function changeToggleActiveMobileMenu() {
        document.querySelector('.mobile_menu').classList.toggle('active_mm');
    }

    function msToTime(duration) {
        var seconds = parseInt((duration/1000)%60);
        var minutes = parseInt((duration/(1000*60))%60);
        var hours = parseInt((duration/(1000*60*60))%24);
        var days = parseInt(duration/(1000*60*60*24));

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }

    function intervalGetData(data) {
        const timeInMs = new Date();
        const month = Number(timeInMs.getMonth())+1;
        const now = timeInMs.getFullYear()+'-'+month+'-'+timeInMs.getDate()+' '+timeInMs.toLocaleTimeString();

        var start = new Date(now.replace(/-/g,"/"));
        var stop = new Date(data.replace(/-/g,"/"));
        var session = stop - start;

        return msToTime(session);
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

    document.querySelectorAll('.accordion_item').forEach(function (element) {
        element.addEventListener('click', function () {
            document.querySelectorAll('.accordion_item').forEach(function (el) {
                el.classList.remove('active');
            })
            element.classList.add('active');
        })
    })

    const slider = new Swiper(".slider", {
        navigation: {
            nextEl: ".slider_right",
            prevEl: ".slider_left",
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 24,
            },
            1220: {
                spaceBetween: 24,
            },
            850: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            550: {
                width: 486,
                slidesPerView: 1,
            },
            490: {
                slidesPerView: 2,
            },
            320: {
                width: 263,
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false,
            },
        }
    });

    setInterval(() => {
        document.querySelectorAll('.home_coming_item_title').forEach(function (element) {
            if( element.getAttribute('data-time') ) {
                const date = intervalGetData(element.getAttribute('data-time'));
                const parentElement = element.parentElement;
                parentElement.querySelector('.day').innerHTML = date.days;
                parentElement.querySelector('.hour').innerHTML = date.hours;
                parentElement.querySelector('.minute').innerHTML = date.minutes;
                parentElement.querySelector('.second').innerHTML = date.seconds;
                //console.log();
            }
        })
    }, 1000);


})();