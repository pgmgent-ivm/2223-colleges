import gsap from 'gsap';

const $box = document.getElementById('box');

gsap.set($box, {
    yPercent: -50,
    xPercent: -50
});

const xTo = gsap.quickTo($box, 'x', {duration: 1});
const yTo = gsap.quickTo($box, 'y', {duration: 1});

window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
});
