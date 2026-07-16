// Typing Animation Script
const roles =  [
    "🔏 Cyber Security Enthusiast",
    "⚡ Web Pentester",
    "🌐 Network Security Analyst",
    "🎯 C / Java Developer",
    "💻 Frontend Developer"
];

let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typedTextSpan = document.getElementById("typed-text");

function typeEffect() {
    const currentRole = roles[roleIdx];
    
    if (!isDeleting) {
        typedTextSpan.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        
        if (charIdx === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typedTextSpan.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        
        if (charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
        }
    }
    
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Start typing on load
window.onload = function() {
    typeEffect();

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.progress-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-width');
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
};