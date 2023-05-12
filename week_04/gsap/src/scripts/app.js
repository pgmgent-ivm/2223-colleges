import './animations/circles';
import './animations/scroll';
import './animations/horizontal';
import { boxAnimation } from "./animations/box";
import { initScrollAnimations } from './animations/scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    boxAnimation();
    initScrollAnimations();
});