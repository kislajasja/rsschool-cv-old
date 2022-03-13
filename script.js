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
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('top_button').style.display = 'block';
  } else {
    document.getElementById('top_button').style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const menuLinks = document.querySelectorAll('.menu_link');
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLinks) => {
    menuLinks.addEventListener('click', onMenuLinkClick);
  });
}

function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
}
