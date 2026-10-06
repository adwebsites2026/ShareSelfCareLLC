// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Auto-resize the JotForm iframe
if (window.jotformEmbedHandler) {
  window.jotformEmbedHandler("iframe[id='JotFormIFrame-261216444113042']", 'https://form.jotform.com/');
}

// Fade sections in on scroll
const targets = document.querySelectorAll('.section__head, .card, .steps li, .quote, .split > *, .band__inner > *');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => { t.classList.add('reveal'); io.observe(t); });
}
