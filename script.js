// Script pour le portfolio d'Allyah Cedrine

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling pour les liens de navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation des barres de progression
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress');
                progressBars.forEach(bar => {
                    // Récupérer la largeur définie en style inline
                    const width = bar.style.width;
                    // Réinitialiser à 0 puis animer
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                // Observer une seule fois
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer les skill cards
    const skillSection = document.querySelector('.skills-section');
    if (skillSection) {
        observer.observe(skillSection);
    }

    // Animation des skill cards au survol
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animation du bouton CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }

    // Active link highlight dans la navigation
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.style.borderBottomColor = 'rgba(255,255,255,0.5)';
            } else {
                link.style.borderBottomColor = 'transparent';
            }
        });
    });

    // Animation de fade-in au chargement
    const fadeInElements = document.querySelectorAll('.hero-text, .profile-photo');
    fadeInElements.forEach((element, index) => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transition = 'opacity 0.8s ease-out';
        }, index * 200);
    });

    // Log de bienvenue dans la console
    console.log('%c🎉 Bienvenue sur le portfolio d\'Allyah Cedrine!', 'font-size: 16px; color: #3498db; font-weight: bold;');
    console.log('%cÉtudiante en Informatique - L1 | EMIT Fianarantsoa', 'font-size: 12px; color: #666;');
    
    // Validation de l'email au clic
    const emailLink = document.querySelector('.contact-section a[href^="mailto"]');
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            console.log('Email cliqué:', this.textContent);
        });
    }

    // Responsive navigation menu toggle (optionnel)
    const handleMobileMenu = () => {
        const navLinksContainer = document.querySelector('.nav-links');
        const screenWidth = window.innerWidth;
        
        if (screenWidth <= 768 && navLinksContainer) {
            // Code pour gérer le menu mobile si nécessaire
        }
    };

    window.addEventListener('resize', handleMobileMenu);
    handleMobileMenu();

    // Animation de défilement progressif
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Style initial des éléments
    const skillCards2 = document.querySelectorAll('.skill-card');
    skillCards2.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Appeler une fois au chargement

});

// Fonction utilitaire pour vérifier si un élément est visible
function isElementVisible(element) {
    const position = element.getBoundingClientRect();
    return (
        position.top < window.innerHeight &&
        position.left < window.innerWidth &&
        position.bottom > 0 &&
        position.right > 0
    );
}

// Export pour utilisation externe si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { isElementVisible };
}