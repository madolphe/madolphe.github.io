function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  localStorage.setItem('preferred-lang', lang);
  document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
    btn.textContent = lang === 'en' ? 'FR' : 'EN';
  });
  document.querySelectorAll('[data-lang-en]').forEach(function(el) {
    var newText = el.getAttribute('data-lang-' + lang);
    el.textContent = newText;
    var id = el.id;
    if (!id) {
      var anchor = el.parentElement && el.parentElement.previousElementSibling;
      if (anchor) id = anchor.id;
    }
    if (id) {
      var tocLink = document.querySelector('#toc-sidebar a[href="#' + id + '"]');
      if (tocLink) tocLink.textContent = newText;
    }
  });
}

function initLang() {
  var saved = localStorage.getItem('preferred-lang') || 'en';
  setLang(saved);
}

document.addEventListener('DOMContentLoaded', function() {
  initLang();
  document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var current = document.documentElement.getAttribute('data-lang') || 'en';
      setLang(current === 'en' ? 'fr' : 'en');
    });
  });
});
