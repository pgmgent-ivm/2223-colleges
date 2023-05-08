import gsap from 'gsap';

const $button = document.getElementById('box');

const tween = gsap.to($button, {
    rotate: 90,
    x: 100,
    backgroundColor: 'red',
    paused: true
});

$button.addEventListener('click', () => {
    tween.progress() === 0 ? tween.play() : tween.reverse();
})