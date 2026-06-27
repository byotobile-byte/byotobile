// Welcome Message
console.log("Welcome to Byotobile");

// Smooth Scroll
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Button Click
const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Welcome to Byotobile!");
});

// Fade-in Animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

// Initial Card Style
cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";

});

// Dark / Light Mode
const body = document.body;

function toggleTheme(){

    body.classList.toggle("light");

}
