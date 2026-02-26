// Portfolio site — add any interactive behavior here (e.g. gallery lightbox, form handling)

document.addEventListener('DOMContentLoaded', function () {
  // Optional: highlight current page in nav
  var path = window.location.pathname;
  var page = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.style.fontWeight = '700';
    }
  });
});
