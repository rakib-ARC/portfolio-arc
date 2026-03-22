// 1. Dynamic Typing Effect for Hero Section
const typingText = document.getElementById('typing');
const phrases = ['CSE Student', 'Software Developer', 'Problem Solver'];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, letterIndex + 1);
        letterIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && letterIndex === currentPhrase.length) {
        typeSpeed = 2000; // Pause at end of phrase
        isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before typing new phrase
    }

    setTimeout(type, typeSpeed);
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', type);

// 2. Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 3. Scroll Reveal Animation using Intersection Observer
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: "0px 0px -50px 0px" 
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        entry.target.classList.add('appear');
        observer.unobserve(entry.target); // Only animate once
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});