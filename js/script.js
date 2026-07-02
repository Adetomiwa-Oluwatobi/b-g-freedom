document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-mobile');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var form = document.querySelector('.enquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value.trim();
      var product = form.querySelector('#product').value;
      var message = form.querySelector('#message').value.trim();
      var text = 'Hello B&G Freedom, my name is ' + (name || 'a visitor') +
        '. I am interested in: ' + (product || 'general enquiry') +
        (message ? ('. ' + message) : '');
      var url = 'https://wa.me/2348034182374?text=' + encodeURIComponent(text);
      window.open(url, '_blank');
    });
  }
});
