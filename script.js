const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  Blackberry: function () {
    return navigator.userAgent.match(/Blackberry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.Blackberry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if (iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top_button").style.display = "block";
    } else {
        document.getElementById("top_button").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const menuLinks = document.querySelectorAll('.menu_link');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener('click', onMenuLinkClick);
  })
}

function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  };
}

console.log('Общая оценка: 150');
console.log('✅ Вёрстка валидная +10 баллов');
console.log('✅ Вёрстка семантическая + 20 баллов');
console.log('✅ Для оформления СV используются css-стили + 10 баллов');
console.log('✅ Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы + 10 баллов');
console.log('✅ Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется + 10 баллов');
console.log('✅ на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) + 10 баллов');
console.log('✅ Есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным + 10 баллов');
console.log('✅ Контакты для связи и перечень навыков оформлены в виде списка ul > li + 10 баллов');
console.log('✅ CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского + 10 баллов');
console.log('✅ CV содержит пример кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может используется highlight.js + 10 баллов');
console.log('✅ CV содержит изображения-ссылки на выполненные проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий + 10 баллов');
console.log('✅ CV выполнено на английском языке + 10 баллов');
console.log('✅ Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) + 10 баллов');
console.log('✅ Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию  + 10 баллов');
