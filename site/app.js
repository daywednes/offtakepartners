/* Offtake Capital: phone menu. Without this script the nav links simply stay visible. */
(function () {
  var button = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (button && nav) {
    var setOpen = function (open) {
      button.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    };
    document.documentElement.classList.add('js');
    button.addEventListener('click', function () {
      setOpen(button.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) { setOpen(false); }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        button.focus();
      }
    });
  }
})();
