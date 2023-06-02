import gsap from 'gsap';

const $mouse = document.getElementById('mouse');

gsap.set($mouse, {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: 'center'
})

const moveMouse = (x, y) => {
    gsap.to($mouse, {
        x: x,
        y: y,
        ease: "power3",
        delay: .1
    });
}

const moveX = gsap.quickTo($mouse, 'x', {duration: .5, ease: 'power3'});
const moveY = gsap.quickTo($mouse, 'y', {duration: .5, ease: 'power3'});

window.addEventListener('mousemove', (e) => {
    moveX(e.clientX);
    moveY(e.clientY);
});