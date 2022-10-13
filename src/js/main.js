'use strict'

console.log('S>>>')

import Collapse from 'bootstrap/js/dist/collapse'
import Dropdown from 'bootstrap/js/dist/dropdown'
import Tab from 'bootstrap/js/dist/tab'
import Button from 'bootstrap/js/dist/button'
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import Modal from 'bootstrap/js/dist/modal'

// Tiny Slider
import { tns } from 'tiny-slider/src/tiny-slider'

var slider = tns({
  container: '.blog-slider',
  items: 3,
  slideBy: 'page',
  autoplay: false,
  nav: false,
  prevButton: document.getElementById('#prev'),
  nextButton: document.getElementById('#next'),
  controlsText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
})

import { fslightbox } from 'fslightbox'



// function navbarFixed(){
//     if($('.page-header').length){
//         $(window).scroll(function(){
//             var scroll = $(window).scrollTop();

//             if (scroll > 100 ){
//                 $('.page-header').addClass("sticky");
//             } else {
//                 $('.page-header').removeClass("sticky");
//             }
//         });
//     }
// }
// navbarFixed();


// $('.form-control').on('focusin', function() {
//     var 
//         $this = $(this),
//         row = $this.closest('.form-group'),
//         label = row.find('label');

//     row.addClass('active');
// });

// $('.form-control').on('focusout', function() {
//     var 
//         $this = $(this),
//         row = $this.closest('.form-group'),
//         label = row.find('label'),
//         val = this.value;


//     if (!val) {
//         row.removeClass('active');
//     }
// });