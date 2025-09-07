// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .about-card, .stat');
    animateElements.forEach(el => observer.observe(el));
});

// Contact form handling with Formspree
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Let the form submit naturally to Formspree
        // Formspree will handle the email sending and redirect
    });
}

// One Piece themed typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Add One Piece emoji animation after typing completes
            setTimeout(() => {
                const emoji = document.createElement('span');
                emoji.innerHTML = ' 🏴‍☠️';
                emoji.style.animation = 'bounce 1s infinite';
                element.appendChild(emoji);
            }, 500);
        }
    }
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// One Piece themed project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.05) rotate(2deg)';
        card.style.boxShadow = '0 25px 50px rgba(231, 76, 60, 0.3)';
        
        // Add treasure sparkle effect
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.top = '10px';
        sparkle.style.right = '10px';
        sparkle.style.fontSize = '20px';
        sparkle.style.animation = 'bounce 0.5s infinite';
        sparkle.className = 'treasure-sparkle';
        card.appendChild(sparkle);
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        
        // Remove sparkle effect
        const sparkle = card.querySelector('.treasure-sparkle');
        if (sparkle) {
            sparkle.remove();
        }
    });
});

// One Piece themed skill item hover effects (Devil Fruit powers)
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px) scale(1.1) rotate(5deg)';
        item.style.background = 'linear-gradient(135deg, #e74c3c, #f39c12)';
        item.style.color = 'white';
        
        // Add power aura effect
        const aura = document.createElement('div');
        aura.style.position = 'absolute';
        aura.style.top = '-5px';
        aura.style.left = '-5px';
        aura.style.right = '-5px';
        aura.style.bottom = '-5px';
        aura.style.border = '2px solid #f39c12';
        aura.style.borderRadius = '12px';
        aura.style.animation = 'pulse 1s infinite';
        aura.className = 'power-aura';
        item.style.position = 'relative';
        item.appendChild(aura);
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        item.style.background = '#f8fafc';
        item.style.color = '#374151';
        
        // Remove power aura effect
        const aura = item.querySelector('.power-aura');
        if (aura) {
            aura.remove();
        }
    });
});

// One Piece themed parallax effect for hero section (sailing through the Grand Line)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
        
        // Add wave effect to background
        const waveOffset = scrolled * 0.1;
        hero.style.backgroundPosition = `${waveOffset}px center`;
    }
});

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Utility function for smooth scrolling to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// One Piece themed scroll to top button (Going Merry style)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '🏴‍☠️';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e74c3c, #f39c12);
    color: white;
    border: 3px solid #2c3e50;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 8px 20px rgba(231, 76, 60, 0.4);
    animation: float 3s ease-in-out infinite;
`;

document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', scrollToTop);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// One Piece themed hover effects for scroll to top button
scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.2) rotate(10deg)';
    scrollToTopBtn.style.background = 'linear-gradient(135deg, #c0392b, #e67e22)';
    scrollToTopBtn.style.boxShadow = '0 12px 30px rgba(231, 76, 60, 0.6)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1) rotate(0deg)';
    scrollToTopBtn.style.background = 'linear-gradient(135deg, #e74c3c, #f39c12)';
    scrollToTopBtn.style.boxShadow = '0 8px 20px rgba(231, 76, 60, 0.4)';
});

// Add One Piece themed page load animation
document.addEventListener('DOMContentLoaded', () => {
    // Create treasure chest opening effect
    const treasureChest = document.createElement('div');
    treasureChest.innerHTML = '💰';
    treasureChest.style.position = 'fixed';
    treasureChest.style.top = '50%';
    treasureChest.style.left = '50%';
    treasureChest.style.transform = 'translate(-50%, -50%) scale(0)';
    treasureChest.style.fontSize = '100px';
    treasureChest.style.zIndex = '9999';
    treasureChest.style.transition = 'all 0.5s ease';
    treasureChest.style.pointerEvents = 'none';
    document.body.appendChild(treasureChest);
    
    // Animate treasure chest opening
    setTimeout(() => {
        treasureChest.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
    
    // Remove treasure chest after animation
    setTimeout(() => {
        treasureChest.style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => {
            treasureChest.remove();
        }, 500);
    }, 1500);
}); 