// $(document).ready(function () {
//   $('.header__burger').click(function (event) {
//     $('.header__burger,.header__menu').toggleClass('burger--active')
//   })

//   $('.menu-link__dropdown').click(function (event) {
//     $(this).toggleClass('menu--active')
//   })
// });

// $(document).ready(function () {
//   $('.header__burger').click(function (event) {
//     $('.header__burger').toggleClass('burger--active')
//   })

//   $('.menu-link__dropdown').click(function (event) {
//     $(this).toggleClass('menu--active')
//   })
  
//   $(document).click(function (event) {
//     if (!$(event.target).hasClass('menu-link__dropdown')) {
//       $('.menu-link__dropdown').removeClass('menu--active');
//     }
//   });
// });
// $(document).ready(function () {
//   $('.header__burger').click(function (event) {
//     $('.header__burger,.header__menu').toggleClass('burger--active')
//   })

//   $('.menu-link__dropdown').click(function (event) {
//     $(this).toggleClass('menu--active')
//   })
  
//   $(document).click(function (event) {
//      if (!$(event.target).hasClass('menu--active') && !$(event.target).closest('.header__burger, .header__menu').length) {
//         $('.header__burger, .header__menu').removeClass('burger--active');
//         $('.menu-link__dropdown').removeClass('menu--active');
//      }
//   });
// });

// -----------------------
// document.addEventListener("DOMContentLoaded", function() {
//   let accordionItems = document.querySelectorAll('.accordion_item');
//   let myBtns = document.querySelectorAll('.myBtn');
  
//   // Check if elements exist before trying to access their properties
//   if (accordionItems.length > 0 && myBtns.length > 0) {
//   accordionItems[0].classList.add('accordion_active');
//   let dots = accordionItems[0].querySelector('.dots');
//   let more = accordionItems[0].querySelector('.more');
//   if (dots && more) {
//   dots.style.display = 'none';
//   more.style.display = 'inline';
//   }
//   accordionItems.forEach((item,index) => {
//   if(index!==0){
//   let dots = item.querySelector('.dots');
//   let more = item.querySelector('.more');
//   if (dots && more) {
//   dots.style.display = 'inline';
//   more.style.display = 'none';
//   }
//   }
//   });
  
//   myBtns.forEach(myBtn => {
//       myBtn.addEventListener('click', function() {
//         this.style.color = "white";
//   this.style.textAlign = "right";
//   let accordionItem = this.parentNode.parentNode;
//   if (accordionItem) {
//   accordionItems.forEach(item => {
//   item.classList.remove('accordion_active');
//   let dots = item.querySelector('.dots');
//   let more = item.querySelector('.more');
//   if (dots && more) {
//   dots.style.transition = "all 0.5s ease-in-out";
//   more.style.transition = "all 0.5s ease-in-out";
//   dots.style.display = 'inline';
//   more.style.display = 'none';
//   }
//   });
//   accordionItem.classList.add('accordion_active');

//               let dots = accordionItem.querySelector('.dots');
//               let more = accordionItem.querySelector('.more');
//               if (dots && more) {
//                 dots.style.transition = "all 0.5s ease-in-out";
//                 more.style.transition = "all 0.5s ease-in-out";
//                 dots.style.display = 'none';
//                 more.style.display = 'inline';
//               }
//           }
//       });
//   });
//   }
  // });

document.addEventListener("DOMContentLoaded", function() {
  let accordionItems = document.querySelectorAll('.accordion_item');
  let accordionBtn = document.querySelectorAll('.accordion_button');

  // Check if elements exist before trying to access their properties
  if (accordionItems.length > 0 && accordionBtn.length > 0) {
    accordionItems[0].classList.add('accordion_active');
    let dots = accordionItems[0].querySelector('.dots');
    let more = accordionItems[0].querySelector('.more');
    if (dots && more) {
      dots.style.display = 'none';
      more.style.display = 'inline';
    }
    accordionItems.forEach((item,index) => {
        if(index!==0){
          let dots = item.querySelector('.dots');
          let more = item.querySelector('.more');
          if (dots && more) {
            dots.style.display = 'inline';
            more.style.display = 'none';
          }
        }
    });    

    accordionBtn.forEach(accordionBtn => {
      accordionBtn.addEventListener('click', function() {
          this.style.color = "white";
  this.style.textAlign = "right";
            let accordionItem = this.parentNode.parentNode;
            if (accordionItem) {
                accordionItems.forEach(item => {
                    item.classList.remove('accordion_active'); 
                    let dots = item.querySelector('.dots');
                    let more = item.querySelector('.more');
                    if (dots && more) {
                      dots.style.display = 'inline';
                      more.style.display = 'none';
                      more.style.transition = 'all 0.5s ease-in-out';
                    }
                });
                accordionItem.classList.add('accordion_active');

                let dots = accordionItem.querySelector('.dots');
                let more = accordionItem.querySelector('.more');
                if (dots && more) {
                  dots.style.display = 'none';
                  more.style.display = 'inline';
                  more.style.transition = 'all 0.5s ease-in-out';
                }
            }
        });
    });
  }
});


