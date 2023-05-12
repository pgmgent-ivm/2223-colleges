import gsap from 'gsap';

const $overflowContainer = document.querySelector("[data-animation='horizontal-scroll']");
const $overflowContainers = document.querySelectorAll("[data-animation='horizontal-scroll']");
const $wideElement = $overflowContainer.querySelector("[data-child='horizontal-scroll']");
const $secondWideElement = $overflowContainer.querySelector("[data-child='second-horizontal-scroll']");


$overflowContainers.forEach($overflowContainer => {
    const $wideElements = $overflowContainer.querySelectorAll("[data-child='horizontal-scroll']");

    gsap.to($wideElements, {
        x: (_, $el) => -($el.scrollWidth - window.innerWidth) - 100,
        scrollTrigger: {
            trigger: $overflowContainer,
            start: '50% 50%',
            end: 'top top',
            scrub: true,
            pin: true,
            markers: true
        }
    });
});

