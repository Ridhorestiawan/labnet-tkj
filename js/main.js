(function() {

  /* ─── Hamburger ─── */
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  /* ─── Dark Mode ─── */
  var html = document.documentElement;
  var toggleBtn = document.getElementById('themeToggle');

  var saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    html.setAttribute('data-theme', 'dark');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      var isDark = html.getAttribute('data-theme') === 'dark';
      if (isDark) {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '\u263D';
      } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '\u2600';
      }
    });

    if (saved === 'dark') {
      toggleBtn.textContent = '\u2600';
    } else {
      toggleBtn.textContent = '\u263D';
    }
  }

  /* ─── Back to Top ─── */
  var backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backBtn.classList.add('show');
      } else {
        backBtn.classList.remove('show');
      }
    });
    backBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── Fade-in on scroll ─── */
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(function(el) {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  }

})();
