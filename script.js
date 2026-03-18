// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Inicializar reveal no carregamento
reveal();

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '15px 10%';
        nav.style.background = 'rgba(13, 13, 13, 0.95)';
    } else {
        nav.style.padding = '20px 10%';
        nav.style.background = 'rgba(13, 13, 13, 0.8)';
    }
});