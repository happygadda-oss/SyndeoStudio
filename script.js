// ================================
// Syndeo Studio - Main JavaScript
// ================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        try {
            // Make API call to backend
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                // Show success message
                document.getElementById('success-message').classList.remove('hidden');
                document.getElementById('error-message').classList.add('hidden');
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('success-message').classList.add('hidden');
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Show error message
            document.getElementById('error-message').classList.remove('hidden');
            document.getElementById('success-message').classList.add('hidden');
            
            console.error('Error submitting form:', error);
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                document.getElementById('error-message').classList.add('hidden');
            }, 5000);
        }
    });
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all elements with scroll-animate class
document.querySelectorAll('.scroll-animate').forEach(element => {
    observer.observe(element);
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Add active class to current page nav link
const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentLocation) {
        link.classList.add('active');
    }
});

// Portfolio Item Hover Effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.03)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Lazy Loading for Images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add parallax effect to hero sections
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-bg');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add typing effect to hero text (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Counter Animation for Stats
function animateCounter(element, target, suffix = '', duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Trigger counter animations when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target.querySelector('.gradient-text');

            if (counter && !counter.classList.contains('animated')) {
                const text = counter.textContent.trim();

                // extract number + suffix
                const number = parseInt(text);
                const suffix = text.replace(number, '');

                animateCounter(counter, number, suffix);
                counter.classList.add('animated');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stats-card, .result-card').forEach(card => {
    statsObserver.observe(card);
});

// Add loading state to buttons
document.querySelectorAll('button[type="submit"]').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            const originalText = this.textContent;
            this.textContent = 'Sending...';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('loading');
            }, 2000);
        }
    });
});

// Console welcome message
console.log('%c👋 Welcome to Syndeo Studio!', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%cPremium Social Media Marketing Agency', 'color: #6366f1; font-size: 14px;');
console.log('%cInterested in working with us? Visit our contact page!', 'color: #64748b; font-size: 12px;');
