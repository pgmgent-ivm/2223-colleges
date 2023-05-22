import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const fadeElements = () => {
    const $fadeElements = document.querySelectorAll("[data-animation='fade']");

    $fadeElements.forEach(($fadeElement) => {
        gsap.from($fadeElement, {
            opacity: 0,
            scrollTrigger: {
                trigger: $fadeElement,
                start: 'top 85%'
            }
        });
    });
}

export default fadeElements;