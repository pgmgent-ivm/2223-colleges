import gsap from "gsap";

const $hideButton = document.getElementById('hide');
const $retryButton = document.getElementById('retry');

const staggerList = gsap.from("[data-animation='stagger-list'] li", {
    opacity: 0,
    y: 200,
    stagger: .2
});

$hideButton.addEventListener('click', () => {
    staggerList.reverse();
});

$retryButton.addEventListener('click', () => {
    staggerList.play();
});