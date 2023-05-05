const $titles = document.querySelectorAll('.fade-in-up');

const fadeInAnimation = (element) => {
    return element.animate([
        {
            opacity: 1,
            transform: 'translateY(0)'
        }
    ], {
        easing: 'ease',
        fill: 'forwards',
        duration: 500
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fadeInAnimation(entry.target).play();
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '-100px 0px'
});

$titles.forEach($title => {
    observer.observe($title);
});