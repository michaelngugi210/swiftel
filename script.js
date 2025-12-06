// ============================================
// Navigation Toggle for Mobile
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Active Nav Link on Scroll
// ============================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Plan Selection - Auto-fill form when plan is clicked
// ============================================
const planButtons = document.querySelectorAll('.btn-plan');

planButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const planName = button.getAttribute('data-plan');
        
        // Scroll to contact form
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offsetTop = contactSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Wait for scroll to complete, then auto-select plan
            setTimeout(() => {
                const planSelect = document.getElementById('plan');
                if (planSelect) {
                    // Find the matching option
                    const options = planSelect.options;
                    for (let i = 0; i < options.length; i++) {
                        if (options[i].value.includes(planName)) {
                            planSelect.selectedIndex = i;
                            planSelect.focus();
                            break;
                        }
                    }
                }
            }, 500);
        }
    });
});

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        email: document.getElementById('email').value.trim(),
        location: document.getElementById('location').value.trim(),
        plan: document.getElementById('plan').value,
        message: document.getElementById('message').value.trim()
    };
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.location || !formData.plan) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address.');
        document.getElementById('email').focus();
        return;
    }
    
    // Phone validation (basic - accepts Kenyan and international formats)
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(formData.phone) || formData.phone.length < 10) {
        alert('Please enter a valid phone number.');
        document.getElementById('phone').focus();
        return;
    }
    
    // In a real application, you would send this to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Request Submitted! ✓';
    submitButton.style.background = '#10b981';
    submitButton.disabled = true;
    
    // Show success message to user
    showFormMessage('Thank you! We\'ve received your request and will contact you within 24 hours.', 'success');
    
    // Reset form after showing success
    setTimeout(() => {
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.style.background = '';
        submitButton.disabled = false;
        hideFormMessage();
    }, 5000);
    
    /* 
    Example backend integration:
    
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        showFormMessage('Thank you! We\'ve received your request and will contact you within 24 hours.', 'success');
        contactForm.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        showFormMessage('Sorry, there was an error submitting your request. Please try again or call us directly.', 'error');
    });
    */
});

// ============================================
// Form Message Display
// ============================================
function showFormMessage(message, type) {
    // Remove existing message if any
    hideFormMessage();
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 0.5rem;
        background: ${type === 'success' ? '#d1fae5' : '#fee2e2'};
        color: ${type === 'success' ? '#065f46' : '#991b1b'};
        border: 1px solid ${type === 'success' ? '#10b981' : '#ef4444'};
        animation: fadeIn 0.3s ease-out;
    `;
    
    contactForm.appendChild(messageDiv);
}

function hideFormMessage() {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
}

// ============================================
// Intersection Observer for Fade-in Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .plan-card, .area-card, .contact-form');
    animateElements.forEach(el => observer.observe(el));
});

// ============================================
// Parallax Effect for Hero Section
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-background');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ============================================
// Phone Number Formatting (Optional Enhancement)
// ============================================
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        
        // Format Kenyan phone number
        if (value.startsWith('254')) {
            value = '+' + value;
        } else if (value.startsWith('0')) {
            value = '+254' + value.substring(1);
        } else if (value && !value.startsWith('+')) {
            // If it doesn't start with +, assume it's a local number starting with 0
            if (value.length > 0 && !value.startsWith('0')) {
                value = '0' + value;
            }
        }
        
        e.target.value = value;
    });
}

// ============================================
// Back to Top Button
// ============================================
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
        button.style.background = 'var(--primary-hover)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        button.style.background = 'var(--primary-color)';
    });
};

// Initialize back to top button
createBackToTopButton();

// ============================================
// Page Load Animation
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
