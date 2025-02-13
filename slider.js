// Получаем элементы
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');

// Количество слайдов
const totalSlides = slides.length;

// Угол поворота между слайдами (360 / количество слайдов)
const angleStep = 360 / totalSlides;

// Текущее положение (индекс) – какой слайд сейчас "перед" нами
let currentIndex = 0;

// Расстояние от "камеры" до слайдов
const translateZ = 300;

// Первоначальная расстановка слайдов по окружности
function setupSlides() {
  slides.forEach((slide, i) => {
    const angle = i * angleStep;
    slide.style.transform = `
      rotateY(${angle}deg) 
      translateZ(${translateZ}px)
    `;
  });
}

// Устанавливаем, какой слайд активен
function updateActiveSlide() {
  slides.forEach((slide, i) => {
    // Нормализуем индекс (чтобы не было отрицательных значений при currentIndex--)
    const realIndex = (currentIndex % totalSlides + totalSlides) % totalSlides;
    slide.classList.toggle('active', i === realIndex);
  });
}

// Поворачиваем всю ленту .slider на нужный угол
function updateSliderRotation() {
  const rotateY = -currentIndex * angleStep;
  slider.style.transform = `translateZ(-${translateZ}px) rotateY(${rotateY}deg)`;
  updateActiveSlide();
}

// Автоматическая прокрутка (каждые 3 секунды)
function startAutoSlide() {
  setInterval(() => {
    currentIndex++;
    updateSliderRotation();
  }, 3000); // Меняйте 3000 на любое другое значение в миллисекундах
}

// Инициализация
setupSlides();
updateSliderRotation();
startAutoSlide();
