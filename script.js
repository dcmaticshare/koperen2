// Koperen Passer — statische homepagina
(function () {
  // mobiel slide-over menu
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');
  var overlay = document.getElementById('navOverlay');
  var closeBtn = document.getElementById('navClose');

  function setMenu(open) {
    nav.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    document.body.classList.toggle('nav-locked', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  if (toggle && nav && overlay) {
    toggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });
    overlay.addEventListener('click', function () { setMenu(false); });
    if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // filterchips (visueel)
  var filters = document.getElementById('filters');
  if (filters) {
    filters.addEventListener('click', function (e) {
      if (e.target.classList.contains('chip')) {
        filters.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
        e.target.classList.add('active');
      }
    });
  }

  // nieuwsbrief (demo)
  var form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button');
      btn.textContent = 'Ingeschreven ✓';
      btn.disabled = true;
    });
  }
})();
