// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header on Scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Dynamic Skills Progress Bar (Optional)
const skillBars = document.querySelectorAll('.skills-list li');
window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            bar.style.transform = 'scale(1.1)';
            bar.style.transition = 'transform 0.3s';
        } else {
            bar.style.transform = 'scale(1)';
        }
    });
});

// Contact Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        e.preventDefault();
        alert('Por favor rellena todos los campos para continuar.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        e.preventDefault();
        alert('Introduce un email valido.');
    }
});

// Dark Mode Toggle (Optional)
const toggleDarkMode = document.createElement('button');
toggleDarkMode.innerText = 'Dark Mode';
toggleDarkMode.style.position = 'fixed';
toggleDarkMode.style.bottom = '10px';
toggleDarkMode.style.right = '10px';
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleDarkMode.innerText = 'Light Mode';
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        toggleDarkMode.innerText = 'Dark Mode';
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }
});

// Image Modal for Projects
const projectImages = document.querySelectorAll('.project img');
const modal = document.createElement('div');
modal.classList.add('image-modal');
modal.innerHTML = '<span class="close">&times;</span><img class="modal-content"><div class="caption"></div>';
document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-content');
const captionText = modal.querySelector('.caption');

projectImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        captionText.innerText = img.alt;
    });
});

modal.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Element Fade-in on Scroll
const fadeElements = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.5 });

fadeElements.forEach(el => observer.observe(el));

// Copy Email to Clipboard
const emailField = document.querySelector('#contact p');
const copyButton = document.createElement('button');
copyButton.innerText = 'Copy Email';
copyButton.style.marginLeft = '10px';
emailField.appendChild(copyButton);

copyButton.addEventListener('click', () => {
    const emailText = emailField.innerText.split(' ')[1];
    navigator.clipboard.writeText(emailText).then(() => {
        alert('Email copiado en portapapeles!');
    });
});

// Carousel for Projects
const projectCarousel = document.querySelector('.projects-grid');
const carouselControls = document.createElement('div');
carouselControls.classList.add('carousel-controls');
carouselControls.innerHTML = '<button class="prev">&#10094;</button><button class="next">&#10095;</button>';
projectCarousel.parentNode.insertBefore(carouselControls, projectCarousel.nextSibling);

const projects = Array.from(projectCarousel.children);
let currentIndex = 0;

const updateCarousel = () => {
    projects.forEach((project, index) => {
        project.style.display = index === currentIndex ? 'block' : 'none';
    });
};

updateCarousel();

carouselControls.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCarousel();
});

carouselControls.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateCarousel();
});
