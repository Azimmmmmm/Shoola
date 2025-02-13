document.addEventListener("DOMContentLoaded", function() {
  // Параллакс-эффект для фона в hero
  const heroBg = document.querySelector('.hero-bg');
  window.addEventListener('scroll', function() {
    let scrollPos = window.pageYOffset;
    heroBg.style.transform = 'translateY(' + (scrollPos * 0.2 - 5) + '%)';
  });

  // Плавный скролл для навигационных ссылок (при клике на пункт меню закрываем mobile-меню)
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      });
      // Закрываем мобильное меню, если оно открыто
      document.querySelector('nav ul.nav-links').classList.remove('active');
      burger.classList.remove('toggle');
    });
  });

  // Обработка отправки формы
  const bookingForm = document.getElementById('booking-form');
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Спасибо! Ваша заявка отправлена, мы свяжемся с вами в ближайшее время.");
    bookingForm.reset();
  });

  // Анимация появления секций при скролле (scroll reveal)
  const sections = document.querySelectorAll('.section');
  const observerOptions = {
    threshold: 0.15
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });

  // Burger Menu
  const burger = document.querySelector('.burger');
  const navUl = document.querySelector('nav ul.nav-links');
  burger.addEventListener('click', () => {
    navUl.classList.toggle('active');
    burger.classList.toggle('toggle');
  });
});
