// Main JavaScript functionality for TerraFeed website
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Add scrolled class styles
    const style = document.createElement('style');
    style.textContent = `
        .navbar.scrolled {
            background-color: rgba(255, 255, 255, 0.95) !important;
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }
    `;
    document.head.appendChild(style);
    
    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements
    document.querySelectorAll('.feature-card, .product-card, .contact-info').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                showAlert('error', 'Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(formData.email)) {
                showAlert('error', 'Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            showAlert('success', 'Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Alert function
    function showAlert(type, message) {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show position-fixed`;
        alert.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alert);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.remove();
            }
        }, 5000);
    }
    
    // Product card hover effects
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Mobile menu handling
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Close mobile menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    }
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-section');
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.backgroundPositionY = -(scrolled * speed) + 'px';
        });
    });
    
    // Loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Add loading styles
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--primary-color);
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        
        body.loaded::before {
            opacity: 0;
            pointer-events: none;
        }
    `;
    document.head.appendChild(loadingStyle);
    
    // Counter animation for statistics
    const countElements = document.querySelectorAll('.stat-item h3');
    const countObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.textContent);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
                }, 40);
                countObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    countElements.forEach(el => countObserver.observe(el));
    
    // Social media links
    document.querySelectorAll('.social-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real implementation, these would link to actual social media pages
            console.log('Social media link clicked:', this.innerHTML);
        });
    });
    
});

// Google Maps integration
let map;
let marker;

function initMap() {
    // TerraFeed location (example coordinates)
    const terrafeedLocation = { lat: 40.7128, lng: -74.0060 }; // New York coordinates as example
    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: terrafeedLocation,
        styles: [
            {
                featureType: 'all',
                elementType: 'geometry.fill',
                stylers: [{ color: '#f5f5f5' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
            }
        ]
    });
    
    marker = new google.maps.Marker({
        position: terrafeedLocation,
        map: map,
        title: 'TerraFeed - Premium Spices',
        icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#8B4513">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            `),
            scaledSize: new google.maps.Size(40, 40)
        }
    });
    
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px;">
                <h6 style="margin: 0 0 5px 0; color: #8B4513;">
                    <i class="fas fa-seedling" style="margin-right: 5px;"></i>TerraFeed
                </h6>
                <p style="margin: 0; font-size: 14px;">Premium Spices & Natural Ingredients</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">
                    123 Spice Street<br>
                    Flavor District, FD 12345<br>
                    <a href="tel:+15551234567" style="color: #8B4513;">+1 (555) 123-4567</a>
                </p>
            </div>
        `
    });
    
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

function openMap() {
    // Initialize map if not already done
    if (!map) {
        // Load Google Maps API dynamically
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }
    
    // Scroll to map
    document.getElementById('map').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Initialize map when page loads if map container exists
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('map')) {
        // For demo purposes, we'll use a simple embedded map
        // In production, you would use the Google Maps API with a real API key
        const mapContainer = document.getElementById('map');
        mapContainer.innerHTML = `
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" 
                height="400" 
                style="border:0; border-radius: 15px;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `;
    }
});

// Export functions for global use
window.openMap = openMap;
window.initMap = initMap;

// Initialize AOS (Animate On Scroll) - if you want to add this library later
// document.addEventListener('DOMContentLoaded', function() {
//     if (typeof AOS !== 'undefined') {
//         AOS.init({
//             duration: 1000,
//             once: true,
//             offset: 100
//         });
//     }
// });

// Utility function for throttling scroll events
function throttle(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Add throttled scroll event listener
window.addEventListener('scroll', throttle(function() {
    // Any scroll-based animations can go here
}, 16)); // ~60fps