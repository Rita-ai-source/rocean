// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Active nav link
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
  else link.classList.remove('active');
});

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    document.body.classList.toggle('nav-mobile-open');
  });
}

// Scroll fade-in animation
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
fadeEls.forEach(el => observer.observe(el));

// Capabilities page nav scroll
const capNavItems = document.querySelectorAll('.cap-nav-item');
capNavItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = document.getElementById(item.dataset.target);
    if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    capNavItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// Contact form submit
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    btn.textContent = 'Message Sent! ✓';
    btn.style.background = '#16a34a';
    setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; contactForm.reset(); }, 3000);
  });
}
