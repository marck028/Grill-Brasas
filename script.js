// Carrusel de imágenes
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

// Función para cambiar de slide
function changeSlide(direction) {
    if (!totalSlides) return;

    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');

    currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;

    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

// Función para ir a un slide específico
function goToSlide(index) {
    if (!totalSlides) return;

    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');

    currentSlideIndex = (index - 1 + totalSlides) % totalSlides;

    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

// Auto-play del carrusel
let carouselInterval = setInterval(() => {
    changeSlide(1);
}, 6000); // Cambia cada 6 segundos

// Pausar el carrusel al pasar el mouse
const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(() => {
            changeSlide(1);
        }, 6000);
    });
}

// Filtro del menú por categorías
function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // Actualizar botones activos
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.textContent.trim().toLowerCase();
        if (btnText === category) {
            btn.classList.add('active');
        }
    });
    
    // Filtrar items del menú
    menuItems.forEach(item => {
        item.classList.remove('show');
        
        if (category === 'todos') {
            setTimeout(() => {
                item.classList.add('show');
            }, 50);
        } else {
            const itemCategory = item.getAttribute('data-category');
            if (itemCategory === category) {
                setTimeout(() => {
                    item.classList.add('show');
                }, 50);
            }
        }
    });
}

// Mostrar todos los items al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.add('show');
    });
});

// Menú hamburguesa para móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Ajuste para la navbar fija
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de scroll en la navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    }
    
    lastScroll = currentScroll;
});

// Animación al hacer scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos del menú
document.querySelectorAll('.menu-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Modal para ampliar imágenes
const imageModal = document.getElementById('image-modal');
const imageModalImg = imageModal?.querySelector('.image-modal-img');
const imageModalCaption = imageModal?.querySelector('.image-modal-caption');
const imageModalClose = imageModal?.querySelector('.image-modal-close');

function openImageModal(src, caption) {
    if (!imageModal || !imageModalImg || !imageModalCaption) return;
    imageModalImg.src = src;
    imageModalImg.alt = caption;
    imageModalCaption.textContent = caption;
    imageModal.classList.add('open');
    imageModal.setAttribute('aria-hidden', 'false');
}

function closeImageModal() {
    if (!imageModal || !imageModalImg) return;
    imageModal.classList.remove('open');
    imageModal.setAttribute('aria-hidden', 'true');
    imageModalImg.src = '';
}

document.querySelectorAll('.menu-item-image').forEach(container => {
    const img = container.querySelector('img');
    if (!img) return;

    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        const caption = img.closest('.menu-item')?.querySelector('h3')?.textContent || img.alt;
        openImageModal(src, caption);
    });

    if (!container.querySelector('.image-zoom-btn')) {
        const zoomBtn = document.createElement('button');
        zoomBtn.className = 'image-zoom-btn';
        zoomBtn.type = 'button';
        zoomBtn.innerHTML = '<span>🔍</span> Ver';
        zoomBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const src = img.getAttribute('src');
            const caption = img.closest('.menu-item')?.querySelector('h3')?.textContent || img.alt;
            openImageModal(src, caption);
        });
        container.appendChild(zoomBtn);
    }
});

imageModalClose?.addEventListener('click', closeImageModal);

imageModal?.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        closeImageModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal?.classList.contains('open')) {
        closeImageModal();
    }
});

