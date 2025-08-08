
// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

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

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Typewriter effect for hero title
const typewriterElement = document.getElementById('typewriter');
const text = typewriterElement.textContent;
typewriterElement.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        typewriterElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typewriter effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !bar.classList.contains('animated')) {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
            bar.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Testimonials slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

// Auto-slide testimonials
setInterval(nextTestimonial, 5000);

// Manual testimonial navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.project-card, .hobby-card, .blog-card, .skill-category');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
});

// Add active class to current navigation item
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
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

window.addEventListener('scroll', highlightNavigation);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Back to top functionality
let backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.transform = 'translateY(-2px)';
    backToTopBtn.style.boxShadow = '0 7px 20px rgba(37, 99, 235, 0.4)';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.transform = 'translateY(0)';
    backToTopBtn.style.boxShadow = '0 5px 15px rgba(37, 99, 235, 0.3)';
});




// disable for description


const titles = document.querySelectorAll('.project-title');
const descriptions = document.querySelectorAll('.project-description');

titles.forEach((title, index) => {
  title.addEventListener('mouseover', () => {
    descriptions[index].style.display = 'block';
  });

  title.addEventListener('mouseout', () => {
    descriptions[index].style.display = 'none';
  });
});





// Select all hobby cards


const hobbyCards = document.querySelectorAll('.hobby-card');

hobbyCards.forEach((card) => {
  const description = card.querySelector('.hobby-description');

  card.addEventListener('mouseover', () => {
    description.style.color = '#1e40af'; // change to darker blue on hover
    description.style.fontWeight = 'bold';
  });

  card.addEventListener('mouseout', () => {
    description.style.color = '#6b7280'; // revert to original color
    description.style.fontWeight = 'normal';
  });
});


