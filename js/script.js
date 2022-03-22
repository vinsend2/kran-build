$(document).ready(function (){

  const routSlides = new Swiper('.index_slider > .swiper', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  const swiper = new Swiper(".item__slider-block > .mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      750: {
        slidesPerView: 5,
      }
    }
  });
  const swiper2 = new Swiper(".item__slider-block > .mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  $(document).ready(function () {
    $('.vacancies__list .item').on('click', function (e) {
      var next = $(this).find('.submenu');
    console. log(next);
      if (!$(next).is(':visible')) {

        $(next).slideDown('fast');
      } else {
        $(next).slideUp('fast');
      }

      return false;
    });


  });


  $(document).on('click', ".item__content-menu a", function () {

    $(".item__content-menu a").removeClass('active');
    $(this).addClass('active');

    console.log($(this).attr('href'));

    $('.item__content div').removeClass('active');
    $($(this).attr('href')).addClass('active');

    return false;
  });


  const tabsColorChange = () => {
    let label = document.querySelectorAll('.catalog__tabs label');


    btn.onclick = function(e) {
      e.preventDefault();
      label.classList.toggle('active');
    };

  };

 $(document).on('click', '.catalog__tabs .tab', function () {
   $('.catalog__tabs .tab').removeClass('active');
   $(this).addClass('active');
   $('.catalog__content').removeClass('active');
   $('#' + $(this).attr('data-id')).addClass('active');
   var node = document.querySelector('#content-2');
   ScrollReveal().reveal(node);
 });




  $('.menu__btn').on('click', function() {
    console.log(133);
    $('body').toggleClass('no-scroll');
    $('.menu__btn').toggleClass('open-burger');
    /*  $('.footer .callback-bt').toggleClass('callback-bt--top');*/
  });

  document.addEventListener(
      "DOMContentLoaded",
      function () {
        tabsColorChange();
      },
      false
  );




  if ($('#contacts__map').length) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('contacts__map', {
        center: [
          55.168331, 61.405033
        ],
        zoom: 17,
        controls: ['zoomControl'],
      });

      myMap.geoObjects.add(new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageSize: [38, 49],
        cursor: 'default'
      }));
      myMap.behaviors.disable('scrollZoom');
    })
  }

  if ($('.catalog-item').length) {
    ScrollReveal().reveal('.catalog-item', {distance: '50px'}, {delay: 500});
  }


});


