// Select all product images
const productImages = document.querySelectorAll('.product img');

// Create lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

lightbox.style.position = 'fixed';
lightbox.style.top = 0;
lightbox.style.left = 0;
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.background = 'rgba(0,0,0,0.8)';
lightbox.style.display = 'flex';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.opacity = 0;
lightbox.style.transition = 'opacity 0.3s';
lightbox.style.pointerEvents = 'none';

const img = document.createElement('img');
img.style.maxWidth = '90%';
img.style.maxHeight = '80%';
lightbox.appendChild(img);

// Open lightbox
productImages.forEach(image => {
  image.addEventListener('click', () => {
    img.src = image.src;
    lightbox.style.opacity = 1;
    lightbox.style.pointerEvents = 'auto';
  });
});

// Close lightbox
lightbox.addEventListener('click', e => {
  if (e.target !== img) {
    lightbox.style.opacity = 0;
    lightbox.style.pointerEvents = 'none';
  }
});
