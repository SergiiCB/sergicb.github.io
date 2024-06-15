document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const translations = {
    es: {
        about: "Sobre Mí",
        projects: "Proyectos",
        contact: "Contacto",
        namePlaceholder: "Nombre",
        emailPlaceholder: "Email",
        messagePlaceholder: "Mensaje",
        submitButton: "Enviar",
        hello: "Hola, soy [Tu Nombre]",
        developer: "Desarrollador de Software | Especialista en [Tu Especialidad]",
        viewProjects: "Ver Mis Proyectos"
    },
    en: {
        about: "About Me",
        projects: "Projects",
        contact: "Contact",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Message",
        submitButton: "Send",
        hello: "Hello, I'm [Your Name]",
        developer: "Software Developer | Specialist in [Your Specialty]",
        viewProjects: "View My Projects"
    },
    ca: {
        about: "Sobre Mi",
        projects: "Projectes",
        contact: "Contacte",
        namePlaceholder: "Nom",
        emailPlaceholder: "Correu electrònic",
        messagePlaceholder: "Missatge",
        submitButton: "Enviar",
        hello: "Hola, sóc [El Teu Nom]",
        developer: "Desenvolupador de Programari | Especialista en [La Teva Especialitat]",
        viewProjects: "Veure Els Meus Projectes"
    }
};

document.querySelectorAll('.lang').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        document.getElementById('about').querySelector('h2').textContent = translations[lang].about;
        document.getElementById('projects').querySelector('h2').textContent = translations[lang].projects;
        document.getElementById('contact').querySelector('h2').textContent = translations[lang].contact;
        document.querySelector('input[name="name"]').placeholder = translations[lang].namePlaceholder;
        document.querySelector('input[name="email"]').placeholder = translations[lang].emailPlaceholder;
        document.querySelector('textarea[name="message"]').placeholder = translations[lang].messagePlaceholder;
        document.querySelector('button[type="submit"]').textContent = translations[lang].submitButton;
        document.querySelector('.hero-content h1').textContent = translations[lang].hello;
        document.querySelector('.hero-content p').textContent = translations[lang].developer;
        document.querySelector('.hero .btn').textContent = translations[lang].viewProjects;
    });
});

let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const progressBar = document.querySelector(".progress");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    resetProgressBar();
    setTimeout(showSlides, 5000); // Cambia de imagen cada 5 segundos
}

function resetProgressBar() {
    progressBar.style.animation = "none";
    void progressBar.offsetWidth; // Reinicia la animación
    progressBar.style.animation = "progress 5s linear infinite";
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides();
});
