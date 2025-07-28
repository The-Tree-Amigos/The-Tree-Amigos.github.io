// Main JavaScript for Tree Amigos Website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    populateContent();
    initContactForm();
    initSmoothScrolling();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            navToggle.classList.toggle('active');
            
            // Update ARIA attributes for accessibility
            navToggle.setAttribute('aria-expanded', isActive);
        });

        // Close mobile menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close mobile menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus(); // Return focus to toggle button
            }
        });
    }

    // Header scroll effect
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });
}

// Populate dynamic content from config
function populateContent() {
    if (typeof siteConfig === 'undefined') {
        console.warn('siteConfig not loaded');
        return;
    }

    // Update elements with data-config attributes
    updateDataConfigElements();

    // Update phone numbers
    const phoneElements = document.querySelectorAll('[id$="-phone"]');
    phoneElements.forEach(el => {
        if (el.tagName === 'A') {
            el.href = `tel:${siteConfig.company.phone}`;
        }
        el.textContent = siteConfig.company.phone;
    });

    // Update email addresses
    const emailElements = document.querySelectorAll('[id$="-email"]');
    emailElements.forEach(el => {
        if (el.tagName === 'A') {
            el.href = `mailto:${siteConfig.company.email}`;
        }
        el.textContent = siteConfig.company.email;
    });

    // Update company names
    const companyElements = document.querySelectorAll('[id$="-company"]');
    companyElements.forEach(el => {
        el.textContent = siteConfig.company.name;
    });

    // Update taglines
    const taglineElements = document.querySelectorAll('[id$="-tagline"]');
    taglineElements.forEach(el => {
        el.textContent = siteConfig.company.tagline;
    });

    // Update service area
    const serviceAreaElements = document.querySelectorAll('[id*="service-area"]');
    serviceAreaElements.forEach(el => {
        el.textContent = siteConfig.serviceArea;
    });

    // Update business hours
    const hoursElements = document.querySelectorAll('[id*="hours"]');
    hoursElements.forEach(el => {
        el.textContent = siteConfig.hours;
    });

    // Populate services
    populateServices();
    populateValueProps();
}

// Populate services from config
function populateServices() {
    const productionList = document.getElementById('production-services');
    const specialtyList = document.getElementById('specialty-services');

    if (productionList && siteConfig.services.production) {
        productionList.innerHTML = siteConfig.services.production
            .map(service => `<li>${service}</li>`)
            .join('');
    }

    if (specialtyList && siteConfig.services.specialty) {
        specialtyList.innerHTML = siteConfig.services.specialty
            .map(service => `<li>${service}</li>`)
            .join('');
    }
}

// Populate value propositions
function populateValueProps() {
    const valueGrid = document.getElementById('value-grid');
    
    if (valueGrid && siteConfig.valueProps) {
        valueGrid.innerHTML = siteConfig.valueProps
            .map(prop => `
                <div class="value-item">
                    <h3>${prop}</h3>
                    <p>Professional tree care services that prioritize the health and longevity of your valuable trees.</p>
                </div>
            `)
            .join('');
    }
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');

        // Validate form
        if (!validateForm(form)) {
            resetSubmitButton(submitBtn, originalText);
            return;
        }

        // Submit form data
        const formData = new FormData(form);
        
        // For now, simulate form submission since Formspree URL needs to be configured
        setTimeout(() => {
            showFormStatus('success', 'Thank you! Your message has been sent. We\'ll get back to you soon.');
            form.reset();
            resetSubmitButton(submitBtn, originalText);
        }, 1500);

        // Uncomment below and configure Formspree URL for actual submission
        /*
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showFormStatus('success', 'Thank you! Your message has been sent. We\'ll get back to you soon.');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            showFormStatus('error', 'Sorry, there was an error sending your message. Please try calling us directly.');
        })
        .finally(() => {
            resetSubmitButton(submitBtn, originalText);
        });
        */
    });
}

// Form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else {
            clearFieldError(field);
            
            // Email validation
            if (field.type === 'email' && !isValidEmail(field.value)) {
                showFieldError(field, 'Please enter a valid email address');
                isValid = false;
            }
            
            // Phone validation
            if (field.type === 'tel' && !isValidPhone(field.value)) {
                showFieldError(field, 'Please enter a valid phone number');
                isValid = false;
            }
        }
    });

    return isValid;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#dc3545';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.style.borderColor = '';
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
    return cleanPhone.length >= 10 && phoneRegex.test(cleanPhone);
}

// Show form status message
function showFormStatus(type, message) {
    const formStatus = document.getElementById('form-status');
    if (!formStatus) return;

    formStatus.className = `form-status ${type}`;
    formStatus.textContent = message;
    formStatus.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

// Reset submit button
function resetSubmitButton(button, originalText) {
    button.textContent = originalText;
    button.disabled = false;
    button.classList.remove('loading');
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('.services, .value-props, .contact');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: lazy load images
function initLazyLoading() {
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

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Call lazy loading initialization
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Update elements with data-config attributes
function updateDataConfigElements() {
    const configElements = document.querySelectorAll('[data-config]');
    
    configElements.forEach(el => {
        const configPath = el.getAttribute('data-config');
        const value = getConfigValue(configPath);
        
        if (value !== undefined) {
            if (el.tagName === 'TITLE') {
                // Update page title with company name
                el.textContent = `${siteConfig.company.name} - Professional Tree Care in Ogden & Salt Lake City`;
            } else if (el.tagName === 'META') {
                // Update meta tag content
                const property = el.getAttribute('property');
                const name = el.getAttribute('name');
                
                if (property === 'og:title') {
                    el.setAttribute('content', `${siteConfig.company.name} - Professional Tree Care`);
                } else if (property === 'og:description') {
                    el.setAttribute('content', `${siteConfig.company.tagline} Professional tree care services in the Ogden/SLC area.`);
                }
            } else if (configPath === 'company.name' && el.classList.contains('section-title')) {
                // Special handling for "Why Choose [Company Name]" section
                el.textContent = `Why Choose ${siteConfig.company.name}`;
            } else if (configPath === 'currentYear') {
                // Update copyright year
                el.textContent = new Date().getFullYear();
            } else {
                // Regular text content update
                el.textContent = value;
            }
        }
    });

    // Update img alt attributes with data-alt-config
    const altConfigElements = document.querySelectorAll('[data-alt-config]');
    altConfigElements.forEach(el => {
        const configPath = el.getAttribute('data-alt-config');
        const value = getConfigValue(configPath);
        
        if (value !== undefined && el.tagName === 'IMG') {
            el.setAttribute('alt', `${value} Logo`);
        }
    });

    // Update structured data
    updateStructuredData();
}

// Helper function to get nested config values
function getConfigValue(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], siteConfig);
}

// Update structured data script
function updateStructuredData() {
    const structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript && siteConfig) {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": siteConfig.company.name,
            "description": "Professional tree care services",
            "telephone": siteConfig.company.phone,
            "email": siteConfig.company.email,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ogden",
                "addressRegion": "UT",
                "postalCode": "84401"
            },
            "areaServed": siteConfig.serviceArea.split(" and "),
            "serviceType": "Tree Care Services",
            "openingHours": siteConfig.hours
        };
        
        structuredDataScript.textContent = JSON.stringify(structuredData, null, 4);
    }
}