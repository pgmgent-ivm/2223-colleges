import { gsap } from 'gsap';
import pinElements from './animations/pin';
import fadeElements from './animations/fade';
import showWelcome from './animations/welcome';

const afterWelcome = () => {
    pinElements();
    fadeElements();
}

showWelcome(afterWelcome);