//Toggle content when click on read more link
$(".toggle-text-link").click(function () {
  if ($(this).hasClass("less")) {
    $(this).removeClass("less");
    $(this).html(moretext);
  } else {
    $(this).addClass("less");
    $(this).html(lesstext);
  }
  $(this).parent().prev().toggle();
  $(this).prev().toggle();
  return false;
});



// const openMenu = document.querySelector('.open-button');
// openMenu.addEventListener('click', (e) => {
//   e.preventDefault();
//   openMenu.nextElementSibling.classList.toggle('open-content-show')
// });
$(document).ready(function () {
  $('.menu-link__dropdown').click(function (event) {
    $(this).toggleClass('menu--active')
  })
  
  $(document).click(function (event) {
    if (!$(event.target).hasClass('menu-link__dropdown')) {
      $(this).removeClass('menu--active');
    }
  });

  $('.header__burger').click(function(event){
            $('.header__burger,.header__menu').toggleClass('burger--active')
        })
}); 

if (window.innerWidth >= 768) {
  const openMenu = document.querySelector('.open-button');

  openMenu.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu.nextElementSibling.classList.toggle('open-content-show');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.open-button')) {
      openMenu.nextElementSibling.classList.remove('open-content-show');
    }
  });
}


window.addEventListener('scroll', () => {
  if (window.innerWidth >= 768) {
    const openContent = document.querySelector('.open-content');
    if (openContent !== null && openContent.classList.contains('open-content-show')) {
      openContent.classList.remove('open-content-show');
    }
  }
});

$(document).keydown(function (e) {
  if (e.keyCode === 13) {
    $("#searchForm").submit();
  }
});


    // $(document).ready(function(){
    //   $('.create__items').mobileOnlySlider({
    //   });
    // });
  

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  const slider = $($slidername);
  const settings = {
      mobileFirst: true,
      dots: $dots,
      arrows: $arrows,
      // centerMode: true,
      centerPadding: '15px',
      infinite: true,
      initialSlide: 0,
      centerMode: false,
      arrows: false,
      variableWidth: true,
      //autoplay: true,
      // prevArrow: '<button type="button" class="slick-prev"><span></span></button>',
      // nextArrow: '<button type="button" class="slick-next"><span></span></button>',
      responsive: [{
          breakpoint: $breakpoint,
          settings: "unslick"
      }]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
      if ($(window).width() > $breakpoint) {
          return;
      }
      if (!slider.hasClass("slick-initialized")) {
          return slider.slick(settings);
      }
  });
}
if (document.querySelector('.create__items')) {
    mobileOnlySlider(".create__items", false, true, 768);
}
if (document.querySelector('.program__content')) {
    mobileOnlySlider(".program__content", false, true, 768);
}

document.addEventListener("DOMContentLoaded", function () {
  const checkboxSwitchers = document.querySelectorAll("input[type=checkbox]");
  const detailsContainers = document.querySelectorAll(".details");
  checkboxSwitchers.forEach(checkboxSwitcher => {
    checkboxSwitcher.addEventListener("change", function (event) {
      const checkbox = event.target;
      const container = Array.prototype.find.call(
        detailsContainers,
        detailsContainer =>
        detailsContainer.parentNode.contains(checkbox)
      );
      if (checkbox.checked) {
        container.classList.add('tokens-selected');
      } else {
        container.classList.remove('tokens-selected');
      }
    });
  });
},
false
);

$(".accordion__title.active").next().slideDown();
$(".accordion__title").on("click", function () {
  if( $(this).hasClass('active') ) {
		$(this).removeClass("active").next().slideUp();
	} else {
		$(".accordion__title.active").removeClass("active").next(".accordion__body").slideUp();
    $(this).addClass('active').next('.accordion__body').slideDown();
	}
});