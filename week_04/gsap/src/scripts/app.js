import './animations/circles';
import './animations/scroll';
import { boxAnimation } from "./animations/box";
import { initScrollAnimations } from './animations/scroll';

window.addEventListener('load', () => {
    boxAnimation();
    initScrollAnimations();
});