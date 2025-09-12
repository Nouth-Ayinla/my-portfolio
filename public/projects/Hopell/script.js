// Mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('active');
  });
});

// WhatsApp form submission
const whatsappForm = document.getElementById('whatsappForm');

whatsappForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = encodeURIComponent(this.name.value);
  const phone = encodeURIComponent(this.phone.value || '');
  const email = encodeURIComponent(this.email.value || '');
  const message = encodeURIComponent(this.message.value);
  
  const whatsappUrl = `https://wa.me/2347045015379?text=Name:%20${name}%0APhone:%20${phone}%0AEmail:%20${email}%0AMessage:%20${message}`;
  
  window.open(whatsappUrl, '_blank');
});

// Dark mode toggle functionality
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
                     (prefersDarkScheme.matches ? 'dark' : 'light');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  
  if (theme === 'dark') {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});