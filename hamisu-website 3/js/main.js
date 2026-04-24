// ============================================
// HAMISU INTERIOR DESIGN - JAVASCRIPT
// Warm Minimalist & Japandi Aesthetic
// ============================================

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// PORTFOLIO FILTER
// ============================================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter portfolio cards
        portfolioCards.forEach(card => {
            card.classList.remove('hidden');
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue !== 'all' && cardCategory !== filterValue) {
                card.classList.add('hidden');
            }
        });
    });
});

// ============================================
// PORTFOLIO LIGHTBOX
// ============================================
const lightboxModal = document.getElementById('lightboxModal');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxMainImage = document.getElementById('lightboxMainImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxThumbnails = document.getElementById('lightboxThumbnails');
const portfolioLinks = document.querySelectorAll('.portfolio-link');

// Portfolio data
const portfolioData = {
    1: {
        title: 'Setia Alam Bedroom',
        images: [
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23EDE8DF" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[PROJECT PHOTO 1]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23E8DFD5" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[PROJECT PHOTO 2]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23DFD5CB" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[PROJECT PHOTO 3]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23D5CBC1" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[PROJECT PHOTO 4]%3C/text%3E%3C/svg%3E'
        ]
    },
    2: {
        title: 'Modern Wardrobe Suite',
        images: [
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23EDE8DF" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[WARDROBE PHOTO 1]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23E8DFD5" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[WARDROBE PHOTO 2]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23DFD5CB" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[WARDROBE PHOTO 3]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23D5CBC1" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[WARDROBE PHOTO 4]%3C/text%3E%3C/svg%3E'
        ]
    },
    3: {
        title: 'Cosy Study Bedroom',
        images: [
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23EDE8DF" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[STUDY PHOTO 1]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23E8DFD5" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[STUDY PHOTO 2]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23DFD5CB" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[STUDY PHOTO 3]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23D5CBC1" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[STUDY PHOTO 4]%3C/text%3E%3C/svg%3E'
        ]
    },
    4: {
        title: 'Shah Alam Master Room',
        images: [
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23EDE8DF" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[MASTER PHOTO 1]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23E8DFD5" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[MASTER PHOTO 2]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23DFD5CB" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[MASTER PHOTO 3]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23D5CBC1" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[MASTER PHOTO 4]%3C/text%3E%3C/svg%3E'
        ]
    },
    5: {
        title: 'Minimalist Living Space',
        images: [
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23EDE8DF" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[LIVING PHOTO 1]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23E8DFD5" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[LIVING PHOTO 2]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23DFD5CB" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[LIVING PHOTO 3]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23D5CBC1" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[LIVING PHOTO 4]%3C/text%3E%3C/svg%3E'
        ]
    },
    6: {
        title: 'Full Home Renovation',
        images: [
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23EDE8DF" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[HOME PHOTO 1]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23E8DFD5" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[HOME PHOTO 2]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23DFD5CB" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[HOME PHOTO 3]%3C/text%3E%3C/svg%3E',
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23D5CBC1" width="800" height="600"/%3E%3Ctext x="50%" y="50%" font-family="DM Sans" font-size="24" fill="%236B6560" text-anchor="middle" dy=".3em"%3E[HOME PHOTO 4]%3C/text%3E%3C/svg%3E'
        ]
    }
};

let currentProjectId = null;
let currentImageIndex = 0;

// Open lightbox when portfolio link is clicked
portfolioLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = link.getAttribute('data-project');
        openLightbox(projectId);
    });
});

function openLightbox(projectId) {
    currentProjectId = projectId;
    currentImageIndex = 0;
    const project = portfolioData[projectId];
    
    lightboxTitle.textContent = project.title;
    lightboxMainImage.src = project.images[0];
    
    // Generate thumbnails
    lightboxThumbnails.innerHTML = '';
    project.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = `lightbox-thumbnail ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${img}" alt="Thumbnail ${index + 1}">`;
        thumb.addEventListener('click', () => {
            currentImageIndex = index;
            updateLightboxImage();
        });
        lightboxThumbnails.appendChild(thumb);
    });
    
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateLightboxImage() {
    const project = portfolioData[currentProjectId];
    lightboxMainImage.src = project.images[currentImageIndex];
    
    // Update thumbnail active state
    const thumbnails = document.querySelectorAll('.lightbox-thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

function nextImage() {
    const project = portfolioData[currentProjectId];
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    updateLightboxImage();
}

function prevImage() {
    const project = portfolioData[currentProjectId];
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    updateLightboxImage();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// Close lightbox when clicking outside
lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightboxModal.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeLightbox();
    }
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.section-header, .service-card, .portfolio-card, .process-step').forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const roomType = document.getElementById('roomType').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    const whatsappMessage = `Hi Hamisu,\n\nI'm interested in your interior design services.\n\nName: ${name}\nPhone: ${phone}\nRoom Type: ${roomType}\n\nMessage:\n${message}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/601135887299?text=${encodedMessage}`, '_blank');
    
    // Reset form
    contactForm.reset();
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// PERFORMANCE: LAZY LOAD IMAGES
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('Hamisu Interior Design - Website loaded successfully');
