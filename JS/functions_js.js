// Typed Text Effect
const phrases = ["tecnología", "innovación", "soluciones web", "crecimiento digital"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
const typedText = document.querySelector(".typed-text");

function type() {
    if (!typedText) return;
    if (i >= phrases.length) i = 0;
    const fullPhrase = phrases[i];

    if (isDeleting) {
        currentPhrase = fullPhrase.substring(0, currentPhrase.length - 1);
    } else {
        currentPhrase = fullPhrase.substring(0, currentPhrase.length + 1);
    }

    typedText.textContent = currentPhrase;

    let typeSpeed = 150;
    if (isDeleting) typeSpeed /= 2;

    if (!isDeleting && currentPhrase === fullPhrase) {
        typeSpeed = 1000;
        isDeleting = true;
    } else if (isDeleting && currentPhrase === "") {
        isDeleting = false;
        i++;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

type();

// Hero Parallax
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-img');
    hero.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`;
});