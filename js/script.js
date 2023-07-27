'use strict';

// menu-btnクリックでクラスclose付け外し、g_navにopen付け外し
const btn = document.querySelector('#menu-btn');
btn.addEventListener('click', function() {
  btn.classList.toggle('close');
  document.querySelector('#gnavi').classList.toggle('open');
});

// 上から300pxスクロールしたら#page-topにopen付ける、300px未満はopen外す
window.addEventListener('scroll', function() {
  const scroll = window.scrollY;
  const circle = document.querySelector('#page-top');
  if ( scroll >= 100 ) {
    circle.classList.add('open');
  } else {
    circle.classList.remove('open');
  }
  // console.log(scroll + 'だけスクロールしました');
});

const formday = document.querySelector('#what-day');
formday.onsubmit = function (e) {
  e.preventDefault();
  const yyyy = formday.year.value;
  const mm = formday.month.value;
  const dd = formday.date.value;
  document.querySelector('#A-01').textContent = `${yyyy}年${mm}月${dd}日`;
  const week = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
  const result = new Date(yyyy, mm-1, dd).getDay();
  document.querySelector('#A-02').textContent = week[result];
};

const formbmi = document.querySelector('#what-bmi');
formbmi.onsubmit = function (e) {
  e.preventDefault();
  const cm = parseFloat(formbmi.cm.value);
  const kg = parseFloat(formbmi.kg.value);
  const bmi = Math.round((kg / ((cm/100)**2))*10)/10;
  document.querySelector('#A-03').textContent = bmi;
  if( bmi >= 25 ) {
    document.querySelector('#A-04').textContent = '肥満気味';
  } else if( bmi >= 18.5 ) {
    document.querySelector('#A-04').textContent = '標準';
  } else {
    document.querySelector('#A-04').textContent = '痩せすぎ';
  }
};

//課題3
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false
  },
});