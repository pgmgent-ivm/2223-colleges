import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const $grid = document.querySelector("[data-animation='grid-stagger']");
const $gridItems = $grid.querySelectorAll('li');

$gridItems.forEach(($gridItem, $index) => {
    const isOdd = $index % 2;

    gsap.from($gridItem, {
        x: isOdd ? 20 : -20,
        opacity: 0,
        scrollTrigger: {
            trigger: $gridItem,
            start: "50% 100%",
            toggleActions: "play reverse play reverse"
        }
    });
})