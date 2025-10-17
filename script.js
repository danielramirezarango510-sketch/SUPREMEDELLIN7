// ----------- MOSTRAR SUBCATEGORÍAS -----------
function showSubcategories(category) {
  document.querySelectorAll('.subcategories').forEach(sub => sub.style.display = 'none');
  document.getElementById(`sub-${category}`).style.display = 'flex';
  document.querySelectorAll('.product-card').forEach(card => card.style.display = 'none');
}

// ----------- MOSTRAR PRODUCTOS POR SUBCATEGORÍA -----------
function showProducts(subcat) {
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.display = card.dataset.category === subcat ? 'block' : 'none';
  });
}

// ----------- MOSTRAR TODOS LOS PRODUCTOS -----------
function showAllProducts() {
  document.querySelectorAll('.subcategories').forEach(sub => sub.style.display = 'none');
  document.querySelectorAll('.product-card').forEach(card => card.style.display = 'block');
}

// ----------- MODAL PRODUCTOS -----------
function openModal(name, sizes, colors, price) {
  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalSizes').textContent = sizes;
  document.getElementById('modalColors').textContent = colors;
  document.getElementById('modalPrice').textContent = price;
  document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}

// ----------- CARRUSEL DE IMÁGENES -----------
function prevImage(event, btn) {
  event.stopPropagation();
  const carousel = btn.closest('.image-carousel');
  const images = carousel.querySelectorAll('.carousel-image');
  let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  images[activeIndex].classList.remove('active');
  activeIndex = (activeIndex - 1 + images.length) % images.length;
  images[activeIndex].classList.add('active');
}

function nextImage(event, btn) {
  event.stopPropagation();
  const carousel = btn.closest('.image-carousel');
  const images = carousel.querySelectorAll('.carousel-image');
  let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  images[activeIndex].classList.remove('active');
  activeIndex = (activeIndex + 1) % images.length;
  images[activeIndex].classList.add('active');
}

// ----------- FONDO ESTRELLAS -----------
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = [];
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speed: Math.random() * 0.5
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
  });
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateStars();
