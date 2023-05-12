import { gsap } from "gsap";

const $square = document.getElementById('square');
const $restartButton = document.getElementById('restart-timeline');

const tl = gsap.timeline({
    yoyo: true,
    repeat: 1
});

tl
.to($square, {
    y: 200
})
.to($square, {
    x: 200
})
.to($square, {
    background: 'green'
})
.to($square, {
    scale: 2,
    rotate: 360,
    borderRadius: '50%'
});

$restartButton.addEventListener('click', () => {
    tl.restart();
});