import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const scaleElement = ($el, scale) => {
    gsap.to($el, {
        scale: scale,
        '--primary': 'red'
    });
}

const pinElements = () => {
    const $triggers = document.querySelectorAll("[data-animation='pin']");

    $triggers.forEach($trigger => {
        const $overflowElement = $trigger.querySelector("[data-child='pin']");
        const $innerElements = $overflowElement.querySelectorAll("[data-child='inner-pin']");
        const $animateChild = $trigger.querySelector("[data-child='animate-child']");

        const scrollTween = gsap.to($overflowElement, {
            x: (window.innerWidth - $overflowElement.scrollWidth) - 100,
            scrollTrigger: {
                trigger: $trigger,
                start: 'top top',
                pin: $trigger,
                scrub: true
            }
        });

        $innerElements.forEach($innerElement => {
            const scale = $innerElement.dataset.scale ? parseInt($innerElement.dataset.scale) : 1;

            if ($animateChild) {
                ScrollTrigger.create({
                    trigger: $innerElement,
                    containerAnimation: scrollTween,
                    start: "center 0",
                    onEnter: () => scaleElement($animateChild, scale),
                    onEnterBack: () => scaleElement($animateChild, scale),
                    onLeave: () => {
                        gsap.to($animateChild, {
                            scale: 1
                        });
                    }
                });
            }
        });
    });
}

export default pinElements;