document.addEventListener("DOMContentLoaded", function () {
    const words = [
        "Web Developer",
        "Cloud Practitioner",
        "Mobile Developer",
        "Computer Scientist",
        "S.T.E.M Enthusiast"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150; // speed in ms
    const typedText = document.getElementById("typed-text");

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, letterIndex--);
            typingSpeed = 80; // faster delete
        } else {
            typedText.textContent = currentWord.substring(0, letterIndex++);
            typingSpeed = 150; // typing speed
        }

        // Word finished typing
        if (!isDeleting && letterIndex === currentWord.length) {
            typingSpeed = 1000; // pause before deleting
            isDeleting = true;
        }
        // Word deleted
        else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // move to next word
            typingSpeed = 300; // pause before typing new word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});
