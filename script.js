// Theme Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('[data-bs-theme-value]');
    const htmlElement = document.documentElement;
    
    // Función para obtener el tema preferido del sistema
    function getPreferredTheme() {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Función para aplicar el tema
    function setTheme(theme) {
        if (theme === 'auto') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            htmlElement.setAttribute('data-bs-theme', systemTheme);
        } else {
            htmlElement.setAttribute('data-bs-theme', theme);
        }
        
        // Actualizar el estado activo de los botones
        themeButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-bs-theme-value') === theme) {
                btn.classList.add('active');
            }
        });
        
        // Guardar preferencia
        localStorage.setItem('theme', theme);
    }
    
    // Aplicar tema inicial
    const initialTheme = getPreferredTheme();
    setTheme(initialTheme);
    
    // Event listeners para los botones de tema
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-bs-theme-value');
            setTheme(theme);
        });
    });
    
    // Escuchar cambios en la preferencia del sistema para el modo auto
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'auto') {
            setTheme('auto');
        }
    });
});

// Smooth scrolling para los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Newsletter form functionality
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form-input');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // Aquí puedes agregar la lógica para enviar el email
                alert('¡Gracias por suscribirte! Te mantendremos informado.');
                emailInput.value = '';
            }
        });
    }
});

// Animaciones en scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos con clase fade-in-up
    const animatedElements = document.querySelectorAll('.fade-in-up, .feature-card, .timeline-item');
    animatedElements.forEach(el => observer.observe(el));
});
