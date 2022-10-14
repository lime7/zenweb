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
  container: '.js-slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  nav: false,
  prevButton: document.getElementById('#prev'),
  nextButton: document.getElementById('#next'),
  controlsText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
  responsive: {
    576: {
      gutter: 20,
      items: 2
    },
    768: {
      gutter: 20,
      items: 3
    },
  }
})

import { fslightbox } from 'fslightbox'



window.onscroll = function() {navbarFixed()};

const header = document.getElementById("js-header");

const sticky = header.offsetTop;

function navbarFixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



const formControls = document.querySelectorAll(".form-control");

formControls.forEach((formControl) => {
  formControl.addEventListener("focus", function(){
    const row = formControl.closest('.form-group');
    const label = row.querySelector('label');
    row.classList.add("active");
  });


  formControl.addEventListener("blur", function(){
    const row = formControl.closest('.form-group');
    const label = row.querySelector('label');
    const val = formControl.value;

    if (!val) {
      row.classList.remove("active");
    }
  });
});