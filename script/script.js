const words = [
    "Fullstack Developer.",
    "Backend Specialized programmer.",
    "JavaScript / NodeJs/ Express / PostgreSQL / Solidity programmer.",
    "Web Developer.",
    "student looking for an apprenticeship opportunity for my bachelor's degree.",
    "Lover of Jesus-Christ"
];

const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 2000;

let wordIndex = 0;
let charIndex = 0;
const textElement = document.getElementById("dynamic-text");

function typeWord() {
    if (charIndex < words[wordIndex].length) {
        textElement.textContent += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        setTimeout(eraseWord, delayBetweenWords);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseWord, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, typingSpeed);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    typeWord();
});




const scrollToTopBtn = document.getElementById("scroll-to-top");

scrollToTopBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
